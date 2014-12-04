/*
 * File: app/controller/StopController.js
 */

Ext.define('PeopleMover.controller.StopController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        views: [
			'MainView',
            'EstTimeView'
        ],

        refs: {
            mainView: 'mainview',
            esttimeview : 'esttimeview',
            unitlistview:'unitlistview'
        },

        control: {
            "mainview #bmiddlenorth": {
                tap: 'showMiddleNorthList'
            },
            "middlenorthview": {
                itemtap: 'onListItemTap'
             },
            "mainview #bmiddlesouth": {
                tap: 'showMiddleSouthList'
            },
            "middlesouthview": {
                itemtap: 'onListItemTap'
             },
             "mainview #bhighnorth": {
                tap: 'showHighNorthList'
            },
            "highnorthview": {
                itemtap: 'onListItemTap'
             },
            "mainview #bhighsouth": {
                tap: 'showHighSouthList'
            },
            "highsouthview": {
                itemtap: 'onListItemTap'
             },
             "esttimeview #bfavorite":{
				 tap: 'onButtonTap' 
			}
        }
    },
    
    showMiddleNorthList: function(button, e, eOpts) {
            var stopList = Ext.create('widget.middlenorthview');
            mainView = this.getMainView();

            //navigate to Middle North Stop List
            mainView.push({
                xtype:"middlenorthview",
                title: "Middle School North Stops"
            });
    },

    showMiddleSouthList: function(button, e, eOpts) {
            var stopList = Ext.create('widget.middlesouthview');
            mainView = this.getMainView();

            //navigate to Middle North Stop List
            mainView.push({
                xtype:"middlesouthview",
                title: "Middle School South Stops"
            });
    },

    showHighNorthList: function(button, e, eOpts) {
            var stopList = Ext.create('widget.highnorthview');
            mainView = this.getMainView();

            //navigate to Middle North Stop List
            mainView.push({
                xtype:"highnorthview",
                title: "High School North Stops"
            });
    },

    showHighSouthList: function(button, e, eOpts) {
            var stopList = Ext.create('widget.highsouthview');
            mainView = this.getMainView();

            //navigate to Middle North Stop List
            mainView.push({
                xtype:"highsouthview",
                title: "High School South Stops"
            });
    },
    

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
       
        var estTime = Ext.create('PeopleMover.view.EstTimeView',
                                {
                                    title:" Estimated Time"
                                });
        mainView = this.getMainView();
        mainView.push(estTime);
        console.log(record.data);
        estTime.getAt(0).setTitle(dataview.title);
        var temp = Ext.Ajax.request({  
                url: "http://localhost:8080/getTimes", 
                params: {
                    "RouteId": record.data.routeId,
                    "StopId": record.data.stopId
                    },
                disableCaching: false,
                useDefaultXhrHeader: false, 
                success: function(data) {  
                var jsonResp = Ext.util.JSON.decode(data.responseText);
                //return jsonResp.message;
                //console.log(jsonResp.message);
                record.data.estimated = jsonResp.message;
                //record.data.set(jsonResp.message, 'Estimated');
                estTime.getAt(0).setData(record.data);

                //
                                         
                }  
        });


    },
	mydata:null,

    onButtonTap: function(button, e, eOpts) {
		var favToken = localStorage.getItem("ppmtoken");
		//mainView = this.getMainView();
		
		mainView = this.getMainView();
		
        if(favToken===null)
		{
			var estview = button.up();
			var mybutton = estview.down('#bfavorite');
					mybutton.setText('Save as Favorite');
					mybutton.enable();
					
					var eTimeView = Ext.getCmp("esttimeview");
					var data  = eTimeView.getAt(0).getData();
					//sessionStorage.setItem("data",data);
					this.mydata = data;
					console.log(this.mydata);
					
			   //~ var loginForm = Ext.create('widget.loginform');	// Login form
						//~ //mainView = this.getMainView();				// Main view
//~ 
					//~ // Navigate to login
					//~ mainView.push({
						//~ xtype: "loginform",
						//~ title: "Login"
					//~ });
					var mypanel =Ext.getCmp("myTabPanel");
					mypanel.setActiveItem(4);
					mainView.reset();
					
					estview.hide();
					

		}
		else{
			
			var eTimeView = Ext.getCmp("esttimeview");
			var data  = eTimeView.getAt(0).getData();
			if(data===null)
			{
				data = this.mydata; 
				//sessionStorage.getItem("data");
			}
			console.log(data);
			//~ var favView = Ext.get;
			//mainView = this.getMainView();
			//esttimeview  = this.getEstTimeView();
			     var successCallback = function(resp, ops) {
									
									
									Ext.Viewport.unmask(); 


                                    var jsonResp = Ext.JSON.decode(resp.responseText);
                                       Ext.Msg.alert("Info","message:"+jsonResp.message);

									
									
									var mypanel =Ext.getCmp("myTabPanel");
									mypanel.setActiveItem(2);
									mainView.reset();
									
									
                                    


                                };

                                // Failure
                                var failureCallback = function(resp, ops) {
								
								Ext.Viewport.unmask(); 
                                   var jsonResp = Ext.JSON.decode(resp.responseText);
                                              Ext.Msg.alert("Info","message:"+jsonResp.message);



                                };
                                //TODO: Registration using server-side authentication service

                                     
                                             Ext.Viewport.mask({ xtype: 'loadmask',
													message: "Setting Favorite.." });
                                                     var callparams = {
                                                            "token":favToken,
                                                            "stopid": data.stopId,
                                                             "routeid":data.routeId,
                                                             "remove": "false"

                                                            };
                                                 

                                                    Ext.Ajax.request({
                                                        url: "http://pm-dev.cs.fiu.edu:8080/ppmws/setalarm",
                                                        //url: "http://localhost:8080/setalarm",
                                                        method: 'POST',
                                                        /*headers: { 'Content-Type': 'application/json' },*/
                                                        params: callparams,
                                                        success: successCallback,
                                                        failure: failureCallback
                                                    });					
			}
    }

});
