const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('chatons.db', (err) => {
  if (err) {
    console.error('Erreur lors de l\'ouverture de la base de données', err.message);
  } else {
    console.log('Base de données ouverte avec succès');
  }
});

module.exports = db;
