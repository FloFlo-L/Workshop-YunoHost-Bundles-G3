const exec = require('child_process').exec;

const appName = process.argv[2];

switch (appName) {
  case 'app1':
    // Configuration spécifique pour app1
    console.log('Configuring app1...');
    // Commandes de configuration pour app1
    break;
  case 'app2':
    // Configuration spécifique pour app2
    console.log('Configuring app2...');
    // Commandes de configuration pour app2
    break;
  // Ajoutez d'autres applications au besoin
  default:
    console.log(`Unknown application: ${appName}`);
    break;
}
