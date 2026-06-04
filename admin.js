const ADMIN_CODE_KEY = "seminaire_admin_code";

const adminCategories = [
  { id: "ratatouille", title: `Oscar "Ratatouille"`, subtitle: "Les meilleurs cuisiniers" },
  { id: "oss-117", title: `Oscar "OSS 117"`, subtitle: "Blagues et jeux de mots" },
  { id: "voyage-chihiro", title: `Oscar "Le Voyage de Chihiro"`, subtitle: "Voyage entre les bureaux" },
  { id: "rocky", title: `Oscar "Rocky"`, subtitle: "Le plus sportif" },
  { id: "very-bad-trip", title: `Oscar "Very Bad Trip"`, subtitle: "Le pire trajet" },
];

const adminHonorees = [
  { id: "sophie-inception", name: "Sophie", title: `Prix "Inception"` },
  { id: "rayane-starwars", name: "Rayane", title: `Prix "La Guerre des Étoiles"` },
  { id: "equipe-rc", name: "Équipe Relation Client", title: `Prix "Le Téléphone Sonne Toujours 2 Fois"` },
  { id: "emilie-pele-hp", name: "Emilie Pelé", title: "Oscar Harry Potter" },
  { id: "valerie-rochereau", name: "Valérie Rochereau", title: `Prix "Terminator"` },
  { id: "team-marketplace", name: "Team Marketplace", title: `Oscar "The Social Network"` },
  { id: "team-pei", name: "Team PEI", title: `Oscar "Retour vers le Futur"` },
  { id: "virginie-nerriere", name: "Nerrière Virginie", title: "Oscar de l’éternel sourire" },
  { id: "perola-pessaro", name: "Pessaro Perola", title: "Prix Mission Impossible" },
  { id: "anais-melanie-speed", name: "Anaïs & Mélanie", title: `Prix "Speed"` },
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
  { id: "oscars", label: "19:30 · Apéro" },
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
  alertDraft: "",
};

