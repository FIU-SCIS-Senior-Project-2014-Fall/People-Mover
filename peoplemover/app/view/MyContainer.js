/*
 * File: app/view/MyContainer.js
 */

Ext.define('PeopleMover.view.MyContainer', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    requires: [
        'Ext.TitleBar',
        'Ext.Img',
        'Ext.tab.Panel',
        'Ext.tab.Bar',
        'Ext.Button',
        'Ext.navigation.View',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Map'
    ],
    

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        xtype: 'image',
                        docked: 'top',
                        height: 50,
                        width: 150,
                        src: 'resources/images/word_pvlogo.png'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                activeItem: 2,
                id: 'myTabPanel',
                itemId: 'myTabPanel',
                tabBar: {
                    docked: 'bottom',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    }
                },
                items: [
                    {
                        xtype: 'container',
                        title: 'Routes',
                        iconCls: 'info',
                        items: [
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                style: 'background: white',
                                text: 'Palmetto High North Route'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                style: 'background: white',
                                text: 'Palmetto High South Route'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                style: 'background: white',
                                text: 'Palmetto Middle North Route'
                            },
                            {
                                xtype: 'button',
                                border: 1,
                                height: '50px',
                                style: 'background: white',
                                text: 'Palmetto Middle South Route'
                            }
                        ]
                    },
                    {
                        xtype: 'navigationview',
                        title: 'Favorites',
                        iconCls: 'favorites',
                        items: [
                            {
                                xtype: 'list',
                                itemTpl: [
                                    '<div>List Item {string}</div>'
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'map',
                        title: 'Near Me',
                        iconCls: 'maps',
                        mapOptions: {
                            center: new google.maps.LatLng(25.662715,
                            -80.308101),
                            zoom: 14,
                            navigationControl: true,
                            disableDefaultUI: true,

                        },listeners: {
        maprender: function() {
            // Get a ref to the google map object (should be provided
            // as an argument to the listener but apparently there is
            // a bug...)
            var gMap = this.getMap();
            var directionsService;
            var directionsDisplay;
            var rendererOptions = {
                map: gMap
              }
            directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)

            directionsService = new google.maps.DirectionsService();

            //1st stop 25.665225, -80.30050699999998
            var middle = [[25.6534939,-80.31298529999998]];
            var iconBase = 'resources/images/';

            for(var i = 0; i < middle.length; i++){
                var block = middle[i];
                new google.maps.Marker({
                map: gMap,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng (block[0],block[1]),
                title:"Palmetto Middle School",
                icon: iconBase + 'middlebusstop.png'
            });

            }

            var high = [[25.6602027,-80.31616079999998]];

            for(var i = 0; i < high.length; i++){
                var block = high[i];
                new google.maps.Marker({
                map: gMap,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng (block[0],block[1]),
                title:"Palmetto High School",
                icon: iconBase + 'seniorbusstop.png'
            });

            }

            var position= [
            [25.6577797, -80.3126168], [25.6710309, -80.30413820000001], [25.665225, -80.30050699999998],
            [25.6726499,-80.31166989999997], [25.6688665,-80.303542], [25.674441, -80.31784800000003], [25.6692328, -80.3126011],
            [25.6699387, -80.31465049999997]];

            var wayStops= [
            [25.6577797, -80.3126168], [25.6710309, -80.30413820000001], [25.665225, -80.30050699999998],
            [25.6726499,-80.31166989999997], [25.6688665,-80.303542], [25.674441, -80.31784800000003], [25.6692328, -80.3126011],
            [25.6699387, -80.31465049999997], [25.666213, -80.30943889999998], [25.6657788, -80.31045340000003], [25.6798662, -80.30383089999998],
            [25.6836482, -80.2991265], [25.669451, -80.28562699999998]];


            //var waypoints = [];
            /*waypoint1 = new google.maps.LatLng(25.6577797, -80.3126168);
            waypoint2 = new google.maps.LatLng(25.6710309, -80.30413820000001);

            wayPointArray = new Array();
            wayPointArray.push({location: waypoint1, stopover: false});
            wayPointArray.push({location: waypoint2, stopover: false});

            */wayPointArray = new Array();

            for (var i = 0; i < 8; i++){
                var block = position[i];
                waypoint = new google.maps.LatLng(block[0], block[1]);
                wayPointArray.push({location: waypoint, stopover: false});
            }

            
          /* for (var i = 0; i < position.length; i++) {
                var block= position[i];
                waypoints.push({
                    location: new google.maps.LatLng (block[0],block[1]),
                    stopover: true
                });
        }*/


            for(var i = 0; i < position.length; i++){
                var block = position[i];
                new google.maps.Marker({
                map: gMap,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(block[0],block[1]),
                title:"Hello World!"
            });

                var request = {
      origin: new google.maps.LatLng (25.6602027,-80.31616079999998),
      destination: new google.maps.LatLng (25.6534939,-80.31298529999998),
      waypoints: wayPointArray,
      travelMode: google.maps.TravelMode.DRIVING
  };

  // Route the directions and pass the response to a
  // function to create markers for each step.
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      //var warnings = document.getElementById("warnings_panel");
      //warnings.innerHTML = "" + response.routes[0].warnings + "";
      directionsDisplay.setDirections(response);
      //showSteps(response);
    }
  });

            }

            google.maps.event.addListener(block, 'click', function() {
    infowindow.open(map,block);
  });




        }, 
                    }},
                    {
                        xtype: 'container',
                        title: 'Service Times',
                        iconCls: 'info'
                    },
                    {
                        xtype: 'container',
                        title: 'More',
                        iconCls: 'more',
                        padding: '',
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.aboutUs'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.about'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.MyContainer2');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                border: 1,
                                height: '50px',
                                itemId: 'aboutUs',
                                style: 'background: white',
                                iconCls: 'team',
                                text: 'About Us'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.problem'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.problem'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.Problem');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                height: '50px',
                                style: 'background:white',
                                iconCls: 'info',
                                text: 'Report a Problem'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.requestStop'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.requestStop'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.requestStop');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                border: 1,
                                height: '50px',
                                style: 'background:white',
                                iconCls: 'add',
                                text: 'Request A Stop'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.contactUs'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.contactUs'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.MyFormPanel1');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                border: 1,
                                height: '50px',
                                itemId: 'contactUs',
                                style: 'background:white',
                                iconCls: 'reply',
                                text: 'Enter Feedback'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(Ext.getCmp('widget.alerts'))
                                    {
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(Ext.getCmp('widget.alerts'));
                                    }
                                    else
                                    {
                                        var sample = Ext.create('PeopleMover.view.TrolleyAlerts');
                                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                        Ext.Viewport.setActiveItem(sample);
                                    }
                                },
                                height: '50px',
                                style: 'background:white',
                                iconCls: 'info',
                                text: 'Trolley Alerts'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if (!this.overlay) {
                                        this.overlay = Ext.Viewport.add({
                                            alias: 'widget.popup',
                                            id: 'popupmenu',
                                            xtype: 'fieldset',
                                            modal: true,
                                            hideOnMaskTap: true,
                                            showAnimation: {
                                                type: 'popIn',
                                                duration: 250,
                                                easing: 'ease-out'
                                            },
                                            hideAnimation: {
                                                type: 'popOut',
                                                duration: 250,
                                                easing: 'ease-out'
                                            },
                                            centered: true,
                                            width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
                                            height: Ext.filterPlatform('ie10') ? '30%' : Ext.os.deviceType == 'Phone' ? 220 : 400,
                                            styleHtmlContent: true,


                                            items: [
                                            {
                                                docked: 'top',
                                                xtype: 'toolbar',
                                                title: 'Login'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'User Name'
                                            },
                                            {
                                                xtype: 'passwordfield',
                                                label: 'Password'
                                            },
                                            {
                                                xtype: 'container',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center'
                                                },
                                                items: [
                                                {
                                                    xtype: 'button',
                                                    margin: '5px',
                                                    ui: 'confirm',
                                                    text: 'Sign In'
                                                },
                                                {
                                                    xtype: 'button',
                                                    margin: '5px',
                                                    ui: 'decline',
                                                    padding: '5px',
                                                    text: 'Cancel',
                                                    listeners : {
                                                        tap : function() {
                                                            var pnl = Ext.getCmp('popupmenu');
                                                            pnl.hide();
                                                        }
                                                    }

                                                }
                                                ]
                                            }
                                            ],
                                            scrollable: false
                                        });
                                    }

                                    this.overlay.show();
                                },
                                border: 1,
                                height: '50px',
                                id: 'signinbutton',
                                style: 'background:white',
                                iconCls: 'user',
                                text: 'Sign In'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});