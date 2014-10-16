/*
 * File: app/controller/RouteController.js
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

Ext.define('Feed.controller.RouteController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.route',

    requires: [
        'Ext.util.DelayedTask'
    ],

    config: {
        models: [
            'UnitList'
        ],
        stores: [
            'UnitListStore'
        ],
        views: [
            'Routes.List'
        ]
    },

    launch: function() {
        var someFunction = function() {
            var task = Ext.create('Ext.util.DelayedTask', function() {
                var list = Ext.getCmp('routelist');
                list.getStore().load();
                list.refresh();
                console.log('callback!');
                someFunction.call(this);
            }, this);

            task.delay(10000);
        };


        someFunction();
    },

    init: function(application) {
        /*var task = Ext.create('Ext.util.DelayedTask', function () {
                       //load the list's store here. The list will be automatically updated
             //var list = Ext.getCmp('routelist');
             //list.getStore('UnitListStore').load();    // Assuming your list component is "listComp"
             //list.refresh();
            console.log('test!');
            // The task will be called after each 10000 ms
            task.delay(1000);
                },this);


        //The function will start after 0 milliseconds
        //so we want to start instantly at first
        task.delay(0);

        //to stop the task, just call the cancel method
        //task.cancel();*/
    }

});