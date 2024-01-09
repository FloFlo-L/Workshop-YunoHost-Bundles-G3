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
