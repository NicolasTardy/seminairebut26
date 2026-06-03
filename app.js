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
    question: 1,
    angle: "Relation & humain",
    angleDetail: "Le rôle des vendeurs et du conseil",
    members: [
      { prenom: "Olivier", nom: "GRANDA", pole: "Communication" },
      { prenom: "Jessie", nom: "MISSILOU", pole: "E-commerce" },
      { prenom: "Mourad", nom: "Baïche", pole: "CRM - Trafic" },
      { prenom: "Laura", nom: "Venâncio", pole: "E-commerce" },
      { prenom: "Anais", nom: "ATIENZA", pole: "E-commerce" },
      { prenom: "Andrea", nom: "BECKER", pole: "E-commerce" },
      { prenom: "Jenna", nom: "BLANCON", pole: "E-commerce" },
      { prenom: "Marie", nom: "PALUS", pole: "E-commerce" },
      { prenom: "Astrid", nom: "MINIER", pole: "Expérience Client" },
      { prenom: "Caroline", nom: "DE OLIVEIRA", pole: "Expérience Client" },
      { prenom: "Yassine", nom: "Mesmoudi", pole: "CRM - Trafic" },      { prenom: "Nicolas", nom: "Tardy", pole: "Management" },

    ],
  },
  {
    id: 2,
    responsable: "Marjorie Courtet",
    question: 1,
    angle: "Data & personnalisation",
    angleDetail: "CRM, IA et programmes relationnels",
    members: [
      { prenom: "Julie", nom: "GOUVARD", pole: "Communication" },
      { prenom: "Virginie", nom: "NERRIERE", pole: "Communication" },
      { prenom: "Théo", nom: "Decherf", pole: "CRM - Trafic" },
      { prenom: "Emilie", nom: "COATELANT", pole: "CRM - Trafic" },
      { prenom: "Imen", nom: "Krichen", pole: "E-commerce" },
      { prenom: "Träcy", nom: "Ignace Mboe", pole: "E-commerce" },
      { prenom: "Pauline", nom: "PERIQUITO", pole: "E-commerce" },
      { prenom: "Amandine", nom: "Alaso", pole: "E-commerce" },
      { prenom: "Sandra", nom: "NOTELET", pole: "Expérience Client" },
      { prenom: "Kamila", nom: "LAMRI", pole: "Expérience Client" },
      { prenom: "Mathilde", nom: "GRASSIN", pole: "E-commerce" },      { prenom: "Marjorie", nom: "Courtet", pole: "Management" },

    ],
  },
  {
    id: 3,
    responsable: "Nathalie Jacquot",
    question: 1,
    angle: "Communauté & valeurs",
    angleDetail: "Engagement, RSE, raison d'être",
    members: [
      { prenom: "Victoria", nom: "Onephitak", pole: "Communication" },
      { prenom: "Mélanie", nom: "Sagon", pole: "Communication" },
      { prenom: "Ountourou Pilar", nom: "GOMIS", pole: "Communication" },
      { prenom: "Mayez", nom: "Hassan", pole: "CRM - Trafic" },
      { prenom: "Adib", nom: "Samari", pole: "CRM - Trafic" },
      { prenom: "Quentin", nom: "DROUHOT", pole: "E-commerce" },
      { prenom: "Florian", nom: "RENAULT", pole: "E-commerce" },
      { prenom: "Tania", nom: "Lefebvre", pole: "E-commerce" },
      { prenom: "Elisa", nom: "Lorthios", pole: "Expérience Client" },
      { prenom: "Millia", nom: "NETRO", pole: "Expérience Client" },      { prenom: "Nathalie", nom: "Jacquot", pole: "Management" },

    ],
  },
  {
    id: 4,
    responsable: "Laure Dutournier",
    question: 1,
    angle: "Services & fidélisation",
    angleDetail: "Programme de fidélité, avantages, abonnements",
    members: [
      { prenom: "Nathalie", nom: "MAITRE", pole: "Communication" },
      { prenom: "Sarah", nom: "Evenden", pole: "Communication" },
      { prenom: "Lauren", nom: "DESTOMBES", pole: "Communication" },
      { prenom: "Axelle", nom: "PIQUET / DUVIGNACQ", pole: "CRM - Trafic" },
      { prenom: "Claire", nom: "Zegarra", pole: "E-commerce" },
      { prenom: "Nordine", nom: "IRIOUT", pole: "E-commerce" },
      { prenom: "Nada", nom: "Ben Brahim", pole: "CRM - Trafic" },
      { prenom: "Sharia", nom: "PONN", pole: "E-commerce" },
      { prenom: "Iman", nom: "MAGHZAZ", pole: "Trade Marketing & Retail media" },
      { prenom: "Marie", nom: "ALBIEZ", pole: "Expérience Client" },
      { prenom: "Mélanie", nom: "Courpron", pole: "Services financiers" },      { prenom: "Laure", nom: "Dutournier", pole: "Management" },

    ],
  },
  {
    id: 5,
    responsable: "Valérie Krauss",
    question: 2,
    angle: "Marque & contenus",
    angleDetail: "Codes, ton, créateurs et formats",
    members: [
      { prenom: "Penda", nom: "CISSE", pole: "Communication" },
      { prenom: "Eva", nom: "HABERT", pole: "Communication" },
      { prenom: "Laetitia", nom: "Boutros", pole: "Communication" },
      { prenom: "Mehdi", nom: "KEBAILI", pole: "CRM - Trafic" },
      { prenom: "Dalel", nom: "Jlidi", pole: "E-commerce" },
      { prenom: "Jade", nom: "Oba Icket", pole: "E-commerce" },
      { prenom: "Wesley", nom: "Bijaoui", pole: "E-commerce" },
      { prenom: "Amel", nom: "Mbatsogo", pole: "E-commerce" },
      { prenom: "Christophe", nom: "Holvoet", pole: "Expérience Client" },
      { prenom: "Anaïs", nom: "Mastio", pole: "Services financiers" },
      { prenom: "Antoine", nom: "Jacquemond", pole: "E-commerce" },      { prenom: "Valérie", nom: "Krauss", pole: "Management" },

    ],
  },
  {
    id: 6,
    responsable: "Solenne Pasqualetti",
    question: 2,
    angle: "Expérience & magasin",
    angleDetail: "Phygital, immersif, social commerce",
    members: [
      { prenom: "Pérola", nom: "Passaro", pole: "Communication" },
      { prenom: "Kathleen", nom: "Derras", pole: "Communication" },
      { prenom: "Laetitia", nom: "OTTO", pole: "Communication" },
      { prenom: "Samuel", nom: "ZAABOULI-BOURGEOIS", pole: "CRM - Trafic" },
      { prenom: "Emilie", nom: "Pelé", pole: "CRM - Trafic" },
      { prenom: "Shahinez", nom: "BELGHIT", pole: "E-commerce" },
      { prenom: "Dylan", nom: "GANDON", pole: "E-commerce" },
      { prenom: "Aubane", nom: "Olivero de Rubiana", pole: "E-commerce" },
      { prenom: "Rayane", nom: "Adghar", pole: "Expérience Client" },
      { prenom: "Binta", nom: "HAMA", pole: "Expérience Client" },
      { prenom: "Valérie", nom: "ROCHEREAU", pole: "Services financiers" },      { prenom: "Solenne", nom: "Pasqualetti", pole: "Management" },

    ],
  },
  {
    id: 7,
    responsable: null,
    question: 2,
    angle: "Vie & usages",
    angleDetail: "Premier logement, accessibilité, durabilité",
    members: [
      { prenom: "Laure", nom: "LECONTE", pole: "Communication" },
      { prenom: "Frédéric", nom: "KELLENBERGER", pole: "Communication" },
      { prenom: "Adrien", nom: "Djeabal", pole: "E-commerce" },
      { prenom: "Coralie", nom: "Le Bozec", pole: "E-commerce" },
      { prenom: "Alexane", nom: "Weber", pole: "E-commerce" },
      { prenom: "Anaele", nom: "VITSE", pole: "CRM - Trafic" },
      { prenom: "Océane", nom: "HADJADJ", pole: "Expérience Client" },
      { prenom: "François", nom: "Bertonneau", pole: "Expérience Client" },
      { prenom: "Audrey", nom: "BARNA", pole: "Trade Marketing & Retail media" },
      { prenom: "Monica", nom: "RIBEIRO DA SILVA", pole: "E-commerce" },
      { prenom: "Célia", nom: "Lefebvre", pole: "Communication" },
    ],
  },
  {
    id: 8,
    responsable: "Marie Amsellem",
    question: 2,
    angle: "Engagement & impact",
    angleDetail: "Causes, inclusion, seconde main",
    members: [
      { prenom: "Alexandra", nom: "Gauthier", pole: "Communication" },
      { prenom: "Olivia", nom: "Cabaret", pole: "Communication" },
      { prenom: "Jérémy", nom: "TISSIER", pole: "E-commerce" },
      { prenom: "Azur", nom: "Chadaine", pole: "E-commerce" },
      { prenom: "Thomas", nom: "PHOMMARATH", pole: "E-commerce" },
      { prenom: "Morgane", nom: "Vidament", pole: "E-commerce" },
      { prenom: "Amélia", nom: "Machado", pole: "E-commerce" },
      { prenom: "Esther", nom: "Livio", pole: "Expérience Client" },
      { prenom: "Sophie", nom: "Bourgeois", pole: "Expérience Client" },
      { prenom: "Margaux", nom: "Beudet", pole: "Trade Marketing & Retail media" },      { prenom: "Marie", nom: "Amsellem", pole: "Management" },

    ],
  },
];

