gemini.suite('scriptinator-login', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('#login-form')
        .capture('plain')
        .capture('with text', function(actions, find) {
            actions.sendKeys(find('input[name="username"]'), 'mark');
            actions.sendKeys(find('input[name="password"]'), 'Qe8du0vnpUKX');
            actions.click(find('button'));
        });
});