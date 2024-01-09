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

// curl -X POST -H "Content-Type: application/json" -d "{\"domain\": \"dcm1tlg3.nohost.me\", \"path\": \"/baikal\", \"init_main_permission\": \"vanelle\", \"password\": \"VaneNgadj46!\"}" http://localhost:3000/api/install/baikal

// Fonction pour installer l'application via YunoHost
const installApp = (appName, options, res) => {
    const installCommand = `ssh vanelle@163.172.136.65 echo ${adminPassword} | sudo -S yunohost app install ${appName} --args '${options}'`;

    exec(installCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur lors de l'installation de ${appName} : ${error.message}`);
            return res.status(500).json({ error: `Failed to install ${appName}`, details: error.message });
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);

        res.json({ message: `Installed ${appName}` });
    });
};

// API pour installer une application
app.post('/api/install/:appName', (req, res) => {
    const { appName } = req.params;
    const { domain, path, init_main_permission, password } = req.body;

    const options = `domain=${domain}&path=${path}&init_main_permission=${init_main_permission}&password=${password}`;
    
    installApp(appName, options, res);
});

// Autres routes...

// Lancement du serveur
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
