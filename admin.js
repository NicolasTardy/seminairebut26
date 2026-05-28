const ADMIN_CODE_KEY = "seminaire_admin_code";

const adminCategories = [
  { id: "very-bad-trip", title: 'Oscar "Very Bad Trip"', subtitle: "Le pire trajet pour venir travailler à Emerainville" },
  { id: "ratatouille", title: 'Oscar "Ratatouille"', subtitle: "Les meilleurs cuisiniers qui régalent leurs collègues" },
  { id: "rocky", title: 'Oscar "Rocky"', subtitle: "Le plus sportif de la direction" },
  {
    id: "fashion",
    title: 'Oscar "Confessions d’une accro du shopping"',
    subtitle: "Le ou la plus fashion de notre direction",
  },
  { id: "histoire-sans-fin", title: 'Oscar "L’Histoire sans fin"', subtitle: "La mobilité interne la plus longue" },
  { id: "million-dollar-baby", title: 'Oscar "Million Dollar Baby"', subtitle: "Record historique de revenus retail media" },
  { id: "voyage-chihiro", title: 'Oscar "Le voyage de Chihiro"', subtitle: "Celles qui ont le plus voyagé entre les bureaux" },
  { id: "oss-117", title: 'Oscar "OSS 117"', subtitle: "Blagues et jeux de mots" },
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
};

function categoryById(id) {
  return adminCategories.find((category) => category.id === id) || adminCategories[0];
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

function renderLiveControl() {
  const live = adminState.liveState || { activeCategoryId: "very-bad-trip", activeStepId: "welcome-breakfast", voteOpen: false };
  const category = categoryById(live.activeCategoryId);
  return `
    <section class="panel">
      <p class="eyebrow">Régie live</p>
      <h2>${live.voteOpen ? "Vote ouvert" : "Vote fermé"}</h2>
      <div class="metric-grid">
        <div class="metric"><span class="micro">Connectés</span><strong>${adminState.presence?.online ?? 0}</strong></div>
        <div class="metric"><span class="micro">Catégorie</span><strong>${category.title.replace("Oscar ", "")}</strong></div>
      </div>
      <div class="field">
        <label for="step">Étape active</label>
        <select class="admin-select" id="step" onchange="saveLiveState({ activeStepId: this.value })">
          ${adminSteps.map((step) => `<option value="${step.id}" ${step.id === live.activeStepId ? "selected" : ""}>${step.label}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label for="category">Catégorie Oscar active</label>
        <select class="admin-select" id="category" onchange="saveLiveState({ activeCategoryId: this.value, voteOpen: false })">
          ${adminCategories
            .map((item) => `<option value="${item.id}" ${item.id === live.activeCategoryId ? "selected" : ""}>${item.title}</option>`)
            .join("")}
        </select>
      </div>
      <div class="admin-actions">
        <button class="primary" onclick="saveLiveState({ voteOpen: true })">Ouvrir le vote</button>
        <button class="secondary" onclick="saveLiveState({ voteOpen: false })">Fermer le vote</button>
      </div>
    </section>
  `;
}

function renderResults() {
  const categoryId = adminState.liveState?.activeCategoryId || "very-bad-trip";
  const results = adminState.votes?.results?.[categoryId] || [];
  const total = results.reduce((sum, result) => sum + result.count, 0);
  return `
    <section class="panel">
      <p class="eyebrow">Résultats live</p>
      <h2>${total} vote${total > 1 ? "s" : ""}</h2>
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
            : `<p class="empty-state">Aucun vote enregistré pour cette catégorie.</p>`
        }
      </div>
    </section>
  `;
}

function renderAdmin() {
  const app = document.querySelector("#admin-app");
  app.innerHTML = `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">★</div>
        <div>
          <div class="brand-title">Régie admin</div>
          <div class="brand-subtitle">Séminaire été 2026 - BUT</div>
        </div>
      </div>
      <a class="ghost" href="/">App</a>
    </header>
    <section class="hero">
      <p class="eyebrow">Mode DJ</p>
      <h1>Piloter le live</h1>
      <p class="lead">Ouvre les votes, choisis la catégorie active et suis les résultats en temps réel.</p>
    </section>
    <div class="admin-grid">
      ${renderCodePanel()}
      <div class="admin-two">
        ${renderLiveControl()}
        ${renderResults()}
      </div>
    </div>
  `;
}

renderAdmin();
refreshAdmin();
window.setInterval(refreshAdmin, 4000);
