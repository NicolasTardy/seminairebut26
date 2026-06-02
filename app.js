const STORAGE_KEYS = {
  profile: "nuit_cesars_profile",
  votes: "nuit_cesars_votes",
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

const wallEmojis = ["🎉", "🔥", "👏", "💖", "🤩", "😂", "✨", "🏆"];

const brainstormingTeams = [
  {
    id: 1,
    responsable: "Nicolas Tardy",
    members: [
      { prenom: "Olivier", nom: "Granda", pole: "Communication" },
      { prenom: "Jessie", nom: "Missilou", pole: "E-commerce" },
      { prenom: "Mourad", nom: "Baïche", pole: "CRM - Trafic" },
      { prenom: "Laura", nom: "Venâncio", pole: "E-commerce" },
      { prenom: "Anais", nom: "Atienza", pole: "E-commerce" },
      { prenom: "Andrea", nom: "Becker", pole: "E-commerce" },
      { prenom: "Jenna", nom: "Blancon", pole: "E-commerce" },
      { prenom: "Marie", nom: "Palus", pole: "E-commerce" },
      { prenom: "Astrid", nom: "Minier", pole: "Expérience Client" },
      { prenom: "Caroline", nom: "De Oliveira", pole: "Expérience Client" },
      { prenom: "Yassine", nom: "Mesmoudi", pole: "CRM - Trafic" },
    ],
  },
  {
    id: 2,
    responsable: "Marjorie Courtet",
    members: [
      { prenom: "Julie", nom: "Gouvard", pole: "Communication" },
      { prenom: "Virginie", nom: "Nerrière", pole: "Communication" },
      { prenom: "Théo", nom: "Decherf", pole: "CRM - Trafic" },
      { prenom: "Emilie", nom: "Coatelant", pole: "CRM - Trafic" },
      { prenom: "Imen", nom: "Krichen", pole: "E-commerce" },
      { prenom: "Träcy", nom: "Ignace Mboe", pole: "E-commerce" },
      { prenom: "Pauline", nom: "Periquito", pole: "E-commerce" },
      { prenom: "Amandine", nom: "Alaso", pole: "E-commerce" },
      { prenom: "Sandra", nom: "Notelet", pole: "Expérience Client" },
      { prenom: "Kamila", nom: "Lamri", pole: "Expérience Client" },
      { prenom: "Mathilde", nom: "Grassin", pole: "E-commerce" },
    ],
  },
  {
    id: 3,
    responsable: "Nathalie Jacquot",
    members: [
      { prenom: "Victoria", nom: "Onephitak", pole: "Communication" },
      { prenom: "Mélanie", nom: "Sagon", pole: "Communication" },
      { prenom: "Ountourou Pilar", nom: "Gomis", pole: "Communication" },
      { prenom: "Mayez", nom: "Hassan", pole: "CRM - Trafic" },
      { prenom: "Adib", nom: "Samari", pole: "CRM - Trafic" },
      { prenom: "Quentin", nom: "Drouhot", pole: "E-commerce" },
      { prenom: "Florian", nom: "Renault", pole: "E-commerce" },
      { prenom: "Tania", nom: "Lefebvre", pole: "E-commerce" },
      { prenom: "Elisa", nom: "Lorthios", pole: "Expérience Client" },
      { prenom: "Millia", nom: "Netro", pole: "Expérience Client" },
    ],
  },
  {
    id: 4,
    responsable: "Laure Dutournier",
    members: [
      { prenom: "Nathalie", nom: "Maitre", pole: "Communication" },
      { prenom: "Sarah", nom: "Evenden", pole: "Communication" },
      { prenom: "Lauren", nom: "Destombes", pole: "Communication" },
      { prenom: "Axelle", nom: "Piquet / Duvignacq", pole: "CRM - Trafic" },
      { prenom: "Claire", nom: "Zegarra", pole: "E-commerce" },
      { prenom: "Nordine", nom: "Iriout", pole: "E-commerce" },
      { prenom: "Nada", nom: "Ben Brahim", pole: "CRM - Trafic" },
      { prenom: "Sharia", nom: "Ponn", pole: "E-commerce" },
      { prenom: "Iman", nom: "Maghzaz", pole: "Trade Marketing & Retail media" },
      { prenom: "Marie", nom: "Albiez", pole: "Expérience Client" },
      { prenom: "Mélanie", nom: "Courpron", pole: "Services financiers" },
    ],
  },
  {
    id: 5,
    responsable: "Valérie Krauss",
    members: [
      { prenom: "Penda", nom: "Cisse", pole: "Communication" },
      { prenom: "Eva", nom: "Habert", pole: "Communication" },
      { prenom: "Laetitia", nom: "Boutros", pole: "Communication" },
      { prenom: "Mehdi", nom: "Kebaili", pole: "CRM - Trafic" },
      { prenom: "Dalel", nom: "Jlidi", pole: "E-commerce" },
      { prenom: "Jade", nom: "Oba Icket", pole: "E-commerce" },
      { prenom: "Wesley", nom: "Bijaoui", pole: "E-commerce" },
      { prenom: "Amel", nom: "Mbatsogo", pole: "E-commerce" },
      { prenom: "Christophe", nom: "Holvoet", pole: "Expérience Client" },
      { prenom: "Anaïs", nom: "Mastio", pole: "Services financiers" },
      { prenom: "Antoine", nom: "Jacquemond", pole: "E-commerce" },
    ],
  },
  {
    id: 6,
    responsable: "Solenne Pasqualetti",
    members: [
      { prenom: "Pérola", nom: "Passaro", pole: "Communication" },
      { prenom: "Kathleen", nom: "Derras", pole: "Communication" },
      { prenom: "Laetitia", nom: "Otto", pole: "Communication" },
      { prenom: "Samuel", nom: "Zaabouli-Bourgeois", pole: "CRM - Trafic" },
      { prenom: "Emilie", nom: "Pelé", pole: "CRM - Trafic" },
      { prenom: "Shahinez", nom: "Belghit", pole: "E-commerce" },
      { prenom: "Dylan", nom: "Gandon", pole: "E-commerce" },
      { prenom: "Aubane", nom: "Olivero de Rubiana", pole: "E-commerce" },
      { prenom: "Rayane", nom: "Adghar", pole: "Expérience Client" },
      { prenom: "Binta", nom: "Hama", pole: "Expérience Client" },
      { prenom: "Valérie", nom: "Rochereau", pole: "Services financiers" },
    ],
  },
  {
    id: 7,
    responsable: null,
    members: [
      { prenom: "Laure", nom: "Leconte", pole: "Communication" },
      { prenom: "Frédéric", nom: "Kellenberger", pole: "Communication" },
      { prenom: "Adrien", nom: "Djeabal", pole: "E-commerce" },
      { prenom: "Coralie", nom: "Le Bozec", pole: "E-commerce" },
      { prenom: "Alexane", nom: "Weber", pole: "E-commerce" },
      { prenom: "Anaele", nom: "Vitse", pole: "CRM - Trafic" },
      { prenom: "Océane", nom: "Hadjadj", pole: "Expérience Client" },
      { prenom: "François", nom: "Bertonneau", pole: "Expérience Client" },
      { prenom: "Audrey", nom: "Barna", pole: "Trade Marketing & Retail media" },
      { prenom: "Monica", nom: "Ribeiro Da Silva", pole: "E-commerce" },
      { prenom: "Célia", nom: "Lefebvre", pole: "Communication" },
    ],
  },
  {
    id: 8,
    responsable: "Marie Amsellem",
    members: [
      { prenom: "Alexandra", nom: "Gauthier", pole: "Communication" },
      { prenom: "Olivia", nom: "Cabaret", pole: "Communication" },
      { prenom: "Jérémy", nom: "Tissier", pole: "E-commerce" },
      { prenom: "Azur", nom: "Chadaine", pole: "E-commerce" },
      { prenom: "Thomas", nom: "Phommarath", pole: "E-commerce" },
      { prenom: "Morgane", nom: "Vidament", pole: "E-commerce" },
      { prenom: "Amélia", nom: "Machado", pole: "E-commerce" },
      { prenom: "Esther", nom: "Livio", pole: "Expérience Client" },
      { prenom: "Sophie", nom: "Bourgeois", pole: "Expérience Client" },
      { prenom: "Margaux", nom: "Beudet", pole: "Trade Marketing & Retail media" },
    ],
  },
];

const oscarCategories = [
  {
    id: "fashion",
    visual: "fashion",
    badgeIcon: "👗",
    title: `Oscar "Confessions d'une accro du shopping"`,
    subtitle: "Le ou la plus fashion de notre direction",
    source: "Marie",
    nominees: [
      { name: "Träcy Ignace Mboe", reason: "Pour son look coloré et pointu" },
      { name: "Thomas Phommarath", reason: "Pour son style recherché, simple et efficace" },
      { name: "Esther Livo-Durand", reason: "Classe et féminine, tout simplement" },
      {
        name: "Kathleen Derras",
        reason: "Miss BUT, pour sa fraîcheur et mention spéciale du jury pour le make-up",
      },
    ],
  },
  {
    id: "ratatouille",
    visual: "ratatouille",
    badgeIcon: "🍳",
    title: 'Oscar "Ratatouille"',
    subtitle: "Les meilleurs cuisiniers qui régalent leurs collègues",
    source: "Marjorie",
    nominees: [
      { name: "Eve Lagant", reason: "Toujours un cookie pour ses collègues préférés" },
      { name: "Olivier Granda", reason: "Aussi des cookies maison, battle à faire..." },
      {
        name: "Sandra Notelet (team Valérie)",
        reason: "La reine du banana bread, tiramisu spéculos et autres douceurs pour régaler ses collègues",
      },
    ],
  },
  {
    id: "oss-117",
    visual: "oss117",
    badgeIcon: "🕵️",
    title: 'Oscar "OSS 117"',
    subtitle: "Celui ou celle qui fait le plus de blagues et jeux de mots en tous genres",
    source: "Nathalie",
    nominees: [
      {
        name: "Olivier Granda",
        reason: "Qui ne connaît pas les jeux de mots et devinettes de monsieur Granda ?",
      },
      { name: "Anaïs Mastio", reason: "Nominée pour ses blagues et jeux de mots" },
      { name: "Amel", reason: "Nominée pour ses blagues et jeux de mots" },
      {
        name: "François Bertonneau",
        reason:
          "Même pas un an chez nous et déjà sur le podium des bons mots et autres blagues pour amuser ses collègues",
      },
    ],
  },
  {
    id: "voyage-chihiro",
    visual: "chihiro",
    badgeIcon: "🌊",
    title: 'Oscar "Le voyage de Chihiro"',
    subtitle: "Celles qui ont le plus voyagé entre les bureaux",
    source: "Nicolas",
    nominees: [
      {
        name: "Duo : Anaïs Mastio & Mélanie Coupron",
        reason:
          "En 2 mois, elles ont organisé 3 déménagements de bureau. La gestion de l'espace ne les effraie pas. La déconnexion et connexion de PC est un jeu pour elles.",
      },
      { name: "Margaux Beudet", reason: "Nominée pour ses voyages entre les bureaux" },
      {
        name: "Audrey Barna",
        reason:
          "Est passée de la marketplace BUT à un 1er bureau chez BUT et un autre bureau chez Conforama pour rechanger de bureau chez BUT et chez Conforama",
      },
      { name: "Claire Zegarra", reason: "Elle a acheté un camping-car" },
    ],
  },
  {
    id: "rocky",
    visual: "rocky",
    badgeIcon: "🥊",
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
    id: "very-bad-trip",
    visual: "badtrip",
    badgeIcon: "🚌",
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
];

const honorees = [
  {
    id: "audrey-barna",
    title: 'Oscar "L’Histoire sans fin"',
    subtitle: "La mobilité interne la plus longue de l'histoire de BUT",
    name: "Audrey Barna",
    badgeIcon: "⏳",
    visual: "timewarp",
    reason:
      "5 mois pour passer complètement du poste d'account manager marketplace à chef de projet retail media marketplace.",
  },
  {
    id: "margaux-beudet",
    title: 'Oscar "Million Dollar Baby"',
    subtitle: "Record historique de revenus retail media",
    name: "Margaux Beudet",
    badgeIcon: "💎",
    visual: "million",
    reason:
      "Record historique de revenus retail media pour BUT avec 1,5 million d'euros.",
  },
  {
    id: "virginie-nerriere",
    title: "Oscar de l'éternel sourire",
    subtitle: 'Prix "Singing in the rain"',
    name: "Nerrière Virginie",
    badgeIcon: "☀️",
    visual: "sunshine",
    reason:
      "On a changé tout autour d'elle : sa boss, son équipe, son bureau, ses partenaires, ses missions mais elle a gardé son côté solaire.",
  },
  {
    id: "perola-pessaro",
    title: "Prix Mission Impossible",
    subtitle: "Projet nouvelle campagne de pub",
    name: "Pessaro Perola",
    badgeIcon: "🎬",
    visual: "mission",
    reason:
      "Elle a sauté à deux pieds dans le projet nouvelle campagne de pub, embrassant de nouvelles missions et projets imprévus.",
  },
  {
    id: "valerie-rochereau",
    title: 'Prix "Terminator"',
    subtitle: "Celle qui apprend à dompter l'IA",
    name: "Valérie Rochereau",
    image: "assets/laureate-valerie.png",
    visual: "ai",
    reason:
      "En 3 mois, Valérie s'est approprié l'IA et multiplie la création d'outils et adopte une approche hyper novatrice et technique pour chaque enjeu.",
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

const state = {
  view: "home",
  profile: readJson(STORAGE_KEYS.profile),
  selectedAvatarId: "popcorn",
  selectedMoodId: "good-vibes",
  pseudoDraft: "",
  selectedNominee: null,
  brainstormSearch: "",
  brainstormMyTeam: null,
  selectedWallEmoji: "🎉",
  wallTextDraft: "",
  liveState: {
    activeCategoryId: "very-bad-trip",
    activeHonoreeId: "",
    revealedHonoreeIds: [],
    activeStepId: "welcome-breakfast",
    voteOpen: false,
  },
  presenceStats: null,
  voteStats: null,
  wallMessages: null,
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
  return state.voteStats?.participantVotes || {};
}

function getMessages() {
  return state.wallMessages || [];
}

function isVoteOpen() {
  return Boolean(state.liveState?.voteOpen) && voteRemainingMs() > 0;
}

function activeCategory() {
  const categoryId = state.liveState?.activeCategoryId;
  return oscarCategories.find((category) => category.id === categoryId) || oscarCategories[0];
}

function voteRemainingMs() {
  if (!state.liveState?.voteOpen) return 0;
  const closesAt = Date.parse(state.liveState.voteClosesAt || "");
  if (!Number.isFinite(closesAt)) return 1;
  return Math.max(0, closesAt - Date.now());
}

function formatCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function activeVoteTotal() {
  const category = activeCategory();
  return state.voteStats?.totals?.[category.id] || 0;
}

function activeHonoree() {
  const honoreeId = state.liveState?.activeHonoreeId;
  return honorees.find((honoree) => honoree.id === honoreeId) || null;
}

function revealedHonorees() {
  const revealedIds = state.liveState?.revealedHonoreeIds || [];
  return honorees.filter((honoree) => revealedIds.includes(honoree.id));
}

function shouldShowWinnerList() {
  return state.liveState?.activeHonoreeId === "all" || revealedHonorees().length >= honorees.length;
}

function jsString(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function selectWallEmoji(emoji) {
  const textarea = document.querySelector("[data-wall-message]");
  if (textarea) state.wallTextDraft = textarea.value;
  state.selectedWallEmoji = emoji;
  render();
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
  startWallSync();
  render();
}

function logoutParticipant() {
  if (state.presenceTimer) {
    window.clearInterval(state.presenceTimer);
    state.presenceTimer = null;
  }

  if (state.voteTimer) {
    window.clearInterval(state.voteTimer);
    state.voteTimer = null;
  }

  if (state.wallTimer) {
    window.clearInterval(state.wallTimer);
    state.wallTimer = null;
  }

  state.profile = {
    ...state.profile,
    isActive: false,
  };
  writeJson(STORAGE_KEYS.profile, state.profile);
  state.voteStats = null;
  state.selectedNominee = null;
  state.view = "home";
  state.pseudoDraft = "";
  notify("Tu es déconnecté de cet appareil.");
  render();
}

function reconnectParticipant() {
  state.profile = {
    ...state.profile,
    isActive: true,
  };
  writeJson(STORAGE_KEYS.profile, state.profile);
  notify("Profil reconnecté.");
  startPresenceSync();
  startVoteSync();
  startWallSync();
  render();
}

async function syncPresence() {
  if (!state.profile || state.profile.isActive === false) return;

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
  if (!state.profile || state.profile.isActive === false || state.presenceTimer) return;
  syncPresence();
  state.presenceTimer = window.setInterval(syncPresence, 5000);
}

async function syncVotes() {
  if (!state.profile || state.profile.isActive === false) return;

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
  if (!state.profile || state.profile.isActive === false || state.voteTimer) return;
  syncVotes();
  state.voteTimer = window.setInterval(syncVotes, 5000);
}

async function syncMessages() {
  if (!state.profile || state.profile.isActive === false) return;

  try {
    const response = await fetch("/api/messages");
    if (!response.ok) throw new Error("Messages unavailable");

    const data = await response.json();
    state.wallMessages = data.messages || [];
    if (state.view === "wall") render();
  } catch {
    state.wallMessages ||= [];
  }
}

function startWallSync() {
  if (!state.profile || state.profile.isActive === false || state.wallTimer) return;
  syncMessages();
  state.wallTimer = window.setInterval(syncMessages, 4000);
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
      activeHonoreeId: "",
      revealedHonoreeIds: [],
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

function startClockSync() {
  if (state.clockTimer) return;
  state.clockTimer = window.setInterval(() => {
    if (state.view === "vote" || isVoteOpen()) render();
  }, 1000);
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
    notify("Vote impossible : vérifie que le vote est bien ouvert.");
    syncVotes();
    syncLiveState();
    render();
  }
}

async function submitMessage(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const text = String(form.get("message") || state.wallTextDraft || "").trim();
  const emoji = String(state.selectedWallEmoji || form.get("emoji") || "").trim();
  if (!text && !emoji) return;

  try {
    const response = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        avatarId: state.profile.avatarId,
        emoji,
        participantId: state.profile.id,
        pseudo: state.profile.pseudo,
        text,
      }),
    });

    if (!response.ok) throw new Error("Message unavailable");

    const data = await response.json();
    state.wallMessages = data.messages || [];
    state.wallTextDraft = "";
    state.selectedWallEmoji = "🎉";
    notify("Message posté sur le mur.");
    render();
  } catch {
    notify("Impossible de poster pour le moment.");
  }
}

async function deleteMessage(messageId) {
  if (!state.profile) return;

  try {
    const params = new URLSearchParams({
      avatarId: state.profile.avatarId,
      id: messageId,
      participantId: state.profile.id,
      pseudo: state.profile.pseudo,
    });
    const response = await fetch(`/api/messages?${params.toString()}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Delete unavailable");

    const data = await response.json();
    state.wallMessages = data.messages || [];
    notify("Post supprimé.");
    render();
  } catch {
    notify("Suppression impossible.");
  }
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
  const isConnected = profile && profile.isActive !== false;
  const profileStatus = isConnected
    ? `
        <div class="participant-actions">
          <span class="pill">${avatarById(profile.avatarId).icon} ${profile.pseudo}</span>
          <button class="ghost logout-button" type="button" onclick="logoutParticipant()">Se déconnecter</button>
        </div>
      `
    : `<span class="pill">${profile ? "🔒 Hors ligne" : "🎬 Live"}</span>`;

  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">★</div>
        <div>
          <div class="brand-title">Séminaire été 2026 - BUT</div>
          <div class="brand-subtitle">Cérémonie live</div>
        </div>
      </div>
      <div class="topbar-actions">
        <a class="ghost admin-link" href="/admin">Admin</a>
        ${profileStatus}
      </div>
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

function renderProfileReconnect() {
  const profile = state.profile;
  const avatar = avatarById(profile.avatarId);
  const mood = moodById(profile.moodId);

  return `
    ${renderTopbar()}
    <section class="hero welcome-card">
      <div class="profile-line">
        <div class="avatar-badge">${avatar.icon}</div>
        <div>
          <p class="eyebrow">Profil verrouillé</p>
          <h1>${profile.pseudo}</h1>
          <div class="profile-pills">
            <span class="pill">🔒 Identité conservée</span>
            <span class="pill">${mood.icon} ${mood.label}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <div class="status-card">
        <div class="status-icon">🔌</div>
        <div>
          <h2>Tu es déconnecté</h2>
          <p class="muted">Reconnecte-toi avec le même profil pour reprendre la cérémonie.</p>
        </div>
      </div>
      <div class="demo-strip">
        <button class="primary" type="button" onclick="reconnectParticipant()">Me reconnecter</button>
      </div>
    </section>
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
              ? "L'onglet Les Oscars est ouvert maintenant."
              : "Garde cette page ouverte pendant le séminaire."
          }</p>
        </div>
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
  const remainingMs = voteRemainingMs();
  const voteTotal = activeVoteTotal();

  return `
    ${renderTopbar()}
    ${
      !isVoteOpen()
        ? `
          <section class="vote-closed">
            <div class="panel status-card">
              <div class="status-icon">🎬</div>
              <h2>Aucun vote ouvert</h2>
              <p class="empty-state">Les Oscars seront ouverts par l'admin au bon moment.</p>
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

          <section class="vote-countdown">
            <div>
              <p class="micro">Temps restant</p>
              <strong>${formatCountdown(remainingMs)}</strong>
            </div>
            <div>
              <p class="micro">Votes reçus</p>
              <strong>${voteTotal}</strong>
            </div>
          </section>

          ${
            alreadyVoted
              ? `
                <div class="panel status-card">
                  <div class="status-icon">✅</div>
                  <h2>Vote enregistré</h2>
                  <p class="muted">Ton choix reste secret jusqu'à la révélation. Merci, c'est dans l'urne.</p>
                </div>
              `
              : `
                <div class="nominee-list">
                  ${category.nominees
                    .map(
                      (nominee) => `
                        <button
                          class="nominee-card ${state.selectedNominee === nominee.name ? "is-selected" : ""}"
                          onclick="state.selectedNominee=${jsString(nominee.name).replace(/"/g, "&quot;")}; render();"
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
                  <button class="primary" ${state.selectedNominee && remainingMs > 0 ? "" : "disabled"} onclick="submitVote()">Valider mon vote</button>
                </div>
              `
          }
        `
    }
    ${renderBottomNav()}
  `;
}

function renderHonoreeCard(honoree, kicker = "Et le trophée revient à...") {
  return `
    <article class="trophy-card">
      <div class="trophy-portrait-wrap ${honoree.visual ? `trophy-visual-${honoree.visual}` : ""}">
        ${
          honoree.image
            ? `<img class="trophy-portrait" src="${honoree.image}" alt="Portrait festif de ${honoree.name}" />`
            : `<div class="trophy-portrait-placeholder">
                <span>${honoree.badgeIcon || "🏆"}</span>
                <small>${escapeHtml(honoree.name)}</small>
              </div>`
        }
        <div class="trophy-portrait-badge">🏆</div>
      </div>
      <div class="trophy-content">
        <p class="trophy-kicker">${kicker}</p>
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
  `;
}

function renderWinnerList() {
  const winners = revealedHonorees().length >= honorees.length ? revealedHonorees() : honorees;

  return `
    <section class="winner-list">
      ${winners
        .map(
          (honoree) => `
            <article class="winner-list-item">
              <div class="wall-post-emoji">${honoree.badgeIcon || "🏆"}</div>
              <div>
                <strong>${honoree.name}</strong>
                <p class="reason">${honoree.title}</p>
              </div>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderRevealStandby(message = "La régie prépare la prochaine révélation.") {
  return `
    <article class="panel trophy-standby">
      <div class="status-icon">🏆</div>
      <p class="eyebrow">Suspense</p>
      <h2>Prochaine récompense dans quelques instants</h2>
      <p class="reason">${message}</p>
    </article>
  `;
}

function renderOscarReveal() {
  const category = activeCategory();
  const results = state.voteStats?.results?.[category.id] || [];
  const total = state.voteStats?.totals?.[category.id] || 0;
  const voteResultOpen = Boolean(state.liveState?.voteResultOpen) && !isVoteOpen();
  const winner = results[0] || null;
  const runners = results.slice(1);

  return `
    ${renderTopbar()}
    <div class="trophy-list">
      ${
        !voteResultOpen
          ? renderRevealStandby("L'admin affichera les résultats au bon moment.")
          : !winner
          ? renderRevealStandby("Aucun vote enregistré pour cette catégorie.")
          : `
            <article class="trophy-card oscar-result-card">
              <div class="trophy-portrait-wrap trophy-visual-${category.visual || "fashion"}">
                <div class="trophy-portrait-placeholder">
                  <span>${category.badgeIcon || "🏆"}</span>
                </div>
                <div class="trophy-portrait-badge">🏆</div>
              </div>
              <div class="trophy-content">
                <p class="trophy-kicker">🎬 Et l'Oscar revient à…</p>
                <div class="reveal-name">${escapeHtml(winner.name)}</div>
                <div class="award-ribbon">${category.title}</div>
                <p class="trophy-subtitle">${category.subtitle}</p>
                <p class="oscar-vote-tally">${winner.count} vote${winner.count !== 1 ? "s" : ""} · ${total ? Math.round((winner.count / total) * 100) : 0}%</p>
                ${
                  runners.length
                    ? `<div class="oscar-runners">
                        ${runners
                          .map(
                            (r, i) => `
                              <div class="oscar-runner-row">
                                <span class="oscar-runner-rank">${i + 2}</span>
                                <span class="oscar-runner-name">${escapeHtml(r.name)}</span>
                                <span class="oscar-runner-pct">${total ? Math.round((r.count / total) * 100) : 0}%</span>
                              </div>
                            `,
                          )
                          .join("")}
                      </div>`
                    : ""
                }
                <div class="reaction-row" aria-label="Réactions">
                  <button class="reaction" onclick="pulse()">👏</button>
                  <button class="reaction" onclick="pulse()">🎉</button>
                  <button class="reaction" onclick="pulse()">🤩</button>
                </div>
              </div>
            </article>
          `
      }
    </div>
    ${renderBottomNav()}
  `;
}

function renderWall() {
  const messages = getMessages();

  return `
    ${renderTopbar()}
    <section class="section-title">
      <div>
        <p class="eyebrow">Expression libre</p>
        <h2>Mur</h2>
      </div>
      <span class="pill">💬 Live</span>
    </section>

    <form class="panel" onsubmit="submitMessage(event)">
      <div class="wall-emoji-picker" aria-label="Humeur du post">
        ${wallEmojis
          .map(
            (emoji) => `
              <button
                class="wall-emoji ${state.selectedWallEmoji === emoji ? "is-selected" : ""}"
                type="button"
                aria-label="Choisir ${emoji}"
                onclick="selectWallEmoji('${emoji}')"
              >${emoji}</button>
            `,
          )
          .join("")}
      </div>
      <textarea
        class="textarea"
        data-wall-message
        name="message"
        maxlength="180"
        placeholder="Ton message pour la salle, ou juste une humeur"
        oninput="state.wallTextDraft=this.value"
      >${escapeHtml(state.wallTextDraft)}</textarea>
      <div class="sticky-action">
        <button class="primary" type="submit">Poster sur le mur</button>
      </div>
    </form>

    <div class="message-list">
      ${
        messages.length
          ? messages
              .map(
                (message) => `
                  <article class="message-card">
                    <div class="wall-post-emoji">${message.emoji || avatarById(message.avatarId).icon}</div>
                    <div>
                      <div class="message-head">
                        <strong>${escapeHtml(message.pseudo)}</strong>
                        ${
                          message.participantId === state.profile.id
                            ? `<button class="message-delete" type="button" aria-label="Supprimer mon post" onclick="deleteMessage(${jsString(message.id).replace(/"/g, "&quot;")})">×</button>`
                            : ""
                        }
                      </div>
                      ${message.text ? `<p class="reason">${escapeHtml(message.text)}</p>` : `<p class="reason">Humeur partagée</p>`}
                    </div>
                  </article>
                `,
              )
              .join("")
          : `<article class="panel trophy-standby">
              <div class="status-icon">💬</div>
              <h2>Le mur attend son premier post</h2>
              <p class="reason">Un emoji, une humeur, un message : tout compte.</p>
            </article>`
      }
    </div>
    ${renderBottomNav()}
  `;
}

