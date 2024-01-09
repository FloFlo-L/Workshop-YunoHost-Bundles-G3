const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Informations de connexion
const adminUsername = 'vanelle';
const serverIpAddress = '163.172.136.65';
const adminPassword = 'VaneNgadj46!';

// Fonction pour authentifier l'admin via SSH
const authenticateAdmin = (req, res, next) => {
    const sshCommand = `sshpass -p ${adminPassword} ssh ${adminUsername}@${serverIpAddress} 'echo Connection'`;

    exec(sshCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur SSH : ${error.message}`);
            return res.status(403).json({ error: 'Unauthorized: SSH authentication failed' });
        }

        console.log(`Sortie standard SSH : ${stdout}`);
        console.error(`Sortie d'erreur SSH : ${stderr}`);

        // L'admin est authentifié avec succès
        next();
    });
};
// Utilisez le middleware d'authentification pour toutes les routes de l'API
app.use('/api', authenticateAdmin);

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
            const installCommand = `sudo yunohost app install ${appName}`;
            const configureCommand = `bash configure.sh ${appName}`;

            exec(installCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${error.message}`);
                    res.status(500).json({ error: `Failed to install ${appName}`, details: error.message });
                    return;
                }

                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);

                // Envoyer la progression à l'interface
                const progress = (index + 1) / selectedApps.length * 100;
                res.json({ message: `Installed ${appName}`, progress });

                // Appeler le script de configuration
                exec(configureCommand, (configureError, configureStdout, configureStderr) => {
                    if (configureError) {
                        console.error(`Configuration Error: ${configureError.message}`);
                        // Gérez les erreurs de configuration ici
                    }

                    console.log(`Configuration stdout: ${configureStdout}`);
                    console.error(`Configuration stderr: ${configureStderr}`);

                    // Installer l'application suivante récursivement
                    installAppsSequentially(index + 1);
                });
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



