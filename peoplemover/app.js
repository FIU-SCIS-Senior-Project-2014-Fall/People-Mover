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
        'MapLocations'
    ],
    stores: [
        'listRoutes',
        'UnitListStore',
        'MapStore'
    ],
    views: [
        'RouteDetailsList',
        'MyContainer2',
        'FeedBackView',
        'Problem',
        'requestStop',
        'TrolleyAlerts',
        'MyNavigationView',
        'MyPanel1',
        'UnitListView',
        'MyMap',
        'LoginForm',
        'RegisterForm',
        'MainView'
    ],
    controllers: [
        'MyController',
        'UnitListController',
        'UserController',
        'MapController'
    ],
    name: 'PeopleMover',

    launch: function() {
        Ext.fly('appLoadingImage').destroy();
              Ext.fly('appLoadingIndicator').destroy();
        Ext.create('PeopleMover.view.MainView', {fullscreen: true});
    }

});
