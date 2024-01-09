const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

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
  const bundle = bundles.find(bundle => bundle.id === bundleId);

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
