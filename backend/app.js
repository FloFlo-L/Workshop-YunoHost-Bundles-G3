const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;
const dbOperations = require('./data/dbOperations');

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Informations de connexion
const adminUsername = 'vanelle';
const serverIpAddress = '163.172.136.65';
const adminPassword = 'VaneNgadj46!';

// Endpoint pour obtenir tous les bundles
app.get('/api/bundles', (req, res) => {
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


// Fonction pour connecter l'application via YunoHost
const connect = () => {
    return new Promise((resolve, reject) => {
        const connectCommand = `ssh ${adminUsername}@${serverIpAddress}`;

        exec(connectCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors de la connexion : ${error.message}`);
                reject(error);
            } else {
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
                resolve();
            }
        });
    });
};

// Fonction pour installer des applications à partir d'une liste d'IDs
const installAppsByIds = async (appIds, res) => {
    try {
        for (const appId of appIds) {
            const app = await dbOperations.getApplicationById(appId);
            if (!app) {
                return res.status(404).json({ error: `Application with ID ${appId} not found` });
            }

            // Récupérer les configurations de l'installation de l'application
            const configurations = await dbOperations.getAppConfigurations(appId);

            // Construire les options à partir des configurations
            let options = configurations.configs
            // `domain=${app.domain}&path=${app.path}&init_main_permission=${app.init_main_permission}&password=${app.password}`;
            // configurations.forEach(config => {
            //     options += `&${config.config_key}=${config.config_value}`;
            // });

            await connect(); // S'assurer que la connexion SSH est établie
            return new Promise((resolve, reject) => {
                const installCommand = `echo ${adminPassword} | sudo -S yunohost app install ${appName} --args '${options}'`;

                exec(installCommand, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Erreur lors de l'installation de ${appName} : ${error.message}`);
                        reject(error);
                    } else {
                        console.log(`stdout: ${stdout}`);
                        console.error(`stderr: ${stderr}`);
                        resolve();
                    }
                });
            });

        }

        res.json({ message: 'All applications installed successfully' });
    } catch (error) {
        console.error(`Error installing apps: ${error.message}`);
        res.status(500).json({ error: 'Failed to install applications', details: error.message });
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
