/*
 * File: app/view/MiddleSouthView.js
 */

Ext.define('PeopleMover.view.HighSouthView', {
    extend: 'Ext.dataview.List',
    alias: 'widget.highsouthview',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        store: 'HighSouthStore',
        onItemDisclosure: true,
        itemTpl: [
            '<div>{street}</div>'
        ]
    }

});