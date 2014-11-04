/*
 * File: app/controller/StopController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
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
            }
        }
    },

    showMiddleNorthList: function(button, e, eOpts) {
            var stopList = Ext.create('widget.middlenorthview');
            mainView = this.getMainView();

            //navigate to Middle North Stop List
            mainView.push({
                xtype:"middlenorthview",
                title: "Middle North Stops"
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
        this.currentstop = record.get("name");
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