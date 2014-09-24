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
        null
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