function jsAdminString(value) {
  return JSON.stringify(value).replace(/"/g, "&quot;");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

async function sendAlert() {
  const msg = (adminState.alertDraft || "").trim();
  if (!msg) return;
  await saveLiveState({ alertMessage: msg });
  adminState.alertDraft = "";
  renderAdmin();
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
  const activeRevealId = adminState.liveState?.activeRevealCategoryId || "";
  return `
    <section class="panel">
      <p class="eyebrow">Résultats & Reveal Oscars</p>
      <div class="astat-banner ${activeRevealId ? "is-vote-on" : ""}" style="margin-bottom:12px">
        <div class="astat-row">
          <span>Affiché aux participants</span>
          <strong>${activeRevealId ? (adminCategories.find(c => c.id === activeRevealId)?.title.replace(/^Oscar /, "") || activeRevealId) : "—"}</strong>
        </div>
      </div>
      ${adminCategories.map((category) => {
          const results = adminState.votes?.results?.[category.id] || [];
          const total = adminState.votes?.totals?.[category.id] || results.reduce((sum, r) => sum + r.count, 0);
          const isRevealed = activeRevealId === category.id;
          const winner = results[0];
          return `
            <div class="results-category ${isRevealed ? "is-active-category" : ""}">
              <div class="results-cat-head">
                <div>
                  <p class="micro results-category-label" style="margin:0">${category.title.replace(/^Oscar /, "")}</p>
                  ${winner ? `<span class="results-winner-preview">🏆 ${winner.name} · ${total ? Math.round(winner.count/total*100) : 0}%</span>` : `<span class="results-winner-preview muted">Aucun vote</span>`}
                </div>
                <div class="results-cat-actions">
                  <span class="pill" style="font-size:0.72rem">${total} vote${total !== 1 ? "s" : ""}</span>
                  ${isRevealed
                    ? `<button class="admin-reset-btn" style="min-height:36px;padding:6px 10px;font-size:0.78rem" onclick="saveLiveState({ activeRevealCategoryId: '' })">🙈 Masquer</button>`
                    : `<button class="admin-nav-btn is-next" style="min-height:36px;padding:6px 12px;font-size:0.82rem;width:auto" onclick="saveLiveState({ activeRevealCategoryId: ${jsAdminString(category.id)} })">▶ Révéler</button>`
                  }
                </div>
              </div>
              <div class="admin-list" style="margin-top:8px">
                ${results.length
                  ? results.map((result, index) => `
                      <article class="admin-row ${index === 0 ? "is-active" : ""}">
                        <span class="mini-avatar">${index === 0 ? "🏆" : "🏅"}</span>
                        <strong>${result.name}</strong>
                        <span class="pill">${result.count}</span>
                      </article>
                    `).join("")
                  : `<p class="empty-state" style="margin:4px 0">Aucun vote.</p>`
                }
              </div>
            </div>
          `;
        }).join("")}
      <button class="secondary admin-wide-action" style="margin-top:10px" onclick="saveLiveState({ activeRevealCategoryId: '' })">🙈 Tout masquer</button>
    </section>
  `;
}

function renderAdmin() {
  const scrollY = window.scrollY;
  const app = document.querySelector("#admin-app");
  const isLoggedIn = adminState.liveState !== null;
  const live = adminState.liveState || {};
  const voteIsOpen = isVoteOpen();
  const remainingMs = voteRemainingMs();

  app.innerHTML = `
    <!-- HEADER -->
    <header class="admin-header-bar">
      <div class="brand">
        <div class="brand-mark">★</div>
        <div>
          <div class="brand-title">Régie BUT 2026</div>
        </div>
      </div>
      <div class="admin-header-actions">
        <a class="ghost admin-app-link" href="/" style="min-height:36px;padding:6px 12px;font-size:0.82rem">App ↗</a>
        ${isLoggedIn ? `<button class="admin-logout-small" type="button" onclick="logoutAdmin()">Déco</button>` : ""}
      </div>
    </header>

    <!-- 0. IDENTIFICATION -->
    <div class="admin-section">
      <div class="admin-section-label">🔐 Identification</div>
      ${renderCodePanel()}
    </div>

    ${!isLoggedIn ? "" : `

    <!-- 1. MESSAGE À TOUS -->
    <div class="admin-section">
      <div class="admin-section-label">📣 Message à tous</div>
      <div class="alert-panel" style="margin-top:0">
        <div class="alert-compose">
          <input
            class="alert-panel-input"
            type="text"
            id="alert-msg-input"
            placeholder="Ex : RDV au bar · Pause 10 min…"
            maxlength="120"
            value="${escapeHtml(adminState.alertDraft || "")}"
            oninput="adminState.alertDraft=this.value"
            onkeydown="if(event.key==='Enter' && this.value.trim()) sendAlert()"
          />
          <button class="alert-send-btn" onclick="sendAlert()">🔔 Envoyer</button>
        </div>
        <p class="micro" style="margin:6px 0 0;color:rgba(255,215,106,0.7)">Popup + ding sonore sur tous les téléphones</p>
      </div>
    </div>

    <!-- 2. ÉTAPE DU PROGRAMME -->
    <div class="admin-section">
      <div class="admin-section-label">📋 Étape du programme</div>
      <div class="panel" style="margin-top:0">
        <select class="admin-select" id="step" onchange="saveLiveState({ activeStepId: this.value })">
          ${adminSteps.map((step) => `<option value="${step.id}" ${step.id === live.activeStepId ? "selected" : ""}>${step.label}</option>`).join("")}
        </select>
        <div class="astat-banner" style="margin-top:10px">
          <div class="astat-row"><span>👥 Connectés</span><strong>${adminState.presence?.online ?? 0}</strong></div>
        </div>
      </div>
    </div>

    <!-- 3. BRAINSTORMING -->
    <div class="admin-section">
      <div class="admin-section-label">💡 Brainstorming équipes</div>
      <div class="panel" style="margin-top:0">
        ${adminToggle("Afficher les équipes aux participants", "💡", Boolean(live.brainstormOpen),
          "saveLiveState({ brainstormOpen: true })",
          "saveLiveState({ brainstormOpen: false })")}
      </div>
    </div>

    <!-- 4. REMISE DES PRIX -->
    <div class="admin-section">
      <div class="admin-section-label">🏆 Remise des prix</div>
      <div class="panel" style="margin-top:0;margin-bottom:10px">
        ${adminToggle("Onglet Prix visible", "🏆", Boolean(live.prixOpen),
          "saveLiveState({ prixOpen: true })",
          "saveLiveState({ prixOpen: false })")}
      </div>
      ${renderHonoreeControl()}
    </div>

    <!-- 5. OSCARS — VOTES -->
    <div class="admin-section">
      <div class="admin-section-label">★ Oscars — Votes</div>
      <div class="panel" style="margin-top:0;margin-bottom:10px">
        ${adminToggle("Onglet Oscars visible", "★", Boolean(live.oscarsOpen),
          "saveLiveState({ oscarsOpen: true })",
          "saveLiveState({ oscarsOpen: false })")}
      </div>
      <div class="panel" style="margin-top:0">
        <div class="astat-banner ${voteIsOpen ? "is-vote-on" : ""}" style="margin:0 0 12px">
          <div class="astat-row"><span>🗳️ Ont voté</span><strong>${adminState.votes ? Object.values(adminState.votes.totals || {}).reduce((a,b)=>a+b,0) : 0}</strong></div>
          <div class="astat-row"><span>⏱️ Timer</span><strong>${voteIsOpen ? formatCountdown(remainingMs) : "—"}</strong></div>
        </div>
        <div class="field" style="margin:0 0 12px">
          <label class="atoggle-section">Catégorie active</label>
          <select class="admin-select" id="category" onchange="saveLiveState({ activeCategoryId: this.value, voteOpen: false })">
            ${adminCategories.map((item) => `<option value="${item.id}" ${item.id === live.activeCategoryId ? "selected" : ""}>${item.title.replace(/^Oscar /, "")}</option>`).join("")}
          </select>
        </div>
        ${adminToggle("Vote ouvert (1 min)", "🗳️", voteIsOpen, "openVote()", "closeVote()")}
        <div class="admin-reset-row" style="margin-top:10px">
          <button class="admin-reset-btn" onclick="resetVotes(${jsAdminString(live.activeCategoryId || 'very-bad-trip')})">↺ RAZ catégorie</button>
          <button class="admin-reset-btn admin-reset-all" onclick="resetVotes('all')">↺ RAZ tous</button>
        </div>
      </div>
    </div>

    <!-- 6. OSCARS — RÉSULTATS & REVEAL -->
    <div class="admin-section">
      <div class="admin-section-label">🎬 Oscars — Résultats & Reveal</div>
      ${renderResults()}
    </div>

    <!-- 7. PRADA -->
    <div class="admin-section">
      <div class="admin-section-label">👗 Le diable s'habille en Prada</div>
      <div class="panel" style="margin-top:0">
        ${adminToggle("Vote Prada ouvert (1 heure)", "👗", Boolean(live.pradaOpen),
          "saveLiveState({ pradaOpen: true })",
          "saveLiveState({ pradaOpen: false })")}
        ${live.pradaClosesAt ? `<p class="micro" style="margin:8px 0 0">Ferme à : ${new Date(live.pradaClosesAt).toLocaleTimeString("fr-FR", {hour:"2-digit",minute:"2-digit"})}</p>` : ""}
      </div>
    </div>

    `}
  `;
  requestAnimationFrame(() => window.scrollTo(0, scrollY));
}

function isUserTyping() {
  const el = document.activeElement;
  return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT");
}

function safeRenderAdmin() {
  if (!isUserTyping()) renderAdmin();
}

async function safeRefreshAdmin() {
  try {
    const [liveState, presence, votes] = await Promise.all([
      fetch("/api/live-state").then(r => r.json()),
      fetch("/api/presence").then(r => r.json()),
      fetch("/api/votes").then(r => r.json()),
    ]);
    adminState.liveState = liveState;
    adminState.presence = presence;
    adminState.votes = votes;
    safeRenderAdmin();
  } catch {
    adminState.message = "Impossible de rafraîchir la régie.";
    safeRenderAdmin();
  }
}

renderAdmin();
refreshAdmin();
window.setInterval(safeRefreshAdmin, 4000);
window.setInterval(() => {
  if (adminState.liveState?.voteOpen) safeRenderAdmin();
}, 1000);
