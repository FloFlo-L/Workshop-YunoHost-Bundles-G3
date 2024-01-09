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


// Fonction pour installer l'application via YunoHost
const installApp = (appName, options) => {
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
};

// API pour installer une application
app.post('/api/install/:appName', async (req, res) => {
    try {
        await connect();
        const { appName } = req.params;
        const { domain, path, init_main_permission, password } = req.body;
        const options = `domain=${domain}&path=${path}&init_main_permission=${init_main_permission}&password=${password}`;
        await installApp(appName, options);
        res.json({ message: `Installed ${appName}` });
    } catch (error) {
        res.status(500).json({ error: 'Failed to complete operation', details: error.message });
    }
});

// Autres routes...

// Lancement du serveur
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
