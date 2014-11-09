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

                var MiddleRoute = [
                    new google.maps.LatLng(25.683558, -80.302937),
                    new google.maps.LatLng(25.679941, -80.302829),
                    new google.maps.LatLng(25.679579, -80.314014),
                    new google.maps.LatLng(25.674053, -80.313813),
                    new google.maps.LatLng(25.674111, -80.310723),
                    new google.maps.LatLng(25.674133, -80.309870),
                    new google.maps.LatLng(25.672324, -80.309800),
                    new google.maps.LatLng(25.672281, -80.310691),
                    new google.maps.LatLng(25.670047, -80.310594),
                    new google.maps.LatLng(25.669283, -80.310584),
                    new google.maps.LatLng(25.669206, -80.314628),
                    new google.maps.LatLng(25.674012, -80.314812),
                    new google.maps.LatLng(25.673928, -80.317830),
                    new google.maps.LatLng(25.673887, -80.318878),
                    new google.maps.LatLng(25.668423, -80.318685),
                    new google.maps.LatLng(25.666576, -80.318599),
                    new google.maps.LatLng(25.666770, -80.311508),
                    new google.maps.LatLng(25.667002, -80.302399),
                    new google.maps.LatLng(25.659674, -80.302129),
                    new google.maps.LatLng(25.659725, -80.300092),
                    new google.maps.LatLng(25.658033, -80.300011),
                    new google.maps.LatLng(25.658043, -80.300102),
                    new google.maps.LatLng(25.658527, -80.301325),
                    new google.maps.LatLng(25.658599, -80.301754),
                    new google.maps.LatLng(25.658609, -80.302092),
                    new google.maps.LatLng(25.659687, -80.302124),
                    new google.maps.LatLng(25.659658, -80.303406),
                    new google.maps.LatLng(25.659252, -80.318333),
                    new google.maps.LatLng(25.657376, -80.318258),
                    new google.maps.LatLng(25.655495, -80.318207),
                    new google.maps.LatLng(25.655606, -80.314575),
                    new google.maps.LatLng(25.655648, -80.312130),
                    new google.maps.LatLng(25.651944, -80.311970),
                    new google.maps.LatLng(25.651925, -80.313009),
                    new google.maps.LatLng(25.651777, -80.318062),
                    new google.maps.LatLng(25.654467, -80.318168),
                    new google.maps.LatLng(25.655517, -80.318203),
                    new google.maps.LatLng(25.655188, -80.327312),
                    new google.maps.LatLng(25.655246, -80.325016),
                    new google.maps.LatLng(25.654501, -80.324394),
                    new google.maps.LatLng(25.654018, -80.324201),
                    new google.maps.LatLng(25.652944, -80.324051),
                    new google.maps.LatLng(25.651581, -80.324233),
                    new google.maps.LatLng(25.651474, -80.327800),
                    new google.maps.LatLng(25.651408, -80.329799),
                    new google.maps.LatLng(25.651466, -80.327803),
                    new google.maps.LatLng(25.649657, -80.327760),
                    new google.maps.LatLng(25.649626, -80.328232),
                    new google.maps.LatLng(25.647730, -80.328146),
                    new google.maps.LatLng(25.647672, -80.330164),
                    new google.maps.LatLng(25.643997, -80.330056),
                    new google.maps.LatLng(25.644183, -80.321865),
                    new google.maps.LatLng(25.647878, -80.321986),
                    new google.maps.LatLng(25.648255, -80.309830),
                    new google.maps.LatLng(25.644541, -80.309680),
                    new google.maps.LatLng(25.644609, -80.307684),
                    new google.maps.LatLng(25.646398, -80.307716),
                    new google.maps.LatLng(25.646476, -80.307571),
                    new google.maps.LatLng(25.646529, -80.305737),
                    new google.maps.LatLng(25.647133, -80.305715),
                    new google.maps.LatLng(25.647279, -80.301697),
                    new google.maps.LatLng(25.649938, -80.301783),
                    new google.maps.LatLng(25.649793, -80.305807),
                    new google.maps.LatLng(25.655838, -80.306032),
                    new google.maps.LatLng(25.655896, -80.303328),
                    new google.maps.LatLng(25.655896, -80.302652),
                    new google.maps.LatLng(25.655702, -80.301848),
                    new google.maps.LatLng(25.655538, -80.301333),
                    new google.maps.LatLng(25.650538, -80.293747),
                    new google.maps.LatLng(25.647511, -80.293629)
                ];

                var path = new google.maps.Polyline({
                    path: MiddleRoute,
                    strokeColor: '#f08616',
                    strokeOpacity: 1.0,
                    strokeWeight: 5
                });



                var HighRoute = [
                    new google.maps.LatLng(25.653779, -80.290729),
                    new google.maps.LatLng(25.655539, -80.290804),
                    new google.maps.LatLng(25.655504, -80.293843),
                    new google.maps.LatLng(25.647486, -80.293639),
                    new google.maps.LatLng(25.647506, -80.295603),
                    new google.maps.LatLng(25.651819, -80.295688),
                    new google.maps.LatLng(25.655378, -80.300946),
                    new google.maps.LatLng(25.655920, -80.302684),
                    new google.maps.LatLng(25.655843, -80.306031),
                    new google.maps.LatLng(25.646519, -80.305731),
                    new google.maps.LatLng(25.646423, -80.307726),
                    new google.maps.LatLng(25.644585, -80.307705),
                    new google.maps.LatLng(25.644314, -80.317768),
                    new google.maps.LatLng(25.647196, -80.317854),
                    new google.maps.LatLng(25.647158, -80.318187),
                    new google.maps.LatLng(25.647013, -80.318444),
                    new google.maps.LatLng(25.646161, -80.319335),
                    new google.maps.LatLng(25.645968, -80.319818),
                    new google.maps.LatLng(25.645794, -80.320258),
                    new google.maps.LatLng(25.645736, -80.320665),
                    new google.maps.LatLng(25.645668, -80.321910),
                    new google.maps.LatLng(25.645040, -80.321899),
                    new google.maps.LatLng(25.644991, -80.323948),
                    new google.maps.LatLng(25.645194, -80.323970),
                    new google.maps.LatLng(25.645117, -80.326008),
                    new google.maps.LatLng(25.645914, -80.326047),
                    new google.maps.LatLng(25.645822, -80.330103),
                    new google.maps.LatLng(25.644013, -80.330060),
                    new google.maps.LatLng(25.644008, -80.328021),
                    new google.maps.LatLng(25.647742, -80.328145),
                    new google.maps.LatLng(25.647717, -80.329019),
                    new google.maps.LatLng(25.647688, -80.330178),
                    new google.maps.LatLng(25.648631, -80.330221),
                    new google.maps.LatLng(25.648670, -80.328198),
                    new google.maps.LatLng(25.649613, -80.328220),
                    new google.maps.LatLng(25.649666, -80.327764),
                    new google.maps.LatLng(25.651460, -80.327796),
                    new google.maps.LatLng(25.651407, -80.329754),
                    new google.maps.LatLng(25.651460, -80.327796),
                    new google.maps.LatLng(25.651514, -80.326251),
                    new google.maps.LatLng(25.655227, -80.326326),
                    new google.maps.LatLng(25.655198, -80.327260),
                    new google.maps.LatLng(25.655377, -80.322298),
                    new google.maps.LatLng(25.659083, -80.322440),
                    new google.maps.LatLng(25.659363, -80.314319),
                    new google.maps.LatLng(25.661143, -80.314372),
                    new google.maps.LatLng(25.661114, -80.316250), // high school
                    new google.maps.LatLng(25.661090, -80.318416),
                    new google.maps.LatLng(25.659243, -80.318330),
                    new google.maps.LatLng(25.659031, -80.325006),
                    new google.maps.LatLng(25.660345, -80.324696),
                    new google.maps.LatLng(25.664203, -80.322883),
                    new google.maps.LatLng(25.664735, -80.323011),
                    new google.maps.LatLng(25.665935, -80.322471),
                    new google.maps.LatLng(25.666456, -80.322368),
                    new google.maps.LatLng(25.666573, -80.318598),
                    new google.maps.LatLng(25.673874, -80.318845),
                    new google.maps.LatLng(25.673987, -80.314795),
                    new google.maps.LatLng(25.669190, -80.314601),
                    new google.maps.LatLng(25.669297, -80.310578),
                    new google.maps.LatLng(25.672265, -80.310675),
                    new google.maps.LatLng(25.672333, -80.309795),
                    new google.maps.LatLng(25.674132, -80.309870),
                    new google.maps.LatLng(25.674016, -80.313808),
                    new google.maps.LatLng(25.679566, -80.314011),
                    new google.maps.LatLng(25.679643, -80.310964),
                    new google.maps.LatLng(25.681500, -80.311029),
                    new google.maps.LatLng(25.681682, -80.302889),
                    new google.maps.LatLng(25.666984, -80.302374),
                    new google.maps.LatLng(25.667100, -80.298287),
                    new google.maps.LatLng(25.663367, -80.298244),
                    new google.maps.LatLng(25.663174, -80.302192),
                    new google.maps.LatLng(25.659770, -80.302020),
                    new google.maps.LatLng(25.659692, -80.300003),
                    new google.maps.LatLng(25.658029, -80.300019),
                    new google.maps.LatLng(25.658513, -80.301285),
                    new google.maps.LatLng(25.658590, -80.301714),
                    new google.maps.LatLng(25.658571, -80.302058),
                    new google.maps.LatLng(25.659643, -80.302110),
                    new google.maps.LatLng(25.659360, -80.314309),
                    new google.maps.LatLng(25.661159, -80.314341)
                ];

                var path2 = new google.maps.Polyline({
                    path: HighRoute,
                    strokeColor: '#40c5e6',
                    strokeOpacity: 0.65,
                    strokeWeight: 5
                });
                path2.setMap(gMap);
                path.setMap(gMap);

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
                            var closest = find_closest_marker(geo.getLatitude(), geo.getLongitude());

                           var closestLat = closest[0];
                           var closestLon = closest[1];

                           var marker = new google.maps.Marker({map: gMap, position: new google.maps.LatLng( closestLat, closestLon ), clickable: true});

                            marker.info = new google.maps.InfoWindow({
                              content: '<b>this is the closest location</b> '
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

function find_closest_marker( lat1, lon1 ) {    
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
        //console.log('d is ' + d);
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