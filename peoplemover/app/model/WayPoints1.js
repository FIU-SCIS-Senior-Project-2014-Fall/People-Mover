Ext.define('PeopleMover.model.Waypoints', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest'
    ],

    config: {
        fields: [
            {
                name: 'latitude'
            },
            {
                name: 'longitude'
            },
            {
                name: 'stopId'
            },
            {
                name: 'wayID'
            },
            {
                name: 'routeID'
            }
        ],
        proxy: {
            type: 'rest',
            url: 'http://pm-dev.cs.fiu.edu:8080/ppmws/getwaypoints?StopId=1&RouteId=1',
            useDefaultXhrHeader: false
        }
    }
});