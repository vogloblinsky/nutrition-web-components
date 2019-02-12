/* eslint-disable import/no-extraneous-dependencies */
const defaultSettings = require('@open-wc/testing-karma/default-settings.js');
const merge = require('webpack-merge');

module.exports = config => {
  config.set(
    merge(defaultSettings(config), {
      files: [
        // allows running single tests with the --grep flag
        config.grep ? config.grep : 'packages/**/*.test.js'
      ],
      coverageIstanbulReporter: {
        thresholds: {
          global: {
            statements: 60,
            branches: 60,
            functions: 60,
            lines: 60
          }
        }
      }
    })
  );
  config.client = {
    captureConsole: true
  };
  config.webpack.module.rules[0].exclude = [
    /\.core\.js/,
    /\.test\.js/,
    /\.define\.js/,
    /\.components\.js/
  ];
  return config;
};