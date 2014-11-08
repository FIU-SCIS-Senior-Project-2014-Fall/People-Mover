/*
 * File: app/view/MiddleSouthView.js
 */

Ext.define('PeopleMover.view.MiddleSouthView', {
    extend: 'Ext.dataview.List',
    alias: 'widget.middlesouthview',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        store: 'MiddleSouthStore',
        onItemDisclosure: true,
        itemTpl: [
            '<div>{street}</div>'
        ]
    }

});