// Installation des dépendances
// npm install express child_process

// Serveur Node.js avec Express.js
const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// CODE POUR LA GESTION DES DONNÉES JSON
const bundles = require('./data/bundles.json');
const applications = require('./data/applications.json');

// API pour obtenir la liste des bundles
app.get('/api/bundles', (req, res) => {
    res.json(bundles);
});
  
// API pour obtenir la liste des applications
app.get('/api/applications', (req, res) => {
    res.json(applications);
});

// API pour installer les applications du bundle
app.post('/api/install/:bundle', (req, res) => {
    const bundleId = req.params.bundle;
    const selectedApps = getApplicationsFromBundle(bundleId); // Obtient la liste des applications du bundle

    // Fonction récursive pour installer les applications séquentiellement
    const installAppsSequentially = (index) => {
        if (index < selectedApps.length) {
            const appName = selectedApps[index];
            const command = `sudo yunohost app install ${appName}`;

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${error.message}`);
                    res.status(500).json({ error: `Failed to install ${appName}` });
                    return;
                }

                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
                
                // Installer l'application suivante récursivement
                installAppsSequentially(index + 1);
            });
        } else {
            // Toutes les applications ont été installées
            res.json({ message: 'Installation successful', progress: 100 });
        }
    };

    // Lancer la première installation
    installAppsSequentially(0);
});

// Fonction pour obtenir la liste des applications d'un bundle
function getApplicationsFromBundle(bundleId) {
    const bundle = bundles.find(b => b.id == bundleId);
    return bundle ? bundle.applications.map(app => app.name) : [];
}

// Lancement du serveur
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

