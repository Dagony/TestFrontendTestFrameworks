gemini.suite('yandex-search', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('div')
        .capture('plain');
});