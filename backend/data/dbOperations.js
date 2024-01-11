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
    name TEXT,
    configs JSON,
    FOREIGN KEY (applicationId) REFERENCES applications(id)
  )
`);


// Opérations de base de données
const dbOperations = {
  // Insérer un nouveau bundle
  insertBundle: (id, name, description, applicationIds) => {
    const query = `INSERT INTO bundles (id, name, description, applicationIds) VALUES (?, ?, ?,?)`;
    db.run(query, [id, name, description, applicationIds]);
  },

  // Insérer une nouvelle application
  insertApplication: (id, name, description, logo) => {
    const query = `INSERT INTO applications (id,name, description, logo) VALUES (?, ?, ?, ?)`;
    db.run(query, [id, name, description, logo]);
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
    db.all(query, (err, rows) => {
      if (err) {
        console.error(err);
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  },

  // Insérer des applications liées à un bundle
  insertBundleApplications: (bundleId, applicationIds) => {
    const query = `INSERT INTO bundle_applications (bundleId, applicationId) VALUES (?, ?)`;
    for (const applicationId of applicationIds) {
      db.run(query, [bundleId, applicationId]);
    }
  },
 // Récupérer une application par son ID
 getBundleById: (bundleId, callback) => {
  const query = 'SELECT * FROM bundles WHERE id = ?';
  db.get(query, [bundleId], (err, row) => {
    if (err) {
      console.error(err);
      callback(err, null);  // Pas besoin de transmettre applicationId ici
    } else {
      callback(null, row);
    }
  });
},
  // Récupérer les applications liées à un bundle
  getApplicationsForBundle: (bundleId, callback) => {
    const query = 'SELECT applications.* FROM applications JOIN bundle_applications ON applications.id = bundle_applications.applicationId WHERE bundle_applications.bundleId = ?';
    db.all(query, (err, [bundleId], rows) => {
      if (err) {
        console.error(err);
        callback(err, [bundleId], null);
      } else {
        callback(null, [bundleId], rows);
      }
    });
  },

  // Récupérer les bundles liés à une application
  getBundlesForApplication: (applicationId, callback) => {
    const query = 'SELECT bundles.* FROM bundles JOIN bundle_applications ON bundles.id = bundle_applications.bundleId WHERE bundle_applications.applicationId = ?';
    db.all(query, (err, [applicationId], rows) => {
      if (err) {
        console.error(err);
        callback(err, [applicationId], null);
      } else {
        callback(null, [applicationId], rows);
      }
    });
  },

  // Récupérer une application par son ID
  getApplicationById: (applicationId, callback) => {
    const query = 'SELECT * FROM applications WHERE id = ?';
    db.get(query, [applicationId], (err, row) => {
      if (err) {
        console.error(err);
        callback(err, null);  // Pas besoin de transmettre applicationId ici
      } else {
        callback(null, row);
      }
    });
  },

  // Insérer une nouvelle configuration d'application
  insertAppConfiguration: (id, applicationId, name, configs, callback) => {
    const query = 'INSERT INTO app_configurations (id, applicationId, name, configs) VALUES (?, ?, ?, ?)';
    db.run(query, [id, applicationId, name, JSON.stringify(configs)], (err) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null);
      }
    });
  },

  // Récupérer toutes les configurations d'une application
  getAppConfigurations: (applicationId, callback) => {
    const query = 'SELECT * FROM app_configurations WHERE applicationId = ?';
    db.all(query, [applicationId], (err, rows) => {
      if (err) {
        console.error(err);
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  },

};

module.exports = dbOperations;
