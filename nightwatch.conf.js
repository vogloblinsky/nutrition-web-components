const seleniumServer = require('selenium-server');

module.exports = {
    "src_folders": ["tests-nw"],
    "output_folder": "nw/reports",
    "test_workers": {
        "enabled": true,
        "workers": "auto"
    },
    "selenium": {
        "start_process": true,
        "server_path": seleniumServer.path,
        "log_path": "nw",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": "./node_modules/chromedriver/bin/chromedriver",
            "webdriver.ie.driver": ""
        }
    },
    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "safari"
            }
        }
    }
}