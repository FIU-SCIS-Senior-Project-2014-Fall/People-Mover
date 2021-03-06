/*
 * File: app/model/MiddleNorthModel.js
 */

Ext.define('PeopleMover.model.MiddleNorthModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest'
    ],

    config: {
        fields: [
            {
                name: 'stopId',
                type: 'int'
            },
            {
                name: 'routeId'
            },
            {
                name: 'street'
            },
            {
                name: 'latitude'
            },
            {
                name: 'longitude'
            },
            {
                name: 'scheduledTime'
            }
        ],
        proxy: {
            type: 'rest',
            url: 'http://pm-dev.cs.fiu.edu:8080/ppmws/getstops?RouteId=2',
            useDefaultXhrHeader: false
        }
    }
});
