/*
 * File: app.js
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'routeInfo',
        'UnitList',
        'WayPoints1',
        'WayPoints2',
        'WayPoints3',
        'WayPoints4',
        'MapLocations',
        'MiddleNorthModel',
        'MiddleSouthModel',
        'HighNorthModel',
        'HighSouthModel'
    ],
    stores: [
        'listRoutes',
        'WayPointStore1',
        'WayPointStore2',
        'WayPointStore3',
        'WayPointStore4',
        'UnitListStore',
        'MapStore',
        'MiddleSouthStore',
        'MiddleNorthStore',
        'HighNorthStore',
        'HighSouthStore'
    ],
    views: [
        'RouteDetailsList',
        'FeedBackView',
        'Problem',
        'requestStop',
        'TrolleyAlerts',
        'MyNavigationView',
        'UnitListView',
        'MyMap',
        'LoginForm',
        'RegisterForm',
        'MainView',
        'MiddleSouthView',
        'MiddleNorthView',
        'HighNorthView',
        'HighSouthView',
        'AboutUs',
        'EstTimeView'
    ],
    controllers: [
        'MyController',
        'UnitListController',
        'UserController',
        'MapController',
        'StopController'
    ],
    name: 'PeopleMover',

    launch: function() {
        Ext.fly('appLoadingImage').destroy();
              Ext.fly('appLoadingIndicator').destroy();
        Ext.create('PeopleMover.view.MainView', {fullscreen: true});
    }

});
