const dbOperations = require('./dbOperations');

// Ajouter des applications
const applicationsData = [
    {
        id: 1,
        name: 'NextCloud',
        description: 'Description de NextCloud',
        logo: 'https://github.com/YunoHost/apps/blob/master/logos/nextcloud.png',
    },
    {
        id: 2,
        name: 'Etherpad',
        description: 'Description d\'Etherpad',
        logo: 'https://github.com/YunoHost/apps/blob/master/logos/etherpad.png',
    },
    {
        id: 3,
        name: 'Jitsi',
        description: 'Description de Jitsi',
        logo: 'https://github.com/YunoHost/apps/blob/master/logos/jitsi.png',
    },
    {
        id: 4,
        name: 'Roundcube',
        description: 'Description de Roundcube',
        logo: 'https://github.com/YunoHost/apps/blob/master/logos/roundcube.png',
    },
];

applicationsData.forEach(application => {
    dbOperations.insertApplication(application.id, application.name, application.description, application.logo);
});

// Ajouter des bundles
const bundlesData = [
    {
        id: 1,
        name: 'Bundle 1',
        description: 'Description du Bundle 1',
        applicationIds: [1, 2, 3, 4],
    },
    {
        id: 2,
        name: 'Bundle 2',
        description: 'Description du Bundle 2',
        applicationIds: [],
    },
    {
        id: 3,
        name: 'Bundle 3',
        description: 'Description du Bundle 3',
        applicationIds: [],
    },
    {
        id: 4,
        name: 'Bundle 4',
        description: 'Description du Bundle 4',
        applicationIds: [],
    },
];

// Ajouter des applications
const confguartionsData = [
    {
        id: 1,
        applicationId: 1,
        configs: {
            "domain": "dcm1tlg3.nohost.me",
            "name": "nextcloud",
            "path": "/nextcloud",
            "admin": "florian",
            "is_public": true,
            "user_home": false
        }
    },
]

bundlesData.forEach(bundle => {
    dbOperations.insertBundle(bundle.id, bundle.name, bundle.description);

    // Si le bundle a des applications, les lier au bundle
    if (bundle.applicationIds.length > 0) {
        dbOperations.insertBundleApplications(bundle.id, bundle.applicationIds);
    }
});

// Récupérer et afficher tous les bundles
dbOperations.getAllBundles((err, bundles) => {
    if (err) {
        console.error('Erreur lors de la récupération des bundles :', err);
    } else {
        console.log('Bundles récupérés avec succès :', bundles);
    }
});

// Récupérer et afficher toutes les applications
dbOperations.getAllApplications((err, applications) => {
    if (err) {
        console.error('Erreur lors de la récupération des applications :', err);
    } else {
        console.log('Applications récupérées avec succès :', applications);
    }
});

// Récupérer et afficher toutes les configurations
dbOperations.getAppConfigurations((err, app_configurations) => {
    if (err) {
        console.error('Erreur lors de la récupération des app_configurations :', err);
    } else {
        console.log('Applications récupérées avec succès :', app_configurations);
    }
});
