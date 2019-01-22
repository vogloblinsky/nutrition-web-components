exports.config = {
    runner: 'local',
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
    port: 9515,
    path: '/',
    // Level of logging verbosity: trace | debug | info | warn | error
    logLevel: 'info',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['dot', 'spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};