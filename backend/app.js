const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;
const dbOperations = require('./data/dbOperations');
const { config } = require('process');

// Middleware pour gérer les requêtes JSON
app.use(express.json());

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
// Endpoint pour obtenir un bundle
app.get('/api/:bundle', (req, res) => {
  // Utilisez req.params.bundle pour obtenir la valeur du paramètre :bundle
  const bundleId = req.params.bundle;

  dbOperations.getBundleById(bundleId, (err, bundle) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(bundle);
    }
  });
});

// Endpoint pour obtenir les applications liées à un bundle
app.get('/api/bundle/:bundleId/applications', (req, res) => {
  const bundleId = req.params.bundleId;

  dbOperations.getApplicationsForBundle(bundleId, (err, applications) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ bundleId, applications });
    }
  });
});


// Fonction pour installer des applications à partir d'une liste d'IDs
const installAppsByIds = async (appIds, res) => {
  try {
    const totalApps = appIds.length;
    let appCount = 0;
    let installedCount = 0;
    let installErrors = [];

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
      const options = keyValuePairs
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&'); // Afficher la chaîne de requête

      // connexion + exec de la ligne de commande 
      const Client = require('ssh2').Client;
      const conn = new Client({ readyTimeout: 60000 });

      // Informations de connexion SSH
      const sshConfig = {
        host: '163.172.136.65',
        username: 'florian',
        password: '1234Azer_',
      };

      conn.on('ready', () => {
        conn.exec(
          `echo ${sshConfig.password} | sudo -S yunohost app install ${configurations[0].name} --args='${options}'`,
          (err, stream) => {
            stream
              .on('close', (code, signal) => {
                console.log(`SSH command exited with code ${code}`);
                conn.end();


                // Mettre à jour le nombre d'applications parcouru
                appCount++;

                if (code !== 0) {
                  const errorMessage = `Error installing ${configurations[0].name}: Exit code ${code}`;
                  console.error(errorMessage);
                  installErrors.push(errorMessage);
                } else{
                  // Mettre à jour le nombre d'applications installées
                  installedCount++;
                }

                // Envoyer un message sur l'état d'installation et la progression
                const progress = (installedCount / totalApps) * 100;
                res.write(`Application ${installedCount}/${totalApps} installed. Progress: ${progress.toFixed(2)}%\n`);

                // Si toutes les applications ont été installées, envoyer un message de succès
                if (appCount === totalApps) {
                  if (installErrors.length === 0) {
                    res.end('All applications installed successfully');
                  } else {
                    res.end(`${totalApps}-${installedCount} applications failed to install:\n${installErrors.join('\n')}`);
                  }
                }
              })
              .on('data', (data) => {
                console.log(`Command output: ${data}`);
              })
              .stderr.on('data', (data) => {
                const errorMessage = `Error installing ${configurations[0].name}: "${data}"`;
                console.error(errorMessage);
                installErrors.push(errorMessage);
              });
          }
        );
      });
      conn.connect(sshConfig);
    }
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

  // Initialiser la réponse avec une progresse bar
  res.write('Installation Progress:\n');

  await installAppsByIds(appIds, res);
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});