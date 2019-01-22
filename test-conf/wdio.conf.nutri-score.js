let configData = require('./wdio.conf');

configData.config.specs = ['./packages/nutri-score/tests/*.js'];

exports.config = configData.config;