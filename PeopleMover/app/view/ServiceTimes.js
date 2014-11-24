/*
 * File: app/view/ServiceTimes.js
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

Ext.define('PeopleMover.view.ServiceTimes', {
    extend: 'Ext.Container',
    alias: 'widget.servicetimes',

   requires: [
        'Ext.field.TextArea'
    ],

    config: {
        items: [
            {
                xtype: 'textareafield',
                height: '100%',
                //maxHeight: '100%',
                label: 'People Mover Service Time',
                labelWrap: true,
                html: '<p>Palmetto Middle Shool: </br>8:40AM - 9:00AM' +
						' </br> 4:00PM - 4:40PM</p>'+'</br>'+
						'<p>Palmetto Senior High School: '+
						' </br>6:40AM - 7:15AM'+
						' </br> 2:30PM - 3:00PM'+
						' </br> 5:30PM - 6:455PM</p>',
                readOnly: true
            }
        ]
    }

});
