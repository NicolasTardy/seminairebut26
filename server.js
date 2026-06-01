const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, "data");
const LIVE_STATE_FILE = path.join(DATA_DIR, "live-state.json");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");
const VOTES_FILE = path.join(DATA_DIR, "votes.json");
const ADMIN_CODE = process.env.ADMIN_CODE || "beleket";
const PRESENCE_TTL_MS = 18000;

const participants = new Map();
const liveState = loadLiveState();
const messages = loadMessages();
const votes = loadVotes();

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function loadVotes() {
  try {
    return JSON.parse(fs.readFileSync(VOTES_FILE, "utf8"));
  } catch {
    return { categories: {} };
  }
}

function loadMessages() {
  try {
    const savedMessages = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8"));
    return Array.isArray(savedMessages) ? savedMessages : [];
  } catch {
    return [];
  }
}

function loadLiveState() {
  try {
    return {
      activeCategoryId: "very-bad-trip",
      activeHonoreeId: "",
      revealedHonoreeIds: [],
      activeStepId: "welcome-breakfast",
      updatedAt: new Date().toISOString(),
      voteOpen: false,
      ...JSON.parse(fs.readFileSync(LIVE_STATE_FILE, "utf8")),
    };
  } catch {
    return {
      activeCategoryId: "very-bad-trip",
      activeHonoreeId: "",
      revealedHonoreeIds: [],
      activeStepId: "welcome-breakfast",
      updatedAt: new Date().toISOString(),
      voteOpen: false,
    };
  }
}

function saveLiveState() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(LIVE_STATE_FILE, JSON.stringify(liveState, null, 2));
}

function saveMessages() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages.slice(0, 120), null, 2));
}

function saveVotes() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(VOTES_FILE, JSON.stringify(votes, null, 2));
}

function cleanText(value, maxLength = 120) {
  return String(value || "").trim().slice(0, maxLength);
}

function wallMessages() {
  return messages
    .slice()
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, 80);
}

function cleanPresence() {
  const now = Date.now();
  for (const [id, participant] of participants.entries()) {
    if (now - participant.lastSeen > PRESENCE_TTL_MS) participants.delete(id);
  }
}

function moodStats() {
  cleanPresence();

  const counts = {
    recharge: 0,
    "good-vibes": 0,
    "full-power": 0,
  };

  for (const participant of participants.values()) {
    const moodId = counts[participant.moodId] === undefined ? "good-vibes" : participant.moodId;
    counts[moodId] += 1;
  }

  const online = participants.size;
  const topMoodId = Object.keys(counts).reduce((best, moodId) => (counts[moodId] > counts[best] ? moodId : best), "recharge");
  const energyScore = online
    ? Math.round(((counts["good-vibes"] * 0.62 + counts["full-power"] * 1 + counts.recharge * 0.28) / online) * 100)
    : 0;

  return {
    counts,
    energyScore,
    online,
    topMoodId,
  };
}

function voteStats(participantId) {
  const participantVotes = {};
  const results = {};

  for (const [categoryId, categoryVotes] of Object.entries(votes.categories)) {
    const counts = {};

    for (const [voterId, vote] of Object.entries(categoryVotes)) {
      counts[vote.nomineeName] = (counts[vote.nomineeName] || 0) + 1;
      if (voterId === participantId) participantVotes[categoryId] = vote.nomineeName;
    }

    results[categoryId] = Object.entries(counts)
      .map(([name, count]) => ({ count, name }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }

  return {
    participantVotes,
    results,
  };
}

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(data));
}