const oscarCategories = [
  {
    id: "ratatouille",
    visual: "ratatouille",
    badgeIcon: "🍳",
    title: 'Oscar "Ratatouille"',
    subtitle: "Les meilleurs cuisiniers qui en ont fait profiter leurs collègues !",
    source: "Marjorie",
    nominees: [
      { name: "Eve Lagant", reason: "Toujours un cookie pour ses collègues préférés." },
      { name: "Olivier Granda", reason: "Parlez lui cuisine et son sourire s'illumine." },
      {
        name: "Sandra Notelet (team Valérie)",
        reason: "La reine du banana bread, tiramisu spéculos et autres douceurs pour régaler ses collègues.",
      },
      { name: "Mélanie Sagon", reason: "Comme en agence elle ne loupe pas les chouquettes pour lancer les réunions." },
    ],
  },
  {
    id: "oss-117",
    visual: "oss117",
    badgeIcon: "🕵️",
    title: 'Oscar "OSS 117"',
    subtitle: "Celui ou celle qui fait le plus de blagues et jeux de mots en tous genres",
    source: "Nicolas",
    nominees: [
      { name: "Olivier Granda", reason: "Qui ne connaît pas les jeux de mots et devinettes de monsieur Granda ?!" },
      { name: "Anaïs Mastio", reason: "Qui n'a jamais eu une démonstration d'Anaïs d'une vidéo ou d'une blague relayée sur le web ?" },
      { name: "Amel Mbatsogo", reason: "Le parfait jargon de spécialiste ou les acronymes deviennent des jeux de mots." },
      {
        name: "François Bertonneau",
        reason: "Même pas un an chez nous et déjà sur le podium des bons mots et autres blagues pour amuser ses collègues.",
      },
    ],
  },
  {
    id: "voyage-chihiro",
    visual: "chihiro",
    badgeIcon: "🌊",
    title: 'Oscar "Le Voyage de Chihiro"',
    subtitle: "Celles qui ont le plus voyagé entre les bureaux",
    source: "Nicolas",
    nominees: [
      {
        name: "Duo : Anaïs Mastio & Mélanie Coupron",
        reason: "En 2 mois, elles ont organisé 3 déménagements de bureau ! La gestion de l'espace ne les effraie pas ! La déconnexion et connexion de PC est un jeu pour elles.",
      },
      { name: "Margaux Beudet", reason: "Nominée pour ses voyages entre les bureaux." },
      {
        name: "Audrey Barna",
        reason: "Est passée de la marketplace BUT à un 1er bureau chez BUT et un autre bureau chez Conforama pour rechanger de bureau chez BUT et chez Conforama.",
      },
      { name: "Claire Zegarra", reason: "Elle a acheté un camping-car." },
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
      { name: "Anaëlle", reason: "Elle court un marathon !" },
      { name: "Pérola & Laure", reason: "Le duo de BUT Gym." },
      { name: "Sophie & Eve", reason: "Le duo de la salle de sport à côté de BUT." },
      { name: "Anaïs & Adrien", reason: "Le duo qui va courir dehors." },
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
      { name: "Imen", reason: "Cergy : RER A x2 + bus 212." },
      { name: "François", reason: "Eaubonne : Train + RER B + RER A + bus 212." },
      { name: "Nathalie Maitre", reason: "Arpajon : Autoroute…" },
      { name: "Axelle", reason: "Massy : RER B + RER A + bus 212." },
    ],
  },
];

