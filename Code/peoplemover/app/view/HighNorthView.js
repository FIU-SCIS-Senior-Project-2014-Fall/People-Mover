/*
 * File: app/view/MiddleNorthView.js
 */

Ext.define('PeopleMover.view.HighNorthView', {
    extend: 'Ext.dataview.List',
    alias: 'widget.highnorthview',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        store: 'HighNorthStore',
        onItemDisclosure: true,
        itemTpl: [
            '<div>{street}</div>'
        ]
    }

});