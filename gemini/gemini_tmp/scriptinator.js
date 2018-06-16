gemini.suite('scriptinator-login', (suite) => {
    suite.setUrl('/')
        .setCaptureElements(['#login-form'])
        .before(function(actions, find) {
            this.button = find('button');
        })
        .capture('01 - start', function(actions, find) {
        })
        .capture('02 - fill in username', function(actions, find) {
            actions.sendKeys(find('input[name="username"]'), 'mark');
        })
        .capture('03 - fill in password', function(actions, find) {
            actions.sendKeys(find('input[name="password"]'), 'Qe8du0vnpUKX');
        })
        .capture('04 - button hovered', function(actions) {
            actions.mouseMove(this.button)
        })
        .capture('05 - button pressed', function(actions) {
            actions.mouseDown(this.button, 0);
        })
        .capture('06 - clicked', function(actions) {
            actions.mouseUp(this.button);
        });
});