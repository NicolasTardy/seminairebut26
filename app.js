const STORAGE_KEYS = {
  profile: "nuit_cesars_profile",
  votes: "nuit_cesars_votes",
  messages: "nuit_cesars_messages",
  demoVoteOpen: "nuit_cesars_demo_vote_open",
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

const oscarCategories = [
  {
    id: "very-bad-trip",
    title: 'Oscar "Very Bad Trip"',
    subtitle: "Le pire trajet pour venir travailler à Emerainville",
    nominees: [
      { name: "Imen", reason: "Cergy : RER A x2 + bus 212" },
      { name: "François", reason: "Eaubonne : train + RER B + RER A + bus 212" },
      { name: "Nathalie Maitre", reason: "Arpajon : autoroute et patience olympique" },
      { name: "Axelle", reason: "Massy : RER B + RER A + bus 212" },
    ],
  },
  {
    id: "ratatouille",
    title: 'Oscar "Ratatouille"',
    subtitle: "Les meilleurs cuisiniers qui régalent leurs collègues",
    nominees: [
      { name: "Eve Lagant", reason: "Toujours un cookie pour ses collègues préférés" },
      { name: "Olivier Granda", reason: "Cookies maison, battle officielle à prévoir" },
      { name: "Sandra Notelet", reason: "Banana bread, tiramisu speculos et autres douceurs" },
      { name: "4e nominé", reason: "Place réservée pour la surprise du jury" },
    ],
  },
  {
    id: "rocky",
    title: 'Oscar "Rocky"',
    subtitle: "Le plus sportif de la direction",
    nominees: [
      { name: "Anaelle", reason: "Elle court un marathon" },
      { name: "Perola & Laure", reason: "Le duo de BUT Gym" },
      { name: "Sophie & Eve", reason: "Le duo de la salle de sport à côté de BUT" },
      { name: "Anais & Adrien", reason: "Le duo qui va courir dehors" },
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

const quizQuestion = {
  title: "Quiz live",
  question: "Quel accessoire est indispensable pour une remise de prix ?",
  options: ["Une enveloppe", "Un tableur", "Un badge visiteur", "Un câble HDMI"],
};

const state = {
  view: "home",
  profile: readJson(STORAGE_KEYS.profile),
  selectedAvatarId: "popcorn",
  pseudoDraft: "",
  selectedNominee: null,
  pickedQuiz: null,
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

function getVotes() {
  return readJson(STORAGE_KEYS.votes, {});
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
  return localStorage.getItem(STORAGE_KEYS.demoVoteOpen) === "true";
}

function activeCategory() {
  return oscarCategories[0];
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
    createdAt: new Date().toISOString(),
    isActive: true,
  };

  writeJson(STORAGE_KEYS.profile, state.profile);
  notify("Bienvenue dans la cérémonie !");
  render();
}

function openDemoVote() {
  localStorage.setItem(STORAGE_KEYS.demoVoteOpen, "true");
  state.view = "vote";
  notify("Les votes sont ouverts !");
  pulse();
  render();
}

function closeDemoVote() {
  localStorage.setItem(STORAGE_KEYS.demoVoteOpen, "false");
  state.view = "home";
  notify("Le vote est ferme.");
  render();
}

function submitVote() {
  if (!state.selectedNominee) return;
  const votes = getVotes();
  const category = activeCategory();
  votes[category.id] = state.selectedNominee;
  writeJson(STORAGE_KEYS.votes, votes);
  notify("Vote enregistré.");
  pulse();
  render();
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

      <button class="primary" type="submit">Entrer dans la cérémonie</button>
      <p class="error" data-error></p>
    </form>
  `;
}

function renderHome() {
  const profile = state.profile;
  const avatar = avatarById(profile.avatarId);
  return `
    ${renderTopbar()}
    <section class="hero welcome-card">
      <div class="profile-line">
        <div class="avatar-badge">${avatar.icon}</div>
        <div>
          <p class="eyebrow">Bienvenue,</p>
          <h1>${profile.pseudo}</h1>
          <span class="pill">🔒 Profil verrouillé</span>
        </div>
      </div>
    </section>

    <section class="panel">
      <div class="status-card">
        <div class="status-icon">🔔</div>
        <div>
          <h2>${isVoteOpen() ? "Les votes sont ouverts !" : "En attente"}</h2>
          <p class="muted">${
            isVoteOpen()
              ? 'Oscar "Very Bad Trip" est disponible maintenant.'
              : "Garde cette page ouverte pendant le séminaire."
          }</p>
        </div>
      </div>

      <div class="demo-strip">
        ${
          isVoteOpen()
            ? `<button class="primary" onclick="state.view='vote'; render();">Vote maintenant</button>
               <button class="secondary" onclick="closeDemoVote()">Fermer le vote démo</button>`
            : `<button class="secondary" onclick="openDemoVote()">Démo admin : ouvrir le vote</button>`
        }
      </div>
    </section>
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
                          onclick="state.selectedNominee='${nominee.name.replace("'", "\\'")}'; render();"
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
              <button class="quiz-option ${state.pickedQuiz === option ? "is-picked" : ""}" onclick="pickQuiz('${option.replace("'", "\\'")}')">
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
    { id: "quiz", label: "Quiz", icon: "?" },
    { id: "wall", label: "Mur", icon: "✎" },
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
    quiz: renderQuiz,
    wall: renderWall,
    trophies: renderTrophies,
  };

  app.innerHTML = renderToast() + (views[state.view] || renderHome)();
}

render();
