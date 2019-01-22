const browserstack = require('browserstack-local');

const PROJECT_NAME = 'nutrition-web-components';

exports.config = {
    runner: 'local',
    services: ['browserstack'],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    maxInstances: 10,
    capabilities: [{
            os: 'Windows',
            os_version: '10',
            browser: 'Chrome',
            browser_version: '71.0',
            'browserstack.local': true,
            project: PROJECT_NAME
        },
        {
            os: 'Windows',
            os_version: '10',
            browser: 'Firefox',
            browser_version: '64.0',
            'browserstack.local': true,
            project: PROJECT_NAME
        },
        {
            os: 'OS X',
            os_version: 'Mojave',
            browser: 'Safari',
            browser_version: '12.0',
            'browserstack.local': true,
            project: PROJECT_NAME
        },
        {
            os: 'Windows',
            os_version: '10',
            browser: 'Edge',
            browser_version: '17.0',
            'browserstack.local': true,
            project: PROJECT_NAME
        }
        /*,
                {
                    os: 'Windows',
                    os_version: '10',
                    browser: 'IE',
                    browser_version: '11.0',
                    'browserstack.local': true,
                    project: PROJECT_NAME
                }*/
    ],
    maxInstances: 2,
    logLevel: 'info',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['dot', 'spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    onPrepare: function(config, capabilities) {
        console.log('Connecting local');
        return new Promise(function(resolve, reject) {
            exports.bs_local = new browserstack.Local();
            exports.bs_local.start({
                key: exports.config.key
            }, function(
                error
            ) {
                if (error) return reject(error);
                console.log('Connected. Now testing...');

                resolve();
            });
        });
    },
    onComplete: function(exitCode, config, capabilities, results) {
        exports.bs_local.stop(function() {});
    }
};