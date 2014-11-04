/*
 * File: app/model/UnitList.js
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

Ext.define('PeopleMover.model.UnitList', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest'
    ],

    config: {
        fields: [
            {
                name: 'shortName'
            },
            {
                name: 'city'
            },
            {
                name: 'postalCode'
            },
            {
                name: 'countryCode'
            },
            {
                name: 'lastEventDate'
            },
            {
                name: 'unitID'
            },
            {
                name: 'lastLatitude'
            },
            {
                name: 'lastLongitude'
            },
            {
                name: 'licencePlate'
            },
            {
                name: 'serialNumber'
            },
            {
                name: 'imei'
            },
            {
                name: 'lastEventCode'
            },
            {
                name: 'eventName'
            },
            {
                name: 'speed'
            },
            {
                name: 'direction'
            },
            {
                name: 'dealerID'
            },
            {
                name: 'companyID'
            },
            {
                name: 'contactName'
            },
            {
                name: 'iconPath'
            },
            {
                name: 'assignedDriver'
            },
            {
                name: 'driverID'
            },
            {
                name: 'localLastEventDatetxt'
            },
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'address'
            },
            {
                name: 'state'
            }
        ],
        proxy: {
            type: 'rest',
            url: 'http://pm-dev.cs.fiu.edu:8080/ppmws/getunitlist',
            useDefaultXhrHeader: false
        }
    }
});