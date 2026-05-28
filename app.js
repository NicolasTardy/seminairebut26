const STORAGE_KEYS = {
  profile: "nuit_cesars_profile",
  votes: "nuit_cesars_votes",
  messages: "nuit_cesars_messages",
};

const avatars = [
  { id: "popcorn", icon: "🍿", label: "Popcorn" },
  { id: "clap", icon: "🎬", label: "Clap" },
  { id: "trophy", icon: "🏆", label: "Trophée" },
  { id: "mic", icon: "🎤", label: "Micro" },
  { id: "star", icon: "⭐", label: "Star" },
  { id: "glasses", icon: "🕶️", label: "Lunettes" },
  { id: "disco", icon: "🪩", label: "Disco" },
  { id: "camera", icon: "📸", label: "Caméra" },
  { id: "projector", icon: "📽️", label: "Projecteur" },
  { id: "ticket", icon: "🎟️", label: "Ticket" },
  { id: "fire", icon: "🔥", label: "Flamme" },
  { id: "bolt", icon: "⚡", label: "Éclair" },
  { id: "crown", icon: "👑", label: "Couronne" },
  { id: "rocket", icon: "🚀", label: "Fusée" },
  { id: "donut", icon: "🍩", label: "Donut" },
  { id: "cookie", icon: "🍪", label: "Cookie" },
  { id: "robot", icon: "🤖", label: "Robot" },
  { id: "diamond", icon: "💎", label: "Diamant" },
  { id: "cassette", icon: "📼", label: "Cassette" },
  { id: "medal", icon: "🥇", label: "Médaille" },
  { id: "spotlight", icon: "🔦", label: "Spot" },
  { id: "speaker", icon: "📣", label: "Annonce" },
  { id: "gift", icon: "🎁", label: "Cadeau" },
  { id: "spark", icon: "✨", label: "Étincelle" },
];

const moods = [
  {
    id: "recharge",
    icon: "🌙",
    label: "En mode recharge",
    description: "Je démarre tranquille",
  },
  {
    id: "good-vibes",
    icon: "✨",
    label: "Bonne vibe",
    description: "Je suis bien lancé(e)",
  },
  {
    id: "full-power",
    icon: "🚀",
    label: "Au taquet",
    description: "Prêt(e) pour le show",
  },
];

