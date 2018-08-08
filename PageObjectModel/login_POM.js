

var choseCountry = '/html/body/div[4]/div/div/header/nav/ul/li[4]/div/div/select/';
var choseServiceGroup = '/html/body/div[4]/div/div/header/nav/ul/li[1]/ul';

//To Be Implemented
var changeCountry = {
    countryIsClicked : function(country_name){
        var self = this;
        return this.getAttribute(country_name,'value', function(result){
            var countryClicked = result.value
            if(countryClicked == "Malaysia"){
                self.waitForElementVisible('@option1',2000)
                .click('@option1') ;
                return self;
            }else if(countryClicked == "Singapore"){
                self.waitForElementVisible('@option2',2000)
                .click('@option2');
                return self;
            }else if(countryClicked == "Philippines"){
                self.waitForElementVisible('@option3',2000)
                .click('@option3');
                return self;
            }else if(countryClicked == "Indonesia"){
                self.waitForElementVisible('@option4',2000)
                .click('@option4');
                return self;
            }else{
                self.pause(1000);
                return self;
            }
             
        } )
    }
}

var submitNext = {
    clickNext : function(){
        this.waitForElementVisible('@submitNext',3000)
        .click('@submitNext')
        return this;
    },
    submitPassword : function(){
        this.waitForElementVisible('@next',3000)
        .click('@next')
        return this;
    }
}
// To Be Implemented
var selectService ={
    clickService : function(clickedService){
        var self = this;
        return this.getAttribute(clickedService,'href',function(result){
            var serviceClicked = result.containsText('home')
            if(serviceClicked == 'home'){
                self.waitForElementVisible('@home',2000)
                .click('@home') ;
                return self;
            }
        })
    }
}


module.exports = {
    url : function() {
        return this.client.settings.launch_url + '/login'
    },
    commands : [submitNext],
    elements : {
        kaodim_logo : {
            selector : '//header/a/img',
            locateStrategy: 'xpath'
        },
        email : {
            selector : '//*[@id="email"]',
            locateStrategy : 'xpath'
        },
        facebook_login : {
            selector : '/html/body/div[4]/div/div/div/div/section/div/div/span/button',
            locateStrategy : 'xpath'
        },
        submitNext : {
            selector : '/html/body/div[4]/div/div/div/div/section/div/div/form/button',
            locateStrategy : 'xpath'
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
        signupAsServiceProvider:{
            selector : '/html/body/div[4]/div/div/div/div/section/div/div/form/p/a[1]',
            locateStrategy : 'xpath'
        },
        signupAsUser : {
            selector :'/html/body/div[4]/div/div/div/div/section/div/div/form/p/a[2]',
            locateStrategy : 'xpath'
        },
        password :{
            selector : '//*[@id="password"]',
            locateStrategy : 'xpath'
        },
        next :{
            selector : '/html/body/div[4]/div/div/div/div/section/div/div/form/div/div[2]/button',
            locateStrategy : 'xpath'
        },
        resetPassword : {
            selector : '/html/body/div[4]/div/div/div/div/section/div/div/form/article/p/a',
            locateStrategy : 'xpath'
        }
    },
    sections :{
        country_selector :{
            selector: '//nav/ul/li[4]/div/div/select',
            locateStrategy: 'xpath',
            commands : [changeCountry],
            elements: {
                option1 :{
                    selector: choseCountry + 'option[1]',
                    locateStrategy: 'xpath'
                },
                option2 : {
                    selector : choseCountry + 'option[2]',
                    locateStrategy : 'xpath'
                },
                option3 : {
                    selector: choseCountry + 'option[3]',
                    locateStrategy: 'xpath'
                },
                option4 : {
                    selector : choseCountry + 'option[4]',
                    locateStrategy : 'xpath'
                }

            }
        }
    },
    sections :{
        services :{
            selector: '/html/body/div[4]/div/div/header/nav/ul/li[1]/a/span',
            locateStrategy : 'xpath',
            commands : [selectService],
            elements :{
                home :{
                    selector : choseServiceGroup + '/li[1]/a',
                    locateStrategy : 'xpath',
                    //commands : [selectServiceInHome]
                },
                events:{
                    selector :choseServiceGroup + '/li[2]/a',
                    locateStrategy : 'xpath',
                    //commands : [selectServiceInEvents]
                },
                healthAndFintess :{
                    selector :choseServiceGroup + '/li[3]/a',
                    locateStrategy : 'xpath',
                    //commands : [selectServiceInHealthFitness]
                },
                automotiveAndTransort :{
                    selector :choseServiceGroup + '/li[4]/a',
                    locateStrategy : 'xpath',
                    //commands : [selectServiceInAutomotibeTransport]
                },
                office :{
                    selector :choseServiceGroup + '/li[5]/a',
                    locateStrategy : 'xpath',
                    //commands : [selectServiceInOffice]
                },
                transports :{
                    selector :choseServiceGroup + '/li[6]/a',
                    locateStrategy : 'xpath',
                    //commands : [selectServiceInTransports]
                }
            }
        }
    }
}