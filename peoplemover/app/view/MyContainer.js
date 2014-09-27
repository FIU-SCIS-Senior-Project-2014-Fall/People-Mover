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
        'Ext.navigation.View',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Map',
        'Ext.Button'
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
                        xtype: 'navigationview',
                        title: 'Routes',
                        iconCls: 'info',
                        itemId: 'routeView',
                        items: [
                            {
                                xtype: 'list',
                                itemId: 'myroutelist',
                                itemTpl: [
                                    '<div>{route}</div>'
                                ],
                                store: 'listRoutes'
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
                        title: 'Mover Alerts',
                        iconCls: 'info',
                        html: 'Trolley 1: Malfunction...north route will not be available today!',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: 'Alerts'
                            }
                        ]
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
                                height: '50px',
                                style: 'background:white',
                                iconCls: 'info',
                                text: 'Trolley Alerts'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});