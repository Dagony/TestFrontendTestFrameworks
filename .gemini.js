module.exports = {
    rootUrl: 'http://yandex.ru',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    compositeImage: true,
    calibrate: false,
    windowSize: '1600x1080',
    screenshotsDir: 'gemini/screenshots',
    screenshotMode: 'viewport',

    browsers: {
        phantomjs: {
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true
            }
        }
    },

    system: {
        plugins: {
            'html-reporter/gemini' : {
                enabled: true,
                path: 'gemini/reports',
                defaultView: 'all',
                baseHost: 'yandex.ru'
            }
        }
    }
};