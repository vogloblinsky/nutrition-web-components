let configData = require('./wdio.conf.local');

configData.config.specs = ['./packages/nova/tests/*.js'];

exports.config = configData.config;