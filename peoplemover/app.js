/*
 * File: app.js
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'routeInfo'
    ],
    stores: [
        'listRoutes'
    ],
    views: [
        'MyContainer',
        'RouteDetailsList',
        'MyContainer2',
        'MyFormPanel1',
        'Problem',
        'requestStop',
        'TrolleyAlerts',
        'MyNavigationView',
        'MyPanel1'
    ],
    controllers: [
        'MyController'
    ],
    name: 'PeopleMover',

    launch: function() {
      Ext.fly('appLoadingImage').destroy();
      Ext.fly('appLoadingIndicator').destroy();

        Ext.create('PeopleMover.view.MyContainer', {fullscreen: true});
    }

});
