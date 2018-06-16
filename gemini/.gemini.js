module.exports = {
    rootUrl: 'http://scriptinator.io',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    compositeImage: true,

    browsers: {
        phantomjs: {
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true
            }
        }
    }
};