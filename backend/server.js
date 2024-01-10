const express = require('express');
const { exec } = require('child_process');
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

// Informations de connexion
const adminUsername = 'florian';
const serverIpAddress = '163.172.136.65';
const adminPassword = '1234Azer_';

// API pour installer une application
app.post('/api/install/', async (req, res) => {
  const { appId } = req.body;
  const prompt = await promptInstall(appId);

  if (prompt) {
    installApp(prompt, res);
  } else {
    res.status(404).json({ error: 'Installation configuration not found' });
  }
});


// retroune une chaine de caratcère pour les argument de l'installation de l'application
const promptInstall = async (appId) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/install/config/${appId}`);
    const configData = response.data;
    const queryString = Object.keys(configData)
    .filter(key => key !== 'name') // Exclude 'name' parameter
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(configData[key])}`)
    .join('&');

  const args = `--args="${queryString}"`;

  const promptInstall = `ssh florian@163.172.136.6 | sudo -S yunohost app install ${configData.name} ${args}`;
  return promptInstall
  } catch (error) {
    return null;
  }
};

// Fonction pour installer l'application via YunoHost
const installApp = (promptInstall, res) => {
  res.status(200).json({ message: promptInstall });

  // on a récupérer la commande maintenant il faudra l'executer (voir suite du code (à tester))

  exec(promptInstall, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erreur lors de l'installation: ${error.message}`);
        return res.status(500).json({ error: `Failed to install`, details: error.message });
      }

      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);

      res.json({ message: `Installed ${appName}` });
  });
};
