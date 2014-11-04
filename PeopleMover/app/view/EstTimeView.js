/*
 * File: app/view/EstTimeView.js
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

Ext.define('PeopleMover.view.EstTimeView', {
    extend: 'Ext.Container',
    alias: 'widget.esttimeview',

    requires: [
        'Ext.form.FieldSet',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.XTemplate'
    ],

    config: {
        id: 'esttimeview',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'fieldset',
                tpl: [
                    '<tpl for="."><br>',
                    '<h3><b>Stop Name:</b></h3><h3>{name}</h3>',
                    '    <h3><b>Scheduled Time:</b></h3><h3>{time}</h3></tpl>'
                ],
                title: 'Stop Description ',
                items: [
                    {
                        xtype: 'button',
                        border: 1,
                        centered: false,
                        disabled: false,
                        height: '50px',
                        hidden: false,
                        id: 'bfavorite',
                        itemId: 'bfavorite',
                        ui: 'action-round',
                        width: '100%',
                        iconAlign: 'center',
                        iconCls: 'favorites',
                        text: 'Save as Favorite<br>You Have To Log In'
                    },
                    {
                        xtype: 'spacer',
                        height: 30
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();
            if(localStorage.getItem("ppmtoken")!==null)
            {
                 var mybutton = this.down('#bfavorite');
                mybutton.setText('Save as Favorite');
                mybutton.enable();
            }
    }

});