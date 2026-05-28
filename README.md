# Séminaire été 2026 - BUT

Prototype mobile-first pour une webapp d'animation de séminaire :

- création d'un profil participant sans email ni mot de passe ;
- choix d'un avatar parmi plus de 20 options ;
- profil verrouillé après création ;
- accueil participant avec attente de la prochaine animation ;
- vote ouvert uniquement sur action admin, ici simulée par un bouton démo ;
- votes limités aux listes de nominés Oscars ;
- quiz live, mur libre et remise des prix déjà décidés.

## Ouvrir le prototype

Ouvrir `index.html` dans un navigateur.

Le bouton `Démo admin : ouvrir le vote` simule l'action future du cockpit admin.

## Déploiement prévu

Sous-domaine prévu : `seminaire2026`

URL finale attendue : `https://seminaire2026.triangleoffensif.fr`

## Mode serveur

L'app peut être servie en statique, mais le compteur réel de personnes connectées nécessite le serveur Node :

```bash
npm start
```

Le serveur expose :

- `/` : l'application mobile ;
- `/admin` : régie admin du séminaire ;
- `/api/presence` : heartbeat et statistiques temps réel des participants connectés.
- `/api/votes` : enregistrement réel des votes et résultats agrégés par catégorie.
- `/api/live-state` : état live piloté par l'admin.

Code admin par défaut en développement : `but2026`

En production, définir un code avec la variable d'environnement :

```bash
ADMIN_CODE=ton-code-secret
```
