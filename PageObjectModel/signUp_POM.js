

var submitNext = {
    clickSignUp : function(){
        this.waitForElementVisible('@signup_btn',3000)
        .click('@signup_btn')
        return this;
    }
}

module.exports ={
    url : function(){
        return this.client.settings.launch_url + '/signUp'
    },
    commands : [submitNext],
    elements : {
        kaodim_logo : {
            selector : '//header/a/img',
            locateStrategy: 'xpath'
        },
        searchButton : {
            selector: '/html/body/div[4]/div/div/header/section/span/button',
            locateStrategy : 'xpath'
        },
        loginButton : {
            selector : '/html/body/div[4]/div/div/header/nav/ul/li[2]/a',
            locateStrategy : 'xpath'
        },
        becomeAPro : {
            selector : '/html/body/div[4]/div/div/header/nav/ul/li[3]/a',
            locateStrategy : 'xpath'
        },
        facebook_btn:{
            selector : '//span/button',
            locateStrategy: 'xpath'
        },
        name:{
            selector : '//*[@id="text-name"]',
            locateStrategy: 'xpath'
        },
        email:{
            selector : '//*[@id="text-email"]',
            locateStrategy: 'xpath'
        },
        phone:{
            selector : '//*[@id="text-phone"]',
            locateStrategy: 'xpath'
        },
        password:{
            selector : '//*[@id="text-password"]',
            locateStrategy: 'xpath'
        },
        signup_btn:{
            selector : '//form/button',
            locateStrategy : 'xpath'
        },
        termOfUse:{
            selector : '//div[2]/form/p/span/a[1]',
            locateStrategy: 'xpath'
        },
        privacyPolicy:{
            selector : '//form/p/span/a[2]',
            locateStrategy: 'xpath'
        },
        login:{
            selector : '//div[2]/p/a[1]',
            locateStrategy: 'xpath'
        },
        serviceProvider:{
            selector : '//div[2]/p/a[2]',
            locateStrategy: 'xpath'
        },
    }
}