const db = require('./db');  // Importer la configuration de la base de données

// Créer la table pour les bundles
db.run(`
  CREATE TABLE IF NOT EXISTS bundles (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT
  )
`);

// Créer la table pour les applications
db.run(`
  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    logo TEXT
  )
`);

// Créer la table pour les applications liées à un bundle
db.run(`
  CREATE TABLE IF NOT EXISTS bundle_applications (
    bundleId INTEGER,
    applicationId INTEGER,
    FOREIGN KEY (bundleId) REFERENCES bundles(id),
    FOREIGN KEY (applicationId) REFERENCES applications(id),
    PRIMARY KEY (bundleId, applicationId)
  )
`);

// Ajoutez la table pour les configurations d'application
db.run(`
  CREATE TABLE IF NOT EXISTS app_configurations (
    id INTEGER PRIMARY KEY,
    applicationId INTEGER,
    configs JSON,
    FOREIGN KEY (applicationId) REFERENCES applications(id)
  )
`);


// Opérations de base de données
const dbOperations = {
  // Insérer un nouveau bundle
  insertBundle: (name, description) => {
    const query = `INSERT INTO bundles (name, description) VALUES (?, ?)`;
    db.run(query, [name, description]);
  },

  // Insérer une nouvelle application
  insertApplication: (name, description, logo) => {
    const query = `INSERT INTO applications (name, description, logo) VALUES (?, ?, ?)`;
    db.run(query, [name, description, logo]);
  },

  // Récupérer tous les bundles
  getAllBundles: (callback) => {
    const query = 'SELECT * FROM bundles';
    db.all(query, (err, rows) => {
      if (err) {
        console.error(err);
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  },

  // Récupérer toutes les applications
  getAllApplications: (callback) => {
    const query = 'SELECT * FROM applications';
    db.all(query, callback);
  },

  // Insérer des applications liées à un bundle
  insertBundleApplications: (bundleId, applicationIds) => {
    const query = `INSERT INTO bundle_applications (bundleId, applicationId) VALUES (?, ?)`;
    for (const applicationId of applicationIds) {
      db.run(query, [bundleId, applicationId]);
    }
  },

  // Récupérer les applications liées à un bundle
  getApplicationsForBundle: (bundleId, callback) => {
    const query = 'SELECT applications.* FROM applications JOIN bundle_applications ON applications.id = bundle_applications.applicationId WHERE bundle_applications.bundleId = ?';
    db.all(query, [bundleId], callback);
  },

  // Récupérer les bundles liés à une application
  getBundlesForApplication: (applicationId, callback) => {
    const query = 'SELECT bundles.* FROM bundles JOIN bundle_applications ON bundles.id = bundle_applications.bundleId WHERE bundle_applications.applicationId = ?';
    db.all(query, [applicationId], callback);
  },

  // Récupérer une application par son ID
  getApplicationById: (applicationId, callback) => {
    const query = 'SELECT * FROM applications WHERE id = ?';
    db.get(query, [applicationId], callback);
  },

  // Insérer une nouvelle configuration d'application
  insertAppConfiguration: (applicationId, configs) => {
    const query = `INSERT INTO app_configurations (applicationId, configs) VALUES (?, ?)`;
    db.run(query, [applicationId, configs]);
  },

  // Récupérer toutes les configurations d'une application
  getAppConfigurations: (applicationId, callback) => {
    const query = 'SELECT * FROM app_configurations WHERE applicationId = ?';
    db.all(query, [applicationId], callback);
  },
  
};

module.exports = dbOperations;
