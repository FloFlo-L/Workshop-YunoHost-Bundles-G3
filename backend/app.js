// server/app.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Simulez les données de bundles et d'applications (vous devriez charger cela depuis une base de données dans un environnement de production)
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// EXEMPLE DE CODE 
// Installation des dépendances
// npm install express child_process

// Serveur Node.js avec Express.js
const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

// Liste des applications du bundle (à remplacer par la liste réelle)
const bundleApps = ['app1', 'app2', 'app3']; 

// API pour installer les applications du bundle
app.post('/api/install/:bundle', (req, res) => {
  const bundle = req.params.bundle;
  const selectedApps = req.body.selectedApps || bundleApps; // Utilise toutes les applications si aucune n'est spécifiée

  // Fonction récursive pour installer les applications séquentiellement
  const installAppsSequentially = (index) => {
    if (index < selectedApps.length) {
      const appName = selectedApps[index];
      const command = `sudo yunohost app install ${appName}`;

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);

        // Envoyer la progression à l'interface
        res.json({ message: `Installed ${appName}`, progress: (index + 1) / selectedApps.length * 100 });

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

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