function renderTrophies() {
  const honoree = activeHonoree();
  const showWinnerList = shouldShowWinnerList();

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
      ${
        showWinnerList
          ? renderWinnerList()
          : honoree
          ? renderHonoreeCard(honoree)
          : renderRevealStandby()
      }
    </div>
    ${renderBottomNav()}
  `;
}

function poleColor(pole) {
  const map = {
    "Communication": "#ff4fc4",
    "E-commerce": "#21e6ff",
    "CRM - Trafic": "#ffd76a",
    "Expérience Client": "#45f2a2",
    "Trade Marketing & Retail media": "#ff315f",
    "Services financiers": "#a78bfa",
  };
  return map[pole] || "rgba(255,255,255,0.5)";
}

function renderBrainstorming() {
  const query = (state.brainstormSearch || "").toLowerCase().trim();
  const myTeamId = state.brainstormMyTeam;

  const matchesMember = (m) =>
    !query ||
    m.prenom.toLowerCase().includes(query) ||
    m.nom.toLowerCase().includes(query);

  const filteredTeams = brainstormingTeams
    .map((t) => ({ ...t, matchedMembers: t.members.filter(matchesMember) }))
    .filter((t) => !query || t.matchedMembers.length > 0);

  const myTeam = myTeamId ? brainstormingTeams.find((t) => t.id === myTeamId) : null;

  return `
    ${renderTopbar()}
    <section class="section-title">
      <div>
        <p class="eyebrow">Atelier</p>
        <h2>Brainstorming</h2>
      </div>
      ${myTeam ? `<span class="pill">Équipe ${myTeam.id}</span>` : ""}
    </section>

    ${myTeam ? `
      <div class="bs-my-team panel">
        <p class="eyebrow" style="margin:0 0 6px">Mon équipe</p>
        <div class="bs-team-header">
          <span class="bs-team-number">${myTeam.id}</span>
          <div>
            <strong>Équipe ${myTeam.id}</strong>
            ${myTeam.responsable ? `<p class="reason" style="margin:2px 0 0">Resp. ${escapeHtml(myTeam.responsable)}</p>` : ""}
          </div>
          <button class="ghost" style="width:auto;min-height:36px;padding:6px 10px;font-size:0.8rem" onclick="state.brainstormMyTeam=null;render()">Changer</button>
        </div>
        <div class="bs-member-list" style="margin-top:10px">
          ${myTeam.members.map((m) => `
            <div class="bs-member">
              <span class="bs-pole-dot" style="background:${poleColor(m.pole)}"></span>
              <span><strong>${escapeHtml(m.prenom)}</strong> ${escapeHtml(m.nom)}</span>
              <span class="bs-pole-label">${escapeHtml(m.pole)}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <p class="muted" style="text-align:center;margin:10px 0 16px;font-size:0.82rem">Toutes les équipes ci-dessous</p>
    ` : `
      <p class="reason" style="margin-bottom:12px">Cherche ton prénom ou nom pour trouver ton équipe, puis appuie sur "C'est mon équipe".</p>
    `}

    <a
      class="bs-download-btn"
      href="/assets/template-brainstorming.pptx"
      download="template-brainstorming.pptx"
    >
      <span>📥</span>
      <span>Télécharger le template PowerPoint</span>
    </a>

    <div class="bs-search-wrap">
      <input
        class="input bs-search"
        type="search"
        placeholder="Chercher un prénom ou un nom…"
        value="${escapeHtml(state.brainstormSearch || "")}"
        oninput="state.brainstormSearch=this.value; render(); this.focus();"
      />
    </div>

    <div class="bs-teams">
      ${filteredTeams.length === 0
        ? `<p class="empty-state">Aucun résultat pour "${escapeHtml(query)}"</p>`
        : filteredTeams.map((team) => {
            const isOpen = query ? true : (state[`bs_open_${team.id}`] || false);
            const isMyTeam = myTeamId === team.id;
            const membersToShow = query ? team.matchedMembers : team.members;
            return `
              <article class="bs-team-card ${isMyTeam ? "is-my-team" : ""}">
                <button
                  class="bs-team-toggle"
                  onclick="state['bs_open_${team.id}'] = ${!isOpen}; render();"
                >
                  <span class="bs-team-number">${team.id}</span>
                  <div class="bs-team-info">
                    <strong>Équipe ${team.id}</strong>
                    ${team.responsable ? `<span class="bs-resp">Resp. ${escapeHtml(team.responsable)}</span>` : `<span class="bs-resp muted">Responsable non défini</span>`}
                  </div>
                  <span class="bs-count">${team.members.length} membres</span>
                  <span class="bs-chevron">${isOpen ? "▲" : "▼"}</span>
                </button>
                ${isOpen ? `
                  <div class="bs-member-list">
                    ${membersToShow.map((m) => `
                      <div class="bs-member ${query && matchesMember(m) ? "is-match" : ""}">
                        <span class="bs-pole-dot" style="background:${poleColor(m.pole)}"></span>
                        <span><strong>${escapeHtml(m.prenom)}</strong> ${escapeHtml(m.nom)}</span>
                        <span class="bs-pole-label">${escapeHtml(m.pole)}</span>
                      </div>
                    `).join("")}
                    ${!isMyTeam ? `
                      <button class="primary" style="margin-top:12px" onclick="state.brainstormMyTeam=${team.id}; state.brainstormSearch=''; render();">
                        ✓ C'est mon équipe
                      </button>
                    ` : `<p class="bs-my-tag">✓ Mon équipe</p>`}
                  </div>
                ` : ""}
              </article>
            `;
          }).join("")}
    </div>
    ${renderBottomNav()}
  `;
}

function renderBottomNav() {
  const items = [
    { id: "home", label: "Accueil", icon: "⌂" },
    { id: "brainstorm", label: "Brainstorming", icon: "💡", gated: true },
    { id: "vote", label: "Oscars", icon: "★" },
    { id: "wall", label: "Mur", icon: "💬" },
    { id: "trophies", label: "Prix", icon: "🏆" },
  ];

  const visibleItems = items.filter(
    (item) => !item.gated || Boolean(state.liveState?.brainstormOpen)
  );
  return `
    <nav class="bottom-nav" aria-label="Navigation principale">
      ${visibleItems
        .map((item) => `
            <button
              class="nav-item ${state.view === item.id ? "is-active" : ""}"
              onclick="state.view='${item.id}'; render();"
            >
              <span class="nav-icon">${item.icon}</span>
              <span>${item.label}</span>
            </button>
          `)
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

  if (state.profile.isActive === false) {
    app.innerHTML = renderToast() + renderProfileReconnect();
    return;
  }

  const views = {
    home: renderHome,
    brainstorm: renderBrainstorming,
    vote: renderVote,
    reveal: renderOscarReveal,
    wall: renderWall,
    trophies: renderTrophies,
  };

  app.innerHTML = renderToast() + (views[state.view] || renderHome)();
}

render();
startPresenceSync();
startVoteSync();
startWallSync();
startLiveStateSync();
startClockSync();
