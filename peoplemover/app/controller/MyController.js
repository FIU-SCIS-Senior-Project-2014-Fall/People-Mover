/*
 * File: app/controller/MyController.js
 */

Ext.define('PeopleMover.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        stores: [
            'listRoutes'
        ],

        refs: {
            list: 'main #myroutelist',
            listDetail: 'widget.DetailList',
            titleList: '#titleList',
            back: '#backButton'
        },

        control: {
            "list": {
                itemtap: 'onActivityListItemTap'
            }
        }
    },

    onActivityListItemTap: function(dataview, index, target, record, e, eOpts) {
        var sample = Ext.create('widget.DetailList');

        //Ext.getCmp('titleList').setTitle(MyApp.view.MyContainer.itemTpl);
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.setActiveItem(sample);

        //            var sample = Ext.create('MyApp.view.RouteDetailsList');

    }

});