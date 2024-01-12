# Workshop-YunoHost-Bundles-G3
------- Workshop de spécialité
------- M1TL
------- Digital Campus 
------- 2023 - 2024
------- [Khalil Jaouani]  - [Vanelle NGADJUI] - [Zohra Hussain] - [Sofiane Zouaoui] - [Florian Lescribaa]


## Table des Matières

1. [Introduction](#introduction)
2. [Objectifs](#objectifs)
3. [Documentation technique](#documentation_technique)
4. [Installation](#installation)
5. [Utilisation](#utilisation)
6. [Contribuer](#contribuer)


## Introduction
YunoHost se positionne comme un système d'exploitation visant à simplifier au maximum la gestion d'un serveur, avec pour objectif de rendre l'auto-hébergement accessible tout en préservant la fiabilité, la sécurité, l'éthique et la légèreté. Ce projet de logiciel libre est entièrement pris en charge par une équipe de bénévoles.  En résumé, YunoHost est un système d'exploitation pour serveur qui simplifie le déploiement d'applications sur des serveurs. 

Par exemple, si vous souhaitez disposer de votre propre alternative à "Google Docs" sur votre serveur, YunoHost facilite cette démarche en permettant l'installation de diverses applications, offrant ainsi une personnalisation étendue de votre environnement d'auto-hébergement.

Actuellement, le nombre d'applications disponibles dépasse 500, créant un défi pour les utilisateurs qui doivent choisir parmi une multitude d'options. 


## Objectifs
Durant ce workshop, l'objectif de ce projet est de concevoir une interface web permettant d'installer des "bundles" d'applications, des ensembles pré-configurés répondant à des utilisations spécifiques.

### Choix du bundle
Pour le développement de notre application, notre groupe a décidé de se focaliser sur le bundle “Monter un chaton”. Ce bundle vise à créer une infrastructure complète de services, combinant des outils de communication, de collaboration, et de bureautique pour répondre aux besoins variés des utilisateurs. 

Le bundle final aura pour objectif de réunir une sélection d'applications couvrant la gestion d'un site web, la collaboration en ligne, les réunions virtuelles, la bureautique, la création de sites internet, la recherche en ligne, la gestion de projets, la traduction de texte, la synchronisation de fichiers, et la messagerie, tout en s'adaptant à la puissance de la machine, au temps disponible, et au public cible.

Pour ce projet (workshop), nous avons réalisé dans un premier temps un périmètre pour comprendre au mieux les applications qui serait le plus important à retrouver dans ce bundle pour le développement de cette première version.

Dans le bundle Chaton, nous avons inclus les applications suivantes :

1. [NextCloud](https://nextcloud.com/): 
Une plateforme de collaboration en ligne qui offre des services de stockage, de partage et de synchronisation de fichiers, ainsi que des fonctionnalités de calendrier et de gestion des tâches.

2. [Etherpad](https://etherpad.org/) : 
Un éditeur de texte en temps réel permettant à plusieurs utilisateurs de collaborer simultanément sur un document, favorisant ainsi la collaboration en ligne.

3. [Jitsi Meet](https://meet.jit.si/): 
Une solution de visioconférence open source permettant des réunions en ligne avec vidéo, audio et partage d'écran, offrant une alternative libre à d'autres services de vidéoconférence.

4. [RoundCube](https://roundcube.net/):
Une interface web conviviale pour la gestion des emails, offrant un accès facile et pratique à la messagerie électronique directement depuis le navigateur.


# Documentation technique 

Avant de débuter la présentation technique de notre application, nous vous rappelons que vous pouvez retrouver notre repository sur le lien suivant:[github](https://github.com/FloFlo-L/Workshop-YunoHost-Bundles-G3.git)

## Choix technologique 
Nous avons opté pour les technologies suivantes pour notre application en raison de leur légèreté et de leur frugalité, répondant ainsi à l'objectif de choisir des solutions efficaces pour le développement de l'interface web :

### Frontend 
- [VueJS](###frontend): Framework JavaScript progressif, léger et performant, offrant une gestion efficace de l'interface utilisateur.
- [Css](###frontend): Langage de style léger pour la présentation visuelle.
- [Bootstrap](###frontend): Framework CSS facilitant le développement d'une interface responsive et esthétique.

### Backend
- [NodeJS](###backend): Environnement d'exécution JavaScript côté serveur, connu pour sa rapidité et son efficacité.
- [ExpressJS](###backend): Framework web minimaliste pour construire des api
- [Childprocess](###backend): Module permettant d'exécuter des processus externes depuis Node JS (dans notre cas pour faire des requête ssh: installation d’applications, ajout de domaines)
- [SqLite](###backend): Système de gestion de base de données léger et autonome, adapté à des applications avec des besoins modestes en termes de stockage et de performance.

Par ailleurs notre application s'appui sur une liste de technologies bien documenté, on peut retrouver les documentations sur les liens suivants: 
- [Documentation VueJs](https://vuejs.org/)
- [Documentation Express](https://expressjs.com/fr/)
- [Documentation SqLite](https://www.sqlite.org/index.html)

### Structure du projet
La structure de notre projet est organisée de manière à séparer clairement le frontend, développé en VueJS, du backend qui expose une API réalisée avec expressJs. 
![structure](/public/structure.jpg)

- À la racine du projet, le dossier src englobe les fichiers du frontend, incluant les répertoires assets pour les ressources statiques, components pour les composants réutilisables, et routeur pour la gestion des routes de l'application VueJS. 

- Le backend est représenté par le dossier backend, abritant le fichier app.js définissant les routes API, ainsi que le dossier data qui contient la logique liée à la manipulation des données de la base de données, avec des fichiers tels que `db.js` pour la configuration de la base de données et `dbOperations.js` pour les opérations sur les données. 

- Parmi les routes API, nous retrouvons des fonctionnalités essentielles telles que la récupération des listes de bundles et d'applications, l'obtention des applications liées à un bundle particulier, ainsi que la possibilité d'installer des applications spécifiques.

- En ce qui concerne les routes de notre API, elles sont définies pour couvrir diverses fonctionnalités cruciales. Par exemple, la route `"GET /api/bundles"` permet de récupérer la liste des bundles, fournissant une vue complète des ensembles d'applications disponibles. 

- De même, la route `"GET /api/applications"` offre la possibilité de récupérer la liste exhaustive des applications présentes dans notre système. Pour une perspective plus ciblée, la route `"GET /api/bundle/:bundleId/`applications" permet d'obtenir la liste d'applications spécifiques liées à un bundle particulier.

- L'aspect opérationnel de notre API est renforcé par la route `"POST /api/install"`, qui, avec le corps de la requête spécifié sous la forme `{ appIds: [id1, id2…] }`, permet l'installation facilitée et personnalisée d'applications sélectionnées. 


## Installation

1. **Prérequis**
   - Node.js installé sur votre machine
   - Base de données SQLite configurée

2. Clonez le projet.
   ```bash
   git clone https://github.com/FloFlo-L/Workshop-YunoHost-Bundles-G3.git

3. Installer les dependances 
    ```bash
    cd votre-repository
    npm install

4. Exécutez le projet.
   ```bash
   npm start    



## Utilisation

1. API Endpoints
- /api/bundles: Obtenez la liste de tous les bundles.
- /api/applications: Obtenez la liste de toutes les applications.
- /api/install/apps: Installez plusieurs applications en spécifiant les IDs.

2. Exemple d'Installation d'Applications via API
    ```bash
    curl -X POST http://localhost:3000/api/install/apps -H "Content-Type: application/json" -d '{"appIds": [1, 2,3]}'

3. Exemple d'Obtention de Bundles via API
    ```bash
    curl http://localhost:3000/api/bundles


## Contribuer
1. Fork le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b fonctionnalite/nom`).
3. Committez vos modifications (`git commit -am 'Ajout de nouvelle fonctionnalité'`).
4. Pushez la branche (`git push origin fonctionnalite/nom`).
5. Créez une pull request.

