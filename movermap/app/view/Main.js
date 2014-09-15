Ext.define('myapp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Container',
        'Ext.navigation.View',
    ],
    config: {
        id: 'mainView',
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Main Menu'
                },

                html: [
                    "   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',
                //title: 'MyWin',
                //iconCls: 'user',
                scrollable: true,
                layout: 'fit',
                 items: [{
                //     docked: 'top',
                //     xtype: 'titlebar',
                //     title: 'Map_View'
                // },
                // {
                xtype: 'map_view'
                }]



                // items: [
                //     {
                //         docked: 'top',
                //         xtype: 'titlebar',
                //         title: 'Getting Started'
                //     },
                //     {
                //         xtype: 'video',
                //         url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                //         posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                //     }
                // ]
            }
        ]
    }
});