const oscarCategories = [
  {
    id: "very-bad-trip",
    title: 'Oscar "Very Bad Trip"',
    subtitle: "Le pire trajet pour venir travailler à Emerainville",
    source: "Valérie",
    nominees: [
      { name: "Imen", reason: "Cergy : RER A x2 + bus 212" },
      { name: "François", reason: "Eaubonne : train + RER B + RER A + bus 212" },
      { name: "Nathalie Maitre", reason: "Arpajon : autoroute..." },
      { name: "Axelle", reason: "Massy : RER B + RER A + bus 212" },
    ],
  },
  {
    id: "ratatouille",
    title: 'Oscar "Ratatouille"',
    subtitle: "Les meilleurs cuisiniers qui régalent leurs collègues",
    source: "Marjorie",
    nominees: [
      { name: "Eve Lagant", reason: "Toujours un cookie pour ses collègues préférés" },
      { name: "Olivier Granda", reason: "Cookies maison, battle officielle à prévoir" },
      { name: "Sandra Notelet", reason: "Banana bread, tiramisu spéculos et autres douceurs" },
      { name: "4e nominé", reason: "Place réservée pour la surprise du jury" },
    ],
  },
  {
    id: "rocky",
    title: 'Oscar "Rocky"',
    subtitle: "Le plus sportif de la direction",
    source: "Laure",
    nominees: [
      { name: "Anaëlle", reason: "Elle court un marathon" },
      { name: "Pérola & Laure", reason: "Le duo de BUT Gym" },
      { name: "Sophie & Eve", reason: "Le duo de la salle de sport à côté de BUT" },
      { name: "Anaïs & Adrien", reason: "Le duo qui va courir dehors" },
    ],
  },
  {
    id: "fashion",
    title: 'Oscar "Confessions d’une accro du shopping"',
    subtitle: "Le ou la plus fashion de notre direction",
    source: "Marie",
    nominees: [
      { name: "Träcy Ignace Mboe", reason: "Pour son look coloré et pointu" },
      { name: "Thomas Phommarath", reason: "Pour son style recherché, simple et efficace" },
      { name: "Esther Livo-Durand", reason: "Classe et féminine, tout simplement" },
      {
        name: "Kathleen Derras",
        reason: "Miss BUT, fraîcheur et mention spéciale du jury pour le make-up",
      },
    ],
  },
  {
    id: "histoire-sans-fin",
    title: 'Oscar "L’Histoire sans fin"',
    subtitle: "La mobilité interne la plus longue de l’histoire de BUT",
    source: "Marie",
    nominees: [
      {
        name: "Audrey Barna",
        reason:
          "5 mois pour passer complètement d'account manager marketplace à chef de projet retail media marketplace",
      },
    ],
  },
  {
    id: "million-dollar-baby",
    title: 'Oscar "Million Dollar Baby"',
    subtitle: "Record historique de revenus retail media",
    source: "Marie",
    nominees: [
      {
        name: "Margaux Beudet",
        reason: "Record historique de revenus retail media pour BUT avec 1,5 million d'euros",
      },
    ],
  },
  {
    id: "voyage-chihiro",
    title: 'Oscar "Le voyage de Chihiro"',
    subtitle: "Celles qui ont le plus voyagé entre les bureaux",
    source: "Nicolas",
    nominees: [
      {
        name: "Duo : Anaïs Mastio & Mélanie Coupron",
        reason:
          "En 2 mois, elles ont organisé 3 déménagements de bureau. Connexions et déconnexions de PC n'ont plus de secret pour elles.",
      },
    ],
  },
  {
    id: "oss-117",
    title: 'Oscar "OSS 117"',
    subtitle: "Celui ou celle qui fait le plus de blagues et jeux de mots",
    source: "Nathalie",
    nominees: [
      {
        name: "Olivier Granda",
        reason: "Qui ne connaît pas les jeux de mots et devinettes de monsieur Granda ?",
      },
      { name: "Anaïs Mastio", reason: "Nominée pour ses bons mots et son humour du quotidien" },
      { name: "Amel", reason: "Nominée pour ses blagues et jeux de mots" },
      {
        name: "François",
        reason:
          "Même pas un an chez nous et déjà sur le podium des bons mots pour amuser ses collègues",
      },
    ],
  },
];

const honorees = [
  {
    title: 'Prix "Terminator"',
    subtitle: "Celle qui apprend à dompter l'IA",
    name: "Valérie Rochereau",
    image: "assets/laureate-valerie.png",
    reason:
      "En 3 mois, Valérie s'est approprié l'IA et multiplie la création d'outils avec une approche novatrice.",
  },
  {
    title: 'Oscar "L’Histoire sans fin"',
    subtitle: "La mobilité interne la plus longue de l'histoire de BUT",
    name: "Audrey Barna",
    image: "assets/laureate-audrey.png",
    reason:
      "Gestion des 2 postes en même temps, toujours avec le sourire, et soutien à l'organisation du séminaire.",
  },
  {
    title: 'Oscar "Million Dollar Baby"',
    subtitle: "Record historique de revenus retail media",
    name: "Margaux Beudet",
    image: "assets/laureate-margaux.png",
    reason:
      "Record battu de revenus et prise en main du trade BUT et du déploiement de DUYO.",
  },
];

