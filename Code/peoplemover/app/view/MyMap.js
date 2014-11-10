/*
 * File: app/view/MyMap.js
 */

Ext.define('PeopleMover.view.MyMap', {
    extend: 'Ext.Map',
    alias: 'widget.mymap',
    store: 'MapStore',

    requires: [
        'Ext.data.Store',
        ],

    config: {
        id: 'mymap',
        itemId: 'mymap',
        //useCurrentLocation: true,
        mapListeners: '//test',
        mapOptions: {
            center: new google.maps.LatLng(25.662715,
            -80.308101),
            zoom: 14,
            navigationControl: true,
            disableDefaultUI: true,
            
        }
    },

    initialize: function() {
        var gMap = this.getMap();

            var allStops = [
                                    [25.683558, -80.302937],[25.679579, -80.314014],[25.674111, -80.310723],
                                    [25.672324, -80.309774],[25.670047, -80.310594],[25.669206, -80.314628],[25.673928, -80.317830],
                                    [25.668423, -80.318685],[25.666770, -80.311508],[25.659658, -80.303406],[25.657376, -80.318258],
                                    [25.655606, -80.314575],[25.651925, -80.313009],[25.654467, -80.318168],[25.655188, -80.327312],
                                    [25.651581, -80.324233],[25.651474, -80.327800],[25.651408, -80.329799],[25.643997, -80.330056],
                                    [25.644072, -80.325969],[25.644183, -80.321865],[25.645683, -80.321900],[25.644609, -80.307684],
                                    [25.647133, -80.305715],[25.649387, -80.301740],[25.650818, -80.305817],[25.655838, -80.306032],
                                    [25.647511, -80.293629],[25.653779, -80.290729],[25.655539, -80.290804],[25.647486, -80.293639],
                                    [25.650833, -80.305817],[25.646519, -80.305731],[25.647196, -80.317854],[25.645668, -80.321910],
                                    [25.645117, -80.326008],[25.645914, -80.326047],[25.644013, -80.330060],[25.647717, -80.329019],
                                    [25.648631, -80.330221],[25.649666, -80.327764],[25.651407, -80.329754],[25.651460, -80.327796],
                                    [25.655198, -80.327260],[25.655377, -80.322298],[25.661114, -80.316250],[25.659031, -80.325006],
                                    [25.662501, -80.323666],[25.665944, -80.322421],[25.668420, -80.318673],[25.671978, -80.318802],
                                    [25.673951, -80.317826],[25.669190, -80.314601],[25.672333, -80.309795],[25.679566, -80.314011],
                                    [25.681500, -80.311029],[25.667100, -80.298287],[25.659692, -80.300003],[25.659650, -80.303408]
                                    ];


                var markers = new Array();

                for(var x = 0; x < allStops.length; x++)
                {

                    var close = allStops[x];
                    markers.push({
                        latitude: close[0],
                        longitude: close[1]
                    });
                }

             var geo = Ext.create('Ext.util.Geolocation', {
              autoUpdate: true,
              frequency: '10000',

                    listeners: {
                        locationupdate: function (geo) {        

                            var center = new google.maps.LatLng(geo.getLatitude(), geo.getLongitude());
                            var closest = near_me(geo.getLatitude(), geo.getLongitude());

                           var closestLat = closest[0];
                           var closestLon = closest[1];

                           var marker = new google.maps.Marker({map: gMap, position: new google.maps.LatLng( closestLat, closestLon ), clickable: true});

                            marker.info = new google.maps.InfoWindow({
                              content: '<b>this is the closest location</b>'
                            });

                            google.maps.event.addListener(marker, 'click', function() {
                              marker.info.open(gMap, marker);
                            });

                        },

                        locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {

                            if (bTimeout) {
                                alert('Timeout occurred.');
                            } 
                            else {
                                alert('Error occurred.');
                            }

                }

            }

        });

function near_me( lat1, lon1 ) {    
    var pi = Math.PI;
    var R = 6371; //equatorial radius
    var distances = [];
    var closest = -1;
    var lat3;
    var lon3;

    for( i=0; i < markers.length; i++ ) {  
        var lat2 = allStops[i][0];
        var lon2 = allStops[i][1];

        var chLat = lat2-lat1;
        var chLon = lon2-lon1;

        var dLat = chLat*(pi/180);
        var dLon = chLon*(pi/180);

        var rLat1 = lat1*(pi/180);
        var rLat2 = lat2*(pi/180);

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(rLat1) * Math.cos(rLat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;

        distances[i] = d;
        if ( closest == -1 || d < distances[closest] ) {
            closest = i;
            lat3 = lat2;
            lon3 = lon2;
        }
    }
    return [lat3, lon3];
    
} 


                var task = Ext.create('Ext.util.DelayedTask', function() {
                    //load the list's store here. The list will be automatically updated
                    listComp.getStore().load();    // Assuming your list component is "listComp"
                    listComp.refresh();

                    // The task will be called after each 10000 ms
                    task.delay(10000);
                }, this);



                var maprender = function() {
                                	        // Get a ref to the google map object (should be provided
                                	        // as an argument to the listener but apparently there is
                                	        // a bug...)
                                	//var gMap = this.getMap();
                                	var directionsService;
                                	var directionsDisplay;
                                	var rendererOptions = {
                                		map: gMap
                                	};
                                	directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

                                	directionsService = new google.maps.DirectionsService();

                                	        //1st stop 25.665225, -80.30050699999998
                                	        var iconBase = 'resources/images/';


                                                    




                              	};
                                //closestStop();
                                maprender();

    }





});