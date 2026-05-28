const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = __dirname;
const PRESENCE_TTL_MS = 18000;

const participants = new Map();

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

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

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(data));
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
  const filePath = decoded === "/" ? "/index.html" : decoded;
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
        "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=60",
        "Content-Type": mimeTypes[extension] || "application/octet-stream",
      });
      response.end(content);
    });
  });
}

const server = http.createServer(async (request, response) => {
  if (request.url === "/api/presence" && request.method === "GET") {
    sendJson(response, 200, moodStats());
    return;
  }

  if (request.url === "/api/presence" && request.method === "POST") {
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