function isAuthorizedAdmin(request) {
  return request.headers["x-admin-code"] === ADMIN_CODE;
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 8192) {
        reject(new Error("Body too large"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function safeStaticPath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const filePath = decoded === "/" ? "/index.html" : decoded === "/admin" ? "/admin.html" : decoded;
  const resolved = path.normalize(path.join(ROOT, filePath));

  if (!resolved.startsWith(ROOT)) return null;
  return resolved;
}

function serveStatic(request, response) {
  const staticPath = safeStaticPath(request.url);
  if (!staticPath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(staticPath, (statError, stats) => {
    const filePath = !statError && stats.isDirectory() ? path.join(staticPath, "index.html") : staticPath;

    fs.readFile(filePath, (readError, content) => {
      if (readError) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      const extension = path.extname(filePath);
      response.writeHead(200, {
        "Cache-Control": [".css", ".html", ".js"].includes(extension) ? "no-cache" : "public, max-age=60",
        "Content-Type": mimeTypes[extension] || "application/octet-stream",
      });
      response.end(content);
    });
  });
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, "http://localhost");

  if (requestUrl.pathname === "/api/presence" && request.method === "GET") {
    sendJson(response, 200, moodStats());
    return;
  }

  if (requestUrl.pathname === "/api/presence" && request.method === "POST") {
    try {
      const payload = JSON.parse(await readBody(request));
      if (!payload.id) {
        sendJson(response, 400, { error: "Missing participant id" });
        return;
      }

      participants.set(String(payload.id), {
        avatarId: String(payload.avatarId || "popcorn"),
        lastSeen: Date.now(),
        moodId: String(payload.moodId || "good-vibes"),
        pseudo: String(payload.pseudo || "Participant").slice(0, 48),
      });

      sendJson(response, 200, moodStats());
    } catch {
      sendJson(response, 400, { error: "Invalid presence payload" });
    }
    return;
  }

  if (requestUrl.pathname === "/api/live-state" && request.method === "GET") {
    sendJson(response, 200, liveState);
    return;
  }

  if (requestUrl.pathname === "/api/live-state" && request.method === "POST") {
    if (!isAuthorizedAdmin(request)) {
      sendJson(response, 401, { error: "Unauthorized" });
      return;
    }

    try {
      const payload = JSON.parse(await readBody(request));
      const activeHonoreeId = cleanText(payload.activeHonoreeId ?? liveState.activeHonoreeId, 80);
      const revealedHonoreeIds = Array.isArray(liveState.revealedHonoreeIds) ? [...liveState.revealedHonoreeIds] : [];

      if (activeHonoreeId && activeHonoreeId !== "all" && !revealedHonoreeIds.includes(activeHonoreeId)) {
        revealedHonoreeIds.push(activeHonoreeId);
      }

      const nextState = {
        activeCategoryId: cleanText(payload.activeCategoryId || liveState.activeCategoryId, 80),
        activeHonoreeId,
        revealedHonoreeIds: Array.isArray(payload.revealedHonoreeIds)
          ? payload.revealedHonoreeIds.map((id) => cleanText(id, 80)).filter(Boolean)
          : revealedHonoreeIds,
        activeStepId: cleanText(payload.activeStepId || liveState.activeStepId, 80),
        updatedAt: new Date().toISOString(),
        voteOpen: Boolean(payload.voteOpen),
      };

      Object.assign(liveState, nextState);
      saveLiveState();
      sendJson(response, 200, liveState);
    } catch {
      sendJson(response, 400, { error: "Invalid live state payload" });
    }
    return;
  }

  if (requestUrl.pathname === "/api/votes" && request.method === "GET") {
    sendJson(response, 200, voteStats(cleanText(requestUrl.searchParams.get("participantId"), 80)));
    return;
  }

  if (requestUrl.pathname === "/api/votes" && request.method === "POST") {
    try {
      const payload = JSON.parse(await readBody(request));
      const participantId = cleanText(payload.participantId, 80);
      const categoryId = cleanText(payload.categoryId, 80);
      const nomineeName = cleanText(payload.nomineeName, 160);

      if (!participantId || !categoryId || !nomineeName) {
        sendJson(response, 400, { error: "Missing vote fields" });
        return;
      }

      votes.categories[categoryId] ||= {};

      if (!votes.categories[categoryId][participantId]) {
        votes.categories[categoryId][participantId] = {
          avatarId: cleanText(payload.avatarId, 40),
          createdAt: new Date().toISOString(),
          nomineeName,
          pseudo: cleanText(payload.pseudo || "Participant", 48),
        };
        saveVotes();
      }

      const stats = voteStats(participantId);
      sendJson(response, 200, {
        ...stats,
        accepted: votes.categories[categoryId][participantId].nomineeName === nomineeName,
        savedVote: votes.categories[categoryId][participantId].nomineeName,
      });
    } catch {
      sendJson(response, 400, { error: "Invalid vote payload" });
    }
    return;
  }

  if (requestUrl.pathname === "/api/messages" && request.method === "GET") {
    sendJson(response, 200, { messages: wallMessages() });
    return;
  }

  if (requestUrl.pathname === "/api/messages" && request.method === "POST") {
    try {
      const payload = JSON.parse(await readBody(request));
      const participantId = cleanText(payload.participantId, 80);
      const text = cleanText(payload.text, 180);
      const emoji = cleanText(payload.emoji, 12);

      if (!participantId || (!text && !emoji)) {
        sendJson(response, 400, { error: "Missing message fields" });
        return;
      }

      messages.unshift({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
        avatarId: cleanText(payload.avatarId || "spark", 40),
        createdAt: new Date().toISOString(),
        emoji,
        participantId,
        pseudo: cleanText(payload.pseudo || "Participant", 48),
        text,
      });
      saveMessages();
      sendJson(response, 200, { messages: wallMessages() });
    } catch {
      sendJson(response, 400, { error: "Invalid message payload" });
    }
    return;
  }

  if (requestUrl.pathname === "/api/messages" && request.method === "DELETE") {
    const participantId = cleanText(requestUrl.searchParams.get("participantId"), 80);
    const avatarId = cleanText(requestUrl.searchParams.get("avatarId"), 40);
    const messageId = cleanText(requestUrl.searchParams.get("id"), 80);
    const pseudo = cleanText(requestUrl.searchParams.get("pseudo"), 48);
    const messageIndex = messages.findIndex(
      (message) =>
        message.id === messageId &&
        (message.participantId === participantId || (!message.participantId && message.pseudo === pseudo && message.avatarId === avatarId)),
    );

    if (messageIndex === -1) {
      sendJson(response, 404, { error: "Message not found" });
      return;
    }

    messages.splice(messageIndex, 1);
    saveMessages();
    sendJson(response, 200, { messages: wallMessages() });
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405);
    response.end("Method not allowed");
    return;
  }

  serveStatic(request, response);
});

server.listen(PORT, HOST, () => {
  console.log(`Seminaire app listening on ${HOST}:${PORT}`);
});
