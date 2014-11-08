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
        'MapLocations',
        'MiddleNorthModel',
        'MiddleSouthModel',
        'HighNorthModel',
        'HighSouthModel'
    ],
    stores: [
        'listRoutes',
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