const honorees = [
  {
    id: "sophie-inception",
    title: 'Prix "Inception"',
    subtitle: "Pilotage du projet CASANE",
    name: "Sophie",
    badgeIcon: "🌀",
    visual: "inception",
    reason: "Pour avoir piloté CASANE dans toutes ses dimensions, coordonné de nombreux interlocuteurs et embarqué les métiers autour d'un projet complexe, jusqu'à faire émerger un nouveau parcours client et une nouvelle gamme de meubles configurables.",
  },
  {
    id: "rayane-starwars",
    title: 'Prix "La Guerre des Étoiles"',
    subtitle: "Avis clients & e-réputation",
    name: "Rayane",
    badgeIcon: "⭐",
    visual: "starwars",
    reason: "Pour avoir fait briller les avis clients, accéléré la progression de l'e-réputation et embarqué le réseau dans une dynamique positive autour des étoiles.",
  },
  {
    id: "equipe-rc",
    title: 'Prix "Le Téléphone Sonne Toujours 2 Fois"',
    subtitle: "Relation Client",
    name: "Équipe Relation Client",
    badgeIcon: "📞",
    visual: "phone",
    reason: "Pour avoir répondu présentes encore et encore, tenu la ligne du service client et gardé le cap pendant une pick season particulièrement exigeante et sans Resp RC.",
  },
  {
    id: "emilie-pele-hp",
    title: "Oscar Harry Potter — L'alternant sorcier devenu grand",
    subtitle: "Montée en compétence Responsys",
    name: "Emilie Pelé",
    badgeIcon: "⚡",
    visual: "hogwarts",
    reason: "Elle a su en quelques mois dompter Responsys.",
  },
  {
    id: "valerie-rochereau",
    title: 'Prix "Terminator"',
    subtitle: "Celle qui apprend à dompter l'IA",
    name: "Valérie Rochereau",
    image: "assets/laureate-valerie.png",
    visual: "ai",
    reason: "En 3 mois, Valérie s'est approprié l'IA et multiplie la création d'outils et adopte une approche hyper novatrice et technique pour chaque enjeu.",
  },
  {
    id: "team-marketplace",
    title: 'Oscar "The Social Network"',
    subtitle: "La team drivée par l'obsession de la croissance fulgurante",
    name: "Team Marketplace",
    badgeIcon: "🌐",
    visual: "network",
    reason: "Une équipe globale au service du business, dans un contexte e-commerce.",
  },
  {
    id: "team-pei",
    title: 'Oscar "Retour vers le Futur"',
    subtitle: "La Team focusée sur les tendances",
    name: "Team PEI",
    badgeIcon: "🚀",
    visual: "futur",
    reason: "Une nouvelle dynamique d'équipe axée sur les tendances, l'innovation.",
  },
  {
    id: "virginie-nerriere",
    title: "Oscar de l'éternel sourire",
    subtitle: 'Prix "Singing in the Rain"',
    name: "Nerrière Virginie",
    badgeIcon: "☀️",
    visual: "sunshine",
    reason: "On a changé tout autour d'elle : sa boss, son équipe, son bureau, ses partenaires, ses missions mais elle a gardé son côté solaire.",
  },
  {
    id: "perola-pessaro",
    title: "Prix Mission Impossible",
    subtitle: "Projet nouvelle campagne de pub",
    name: "Pessaro Perola",
    badgeIcon: "🎬",
    visual: "mission",
    reason: "Elle a sauté à deux pieds dans le projet nouvelle campagne de pub, embrassant de nouvelles missions et projets imprévus.",
  },
  {
    id: "anais-melanie-speed",
    title: 'Prix "Speed"',
    subtitle: "Plus rapides que Keanu Reeves dans Speed",
    name: "Anaïs & Mélanie",
    badgeIcon: "💨",
    visual: "speed",
    reason: "Elles lancent les projets plus vite que Keanu Reeves dans Speed 2 — personne ne les arrête.",
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
  pradaStats: null,
  lastAlertSentAt: localStorage.getItem("nuit_cesars_last_alert") || "",
  activeAlert: null,
  pradaReineSearch: "",
  pradaRoiSearch: "",
  pradaReineSelected: null,
  pradaRoiSelected: null,
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

// Fetch avec timeout pour éviter l'accumulation de requêtes pendantes
function fetchWithTimeout(url, options, timeoutMs) {
  const ms = timeoutMs || 8000;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return fetch(url, Object.assign({}, options, { signal: controller.signal }))
    .finally(() => clearTimeout(timer));
}

async function syncPresence() {
  if (!state.profile || state.profile.isActive === false) return;

  try {
    const response = await fetchWithTimeout("/api/presence", {
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
  state.presenceTimer = window.setInterval(syncPresence, 15000);
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
    const response = await fetchWithTimeout("/api/messages");
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
    const response = await fetchWithTimeout("/api/live-state");
    if (!response.ok) throw new Error("Live state unavailable");

    const nextLiveState = await response.json();
    const wasVoteOpen = Boolean(state.liveState?.voteOpen);
    const previousCategory = state.liveState?.activeCategoryId;
    const previousRevealId = state.liveState?.activeRevealCategoryId || "";
    const previousAlertAt = state.liveState?.alertSentAt || "";
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

    // Détecter une nouvelle alerte admin
    const newAlertAt = state.liveState?.alertSentAt || "";
    if (newAlertAt && newAlertAt !== previousAlertAt && newAlertAt !== state.lastAlertSentAt) {
      state.lastAlertSentAt = newAlertAt;
      localStorage.setItem("nuit_cesars_last_alert", newAlertAt);
      state.activeAlert = state.liveState.alertMessage || "";
      playDing();
    }

    // Quand le reveal change, forcer un refresh des votes immédiatement
    const newRevealId = state.liveState?.activeRevealCategoryId || "";
    if (newRevealId && newRevealId !== previousRevealId) {
      await syncVotes();
      if (state.view === "prada") syncPradaStats().then(render);
      render();
      return;
    }

    // Sync prada results when vote closes automatically
    if (state.view === "prada") syncPradaStats().then(render);

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
    const response = await fetchWithTimeout("/api/votes", {
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
    const response = await fetchWithTimeout("/api/messages", {
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
  // Si l'admin a révélé un résultat, afficher le vainqueur dans cet onglet
  const revealId = state.liveState?.activeRevealCategoryId || "";
  if (revealId) {
    const revCat = oscarCategories.find((c) => c.id === revealId) || activeCategory();
    const results = state.voteStats?.results?.[revCat.id] || [];
    const total = state.voteStats?.totals?.[revCat.id] || 0;
    const winner = results[0] || null;
    const runners = results.slice(1);
    if (!winner && !state.voteStats) {
      syncVotes().then(render);
    }
    return `
      ${renderTopbar()}
      <div class="trophy-list">
        ${!winner
          ? renderRevealStandby(!state.voteStats ? "Chargement des résultats…" : "Aucun vote enregistré pour cette catégorie.")
          : `
            <article class="trophy-card oscar-result-card">
              <div class="trophy-portrait-wrap trophy-visual-${revCat.visual || "fashion"}">
                <div class="trophy-portrait-placeholder"><span>${revCat.badgeIcon || "🏆"}</span></div>
                <div class="trophy-portrait-badge">🏆</div>
              </div>
              <div class="trophy-content">
                <p class="trophy-kicker">🎬 Et l'Oscar revient à…</p>
                <div class="reveal-name">${escapeHtml(winner.name)}</div>
                <div class="award-ribbon">${revCat.title}</div>
                <p class="trophy-subtitle">${revCat.subtitle}</p>
                <p class="oscar-vote-tally">${winner.count} vote${winner.count !== 1 ? "s" : ""} · ${total ? Math.round((winner.count / total) * 100) : 0}%</p>
                ${runners.length ? `<div class="oscar-runners">${runners.map((r, i) => `
                  <div class="oscar-runner-row">
                    <span class="oscar-runner-rank">${i + 2}</span>
                    <span class="oscar-runner-name">${escapeHtml(r.name)}</span>
                    <span class="oscar-runner-pct">${total ? Math.round((r.count / total) * 100) : 0}%</span>
                  </div>`).join("")}</div>` : ""}
                <div class="reaction-row">
                  <button class="reaction" onclick="pulse()">👏</button>
                  <button class="reaction" onclick="pulse()">🎉</button>
                  <button class="reaction" onclick="pulse()">🤩</button>
                </div>
              </div>
            </article>
          `}
      </div>
      ${renderBottomNav()}
    `;
  }

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
  const revealId = state.liveState?.activeRevealCategoryId || "";
  const category = revealId
    ? (oscarCategories.find((c) => c.id === revealId) || activeCategory())
    : activeCategory();
  const results = state.voteStats?.results?.[category.id] || [];
  const total = state.voteStats?.totals?.[category.id] || 0;
  const voteResultOpen = Boolean(revealId);
  const winner = results[0] || null;
  const runners = results.slice(1);

  return `
    ${renderTopbar()}
    <div class="trophy-list">
      ${
        !voteResultOpen
          ? renderRevealStandby("L'admin affichera les résultats au bon moment.")
          : !winner && !state.voteStats
          ? (syncVotes().then(render), renderRevealStandby("Chargement des résultats…"))
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

function playDing() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;
    [880, 1100, 1320].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, now + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.4, now + i * 0.12 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.8);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.85);
    });
  } catch {}
}

function dismissAlert() {
  state.activeAlert = null;
  render();
}

function normalize(str) {
  return String(str).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const allParticipants = brainstormingTeams
  .flatMap((t) => t.members.map((m) => ({ fullName: `${m.prenom} ${m.nom}`, prenom: m.prenom, nom: m.nom, team: t.id })))
  .sort((a, b) => a.nom.localeCompare(b.nom));

async function syncPradaStats() {
  try {
    const params = new URLSearchParams({ participantId: state.profile?.id || "" });
    const res = await fetch(`/api/prada-votes?${params}`);
    if (res.ok) state.pradaStats = await res.json();
  } catch {}
}

async function submitPradaVote(category) {
  const name = category === "reine" ? state.pradaReineSelected : state.pradaRoiSelected;
  if (!name || !state.profile) return;
  try {
    const res = await fetchWithTimeout("/api/prada-votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId: state.profile.id, pseudo: state.profile.pseudo, avatarId: state.profile.avatarId, category, name }),
    });
    if (res.ok) {
      state.pradaStats = await res.json();
      if (category === "reine") { state.pradaReineSearch = ""; state.pradaReineSelected = null; }
      else { state.pradaRoiSearch = ""; state.pradaRoiSelected = null; }
      notify("Vote enregistré 👗");
      render();
    } else if (res.status === 409) {
      notify("Le vote Prada est fermé.");
    }
  } catch {
    notify("Erreur réseau, réessaie.");
  }
}

const bsPhases = [
  {
    num: 1, label: "Diverger", time: "20 min", horaire: "14h15 → 14h35",
    icon: "🌪️", color: "#ff4fc4",
    desc: "Chacun écrit 1 idée par post-it en silence. Quantité avant qualité.",
    outil: "Crazy 8 · post-its individuels",
  },
  {
    num: 2, label: "Cartographier", time: "15 min", horaire: "14h35 → 14h50",
    icon: "🗺️", color: "#ffd76a",
    desc: "Mise en commun à voix haute. Regrouper les idées par thèmes (clusters).",
    outil: "Affinity mapping au mur",
  },
  {
    num: 3, label: "Converger", time: "20 min", horaire: "14h50 → 15h10",
    icon: "🎯", color: "#45f2a2",
    desc: "Vote à gommettes (3 par personne). Top 3 idées retenues, enrichies en groupe.",
    outil: "Dot voting + débat éclair",
  },
  {
    num: 4, label: "Formaliser", time: "10 min", horaire: "15h10 → 15h20",
    icon: "📋", color: "#21e6ff",
    desc: "Remplir le template livrable et préparer le pitch de 5 minutes.",
    outil: "Template téléchargeable",
  },
];

const bsRules = [
  { num: 1, icon: "💥", rule: "Quantité avant qualité", detail: "Vise l'abondance, le tri viendra plus tard." },
  { num: 2, icon: "🤐", rule: "Pas de jugement", detail: "On ne critique aucune idée pendant la divergence." },
  { num: 3, icon: "✨", rule: "Rebondir", detail: "Le « oui, et… » plutôt que le « oui, mais… »." },
  { num: 4, icon: "🚀", rule: "Oser l'inattendu", detail: "Les idées folles ouvrent des chemins inexplorés." },
  { num: 5, icon: "📝", rule: "1 idée = 1 post-it", detail: "Pour pouvoir trier, voter et combiner facilement." },
  { num: 6, icon: "📵", rule: "Rester concentré", detail: "Téléphone en silence, attention au groupe." },
];

const bsRoles = [
  { role: "Animateur·trice", desc: "Garant de la méthode", icon: "🎙️" },
  { role: "Scribe", desc: "Capte et restitue", icon: "✏️" },
  { role: "Gardien du temps", desc: "Tient les phases", icon: "⏱️" },
  { role: "Porte-parole", desc: "Pitche en plénière", icon: "📣" },
];

const bsPitch = [
  { dur: "30 s", label: "Le contexte", desc: "Question traitée et angle d'attaque du groupe." },
  { dur: "1 min", label: "L'insight clé", desc: "Le constat le plus marquant qui a guidé la réflexion." },
  { dur: "2 min", label: "Les 3 idées-forces", desc: "Présentation des idées priorisées et de leur logique." },
  { dur: "1 min", label: "Le plan d'action", desc: "Premiers leviers : quoi, par qui, quand." },
  { dur: "30 s", label: "La punchline", desc: "Une phrase choc qui résume la proposition." },
];

function pradaCountdown() {
  const closesAt = Date.parse(state.liveState?.pradaClosesAt || "");
  if (!closesAt) return 0;
  return Math.max(0, closesAt - Date.now());
}

function isPradaOpen() {
  return Boolean(state.liveState?.pradaOpen) && pradaCountdown() > 0;
}

function renderPradaSearchBox(category, searchKey, selectedKey, label, icon) {
  const query = normalize(state[searchKey] || "").trim();
  const selected = state[selectedKey];
  const alreadyVoted = state.pradaStats?.myVotes?.[category];
  const results = query.length >= 2
    ? allParticipants.filter((p) => normalize(p.fullName).includes(normalize(query)) || normalize(p.prenom).includes(normalize(query)) || normalize(p.nom).includes(normalize(query))).slice(0, 8)
    : [];

  return `
    <div class="prada-vote-block ${alreadyVoted ? "is-voted" : ""}">
      <div class="prada-cat-header">
        <span class="prada-cat-icon">${icon}</span>
        <div>
          <strong>${label}</strong>
          ${alreadyVoted ? `<p class="prada-voted-name">✓ ${escapeHtml(alreadyVoted)}</p>` : ""}
        </div>
      </div>
      ${alreadyVoted ? "" : `
        <input
          class="input prada-search"
          type="search"
          data-prada-cat="${category}"
          placeholder="Cherche un prénom ou un nom…"
          value="${escapeHtml(state[searchKey] || "")}"
          oninput="state['${searchKey}']=this.value; state['${selectedKey}']=null; render(); const f=document.querySelector('[data-prada-cat=${category}]'); if(f){f.focus();f.setSelectionRange(f.value.length,f.value.length);}"
        />
        ${results.length ? `
          <div class="prada-results">
            ${results.map((p) => `
              <button
                class="prada-result ${selected === p.fullName ? "is-selected" : ""}"
                onclick="state['${selectedKey}']=${jsString(p.fullName).replace(/"/g, "&quot;")}; state['${searchKey}']=${jsString(p.fullName).replace(/"/g, "&quot;")}; render();"
              >
                <strong>${escapeHtml(p.prenom)}</strong> ${escapeHtml(p.nom)}
                <span class="prada-team-badge">Éq. ${p.team}</span>
              </button>
            `).join("")}
          </div>
        ` : query.length >= 2 ? `<p class="empty-state">Aucun résultat</p>` : ""}
        ${selected ? `
          <button class="primary" style="margin-top:10px" onclick="submitPradaVote('${category}')">
            Voter pour ${escapeHtml(selected)} ${icon}
          </button>
        ` : ""}
      `}
    </div>
  `;
}

function renderPrada() {
  const isOpen = isPradaOpen();
  const stats = state.pradaStats;
  const remainingMs = pradaCountdown();
  const isClosed = !isOpen && Boolean(state.liveState?.pradaClosesAt) && !Boolean(state.liveState?.pradaOpen);

  if (!state.pradaStats) syncPradaStats();

  return `
    ${renderTopbar()}
    <section class="section-title">
      <div>
        <p class="eyebrow">Soirée · Vote</p>
        <h2>Le diable s'habille en Prada</h2>
      </div>
      ${isOpen ? `<span class="pill prada-pill">${formatCountdown(remainingMs)}</span>` : ""}
    </section>

    ${isOpen ? `
      <p class="reason" style="margin-bottom:16px">Qui est le <strong>roi</strong> et la <strong>reine</strong> de la soirée ? Vote pour tes favoris — 1 vote par catégorie.</p>
      ${renderPradaSearchBox("reine", "pradaReineSearch", "pradaReineSelected", "La Reine de la soirée", "👸")}
      ${renderPradaSearchBox("roi", "pradaRoiSearch", "pradaRoiSelected", "Le Roi de la soirée", "🤴")}
    ` : isClosed && stats ? `
      <div class="prada-results-wrap">
        <div class="prada-podium-section">
          <p class="eyebrow">👸 La Reine de la soirée</p>
          ${stats.reine?.length ? stats.reine.slice(0, 3).map((r, i) => `
            <div class="prada-podium-row ${i === 0 ? "is-winner" : ""}">
              <span class="prada-rank">${["👑", "🥈", "🥉"][i]}</span>
              <strong>${escapeHtml(r.name)}</strong>
              <span class="prada-pct">${stats.total.reine ? Math.round((r.count / stats.total.reine) * 100) : 0}% · ${r.count} vote${r.count > 1 ? "s" : ""}</span>
            </div>
          `).join("") : `<p class="empty-state">Aucun vote</p>`}
        </div>
        <div class="prada-podium-section">
          <p class="eyebrow">🤴 Le Roi de la soirée</p>
          ${stats.roi?.length ? stats.roi.slice(0, 3).map((r, i) => `
            <div class="prada-podium-row ${i === 0 ? "is-winner" : ""}">
              <span class="prada-rank">${["👑", "🥈", "🥉"][i]}</span>
              <strong>${escapeHtml(r.name)}</strong>
              <span class="prada-pct">${stats.total.roi ? Math.round((r.count / stats.total.roi) * 100) : 0}% · ${r.count} vote${r.count > 1 ? "s" : ""}</span>
            </div>
          `).join("") : `<p class="empty-state">Aucun vote</p>`}
        </div>
        <p class="muted" style="text-align:center;font-size:0.8rem;margin-top:8px">${stats.total.reine} votes reine · ${stats.total.roi} votes roi</p>
      </div>
    ` : `
      <article class="panel trophy-standby">
        <div class="status-icon">👗</div>
        <h2>Le vote n'est pas encore ouvert</h2>
        <p class="reason">L'admin ouvrira le vote au bon moment pendant la soirée.</p>
      </article>
    `}

    ${renderBottomNav()}
  `;
}

function renderBrainstorming() {
  const query = normalize(state.brainstormSearch || "").trim();
  const myTeamId = state.brainstormMyTeam;

  const matchesMember = (m) =>
    !query ||
    normalize(m.prenom).includes(query) ||
    normalize(m.nom).includes(query);

  const filteredTeams = brainstormingTeams
    .map((t) => ({ ...t, matchedMembers: t.members.filter(matchesMember) }))
    .filter((t) => !query || t.matchedMembers.length > 0);

  const myTeam = myTeamId ? brainstormingTeams.find((t) => t.id === myTeamId) : null;

  const guideSection = state.bs_guide || "phases";

  return `
    ${renderTopbar()}

    ${myTeam ? `
      <div class="bs-mission-card">
        <div class="bs-mission-top">
          <span class="bs-team-number" style="width:48px;height:48px;font-size:1.4rem">${myTeam.id}</span>
          <div>
            <p class="eyebrow" style="margin:0">Équipe ${myTeam.id} · ${myTeam.question === 1 ? "Question Fidélité" : "Question Génération Z"}</p>
            <strong style="font-size:1.1rem">${escapeHtml(myTeam.angle)}</strong>
            <p class="reason" style="margin:2px 0 0">${escapeHtml(myTeam.angleDetail)}</p>
          </div>
        </div>
        <div class="bs-q-block ${myTeam.question === 1 ? "q1" : "q2"}">
          ${myTeam.question === 1
            ? `<p class="bs-q-label">Q1</p><p class="bs-q-text">Quelle sera la <strong>fidélité de demain</strong> dans le retail spécialisé, et particulièrement chez BUT France ?</p>`
            : `<p class="bs-q-label">Q2</p><p class="bs-q-text">Comment réussir à <strong>parler à la Génération Z</strong> quand on s'appelle BUT ?</p>`
          }
        </div>
        <button class="bs-change-team" onclick="state.brainstormMyTeam=null;render()">Changer d'équipe</button>
      </div>
    ` : `
      <div class="bs-welcome">
        <p class="eyebrow">13h30 · Séminaire BUT France</p>
        <h2>Atelier Brainstorming</h2>
        <p class="reason">80 participants · 8 équipes · 3h15 pour innover ensemble.</p>
      </div>
    `}

    <!-- GUIDE TABS -->
    <div class="bs-guide-tabs">
      <button class="bs-gtab ${guideSection === "phases" ? "is-active" : ""}" onclick="state.bs_guide='phases';render()">🌪️ Les 4 phases</button>
      <button class="bs-gtab ${guideSection === "rules" ? "is-active" : ""}" onclick="state.bs_guide='rules';render()">📌 Règles d'or</button>
      <button class="bs-gtab ${guideSection === "roles" ? "is-active" : ""}" onclick="state.bs_guide='roles';render()">🎭 Rôles</button>
      <button class="bs-gtab ${guideSection === "pitch" ? "is-active" : ""}" onclick="state.bs_guide='pitch';render()">📣 Pitch 5 min</button>
    </div>

    ${guideSection === "phases" ? `
      <div class="bs-phases">
        ${bsPhases.map((p) => `
          <div class="bs-phase-card">
            <div class="bs-phase-head" style="border-color:${p.color}">
              <span class="bs-phase-icon">${p.icon}</span>
              <div>
                <div class="bs-phase-label">Phase ${p.num} · <strong>${p.label}</strong></div>
                <div class="bs-phase-timing">${p.horaire} · <strong>${p.time}</strong></div>
              </div>
            </div>
            <p class="bs-phase-desc">${p.desc}</p>
            <span class="bs-phase-outil">🛠️ ${p.outil}</span>
          </div>
        `).join("")}
      </div>
    ` : guideSection === "rules" ? `
      <div class="bs-rules">
        ${bsRules.map((r) => `
          <div class="bs-rule">
            <span class="bs-rule-icon">${r.icon}</span>
            <div>
              <strong>${r.num}. ${r.rule}</strong>
              <p class="reason">${r.detail}</p>
            </div>
          </div>
        `).join("")}
      </div>
    ` : guideSection === "roles" ? `
      <div class="bs-roles">
        ${bsRoles.map((r) => `
          <div class="bs-role-card">
            <span class="bs-role-icon">${r.icon}</span>
            <div>
              <strong>${r.role}</strong>
              <p class="reason">${r.desc}</p>
            </div>
          </div>
        `).join("")}
        <p class="muted" style="font-size:0.8rem;text-align:center;margin-top:4px">Désignez ces 4 rôles dès le début de l'atelier.</p>
      </div>
    ` : `
      <div class="bs-pitch">
        <p class="reason" style="margin-bottom:10px">Chaque groupe dispose de <strong>5 minutes</strong> pour pitcher ses conclusions :</p>
        ${bsPitch.map((s) => `
          <div class="bs-pitch-step">
            <span class="bs-pitch-dur">${s.dur}</span>
            <div>
              <strong>${s.label}</strong>
              <p class="reason">${s.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>
    `}

    <!-- DOWNLOAD -->
    <a class="bs-download-btn" href="/assets/template-brainstorming.pptx" download="template-brainstorming.pptx">
      <span>📥</span><span>Télécharger le template PowerPoint</span>
    </a>

    <!-- TEAMS -->
    <div class="bs-section-title">
      <p class="eyebrow">Les équipes</p>
    </div>
    <div class="bs-search-wrap">
      <input class="input bs-search" id="bs-search-input" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
        placeholder="Chercher un prénom ou un nom…"
        value="${escapeHtml(state.brainstormSearch || "")}"
        oninput="(function(el){var v=el.value,p=el.selectionStart;state.brainstormSearch=v;render();var f=document.getElementById('bs-search-input');if(f){f.focus();try{f.setSelectionRange(p,p);}catch(e){}}})(this)" />
      ${state.brainstormSearch ? `<button class="bs-search-clear" onclick="state.brainstormSearch='';render();">×</button>` : ""}
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
                <button class="bs-team-toggle" onclick="state['bs_open_${team.id}'] = ${!isOpen}; render();">
                  <span class="bs-team-number">${team.id}</span>
                  <div class="bs-team-info">
                    <strong>Équipe ${team.id}${team.responsable ? ` · ${escapeHtml(team.responsable)}` : ""}</strong>
                    <span class="bs-resp">${escapeHtml(team.angle)}</span>
                  </div>
                  <span class="bs-count">${team.members.length}</span>
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
                    ${!isMyTeam
                      ? `<button class="primary" style="margin-top:12px" onclick="state.brainstormMyTeam=${team.id}; state.brainstormSearch=''; render();">✓ C'est mon équipe</button>`
                      : `<p class="bs-my-tag">✓ Mon équipe</p>`}
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
    { id: "brainstorm", label: "Brainstorming", icon: "💡", gate: "brainstormOpen" },
    { id: "vote", label: "Oscars", icon: "★" },
    { id: "prada", label: "Prada", icon: "👗", gate: "pradaOpen", alwaysWhenActive: true },
    { id: "wall", label: "Mur", icon: "💬" },
    { id: "trophies", label: "Prix", icon: "🏆" },
  ];

  const visibleItems = items.filter((item) => {
    if (!item.gate) return true;
    const val = state.liveState?.[item.gate];
    const flagOn = Boolean(val);
    if (item.alwaysWhenActive) return flagOn || (state.pradaStats && (state.pradaStats.total?.reine > 0 || state.pradaStats.total?.roi > 0));
    return flagOn;
  });
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
  const alert = state.activeAlert
    ? `
      <div class="alert-overlay" onclick="dismissAlert()">
        <div class="alert-popup" onclick="event.stopPropagation()">
          <div class="alert-icon">🔔</div>
          <p class="alert-msg">${escapeHtml(state.activeAlert)}</p>
          <button class="primary" style="margin-top:14px" onclick="dismissAlert()">OK</button>
        </div>
      </div>
    ` : "";

  const toast = state.toast
    ? `<div class="toast" role="status"><span class="mini-avatar">🔔</span><strong>${state.toast}</strong></div>`
    : "";

  return alert + toast;
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
    prada: renderPrada,
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
