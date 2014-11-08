/*
 * File: app/controller/MapController.js
 */

Ext.define('PeopleMover.controller.MapController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.util.DelayedTask'
    ],

    config: {
        models: [
            'MapLocations'
        ],
        stores: [
            'MapStore'
        ],
        views: [
            'MyMap'
        ],

        refs: {
            mapComponent: '#mymap'
        },

        control: {
            "#mymap": {
                maprender: 'onMymapMaprender'
            }
        }
    },

    onMymapMaprender: function(map, gmap, eOpts) {
        var store, latLng, marker;
        var iconBase = 'resources/images/';
        var gMap = this.getMapComponent();
        var map = Ext.getCmp('mymap').getMap();
                // Get store
                store = Ext.getStore('MapStore');
                store.load();
                                    trolleys = [];
                // On each store record
                store.each(function(record, index, length) {

                    // Get position
                                        var m = new google.maps.LatLng(record.data.lastLatitude, record.data.lastLongitude);

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


                    for(var r = 0; r < allStops.length; r++){
                        var stops = allStops[r];

                        //var estimatedTime = find_estimated_distance( record.data.lastLatitude, record.data.lastLongitude, stops[0], stops[1] );

                        var m = new google.maps.LatLng(record.data.lastLatitude, record.data.lastLongitude)
                        var m2 = new google.maps.LatLng(stops[0],stops[1])

                        //meters just using this function
                        //the multiplication is to get from meters to miles

                        console.log('the distances are: ' + google.maps.geometry.spherical.computeDistanceBetween(m, m2)*0.000621371 + ' meters ' +
                          'for Trolley ' + record.data.unitID)
                    } 

                    // Create marker
                    marker = new google.maps.Marker({
                        position: m,
                        //map: gMap,
                        //title: record.data.unitID,
                        animation: google.maps.Animation.DROP,
                        draggable: true,
                        icon: iconBase + 'logo_icon.png',
                        title: record.data.unitID
                    });

                marker.setMap(map);

                trolleys.push(marker);

                for( i = 0; i < trolleys.length; i++)
                {
                    var contentString = record.data.address;

                    var infowindow = new google.maps.InfoWindow({
                          content: contentString
                      });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map,this);
                      });
                }
                   setInterval(function() {

                 for( i = 0; i < trolleys.length; i++)
                 {
                    trolleys[i].setMap(null);
                 }
                 trolleys = [];

             }, 9000);

                });

    },

    launch: function() {

        var autocallFunction = function() {
        var task = Ext.create('Ext.util.DelayedTask', function() {
        var store, latLng, marker;
        var iconBase = 'resources/images/';
        var map = Ext.getCmp('mymap').getMap();
                // Get store
                store = Ext.getStore('MapStore');
                store.load();
                // On each store record
                var trolley = [];
                store.each(function(record, index, length) {

                    // Get position
                    var m = new google.maps.LatLng(record.data.lastLatitude, record.data.lastLongitude);

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


                    for(var r = 0; r < allStops.length; r++){
                        var stops = allStops[r];

                        //var estimatedTime = find_estimated_distance( record.data.lastLatitude, record.data.lastLongitude, stops[0], stops[1] );

                        var m = new google.maps.LatLng(record.data.lastLatitude, record.data.lastLongitude)
                        var m2 = new google.maps.LatLng(stops[0],stops[1])

                        //meters just using this function
                        //the multiplication is to get from meters to miles

                        console.log('the distances are: ' + google.maps.geometry.spherical.computeDistanceBetween(m, m2)*0.000621371 + ' meters ' +
                          'for Trolley ' + record.data.unitID)
                    } 


                    // Create marker
                    marker = new google.maps.Marker({
                        position: m,
                        title: record.data.unitID,
                        draggable: true,

                        icon: iconBase + 'logo_icon.png'
                    });

                    trolley.push(marker);

                 setInterval(function() {

                 for( i = 0; i < trolley.length; i++)
                 {
                    trolley[i].setMap(null);
                 }

       
             }, 10000);

                     marker.setMap(map);
                     position = m;
                     marker.setPosition(position);

                    for( j = 0; j < trolley.length; j++)
                {
                    var contentString = 'Trolley ID: ' + record.data.unitID + '<br/>Location: ' + record.data.address;

                    var infowindow = new google.maps.InfoWindow({
                          content: contentString
                      });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map,this);
                      });
                }

                });

                        autocallFunction.call(this);
                    }, this);

                    task.delay(10000);
                };



                autocallFunction();
    }


});


function find_estimated_distance( lat1, lon1, lat2, lon2 ) {    

      var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km

  console.log('the caluclatd distance is ' + d);
  return d;  
}   ;

function deg2rad(deg) {
  return deg * (Math.PI/180)
};