const agendaSteps = [
  {
    id: "welcome-breakfast",
    start: "09:00",
    end: "09:30",
    title: "Accueil et petit déjeuner",
    type: "welcome",
    icon: "☕",
    djAction: "Écran d'accueil + création des profils",
  },
  {
    id: "day-intro",
    start: "09:30",
    end: "09:40",
    title: "Présentation du déroulé de la journée",
    type: "presentation",
    icon: "🎤",
    djAction: "Afficher le programme",
  },
  {
    id: "kantar",
    start: "09:40",
    end: "10:30",
    title: "Présentation Kantar",
    type: "presentation",
    icon: "📊",
    djAction: "Mode présentation",
  },
  {
    id: "morning-break",
    start: "10:30",
    end: "10:45",
    title: "Pause",
    type: "break",
    icon: "⏸️",
    djAction: "Écran pause",
  },
  {
    id: "org-news-strategy",
    start: "10:45",
    end: "12:15",
    title: "Organigramme, actualités & stratégie",
    type: "presentation",
    icon: "🧭",
    djAction: "Mode présentation",
  },
  {
    id: "lunch",
    start: "12:15",
    end: "13:30",
    title: "Déjeuner",
    type: "break",
    icon: "🍽️",
    djAction: "Écran pause déjeuner",
  },
  {
    id: "brainstorming",
    start: "13:30",
    end: "16:45",
    title: "Ateliers de brainstorming",
    type: "workshop",
    icon: "💡",
    djAction: "Mur libre + idées",
  },
  {
    id: "restitution-1",
    start: "14:30",
    end: "15:20",
    title: "Restitution 1",
    type: "restitution",
    icon: "🗣️",
    djAction: "Afficher synthèses groupe 1",
  },
  {
    id: "afternoon-break",
    start: "15:20",
    end: "15:40",
    title: "Pause",
    type: "break",
    icon: "⏸️",
    djAction: "Écran pause",
  },
  {
    id: "restitution-2",
    start: "15:40",
    end: "16:30",
    title: "Restitution 2",
    type: "restitution",
    icon: "🗣️",
    djAction: "Afficher synthèses groupe 2",
  },
  {
    id: "wrap-up",
    start: "16:30",
    end: "16:45",
    title: "Synthèse et clôture",
    type: "closing",
    icon: "🎯",
    djAction: "Écran clôture journée",
  },
  {
    id: "free-time",
    start: "16:45",
    end: "18:15",
    title: "Temps libre",
    subtitle: "Récupération des chambres et préparation à la soirée",
    type: "break",
    icon: "🛎️",
    djAction: "Écran temps libre",
  },
  {
    id: "team-building",
    start: "18:15",
    end: "19:30",
    title: "Team Building",
    subtitle: "Rendez-vous au Welcome desk",
    type: "team-building",
    icon: "🤝",
    djAction: "Écran rendez-vous",
  },
  {
    id: "oscars",
    start: "19:30",
    end: "20:30",
    title: "Remise des Oscars",
    type: "awards",
    icon: "🏆",
    djAction: "Ouvrir votes + reveals trophées",
  },
  {
    id: "dinner",
    start: "20:30",
    end: "22:00",
    title: "Dîner",
    type: "break",
    icon: "🍽️",
    djAction: "Écran dîner",
  },
  {
    id: "party",
    start: "22:00",
    end: "02:00",
    title: "Soirée",
    type: "party",
    icon: "🪩",
    djAction: "Mode soirée",
  },
];

const quizQuestion = {
  title: "Quiz live",
  question: "Quel accessoire est indispensable pour une remise de prix ?",
  options: ["Une enveloppe", "Un tableur", "Un badge visiteur", "Un câble HDMI"],
};

const state = {
  view: "home",
  profile: readJson(STORAGE_KEYS.profile),
  selectedAvatarId: "popcorn",
  selectedMoodId: "good-vibes",
  pseudoDraft: "",
  selectedNominee: null,
  pickedQuiz: null,
  liveState: {
    activeCategoryId: "very-bad-trip",
    activeStepId: "welcome-breakfast",
    voteOpen: false,
  },
  presenceStats: null,
  voteStats: null,
  toast: null,
};

function readJson(key, fallback = null) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function avatarById(id) {
  return avatars.find((avatar) => avatar.id === id) || avatars[0];
}

