/*
 * File: app/view/TrolleyAlerts.js
 */

Ext.define('PeopleMover.view.TrolleyAlerts', {
    extend: 'Ext.Container',
    alias: 'widget.alerts',

    requires: [
        'Ext.TitleBar',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Trolley Alerts',
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