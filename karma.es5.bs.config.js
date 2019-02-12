/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const bsSettings = require('@open-wc/testing-karma-bs/bs-settings.js');
const karmaEs5Config = require('./karma.es5.config.js');

module.exports = config => {
  config.set(merge(bsSettings(config), karmaEs5Config(config), {
    browserStack: {
      project: 'nutrition web components',
    },
    customLaunchers: {
      bs_osxhighsierra_safari_111: {
        base: 'BrowserStack',
        browser: 'Safari',
        browser_version: '11.1',
        os: 'OS X',
        os_version: 'High Sierra'
      },
      bs_osxhighsierra_safari_101: {
        base: 'BrowserStack',
        browser: 'Safari',
        browser_version: '10.1',
        os: 'OS X',
        os_version: 'Sierra'
      },
      bs_win_chrome_52: {
        base: 'BrowserStack',
        browser: 'Chrome',
        browser_version: '52.0',
        os: 'Windows',
        os_version: '10'
      },
      bs_win_firefox_62: {
        base: 'BrowserStack',
        browser: 'Firefox',
        browser_version: '62.0',
        os: 'Windows',
        os_version: '10'
      }
    }
  }));
  config.browsers = [
    ...config.browsers,
    'bs_osxhighsierra_safari_111',
    'bs_osxhighsierra_safari_101',
    'bs_win_chrome_52',
    'bs_win_firefox_62'
  ];
  config.reporters = ['mocha', 'coverage-istanbul', 'coveralls'];
  return config;
};