function moodById(id) {
  return moods.find((mood) => mood.id === id) || moods[1];
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function isTimeWithinStep(step, minutes) {
  const start = timeToMinutes(step.start);
  let end = timeToMinutes(step.end);
  let current = minutes;

  if (end <= start) end += 24 * 60;
  if (current < start && end > 24 * 60) current += 24 * 60;

  return current >= start && current < end;
}

function currentAgendaStep() {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  return [...agendaSteps].reverse().find((step) => isTimeWithinStep(step, minutes)) || agendaSteps[0];
}

function activeAgendaStep() {
  return agendaSteps.find((step) => step.id === state.liveState?.activeStepId) || currentAgendaStep();
}

function emptyMoodCounts() {
  const counts = moods.reduce((acc, mood) => {
    acc[mood.id] = 0;
    return acc;
  }, {});
  return counts;
}

function energyFromCounts(counts, total) {
  if (!total) return 0;
  return Math.round(((counts["good-vibes"] * 0.62 + counts["full-power"] * 1 + counts.recharge * 0.28) / total) * 100);
}

function roomMoodStats() {
  if (state.presenceStats) {
    const counts = { ...emptyMoodCounts(), ...state.presenceStats.counts };
    const online = state.presenceStats.online || 0;
    return {
      online,
      counts,
      topMood: moodById(state.presenceStats.topMoodId),
      energyScore: state.presenceStats.energyScore ?? energyFromCounts(counts, online),
      isRealtime: true,
    };
  }

  const counts = emptyMoodCounts();
  const currentMood = moodById(state.profile?.moodId || state.selectedMoodId);
  counts[currentMood.id] = 1;
  const topMood = moods.reduce((best, mood) => (counts[mood.id] > counts[best.id] ? mood : best), moods[0]);

  return {
    online: 1,
    counts,
    topMood,
    energyScore: energyFromCounts(counts, 1),
    isRealtime: false,
  };
}

function getVotes() {
  return state.voteStats?.participantVotes || readJson(STORAGE_KEYS.votes, {});
}

function getMessages() {
  return readJson(STORAGE_KEYS.messages, [
    {
      id: "seed-1",
      pseudo: "StudioPop",
      avatarId: "clap",
      text: "Prêt pour la cérémonie.",
    },
  ]);
}

function isVoteOpen() {
  return Boolean(state.liveState?.voteOpen);
}

function activeCategory() {
  const categoryId = state.liveState?.activeCategoryId;
  return oscarCategories.find((category) => category.id === categoryId) || oscarCategories[0];
}

function jsString(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function saveProfile(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const pseudo = String(form.get("pseudo") || state.pseudoDraft || "").trim();
  const error = document.querySelector("[data-error]");

  if (pseudo.length < 2) {
    error.textContent = "Choisis un pseudo de 2 caractères minimum.";
    return;
  }

  state.profile = {
    id: crypto.randomUUID(),
    pseudo,
    avatarId: state.selectedAvatarId,
    moodId: state.selectedMoodId,
    createdAt: new Date().toISOString(),
    isActive: true,
  };

  writeJson(STORAGE_KEYS.profile, state.profile);
  notify("Bienvenue dans la cérémonie !");
  startPresenceSync();
  startVoteSync();
  render();
}

async function syncPresence() {
  if (!state.profile) return;

  try {
    const response = await fetch("/api/presence", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: state.profile.id,
        pseudo: state.profile.pseudo,
        avatarId: state.profile.avatarId,
        moodId: state.profile.moodId || "good-vibes",
      }),
    });

    if (!response.ok) throw new Error("Presence unavailable");

    state.presenceStats = await response.json();
    if (state.view === "home") render();
  } catch {
    state.presenceStats = null;
  }
}

function startPresenceSync() {
  if (!state.profile || state.presenceTimer) return;
  syncPresence();
  state.presenceTimer = window.setInterval(syncPresence, 5000);
}

async function syncVotes() {
  if (!state.profile) return;

  try {
    const params = new URLSearchParams({ participantId: state.profile.id });
    const response = await fetch(`/api/votes?${params.toString()}`);
    if (!response.ok) throw new Error("Votes unavailable");

    state.voteStats = await response.json();
    writeJson(STORAGE_KEYS.votes, state.voteStats.participantVotes || {});
    if (state.view === "vote" || state.view === "reveal") render();
  } catch {
    state.voteStats = null;
  }
}

function startVoteSync() {
  if (!state.profile || state.voteTimer) return;
  syncVotes();
  state.voteTimer = window.setInterval(syncVotes, 5000);
}

