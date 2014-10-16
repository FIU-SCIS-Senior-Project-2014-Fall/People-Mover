Ext.define('PeopleMover.view.Main', {
extend: 'Ext.Container',
xtype: 'main',
requires: [
   'Ext.TitleBar',
   'Ext.Button',
   'Ext.tab.Panel',
   //'PeopleMover.view.Main.model.item',
  // 'PeopleMover.view.Main.store.nList',
   //'Ext.dataview.NestedList',
   //'Ext.data.TreeStore'
   //'Ext.ToolBar'
] ,
config: {
//store: 'PeopleMover.view.Main.store.Main',
        fullscreen: true,
        layout: 'card',
            title: "Pinecrest Peple Mover",

    items: [
            {

            xtype: "toolbar",
            docked: "top",
            title: "Pinecrest People Mover",
            },
            {
                xtype: 'nestedlist',
                displayField: 'text',
                model: 'item',
                store: 'nList'
            },



            ]

            }




});