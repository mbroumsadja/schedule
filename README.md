### Schedule : Votre compagnon étudiant

#### Présentation
**Schedule** est une application web conçue pour simplifier la vie des étudiants en leur offrant un accès rapide et organisé à leurs emplois du temps et informations académiques. Voici ce que propose l'application :

- **Emplois du temps hebdomadaires** : Affichage des cours par filière et niveau.
- **Matières enseignées** : Liste des matières spécifiques à chaque filière.
- **Enseignants** : Noms des professeurs et leurs matières respectives.
- **Annonces** : Messages des délégués pour des alertes ou informations importantes.
- **Résultats** : Consultation des notes d'examens, TP, TD, CC, TPE, SN.

#### Architecture décentralisée
L'application est structurée par filière et niveau, avec une gestion confiée aux délégués via **Schedule Admin**, une application d'administration permettant :
- Créer, modifier ou supprimer des séances.
- Rédiger et envoyer des annonces ou alertes aux étudiants.
- Publier les résultats des évaluations.

#### Structure de l'application
Schedule est composé de plusieurs pages intuitives :
1. **Page de connexion (Login)** : Interface simple avec saisie du matricule.
2. **Page d'inscription (Signup)** : Formulaire pour créer un compte étudiant (matricule, nom, prénom, numéro, filière, email).
3. **Page des cours** : Emploi du temps dynamique avec navigation par date, recherche de cours/profs, et actualisation par "pull-to-refresh".
5. **Page des messages** : (À venir dans une version future).
6. **Page des notes** : (À venir dans une version future).
7. **Page de profil** : Affichage des infos utilisateur, changement de photo et thème.

#### Pages implémentées
1. **Login** :
   - Formulaire POST vers `https://schedule-f4cv.onrender.com/login`.
   - Messages : "Bienvenue", "Mauvais matricule", ou redirection vers Signup.
2. **Signup** :
   - Formulaire POST vers `https://schedule-f4cv.onrender.com/sign_up`.
   - Validation avec messages comme "Inscription réussie" ou "Matricule déjà utilisé".
3. **Cours** :
   - Affichage dynamique avec code couleur par type de cours (ex. : Analyse, Info).
   - Navigation par semaine et recherche intégrée.
4. **Enseignants et matières** :
   - Données extraites des séances via l’API.

#### Design et fonctionnalités
- **Thème unifié** : Bleu primaire (#2196F3), blanc cassé, et ombres subtiles pour une interface moderne.
- **HTML/CSS/JS** : Code responsive avec des animations (ex. : pull-to-refresh).
- **API** : Requêtes vers `` pour login, signup, et données des séances.


#### À venir
- Pages "Messages" et "Notes".
- Améliorations de l’interface profil (photo, thème).
- Version complète de Schedule Admin pour les délégués.

#### Pourquoi Schedule ?
Schedule est pensé pour les étudiants et par les étudiants. Il centralise toutes les informations essentielles dans une interface claire et accessible, tout en déléguant la gestion aux représentants de classe.

#### Contact
Pour plus d’infos ou pour contribuer, contactez-nous sur [GitHub](lien_vers_depot) ou WhatsApp (votre numéro).

1. **Liens concrets** :
   - URL du dépôt GitHub https://github.com/mbroumsadja/schedule`.
   - constact :email : shedule.com@gmail.com wathsapp: 698044764. 
2. **Captures d’écran** :
   - Ajoutez des images des pages (Login, Cours) pour un aperçu visuel. Exemple Markdown : `![Page Login](lien_vers_image.png)`.
3. **Technologies utilisées** :
   -  Node.js, HTML/CSS/JS, API REST.
4. **Statut du projet** :
   -c’est une version alpha.
5. **Contributeurs** :
   - MOUNKO DIMMY.
   - ABDOU MAMADOU.
   - ALIM PRO.
   - RODRIQUE.
   - ABDOUM.
   - MBROUMSADJA EMMANUEL
   - 
#### Technologies
- Frontend : HTML, CSS, JavaScript
- Backend : Node.js (API REST)
- Design : Responsive avec FontAwesome