async function syncLiveState() {
  try {
    const response = await fetch("/api/live-state");
    if (!response.ok) throw new Error("Live state unavailable");

    const nextLiveState = await response.json();
    const wasVoteOpen = Boolean(state.liveState?.voteOpen);
    const previousCategory = state.liveState?.activeCategoryId;
    state.liveState = {
      ...state.liveState,
      ...nextLiveState,
    };

    if (!wasVoteOpen && state.liveState.voteOpen && state.profile) {
      notify("Les votes sont ouverts !");
      pulse();
    }

    if (previousCategory !== state.liveState.activeCategoryId) {
      state.selectedNominee = null;
    }

    render();
  } catch {
    state.liveState ||= {
      activeCategoryId: "very-bad-trip",
      activeStepId: "welcome-breakfast",
      voteOpen: false,
    };
  }
}

function startLiveStateSync() {
  if (state.liveTimer) return;
  syncLiveState();
  state.liveTimer = window.setInterval(syncLiveState, 3000);
}

async function submitVote() {
  if (!state.selectedNominee) return;
  const category = activeCategory();

  if (!state.profile) return;

  try {
    const response = await fetch("/api/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        avatarId: state.profile.avatarId,
        categoryId: category.id,
        nomineeName: state.selectedNominee,
        participantId: state.profile.id,
        pseudo: state.profile.pseudo,
      }),
    });

    if (!response.ok) throw new Error("Vote unavailable");

    state.voteStats = await response.json();
    writeJson(STORAGE_KEYS.votes, state.voteStats.participantVotes || {});
    notify(state.voteStats.accepted ? "Vote enregistré." : "Tu as déjà voté pour cette catégorie.");
    pulse();
    render();
  } catch {
    const votes = readJson(STORAGE_KEYS.votes, {});
    votes[category.id] ||= state.selectedNominee;
    writeJson(STORAGE_KEYS.votes, votes);
    notify("Vote enregistré sur cet appareil.");
    pulse();
    render();
  }
}

function demoOscarWinner() {
  const category = activeCategory();
  const votes = getVotes();
  const resultWinner = state.voteStats?.results?.[category.id]?.[0]?.name;
  const winnerName = resultWinner || votes[category.id] || category.nominees[0]?.name || "Lauréat mystère";
  const winner = category.nominees.find((nominee) => nominee.name === winnerName) || category.nominees[0];

  return {
    category,
    name: winnerName,
    reason: winner?.reason || "Le public a tranché, place à la célébration.",
  };
}

function submitMessage(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const text = String(form.get("message") || "").trim();
  if (!text) return;

  const messages = getMessages();
  messages.unshift({
    id: crypto.randomUUID(),
    pseudo: state.profile.pseudo,
    avatarId: state.profile.avatarId,
    text,
  });
  writeJson(STORAGE_KEYS.messages, messages.slice(0, 8));
  notify("Message envoyé.");
  render();
}

function pickQuiz(option) {
  state.pickedQuiz = option;
  notify("Réponse envoyée.");
  render();
}

function notify(message) {
  state.toast = message;
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    state.toast = null;
    render();
  }, 2600);
}

function pulse() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement("i");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = ["#ffd76a", "#ff315f", "#21e6ff", "#45f2a2"][i % 4];
    piece.style.animationDelay = `${Math.random() * 260}ms`;
    confetti.appendChild(piece);
  }
  document.body.appendChild(confetti);
  window.setTimeout(() => confetti.remove(), 1500);
}

