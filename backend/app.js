const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;
const dbOperations = require('./data/dbOperations');
const { config } = require('process');

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Informations de connexion
const adminUsername = 'vanelle';
const serverIpAddress = '163.172.136.65';
const adminPassword = 'VaneNgadj46!';

// Endpoint pour obtenir tous les bundles
app.get('/api/bundels', (req, res) => {
    dbOperations.getAllBundles((err, bundles) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(bundles);
        }
    });
});

// Endpoint pour obtenir toutes les applications
app.get('/api/applications', (req, res) => {
    dbOperations.getAllApplications((err, applications) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(applications);
        }
    });
});

// Fonction pour connecter l'application via YunoHost (ssh)
const connect = () => {
    const Client = require('ssh2').Client;

    const conn = new Client();

    // Informations de connexion SSH
    const sshConfig = {
        host: '163.172.136.65',
        username: 'florian',
        password: '1234Azer_',
    };
};

// Fonction pour installer des applications à partir d'une liste d'IDs
const installAppsByIds = async (appIds, res) => {
    try {
        for (const appId of appIds) {
            // Récuperation des données de l'app by id
            const application = await new Promise((resolve) => {
                dbOperations.getApplicationById(appId, (err, application) => {
                    if (err || !application) {
                        resolve(null);
                    } else {
                        resolve(application);
                    }
                });
            });

            // Récuperation des données de la config by id
            const configurations = await new Promise((resolve) => {
                dbOperations.getAppConfigurations(appId, (err, config) => {
                    if (err || !config) {
                        resolve(null);
                    } else {
                        resolve(config);
                    }
                });
            });

            // Construire les options à partir des configurations
            const configObj = JSON.parse(configurations[0].configs);
            // Créer un tableau de paires clé-valeur
            const keyValuePairs = Object.entries(configObj);
            // Mapper chaque paire clé-valeur pour créer la chaîne de requête
            const options = keyValuePairs.map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
            // Afficher la chaîne de requête
            console.log(options);

            // await connect(); // S'assurer que la connexion SSH est établie
            // return new Promise((resolve, reject) => {
            //     const installCommand = `echo ${adminPassword} | sudo -S yunohost app install ${application.name} --args '${options}'`;

            //     exec(installCommand, (error, stdout, stderr) => {
            //         if (error) {
            //             console.error(
            //                 `Erreur lors de l'installation de ${application.name} : ${error.message}`
            //             );
            //             reject(error);
            //         } else {
            //             console.log(`stdout: ${stdout}`);
            //             console.error(`stderr: ${stderr}`);
            //             resolve();
            //         }
            //     });
            // });
        }

        res.json({ message: 'All applications installed successfully' });
    } catch (error) {
        console.error(`Error installing apps: ${error.message}`);
        res.status(500).json({
            error: 'Failed to install applications',
            details: error.message,
        });
    }
};

// API pour installer plusieurs applications par IDs avec configurations
app.post('/api/install/apps', async (req, res) => {
    const { appIds } = req.body;
    if (!appIds || !Array.isArray(appIds) || appIds.length === 0) {
        return res.status(400).json({ error: 'Invalid or empty app IDs provided' });
    }
    await installAppsByIds(appIds, res);
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
