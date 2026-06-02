const ADMIN_CODE_KEY = "seminaire_admin_code";

const adminCategories = [
  {
    id: "fashion",
    title: 'Oscar "Confessions d’une accro du shopping"',
    subtitle: "Le ou la plus fashion de notre direction",
  },
  { id: "ratatouille", title: 'Oscar "Ratatouille"', subtitle: "Les meilleurs cuisiniers qui régalent leurs collègues" },
  { id: "oss-117", title: 'Oscar "OSS 117"', subtitle: "Blagues et jeux de mots en tous genres" },
  { id: "voyage-chihiro", title: 'Oscar "Le voyage de Chihiro"', subtitle: "Celles qui ont le plus voyagé entre les bureaux" },
  { id: "rocky", title: 'Oscar "Rocky"', subtitle: "Le plus sportif de la direction" },
  { id: "very-bad-trip", title: 'Oscar "Very Bad Trip"', subtitle: "Le pire trajet pour venir travailler à Emerainville" },
];

const adminHonorees = [
  { id: "audrey-barna", name: "Audrey Barna", title: 'Oscar "L’Histoire sans fin"' },
  { id: "margaux-beudet", name: "Margaux Beudet", title: 'Oscar "Million Dollar Baby"' },
  { id: "virginie-nerriere", name: "Nerrière Virginie", title: "Oscar de l'éternel sourire" },
  { id: "perola-pessaro", name: "Pessaro Perola", title: "Prix Mission Impossible" },
  { id: "valerie-rochereau", name: "Valérie Rochereau", title: 'Prix "Terminator"' },
];

const adminSteps = [
  { id: "welcome-breakfast", label: "09:00 · Accueil et petit déjeuner" },
  { id: "day-intro", label: "09:30 · Présentation du déroulé" },
  { id: "kantar", label: "09:40 · Présentation Kantar" },
  { id: "morning-break", label: "10:30 · Pause" },
  { id: "org-news-strategy", label: "10:45 · Organigramme, actualités & stratégie" },
  { id: "lunch", label: "12:15 · Déjeuner" },
  { id: "brainstorming", label: "13:30 · Ateliers de brainstorming" },
  { id: "restitution-1", label: "14:30 · Restitution 1" },
  { id: "afternoon-break", label: "15:20 · Pause" },
  { id: "restitution-2", label: "15:40 · Restitution 2" },
  { id: "wrap-up", label: "16:30 · Synthèse et clôture" },
  { id: "free-time", label: "16:45 · Temps libre" },
  { id: "team-building", label: "18:15 · Team Building" },
  { id: "oscars", label: "19:30 · Remise des Oscars" },
  { id: "dinner", label: "20:30 · Dîner" },
  { id: "party", label: "22:00 · Soirée" },
];

const adminState = {
  code: localStorage.getItem(ADMIN_CODE_KEY) || "",
  liveState: null,
  presence: null,
  votes: null,
  message: "",
  tab: "live",
};