function renderTopbar() {
  const profile = state.profile;
  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">★</div>
        <div>
          <div class="brand-title">Séminaire été 2026 - BUT</div>
          <div class="brand-subtitle">Cérémonie live</div>
        </div>
      </div>
      ${
        profile
          ? `<span class="pill">${avatarById(profile.avatarId).icon} ${profile.pseudo}</span>`
          : `<span class="pill">🎬 Live</span>`
      }
    </header>
  `;
}

function renderProfileCreation() {
  return `
    ${renderTopbar()}
    <section class="hero">
      <p class="eyebrow">Profil participant</p>
      <h1>Crée ton profil</h1>
      <p class="lead">Un pseudo, un avatar, et c'est parti. Pas d'email, pas de mot de passe.</p>
    </section>

    <form class="panel" onsubmit="saveProfile(event)">
      <div class="field">
        <label for="pseudo">Ton pseudo</label>
        <input
          class="input"
          id="pseudo"
          name="pseudo"
          maxlength="24"
          autocomplete="off"
          placeholder="Ex : CookieBoss"
          value="${state.pseudoDraft}"
          oninput="state.pseudoDraft=this.value"
        />
      </div>

      <h2>Choisis ton avatar</h2>
      <div class="avatar-grid">
        ${avatars
          .map(
            (avatar) => `
              <button
                class="avatar-choice ${avatar.id === state.selectedAvatarId ? "is-selected" : ""}"
                type="button"
                aria-label="${avatar.label}"
                onclick="state.pseudoDraft=document.querySelector('#pseudo').value; state.selectedAvatarId='${avatar.id}'; render();"
              >
                ${avatar.icon}
              </button>
            `,
          )
          .join("")}
      </div>

      <h2>Ton humeur du moment</h2>
      <div class="mood-grid">
        ${moods
          .map(
            (mood) => `
              <button
                class="mood-choice ${mood.id === state.selectedMoodId ? "is-selected" : ""}"
                type="button"
                onclick="state.pseudoDraft=document.querySelector('#pseudo').value; state.selectedMoodId='${mood.id}'; render();"
              >
                <span class="mood-icon">${mood.icon}</span>
                <span>
                  <strong>${mood.label}</strong>
                  <small>${mood.description}</small>
                </span>
              </button>
            `,
          )
          .join("")}
      </div>

      <button class="primary" type="submit">Entrer dans la cérémonie</button>
      <p class="error" data-error></p>
    </form>
  `;
}

function renderRoomPulse() {
  const stats = roomMoodStats();
  return `
    <section class="panel pulse-panel">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">Salle en direct</p>
          <h2>${stats.online} personne${stats.online > 1 ? "s" : ""} connectée${stats.online > 1 ? "s" : ""}</h2>
        </div>
        <span class="pulse-live">${stats.isRealtime ? "Live réel" : "Local"}</span>
      </div>

      <div class="mood-summary">
        <div class="status-icon">${stats.topMood.icon}</div>
        <div>
          <p class="micro">Humeur générale</p>
          <h3>${stats.topMood.label}</h3>
          <p class="reason">Énergie collective : ${stats.energyScore}%</p>
        </div>
      </div>

      <div class="mood-bars">
        ${moods
          .map((mood) => {
            const count = stats.counts[mood.id];
            const percent = stats.online ? Math.round((count / stats.online) * 100) : 0;
            return `
              <div class="mood-bar-row">
                <span>${mood.icon} ${mood.label}</span>
                <strong>${count}</strong>
                <div class="mood-meter" aria-label="${mood.label} ${percent}%">
                  <i style="width: ${percent}%"></i>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderAgendaPreview() {
  const activeStep = activeAgendaStep();
  return `
    <section class="panel agenda-panel">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">Programme</p>
          <h2>Grands cycles</h2>
        </div>
        <span class="pill">DJ ready</span>
      </div>

      <div class="now-card">
        <div class="status-icon">${activeStep.icon}</div>
        <div>
          <p class="micro">Étape repère</p>
          <h3>${activeStep.title}</h3>
          <p class="reason">${activeStep.start} - ${activeStep.end} · ${activeStep.djAction}</p>
        </div>
      </div>

      <div class="agenda-list">
        ${agendaSteps
          .map(
            (step) => `
              <article class="agenda-item ${step.id === activeStep.id ? "is-active" : ""}">
                <div class="agenda-time">${step.start}<br />${step.end}</div>
                <div class="agenda-dot">${step.icon}</div>
                <div>
                  <strong>${step.title}</strong>
                  ${step.subtitle ? `<p class="reason">${step.subtitle}</p>` : ""}
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderHome() {
  const profile = state.profile;
  const avatar = avatarById(profile.avatarId);
  const mood = moodById(profile.moodId);
  const category = activeCategory();
  return `
    ${renderTopbar()}
    <section class="hero welcome-card">
      <div class="profile-line">
        <div class="avatar-badge">${avatar.icon}</div>
        <div>
          <p class="eyebrow">Bienvenue,</p>
          <h1>${profile.pseudo}</h1>
          <div class="profile-pills">
            <span class="pill">🔒 Profil verrouillé</span>
            <span class="pill">${mood.icon} ${mood.label}</span>
          </div>
        </div>
      </div>
    </section>
    ${renderRoomPulse()}

    <section class="panel">
      <div class="status-card">
        <div class="status-icon">🔔</div>
        <div>
          <h2>${isVoteOpen() ? "Les votes sont ouverts !" : "En attente"}</h2>
          <p class="muted">${
            isVoteOpen()
              ? `${category.title} est disponible maintenant.`
              : "Garde cette page ouverte pendant le séminaire."
          }</p>
        </div>
      </div>

      <div class="category-picker">
        <p class="micro">Catégorie préparée par l’admin</p>
        <div class="category-chip is-selected">${category.title}</div>
      </div>

      <div class="demo-strip">
        ${
          isVoteOpen()
            ? `<button class="primary" onclick="state.view='vote'; render();">Vote maintenant</button>`
            : `<button class="secondary" disabled>Vote fermé pour le moment</button>`
        }
      </div>
    </section>
    ${renderAgendaPreview()}
    ${renderBottomNav()}
  `;
}

function renderVote() {
  const category = activeCategory();
  const votes = getVotes();
  const alreadyVoted = Boolean(votes[category.id]);

  return `
    ${renderTopbar()}
    ${
      !isVoteOpen()
        ? `
          <section class="vote-closed">
            <div class="panel status-card">
              <div class="status-icon">🎬</div>
              <h2>Aucun vote ouvert</h2>
              <p class="empty-state">Les Oscars seront actives par l'admin au bon moment.</p>
            </div>
          </section>
        `
        : `
          <section class="section-title">
            <div>
              <p class="eyebrow">Les votes sont ouverts !</p>
              <h2>${category.title}</h2>
              <p class="muted">${category.subtitle}</p>
            </div>
            <span class="pill">1 vote</span>
          </section>

          ${
            alreadyVoted
              ? `
                <div class="panel status-card">
                  <div class="status-icon">✅</div>
                  <h2>Vote enregistré</h2>
                  <p class="muted">Ton choix reste secret jusqu'à la révélation.</p>
                </div>
              `
              : `
                <div class="nominee-list">
                  ${category.nominees
                    .map(
                      (nominee) => `
                        <button
                          class="nominee-card ${state.selectedNominee === nominee.name ? "is-selected" : ""}"
                          onclick="state.selectedNominee=${jsString(nominee.name)}; render();"
                        >
                          <span class="mini-avatar">🏅</span>
                          <span>
                            <strong>${nominee.name}</strong>
                            <p class="reason">${nominee.reason}</p>
                          </span>
                          <span class="check-dot">✓</span>
                        </button>
                      `,
                    )
                    .join("")}
                </div>
                <div class="sticky-action">
                  <button class="primary" ${state.selectedNominee ? "" : "disabled"} onclick="submitVote()">Valider mon vote</button>
                </div>
              `
          }
        `
    }
    ${renderBottomNav()}
  `;
}

function renderOscarReveal() {
  const winner = demoOscarWinner();
  return `
    ${renderTopbar()}
    <section class="section-title">
      <div>
        <p class="eyebrow">Reveal Oscar</p>
        <h2>Pastille Waouh</h2>
      </div>
      <button class="ghost" onclick="pulse()">Confettis</button>
    </section>

    <article class="oscar-reveal-card">
      <div class="oscar-stage">
        <div class="stage-lights"></div>
        <div class="winner-bubble">
          <div class="winner-avatar">🕶️</div>
          <div class="winner-spark winner-spark-left">★</div>
          <div class="winner-spark winner-spark-right">⚡</div>
        </div>
        <div class="stage-trophy">🏆</div>
      </div>

      <div class="trophy-content">
        <p class="trophy-kicker">Et l’Oscar revient à...</p>
        <div class="reveal-name">${winner.name}</div>
        <div class="award-ribbon">${winner.category.title}</div>
        <p class="trophy-subtitle">${winner.category.subtitle}</p>
        <p class="trophy-quote">“${winner.reason}”</p>
        <div class="reaction-row" aria-label="Réactions">
          <button class="reaction" onclick="pulse()">👏</button>
          <button class="reaction" onclick="pulse()">💖</button>
          <button class="reaction" onclick="pulse()">🤩</button>
        </div>
      </div>
    </article>

    <section class="panel">
      <p class="micro">Version démo</p>
      <p class="reason">Cette pastille utilisera le gagnant réel dès que les votes seront centralisés par le backend.</p>
    </section>
    ${renderBottomNav()}
  `;
}

function renderQuiz() {
  return `
    ${renderTopbar()}
    <section class="panel quiz-card">
      <p class="eyebrow">Quiz live</p>
      <h2>${quizQuestion.question}</h2>
      <div class="quiz-options">
        ${quizQuestion.options
          .map(
            (option) => `
              <button class="quiz-option ${state.pickedQuiz === option ? "is-picked" : ""}" onclick="pickQuiz(${jsString(option)})">
                ${option}
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
    ${renderBottomNav()}
  `;
}

function renderWall() {
  return `
    ${renderTopbar()}
    <section class="section-title">
      <div>
        <p class="eyebrow">Expression libre</p>
        <h2>Mur libre</h2>
      </div>
      <span class="pill">💬 Live</span>
    </section>

    <form class="panel" onsubmit="submitMessage(event)">
      <textarea class="textarea" name="message" maxlength="160" placeholder="Ton message pour la salle"></textarea>
      <div class="sticky-action">
        <button class="primary" type="submit">Envoyer</button>
      </div>
    </form>

    <div class="message-list">
      ${getMessages()
        .map(
          (message) => `
            <article class="message-card">
              <div class="mini-avatar">${avatarById(message.avatarId).icon}</div>
              <div>
                <strong>${message.pseudo}</strong>
                <p class="reason">${message.text}</p>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    ${renderBottomNav()}
  `;
}

function renderTrophies() {
  return `
    ${renderTopbar()}
    <section class="section-title">
      <div>
        <p class="eyebrow">Remise des trophées</p>
        <h2>Élus à récompenser</h2>
      </div>
      <button class="ghost" onclick="pulse()">Applaudir</button>
    </section>

    <div class="trophy-list">
      ${honorees
        .map(
          (honoree) => `
            <article class="trophy-card">
              <div class="trophy-portrait-wrap">
                <img class="trophy-portrait" src="${honoree.image}" alt="Portrait festif de ${honoree.name}" />
                <div class="trophy-portrait-badge">🏆</div>
              </div>
              <div class="trophy-content">
                <p class="trophy-kicker">Et le trophée revient à...</p>
                <div class="reveal-name">${honoree.name}</div>
                <div class="award-ribbon">${honoree.title}</div>
                <p class="trophy-subtitle">${honoree.subtitle}</p>
                <p class="trophy-quote">“${honoree.reason}”</p>
                <div class="reaction-row" aria-label="Réactions">
                  <button class="reaction" onclick="pulse()">👏</button>
                  <button class="reaction" onclick="pulse()">💖</button>
                  <button class="reaction" onclick="pulse()">🤩</button>
                </div>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    ${renderBottomNav()}
  `;
}

function renderBottomNav() {
  const items = [
    { id: "home", label: "Accueil", icon: "⌂" },
    { id: "vote", label: "Vote", icon: "✓" },
    { id: "reveal", label: "Reveal", icon: "★" },
    { id: "quiz", label: "Quiz", icon: "?" },
    { id: "trophies", label: "Prix", icon: "🏆" },
  ];

  return `
    <nav class="bottom-nav" aria-label="Navigation principale">
      ${items
        .map(
          (item) => `
            <button class="nav-item ${state.view === item.id ? "is-active" : ""}" onclick="state.view='${item.id}'; render();">
              <span class="nav-icon">${item.icon}</span>
              <span>${item.label}</span>
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function renderToast() {
  if (!state.toast) return "";
  return `
    <div class="toast" role="status">
      <span class="mini-avatar">🔔</span>
      <strong>${state.toast}</strong>
    </div>
  `;
}

function render() {
  const app = document.querySelector("#app");

  if (!state.profile) {
    app.innerHTML = renderToast() + renderProfileCreation();
    return;
  }

  const views = {
    home: renderHome,
    vote: renderVote,
    reveal: renderOscarReveal,
    quiz: renderQuiz,
    wall: renderWall,
    trophies: renderTrophies,
  };

  app.innerHTML = renderToast() + (views[state.view] || renderHome)();
}

render();
startPresenceSync();
startVoteSync();
startLiveStateSync();
