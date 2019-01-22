let configData = require('./wdio.conf.local');

configData.config.specs = ['./packages/nutri-score/tests/*.js'];

exports.config = configData.config;