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
            'EstTimeView'
        ],

        refs: {
            mainView: 'mainview'
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
        /*// if (this.currentStop == record.data) {
        //             Ext.getCmp('viewport').setActiveItem(1);
        //             return;
        //         }
        // this.currentStop = record.data;
        // Ext.getCmp('viewport').setActiveItem(1);
        // Ext.getCmp('esttimeview').setData(this.currentStop);
        */
        //var reportProblem = Ext.create('widget.esttimeview'),	// Login form
        //mainView = this.getMainView();

        //Ext.Msg.alert("Info","clicked");
        console.log(record.data);
        //Ext.getStore('MiddleNorthStore').clearFilter();
        //this.currentstop = record.get("street");
        //Ext.getStore('MiddleNorthStore').filter("name",this.currentstop);
        console.log(dataview.title);

        var estTime = Ext.create('PeopleMover.view.EstTimeView',
                                {
                                    title:" Estimated Time"
                                });
        mainView.push(estTime);
        estTime.getAt(0).setTitle(dataview.title);

        estTime.getAt(0).setData(record.data);


        /*mainView.push(
        {
            xtype: "esttimeview",
            title: dataview.title +"</br>" +" Estimated Time",
            data: record.getData()
        });*/


    }

});