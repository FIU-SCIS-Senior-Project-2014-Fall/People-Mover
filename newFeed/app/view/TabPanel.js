/*
 * File: app/view/TabPanel.js
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

Ext.define('Feed.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabpanel',

    requires: [
        'Feed.view.PostsList',
        'Feed.view.About',
        'Feed.view.Routes.List',
        'Ext.navigation.View',
        'Ext.dataview.List',
        'Ext.navigation.Bar',
        'Ext.Button',
        'Ext.tab.Bar'
    ],

    config: {
        items: [
            {
                xtype: 'container',
                title: 'Posts',
                iconCls: 'star',
                id: 'postsTab',
                layout: 'fit',
                items: [
                    {
                        xtype: 'navigationview',
                        id: 'postsNav',
                        useTitleForBackButtonText: true,
                        items: [
                            {
                                xtype: 'postslist',
                                title: 'Post'
                            }
                        ],
                        navigationBar: {
                            items: [
                                {
                                    xtype: 'button',
                                    align: 'right',
                                    id: 'addButton',
                                    ui: 'action',
                                    iconCls: 'add',
                                    text: ''
                                },
                                {
                                    xtype: 'button',
                                    id: 'feedsButton',
                                    text: 'Feeds'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'About',
                iconCls: 'info',
                id: 'aboutTab',
                layout: 'fit',
                items: [
                    {
                        xtype: 'about'
                    }
                ]
            },
            {
                xtype: 'RoutesList',
                title: 'Routes',
                iconCls: 'trash'
            }
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});