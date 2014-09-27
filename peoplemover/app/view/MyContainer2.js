/*
 * File: app/view/MyContainer2.js
 */

Ext.define('PeopleMover.view.MyContainer2', {
    extend: 'Ext.Container',
    alias: 'widget.aboutUs',

    requires: [
        'Ext.TitleBar',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'About Us',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            if(Ext.getCmp('widget.main'))
                            {
                                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                Ext.getCmp('myTabPanel').setActiveItem(5);
                                Ext.Viewport.setActiveItem(Ext.getCmp('widget.main'));
                            }
                            else
                            {
                                var sample = Ext.create('PeopleMover.view.MyContainer');
                                Ext.getCmp('myTabPanel').setActiveItem(5);
                                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                Ext.Viewport.setActiveItem(sample);
                            }
                        },
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            }
        ]
    }

});