const express = require('express');
const { exec, spawn } = require('child_process');
const app = express();
const port = 3000;

const axios = require('axios');

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// CODE POUR LA GESTION DES DONNÉES JSON
const bundles = require('./data/bundles.json');
const applications = require('./data/applications.json');
const { error } = require('console');
const { stdout, stderr } = require('process');

// API pour obtenir la liste des bundles
app.get('/api/bundles', (req, res) => {
  res.json(bundles);
});

// API obtenir un bundle avec son id
app.get('/api/bundles/:id', (req, res) => {
  const bundleId = parseInt(req.params.id);
  const bundle = bundles.find((bundle) => bundle.id === bundleId);

  if (bundle) {
    res.status(200).json(bundle);
  } else {
    res.status(404).json({ error: 'Bundle not found' });
  }
});

// API pour obtenir la liste des applications
app.get('/api/applications', (req, res) => {
  res.json(applications);
});

// API pour obtenir une application avec son id
app.get('/api/applications/:id', (req, res) => {
  const appId = parseInt(req.params.id);
  const application = applications.find((app) => app.id === appId);

  if (application) {
    res.status(200).json(application);
  } else {
    res.status(404).json({ error: 'Application not found' });
  }
});

// API pour obtenir la configuration d'installation d'une application
app.get('/api/install/config/:appId', (req, res) => {
  const appId = parseInt(req.params.appId);
  const application = applications.find((app) => app.id === appId);

  if (application && application.install_config) {
    res.status(200).json(application.install_config);
  } else {
    res.status(404).json({ error: 'Installation configuration not found' });
  }
});

// API pour installer une application
app.post('/api/install/', async (req, res) => {
  const { appId } = req.body;
  const prompt = await getArgs(appId);

  if (prompt) {
    installApp(prompt, res);
  } else {
    res.status(404).json({ error: 'Installation configuration not found' });
  }
});

// retroune une chaine de caratcère pour les argument de l'installation de l'application
const getArgs = async (appId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/install/config/${appId}`
    );
    const configData = response.data;
    const argsString = Object.keys(configData)
      .filter((key) => key !== 'name')
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(configData[key])}`).join('&');

    return argsString;
  } catch (error) {
    return null;
  }
};

// Fonction pour installer l'application via YunoHost
const installApp = (promptInstall, res) => {
  res.status(200).json({ message: promptInstall });

  // const Client = require('ssh2').Client;

  // const conn = new Client();

  // // Informations de connexion SSH
  // const sshConfig = {
  //   host: '163.172.136.65',
  //   username: 'florian',
  //   password: '1234Azer_',
  // };

  // conn.on('ready', () => {
  //   console.log('Connected via SSH');

  //   // Vous pouvez exécuter des commandes ici après être connecté
  //   conn.exec('echo 1234Azer_ | sudo -S yunohost app install baikal --args="domain=dcm1tlg3.nohost.me&path=/baikal&init_main_permission=visitors&password=1234Azer_"', (err, stream) => {
  //     stream
  //       .on('close', (code, signal) => {
  //         console.log(`SSH command exited with code ${code}`);
  //         conn.end();
  //       })
  //       .on('data', (data) => {
  //         console.log(`Command output: ${data}`);
  //       })
  //       .stderr.on('data', (data) => {
  //         console.error(`Command error: ${data}`);
  //       });
  //   });
  // });

  // conn.connect(sshConfig);
};
