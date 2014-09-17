Ext.define('PeopleMover.store.nList', {
    extend : 'Ext.data.TreeStore',
    config : {
        model : 'PeopleMover.model.Item',
        defaultRootProperty : 'items',
        data : {
            items : [{
                text : 'Near Me',
                                handler: function(){                    
                    Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main'))).show();
                    } 
            },
            {
                text : 'Easy Tracker',
                                handler: function(){                    
                    Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main'))).show();
                    } 
            },
            {
                text : 'Trolley Tracker',
                                handler: function(){                    
                    Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main'))).show();
                    } 
            },
            {
                text : 'Route Map',
                                handler: function(){                    
                    Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main'))).show();
                    } 
            }, 
            {
                text : 'My Favorite Stops',
                                handler: function(){                    
                    Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main'))).show();
                    } 
            },
            {
                text : 'Trolley Status Alerts',
                                handler: function(){                    
                    Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main'))).show();
                    } 
            },
            {
                text : 'More...',
                handler: function(){                    
                    Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main'))).show();
                    } 
            }]
        }
    }
});