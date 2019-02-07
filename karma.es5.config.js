/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const es5Settings = require('@open-wc/testing-karma/es5-settings.js');
const karmaConf = require('./karma.conf.js');

module.exports = config => {
  let proxyEs5Settings = es5Settings(config);
  proxyEs5Settings.webpack.module.rules[0].options['plugins'] = ["@babel/plugin-syntax-dynamic-import"];
  config.set(merge(proxyEs5Settings, karmaConf(config)));
  return config;
};