/*
 * File: app/view/MyContainer.js
 */

Ext.define('PeopleMover.view.MyContainer', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    requires: [
        'Ext.TitleBar',
        'Ext.Img',
        'Ext.tab.Panel',
        'Ext.tab.Bar',
        'Ext.Button',
        'Ext.navigation.View',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Map'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        xtype: 'image',
                        docked: 'top',
                        height: 50,
                        width: 150,
                        src: 'resources/images/word_pvlogo.png'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                activeItem: 2,
                id: 'myTabPanel',
                itemId: 'myTabPanel',
                tabBar: {
                    docked: 'bottom',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    }
                },
                items: [
                    {
                        xtype: 'container',
                        title: 'Routes',
                        iconCls: 'info',
                        items: [
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                style: 'background: white',
                                text: 'Palmetto High North Route'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                style: 'background: white',
                                text: 'Palmetto High South Route'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                style: 'background: white',
                                text: 'Palmetto Middle North Route'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                style: 'background: white',
                                text: 'Palmetto Middle South Route'
                            }
                        ]
                    },
                    {
                        xtype: 'navigationview',
                        title: 'Favorites',
                        iconCls: 'favorites',
                        items: [
                            {
                                xtype: 'list',
                                itemTpl: [
                                    '<div>List Item {string}</div>'
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'map',
                        title: 'Near Me',
                        iconCls: 'maps',
                        mapOptions: {
                            center: new google.maps.LatLng(25.662715,
                            -80.308101),
                            zoom: 15,
                            disableDefaultUI: true
                        }
                    },
                    {
                        xtype: 'container',
                        title: 'Service Times',
                        iconCls: 'info'
                    },
                    {
                        xtype: 'container',
                        title: 'More',
                        iconCls: 'more',
                        padding: '',
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.aboutUs'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.about'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.MyContainer2');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                border: 1,
                                height: '50px',
                                itemId: 'aboutUs',
                                style: 'background: white',
                                iconCls: 'team',
                                text: 'About Us'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.problem'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.problem'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.Problem');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                height: '50px',
                                style: 'background:white',
                                iconCls: 'info',
                                text: 'Report a Problem'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.requestStop'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.requestStop'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.requestStop');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                border: 1,
                                height: '50px',
                                style: 'background:white',
                                iconCls: 'add',
                                text: 'Request A Stop'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.contactUs'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.contactUs'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.MyFormPanel1');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                border: 1,
                                height: '50px',
                                itemId: 'contactUs',
                                style: 'background:white',
                                iconCls: 'reply',
                                text: 'Enter Feedback'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.alerts'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.alerts'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.TrolleyAlerts');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                height: '50px',
                                style: 'background:white',
                                iconCls: 'info',
                                text: 'Trolley Alerts'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if (!this.overlay) {
                                        this.overlay = Ext.Viewport.add({
                                            alias: 'widget.popup',
                                            id: 'popupmenu',
                                            xtype: 'fieldset',
                                            modal: true,
                                            hideOnMaskTap: true,
                                            showAnimation: {
                                                type: 'popIn',
                                                duration: 250,
                                                easing: 'ease-out'
                                            },
                                            hideAnimation: {
                                                type: 'popOut',
                                                duration: 250,
                                                easing: 'ease-out'
                                            },
                                            centered: true,
                                            width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
                                            height: Ext.filterPlatform('ie10') ? '30%' : Ext.os.deviceType == 'Phone' ? 220 : 400,
                                            styleHtmlContent: true,


                                            items: [
                                            {
                                                docked: 'top',
                                                xtype: 'toolbar',
                                                title: 'Login'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'User Name'
                                            },
                                            {
                                                xtype: 'passwordfield',
                                                label: 'Password'
                                            },
                                            {
                                                xtype: 'container',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center'
                                                },
                                                items: [
                                                {
                                                    xtype: 'button',
                                                    margin: '5px',
                                                    ui: 'confirm',
                                                    text: 'Sign In'
                                                },
                                                {
                                                    xtype: 'button',
                                                    margin: '5px',
                                                    ui: 'decline',
                                                    padding: '5px',
                                                    text: 'Cancel',
                                                    listeners : {
                                                        tap : function() {
                                                            var pnl = Ext.getCmp('popupmenu');
                                                            pnl.hide();
                                                        }
                                                    }

                                                }
                                                ]
                                            }
                                            ],
                                            scrollable: false
                                        });
                                    }

                                    this.overlay.show();
                                },
                                border: 1,
                                height: '50px',
                                id: 'signinbutton',
                                style: 'background:white',
                                iconCls: 'user',
                                text: 'Sign In'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});