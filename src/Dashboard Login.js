
const env = require("../env.json")

module.exports = {
    'Dashboard Login': function (browser){
        var loginPage = browser.page.login_POM();
        loginPage.navigate();
        loginPage.expect.element('@email').to.be.enabled;
        loginPage.assert.containsText('h3[class=SignForm-title]','Login')
        loginPage.assert.elementPresent('@kaodim_logo')
        loginPage.expect.element('@facebook_login').to.be.enabled;
        loginPage.expect.element('@submitNext').to.be.enabled;
        loginPage.assert.elementPresent('@searchButton')
        loginPage.assert.elementPresent('@loginButton')
        loginPage.assert.elementPresent('@becomeAPro')
        loginPage.assert.elementPresent('@signupAsServiceProvider')
        loginPage.assert.elementPresent('@signupAsUser')
        loginPage.setValue('@email', env.loginInfo.username)
        .clickNext()
        browser.pause(5000)
        loginPage.assert.containsText('.text-red',env.compareData.email)
        loginPage.assert.elementPresent('@resetPassword')
        loginPage.setValue('@password', env.loginInfo.password).submitPassword();
        browser
        .pause(5000)
        loginPage.assert.containsText('span[class=info-name]',env.compareData.name)
        browser
        .pause(3000)
        .end()
    }
}