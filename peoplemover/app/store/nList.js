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
                      Ext.create('PeopleMover.view.Main')),
                        {type: 'slide', direction:'left'}).show();
                } 
            },
            {
                text : 'Easy Tracker',
                                 items : [ {
                      text : 'Palmetto High North Route',
                      handler: function(){                    
                        Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main')),
                          {type: 'slide', direction:'left'}).show();
                      }

                    }, {
                      text : 'Palmetto High South Route',
                      handler: function(){                    
                        Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main')),
                            {type: 'slide', direction:'left'}).show();
                      } 
                    },{
                      text : 'Palmetto Middle North Route',
                      handler: function(){                    
                        Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main')),
                            {type: 'slide', direction:'left'}).show();
                      } 

                    },{
                    text : 'Palmetto Middle South Route',
                        handler: function(){                    
                        Ext.Viewport.animateActiveItem((
                          Ext.create('PeopleMover.view.Main')),
                            {type: 'slide', direction:'left'}).show();
                            } 
                },]
            },
            {
                text : 'Trolley Tracker',
                handler: function(){                    
                  Ext.Viewport.animateActiveItem((
                    Ext.create('PeopleMover.view.Main')),
                      {type: 'slide', direction:'left'}).show();
                            } 
            },
            {
                text : 'Route Map',
                handler: function(){                    
                  Ext.Viewport.animateActiveItem((
                    Ext.create('PeopleMover.view.Main')),
                      {type: 'slide', direction:'left'}).show();
                            } 
            }, 
            {
                text : 'My Favorite Stops',
                handler: function(){                    
                  Ext.Viewport.animateActiveItem((
                   Ext.create('PeopleMover.view.Main')),
                      {type: 'slide', direction:'left'}).show();
                      } 
            },
            {
                text : 'Trolley Status Alerts',
                handler: function(){                    
                    Ext.Viewport.animateActiveItem((
                      Ext.create('PeopleMover.view.Main')),
                        {type: 'slide', direction:'left'}).show();
                            } 
            },
            {
               text : 'More...',
                handler: function(){                    
                    Ext.Viewport.animateActiveItem((
                      Ext.create('PeopleMover.view.Main')),
                        {type: 'slide', direction:'left'}).show();
                      } 

            }]
        }
    }
});