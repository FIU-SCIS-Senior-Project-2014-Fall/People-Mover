/*
 * File: app/controller/UserController.js
 */

Ext.define('PeopleMover.controller.UserController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.util.JSON',
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            mainView: 'mainview'
        },

        control: {
            "mainview #showLoginButton": {
                tap: 'showLogin'
            },
            "mainview #showRegisterButton": {
                tap: 'showRegister'
            },
            "mainview #aboutUs": {
                tap: 'showAboutUs'
            },
            "mainview #reportProblem": {
                tap: 'showReportProblem'
            },
            "mainview #requestStop": {
                tap: 'showRequestStop'
            },
            "mainview #feedback": {
                tap: 'showRequestFeedback'
            },
            "mainview #trolleyAlerts": {
                tap: 'showTrolleyAlerts'
            },
            "loginform #loginButton": {
                tap: 'login'
            },
            "registerform #registerButton": {
                tap: 'register'
            }
        }
    },

    showLogin: function(button, e, eOpts) {

                var loginForm = Ext.create('widget.loginform'),	// Login form
                    mainView = this.getMainView();				// Main view

                // Navigate to login
                mainView.push({
                    xtype: "loginform",
                    title: "Login"
                });

    },

    showRegister: function(button, e, eOpts) {

                var loginForm = Ext.create('widget.registerform'),	// Login form
                    mainView = this.getMainView();				// Main view

                // Navigate to login
                mainView.push({
                    xtype: "registerform",
                    title: "Register"
                });

    },

    showAboutUs: function(button, e, eOpts) {

                        var reportProblem = Ext.create('widget.trolleyalerts'),	// Login form
                            mainView = this.getMainView();				// Main view

                        // Navigate to login
                        mainView.push({
                            xtype: "trolleyalerts",
                            title: "About Us"
                        });

    },

    showReportProblem: function(button, e, eOpts) {

                var reportProblem = Ext.create('widget.problem'),	// Login form
                    mainView = this.getMainView();				// Main view

                // Navigate to login
                mainView.push({
                    xtype: "problem",
                    title: "Report a Problem"
                });

    },

    showRequestStop: function(button, e, eOpts) {

                var reportProblem = Ext.create('widget.requestStop'),	// Login form
                    mainView = this.getMainView();				// Main view

                // Navigate to login
                mainView.push({
                    xtype: "requestStop",
                    title: "Request Stop"
                });

    },

    showRequestFeedback: function(button, e, eOpts) {

                var reportProblem = Ext.create('widget.feedback'),	// Login form
                    mainView = this.getMainView();				// Main view

                // Navigate to login
                mainView.push({
                    xtype: "feedback",
                    title: "Enter Feedback"
                });

    },

    showTrolleyAlerts: function(button, e, eOpts) {

                var reportProblem = Ext.create('widget.trolleyalerts'),	// Login form
                    mainView = this.getMainView();				// Main view

                // Navigate to login
                mainView.push({
                    xtype: "trolleyalerts",
                    title: "Trolley Alerts"
                });

    },

    login: function(button, e, eOpts) {
          var form = button.up('formpanel'),			// Login form
                	values = form.getValues(),				// Form values
                    mainView = this.getMainView();			// Main view
                	//loginPanel = this.getLoginPanel(),		// Login and register buttons
                	//welcomePanel = this.getWelcomePanel();	// Welcome panel

                // Success
                var successCallback = function(resp, ops) {

                //     // Go back
                //     mainView.pop();

                //     // Hide login panel
                //     loginPanel.hide();

                //     // Show welcome panel
                //     welcomePanel.show();



                    var jsonResp = Ext.util.JSON.decode(resp.responseText);
                      Ext.Msg.alert("Info","message: "+jsonResp.message);

                };

                // Failure
                var failureCallback = function(resp, ops) {



                   var jsonResp = Ext.util.JSON.decode(resp.responseText);
                    Ext.Msg.alert("Info","message: "+jsonResp.message);



                };

                var enctext = CryptoJS.MD5(values.password);

                // TODO: Login using server-side authentication service
                Ext.Ajax.request({
                		url: "http://pm-dev.cs.fiu.edu:8080/ppmws/userauth",
                        method: 'POST',
                        /*headers: { 'Content-Type': 'application/json' },*/
                    params: {"islogin":true,
                             "email":values.email,
                             "pass":String(enctext)
                            },
                		success: successCallback,
                		failure: failureCallback
                 });


    },

    register: function(button, e, eOpts) {
          var form = button.up('formpanel'),			// Login form
                	values = form.getValues(),				// Form values
                    mainView = this.getMainView();			// Main view
                	//loginPanel = this.getLoginPanel(),		// Login and register buttons
                	//welcomePanel = this.getWelcomePanel();	// Welcome panel

                // Success
                var successCallback = function(resp, ops) {

                //     // Go back
                //     mainView.pop();

                //     // Hide login panel
                //     loginPanel.hide();

                //     // Show welcome panel
                //     welcomePanel.show();


                    var jsonResp = Ext.util.JSON.decode(resp.responseText);
                      Ext.Msg.alert("Info","message:"+jsonResp.message);

                };

                // Failure
                var failureCallback = function(resp, ops) {

                   var jsonResp = Ext.util.JSON.decode(resp.responseText);
                              Ext.Msg.alert("Info","message:"+jsonResp.message);



                };
                //TODO: Registration using server-side authentication service

                     var pass1 = values.password;
                     var pass2 = values.confirmation;


                         if (pass1 != pass2)
                             return Ext.Msg.alert("Info","errorMessage: "+"Passwords do not match!");

                         else
                             {
                             var enctext = CryptoJS.MD5(values.password);


                                    Ext.Ajax.request({
                                        url: "http://pm-dev.cs.fiu.edu:8080/ppmws/userauth",
                                        method: 'POST',
                                        /*headers: { 'Content-Type': 'application/json' },*/
                                        params: {
                                            "islogin":false,
                                             "email":values.email,
                                             "pass": String(enctext)
                                            },
                                        success: successCallback,
                                        failure: failureCallback
                                    });
                             }


    }

});