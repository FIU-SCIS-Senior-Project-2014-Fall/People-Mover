/*
 * File: app/view/MiddleNorthView.js
 */

Ext.define('PeopleMover.view.MiddleNorthView', {
    extend: 'Ext.dataview.List',
    alias: 'widget.middlenorthview',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        store: 'MiddleNorthStore',
        onItemDisclosure: true,
        itemTpl: [
            '<div>{street}</div>'
        ]
    }

});