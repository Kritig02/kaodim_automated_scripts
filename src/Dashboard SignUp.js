const util = require("../utility.js")
const displayName = util.rChar();
const env = require("../env.json")
module.exports = {
    'Dashboard SignUp' : function(browser){
        var signUpPage = browser.page.signUp_POM();
        signUpPage.navigate();
        signUpPage.expect.element('@name').to.be.enabled
        signUpPage.assert.containsText('h3[class=SignForm-title]','Sign up')
        signUpPage.assert.elementPresent('@kaodim_logo')
        signUpPage.expect.element('@facebook_btn').to.be.enabled;
        signUpPage.expect.element('@signup_btn').to.be.enabled;
        signUpPage.expect.element('@searchButton').to.be.enabled
        signUpPage.expect.element('@loginButton').to.be.enabled
        signUpPage.assert.elementPresent('@becomeAPro')
        signUpPage.assert.elementPresent('@serviceProvider')
        signUpPage.assert.elementPresent('@password')
        signUpPage.assert.elementPresent('@privacyPolicy')
        signUpPage.assert.elementPresent('@termOfUse')
        signUpPage.assert.elementPresent('@phone')
        signUpPage.setValue('@name', displayName),
        signUpPage.setValue('@email',displayName+'@kaodim.com'),
        signUpPage.setValue('@phone', util.rNum()),
        signUpPage.setValue('@password', 'notasecret')
        .clickSignUp()
        browser.pause(2000)
        browser.saveScreenshot(env.screenshotsDir + displayName + '.png')
        signUpPage.assert.containsText('span[class=info-name]',displayName)
        browser
        .end();
    }
}