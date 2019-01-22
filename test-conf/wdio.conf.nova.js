let configData = require('./wdio.conf');

configData.config.specs = ['./packages/nova/tests/*.js'];

exports.config = configData.config;