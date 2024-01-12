---
marp: true
---

<style>
   h1 {
    color: #000000;
    margin-bottom: 10px;
 }

 section {
    display: flex;
    flex-direction: column;
 }
</style>

<style scoped>
 section:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
 }
 img {
    width: 300px;
    margin: 0 auto;
 }
</style>

# Workshop de spécialité : Digital Campus

![Nom de l'image](/public/logo.png)

Khalil Jaouani - Vanelle NGADJUI - Zohra Hussain - Sofiane Zouaoui - Florian Lescribaa

---

# Déroulement de la présentation

1. Yunohost
2. Objectif
3. Technologies choisies et organisation du groupe
4. Présentation rapide de l'application
5. Conclusion

---

# Yunohost
YunoHost se positionne comme un système d'exploitation visant à simplifier au maximum la gestion d'un serveur, avec pour objectif de rendre l'auto-hébergement accessible tout en préservant la fiabilité, la sécurité, l'éthique et la légèreté. Ce projet de logiciel libre est entièrement pris en charge par une équipe de bénévoles. En résumé, YunoHost est un système d'exploitation pour serveur qui simplifie le déploiement d'applications sur des serveurs. 

---
<style scoped>
 img {
    width: 200px;
    margin: 0 auto;
 }
</style>

# Objectif (1)

Durant ce workshop, l'objectif de ce projet est de concevoir une interface web permettant d'installer des "bundles" d'applications, des ensembles pré-configurés répondant à des utilisations spécifiques.

![Nom de l'image](/public/capture_applications.jpg)

Les bundles peuvent être utilisés pour simplifier le processus d'installation et de gestion d'un ensemble d'applications liées, offrant aux utilisateurs une solution prête à l'emploi pour répondre à un besoin particulier. L'utilisation de bundles permet également une gestion centralisée des configurations et des mises à jour pour l'ensemble de l'ensemble d'applications regroupées.

---
# Objectif (2)

Un bundle pourrait inclure plusieurs applications liées entre elles, peut-être pour fournir une fonctionnalité spécifique, une suite logicielle, ou une expérience utilisateur cohérente.
---
<style scoped>
 section:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
 }
 img {
    width: 100px;
    margin: 0 auto;
 }
 table {
    width: 70%;
    margin-top: 20px;
 }
 th, td {
    padding: 10px;
    text-align: left;
 }
</style>

## Liste des bundels

| Nom bundle | Description |
| --- | --- |
| **1. Chatons** | Infrastructure complète de services, combinant des outils de communication, de collaboration, et de bureautique pour répondre aux besoins variés des utilisateurs. |
| **2. Chaîne éditoriale** | Création à plusieurs d’un ouvrage, avec des libretto, des outils d’édition et des outils de publication lecture en ligne, type calibre web |
| **3. Synchroniser ses données entre périphériques** | Ce bundle intègre YesWiki pour la collaboration associée, avec des fonctionnalités telles que la gestion des adhésions, le partage de fichiers via Nextcloud, la prise de notes collective avec Etherpad et Cryptpad, ainsi que l'organisation des tâches via Wekan et Scrumblr. |
| **4. Association / projet de groupe, usages collaboratifs** | Ce bundle propose une plateforme complète avec YesWiki, Paheko, Nextcloud, Etherpad, Cryptpad, Wekan, Scrumblr, et autres outils pour une gestion collaborative efficace d'associations ou projets de groupe, couvrant adhésions, partage de fichiers, prise de notes, organisation des tâches, et plus encore. |
| **5. “Nettoyer” son accès internet** | Ce bundle améliore l'accès internet en contournant les restrictions du FAI avec un VPN, en établissant un réseau WiFi sécurisé via un hotspot, et en bloquant les publicités et malwares avec Pi-hole et AdGuardHome. |

---
# CHOIX DU BUNDLE CHATONS
Pour le développement de notre application, notre groupe a décidé de se focaliser sur le bundle “Monter un chaton”. Ce bundle vise à créer une infrastructure complète de services, combinant des outils de communication, de collaboration, et de bureautique pour répondre aux besoins variés des utilisateurs.


---
<style scoped>
 section:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
 }
 img {
    width: 100px;
    margin: 0 auto;
 }
</style>

## Applications Clés du bundle CHATONS

| Application | Logo |
| --- | --- |
| **1. Nextcloud**<br>Stockage et Collaboration | ![Nextcloud](/public/Nextcloud_Logo.svg.png) |
| **2. Jitsi**<br>Réunions à Distance | ![Jitsi](/public/61c996ba43ba90855e6cd2a3_Jitsi.png) |
| **3. Etherpad**<br>Rédaction Collaborative | ![Etherpad](/public/etherpad_logo.jpg) |
| **4. Roundcube**<br>Gestion des E-mails | ![Roundcube](/public/téléchargement.png) |
---

# Choix des technologies (1)

## Frontend 

- **VueJS**: Framework JavaScript progressif, léger et performant, offrant une gestion efficace de l'interface utilisateur.
- **Css**: Langage de style léger pour la présentation visuelle.
- **Bootstrap**: Framework CSS facilitant le développement d'une interface responsive et esthétique

---

# Choix des technologies (2)

## Backend 

**NodeJS**: Environnement d'exécution JavaScript côté serveur, connu pour sa rapidité et son efficacité.

**ExpressJS**: Framework web minimaliste pour construire des api

**Childprocess**: Module permettant d'exécuter des processus externes depuis Node JS (dans notre cas pour faire des requête ssh: installation d’applications, ajout de domaines)

**SqLite**: Système de gestion de base de données léger et autonome, adapté à des applications avec des besoins modestes en termes de stockage et de performance.

---

# Structure de notre application (1)

![Nextcloud](/public/struture.jpg)

---

# Structure de notre applcation (2) 

| Frontend |
| --- |
| **Assets** pour les ressources statiques |
| **Components** pour les composants réutilisables |
| **Routeur** pour la gestion des routes de l'application VueJS. |

| Backend |
| --- |
| **app.js** Définition des routes API |
| **data** Logique liée à la manipulation des données de la base de données |
| **db.js** Configuration de la base de données |
| **dbOperations.js** | Opérations sur les données |  

---

# Structure de notre applcation (3) 
s
## Routes API

- GET /api/bundles (récupérer la liste des bundels)
- GET /api/applications (récupérer la liste des applications)
- GET  /api/bundle/:bundleId/applications (récupérer la liste des applications d'un bundel)
- POST /api/install/ (installer les applications)


---

# Organisation du groupe (1)

## Chef de projet 
- Vanelle

## Développeurs Frontend  
- Zohra
- Khalil

## Développeurs Backend
- Florian
- Vanelle

---

# Organisation du groupe (2)

## DevOps
- Sofiane
- Zohra

## Rédactions livrables
- Vanelle
- Florian

