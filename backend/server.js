// server.js
const express = require('express');
const app = express();
const port = 3001;

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Exemple de route
app.get('/api/exemple', (req, res) => {
  res.json({ message: 'Bienvenue sur votre API Express avec Vue.js!' });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});