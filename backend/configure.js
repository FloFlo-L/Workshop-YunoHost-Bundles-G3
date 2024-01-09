const exec = require('child_process').exec;

const domain = process.env.CONFIG_DOMAIN;

switch (appName) {
  case 'nextcloud':
    return {
      domain: `${domain}`,
      path: appName,
      admin: "vanelle",
      is_public: true,
      user_home: no
    };
  default:
    console.log(`Unknown application: ${appName}`);
    break;
}
