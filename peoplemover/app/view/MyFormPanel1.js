/*
 * File: app/view/MyFormPanel1.js
 */

Ext.define('PeopleMover.view.MyFormPanel1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contactUs',

    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.TextArea'
    ],

    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Feedback',
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
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        labelWrap: true,
                        name: 'nameBox',
                        required: true
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        labelWrap: true,
                        name: 'emailBox',
                        required: true,
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Your Feedback',
                        labelWidth: '35%',
                        labelWrap: true,
                        name: 'infoBox',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'confirm',
                text: 'Submit'
            }
        ]
    }

});