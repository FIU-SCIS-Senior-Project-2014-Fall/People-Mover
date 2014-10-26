/*
 * File: app/view/MainView.js
 */

Ext.define('PeopleMover.view.MainView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainview',

    requires: [
        'PeopleMover.view.UnitListView',
        'PeopleMover.view.MyMap',
        'Ext.tab.Panel',
        'Ext.tab.Bar',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.Map',
        'Ext.navigation.Bar',
        'Ext.Img'
    ],

    config: {
        items: [
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
                        xtype: 'unitlistview',
                        title: 'Favorites',
                        iconCls: 'star'
                    },
                    {
                        xtype: 'mymap',
                        title: 'Near Me',
                        iconCls: 'maps'
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
                                border: 1,
                                height: '50px',
                                itemId: 'aboutUs',
                                style: 'background: white',
                                iconCls: 'team',
                                text: 'About Us'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                itemId: 'reportProblem',
                                style: 'background:white',
                                iconCls: 'info',
                                text: 'Report a Problem'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                itemId: 'requestStop',
                                style: 'background:white',
                                iconCls: 'add',
                                text: 'Request A Stop'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                itemId: 'feedback',
                                style: 'background:white',
                                iconCls: 'reply',
                                text: 'Enter Feedback'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                itemId: 'trolleyAlerts',
                                style: 'background:white',
                                iconCls: 'info',
                                text: 'Trolley Alerts'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                id: 'showLoginButton',
                                itemId: 'showLoginButton',
                                style: 'background:white',
                                iconCls: 'user',
                                text: 'Login'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                id: 'showRegisterButton',
                                itemId: 'showRegisterButton',
                                style: 'background:white',
                                iconCls: 'user',
                                text: 'Registration'
                            }
                        ]
                    }
                ]
            }
        ],
        navigationBar: {
            docked: 'top',
            items: [
                {
                    xtype: 'titlebar',
                    align: 'right',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'image',
                            height: 50,
                            width: 150,
                            src: 'resources/images/word_pvlogo.png'
                        }
                    ]
                }
            ]
        }
    }

});