function jsAdminString(value) {
  return JSON.stringify(value).replace(/"/g, "&quot;");
}

function categoryById(id) {
  return adminCategories.find((category) => category.id === id) || adminCategories[0];
}

function honoreeById(id) {
  return adminHonorees.find((honoree) => honoree.id === id) || null;
}

function allHonoreesRevealed() {
  const revealed = adminState.liveState?.revealedHonoreeIds || [];
  return adminHonorees.every((honoree) => revealed.includes(honoree.id));
}

function voteRemainingMs() {
  if (!adminState.liveState?.voteOpen) return 0;
  const closesAt = Date.parse(adminState.liveState.voteClosesAt || "");
  if (!Number.isFinite(closesAt)) return 1;
  return Math.max(0, closesAt - Date.now());
}

function isVoteOpen() {
  return Boolean(adminState.liveState?.voteOpen) && voteRemainingMs() > 0;
}

function formatCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function activeVoteTotal() {
  const categoryId = adminState.liveState?.activeCategoryId || "very-bad-trip";
  return adminState.votes?.totals?.[categoryId] || 0;
}

async function apiJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

async function refreshAdmin() {
  try {
    const [liveState, presence, votes] = await Promise.all([
      apiJson("/api/live-state"),
      apiJson("/api/presence"),
      apiJson("/api/votes"),
    ]);
    adminState.liveState = liveState;
    adminState.presence = presence;
    adminState.votes = votes;
    renderAdmin();
  } catch (error) {
    adminState.message = "Impossible de rafraîchir la régie.";
    renderAdmin();
  }
}

async function saveLiveState(patch) {
  if (!adminState.code) {
    adminState.message = "Entre le code admin.";
    renderAdmin();
    return;
  }

  try {
    const nextState = {
      ...(adminState.liveState || {}),
      ...patch,
    };
    adminState.liveState = await apiJson("/api/live-state", {
      method: "POST",
      headers: { "x-admin-code": adminState.code },
      body: JSON.stringify(nextState),
    });
    adminState.message = "Régie mise à jour.";
    refreshAdmin();
  } catch {
    adminState.message = "Code admin refusé ou mise à jour impossible.";
    renderAdmin();
  }
}

function saveAdminCode(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  adminState.code = String(form.get("code") || "").trim();
  localStorage.setItem(ADMIN_CODE_KEY, adminState.code);
  adminState.message = "Code admin enregistré sur cet appareil.";
  refreshAdmin();
}

function logoutAdmin() {
  localStorage.removeItem(ADMIN_CODE_KEY);
  adminState.code = "";
  adminState.message = "Déconnecté de la régie sur cet appareil.";
  renderAdmin();
}

function openVote() {
  saveLiveState({ voteOpen: true });
}

function closeVote() {
  saveLiveState({ voteOpen: false });
}

async function resetVotes(scope) {
  const label = scope === "all" ? "TOUS les votes de toutes les catégories" : `les votes de la catégorie active`;
  if (!confirm(`Remettre à zéro ${label} ? Cette action est irréversible.`)) return;
  try {
    const params = new URLSearchParams({ categoryId: scope });
    await fetch(`/api/votes?${params}`, {
      method: "DELETE",
      headers: { "x-admin-code": adminState.code },
    });
    await refreshAdmin();
    renderAdmin();
  } catch {
    alert("Erreur lors de la remise à zéro.");
  }
}

function renderCodePanel() {
  return `
    <form class="panel" onsubmit="saveAdminCode(event)">
      <p class="eyebrow">Accès admin</p>
      <h2>Code régie</h2>
      <div class="field">
        <label for="code">Code admin</label>
        <input class="input" id="code" name="code" value="${adminState.code}" placeholder="Code admin" autocomplete="off" />
      </div>
      <button class="primary" type="submit">Valider le code</button>
      ${adminState.message ? `<p class="admin-note">${adminState.message}</p>` : ""}
    </form>
  `;
}

function adminToggle(label, icon, isOn, onAction, offAction) {
  return `
    <div class="atoggle-row">
      <span class="atoggle-label">${icon} ${label}</span>
      <button
        class="atoggle ${isOn ? "is-on" : "is-off"}"
        onclick="${isOn ? offAction : onAction}"
      >
        <span class="atoggle-knob"></span>
        <span class="atoggle-text">${isOn ? "ON" : "OFF"}</span>
      </button>
    </div>
  `;
}

function renderLiveControl() {
  const live = adminState.liveState || {
    activeCategoryId: "very-bad-trip",
    activeHonoreeId: "",
    revealedHonoreeIds: [],
    activeStepId: "welcome-breakfast",
    voteOpen: false,
    brainstormOpen: false,
    voteResultOpen: false,
  };
  const category = categoryById(live.activeCategoryId);
  const voteIsOpen = isVoteOpen();
  const remainingMs = voteRemainingMs();
  const votedCount = activeVoteTotal();

  return `
    <section class="panel">
      <p class="eyebrow">Régie live</p>

      <div class="astat-banner ${voteIsOpen ? "is-vote-on" : ""}">
        <div class="astat-row">
          <span>👥 Connectés</span><strong>${adminState.presence?.online ?? 0}</strong>
        </div>
        <div class="astat-row">
          <span>🗳️ Ont voté</span><strong>${votedCount}</strong>
        </div>
        <div class="astat-row">
          <span>⏱️ Vote</span><strong>${voteIsOpen ? formatCountdown(remainingMs) : "—"}</strong>
        </div>
      </div>

      <div class="atoggle-group">
        <p class="atoggle-section">Rubriques</p>
        ${adminToggle("Brainstorming visible", "💡", Boolean(live.brainstormOpen),
          "saveLiveState({ brainstormOpen: true })",
          "saveLiveState({ brainstormOpen: false })")}
        ${adminToggle("Vote Prada ouvert (1h)", "👗", Boolean(live.pradaOpen),
          "saveLiveState({ pradaOpen: true })",
          "saveLiveState({ pradaOpen: false })")}
      </div>

      <div class="atoggle-group">
        <p class="atoggle-section">Oscars</p>
        <div class="field" style="margin:0 0 10px">
          <label for="category" class="atoggle-section" style="margin-bottom:6px;display:block">Catégorie active</label>
          <select class="admin-select" id="category" onchange="saveLiveState({ activeCategoryId: this.value, voteOpen: false })">
            ${adminCategories.map((item) => `<option value="${item.id}" ${item.id === live.activeCategoryId ? "selected" : ""}>${item.title.replace(/^Oscar /, "")}</option>`).join("")}
          </select>
        </div>
        ${adminToggle("Vote ouvert (1:30)", "🗳️", voteIsOpen,
          "openVote()",
          "closeVote()")}
        ${adminToggle("Résultats affichés", "📊", Boolean(live.voteResultOpen) && !voteIsOpen,
          "saveLiveState({ voteResultOpen: true })",
          "saveLiveState({ voteResultOpen: false })")}
      </div>

      <div class="atoggle-group">
        <p class="atoggle-section">Étape du programme</p>
        <select class="admin-select" id="step" onchange="saveLiveState({ activeStepId: this.value })">
          ${adminSteps.map((step) => `<option value="${step.id}" ${step.id === live.activeStepId ? "selected" : ""}>${step.label}</option>`).join("")}
        </select>
      </div>

      <div class="admin-reset-row">
        <button class="admin-reset-btn" onclick="resetVotes(${jsAdminString(live.activeCategoryId)})">↺ RAZ catégorie</button>
        <button class="admin-reset-btn admin-reset-all" onclick="resetVotes('all')">↺ RAZ tous les votes</button>
      </div>
    </section>
  `;
}

function showPreviousHonoree() {
  const currentIndex = adminHonorees.findIndex((honoree) => honoree.id === adminState.liveState?.activeHonoreeId);
  const nextIndex = currentIndex <= 0 ? 0 : currentIndex - 1;
  saveLiveState({ activeHonoreeId: adminHonorees[nextIndex].id });
}

function showNextHonoree() {
  const currentIndex = adminHonorees.findIndex((honoree) => honoree.id === adminState.liveState?.activeHonoreeId);
  if (currentIndex >= adminHonorees.length - 1) {
    saveLiveState({ activeHonoreeId: "all" });
    return;
  }

  const nextIndex = currentIndex < 0 ? 0 : currentIndex + 1;
  saveLiveState({ activeHonoreeId: adminHonorees[nextIndex].id });
}

function renderHonoreeControl() {
  const activeHonoreeId = adminState.liveState?.activeHonoreeId || "";
  const honoree = honoreeById(activeHonoreeId);
  const revealedCount = adminState.liveState?.revealedHonoreeIds?.length || 0;
  const isVisible = Boolean(activeHonoreeId);
  const currentLabel = activeHonoreeId === "all"
    ? "📋 Liste complète"
    : honoree
    ? `🏆 ${honoree.name}`
    : "🙈 Masqué";

  return `
    <section class="panel">
      <p class="eyebrow">Remise des prix</p>

      <div class="astat-banner ${isVisible ? "is-vote-on" : ""}">
        <div class="astat-row"><span>Affiché</span><strong>${currentLabel}</strong></div>
        <div class="astat-row"><span>Révélés</span><strong>${Math.min(revealedCount, adminHonorees.length)} / ${adminHonorees.length}</strong></div>
      </div>

      <div class="atoggle-group">
        <select class="admin-select" id="honoree" onchange="saveLiveState({ activeHonoreeId: this.value })">
          <option value="" ${activeHonoreeId ? "" : "selected"}>— Masquer —</option>
          <option value="all" ${activeHonoreeId === "all" ? "selected" : ""}>📋 Liste complète</option>
          ${adminHonorees.map((item) => `<option value="${item.id}" ${item.id === activeHonoreeId ? "selected" : ""}>🏆 ${item.name} · ${item.title}</option>`).join("")}
        </select>
      </div>

      <div class="admin-actions" style="margin-top:10px">
        <button class="admin-nav-btn" onclick="showPreviousHonoree()">← Précédent</button>
        <button class="admin-nav-btn is-next" onclick="showNextHonoree()">Suivant →</button>
      </div>
      <button class="secondary admin-wide-action" style="margin-top:8px" onclick="saveLiveState({ activeHonoreeId: '' })">🙈 Tout masquer</button>
    </section>
  `;
}

function renderResults() {
  const activeCategoryId = adminState.liveState?.activeCategoryId || "very-bad-trip";
  return `
    <section class="panel">
      <p class="eyebrow">Résultats par catégorie</p>
      <h2>Oscars — tous les votes</h2>
      ${adminCategories
        .map((category) => {
          const results = adminState.votes?.results?.[category.id] || [];
          const total = adminState.votes?.totals?.[category.id] || results.reduce((sum, r) => sum + r.count, 0);
          const isActive = category.id === activeCategoryId;
          return `
            <div class="results-category ${isActive ? "is-active-category" : ""}">
              <p class="micro results-category-label">${isActive ? "▶ " : ""}${category.title.replace(/^Oscar /, "")} <span class="pill">${total} vote${total !== 1 ? "s" : ""}</span></p>
              <div class="admin-list">
                ${
                  results.length
                    ? results
                        .map(
                          (result, index) => `
                            <article class="admin-row ${index === 0 ? "is-active" : ""}">
                              <span class="mini-avatar">${index === 0 ? "🏆" : "🏅"}</span>
                              <strong>${result.name}</strong>
                              <span class="pill">${result.count}</span>
                            </article>
                          `,
                        )
                        .join("")
                    : `<p class="empty-state">Aucun vote.</p>`
                }
              </div>
            </div>
          `;
        })
        .join("")}
    </section>
  `;
}

function renderAdminTabs() {
  const tabs = [
    { id: "live", label: "Régie", icon: "▶" },
    { id: "prix", label: "Prix", icon: "🏆" },
    { id: "resultats", label: "Résultats", icon: "📊" },
  ];
  return `
    <nav class="admin-tabs">
      ${tabs.map((t) => `
        <button class="admin-tab ${adminState.tab === t.id ? "is-active" : ""}" onclick="adminState.tab='${t.id}'; renderAdmin();">
          <span>${t.icon}</span>
          <span>${t.label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

function renderAdmin() {
  const app = document.querySelector("#admin-app");
  const isLoggedIn = adminState.liveState !== null;
  app.innerHTML = `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">★</div>
        <div>
          <div class="brand-title">Régie admin</div>
          <div class="brand-subtitle">BUT · Séminaire 2026</div>
        </div>
      </div>
      <a class="ghost admin-app-link" href="/">App</a>
    </header>
    ${isLoggedIn ? renderAdminTabs() : ""}
    <div class="admin-grid">
      ${renderCodePanel()}
      ${isLoggedIn ? `
        <div class="admin-desktop-two">
          <div class="admin-tab-panel" data-tab="live">${renderLiveControl()}</div>
          <div>
            <div class="admin-tab-panel" data-tab="prix">${renderHonoreeControl()}</div>
            <div class="admin-tab-panel" data-tab="resultats">${renderResults()}</div>
          </div>
        </div>
      ` : ""}
    </div>
    ${isLoggedIn ? `<button class="secondary admin-logout" type="button" onclick="logoutAdmin()">Se déconnecter</button>` : ""}
  `;
  if (isLoggedIn) applyAdminTab();
}

function applyAdminTab() {
  const isMobile = window.innerWidth < 700;
  if (!isMobile) {
    document.querySelectorAll(".admin-tab-panel").forEach((el) => (el.style.display = ""));
    return;
  }
  document.querySelectorAll(".admin-tab-panel").forEach((el) => {
    el.style.display = el.dataset.tab === adminState.tab ? "" : "none";
  });
}

renderAdmin();
refreshAdmin();
window.setInterval(refreshAdmin, 4000);
window.setInterval(() => {
  if (adminState.liveState?.voteOpen) renderAdmin();
}, 1000);
