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
                // On each store record
                store.each(function(record, index, length) {

                    // Get position
                    //latLng = new google.maps.LatLng(record.get('lastLatitude'), record.get('lastLongitude'));
                    var m = new google.maps.LatLng(record.data.lastLatitude,
                                                   record.data.lastLongitude);
        //             var m = new google.maps.LatLng(25.6534939,
        //                                           -80.31298529999998);
                    // Create marker
                    marker = new google.maps.Marker({
                        position: m,
                        //map: gMap,
                        animation: google.maps.Animation.DROP,
                        draggable: true,
                        icon: iconBase + 'logo_icon.png'
                    });

                   // var lookup = [];
                    //lookup.push(new google.maps.LatLng(record.data.lastLatitude,
                                               //    record.data.lastLongitude));
                    //marker.setPosition(myLatLng);

        //            if(lookup.length == 2){
        //          setInterval(function() {
        //          position = m,
        //          marker.setPosition(marker.position);
        //      }, 5000);
        //             }else{

        //            //marker.setMap(null);
                   marker.setMap(map);
        //             }

                   // marker.setMap(map);

                    //updateMarker(marker);
                });

    },

    launch: function() {
        count = 0;
        var autocallFunction = function() {
                    var task = Ext.create('Ext.util.DelayedTask', function() {
                        var store, latLng, marker;
        var iconBase = 'resources/images/';
        //var gMap = this.getMapComponent();
        var map = Ext.getCmp('mymap').getMap();
                // Get store
                store = Ext.getStore('MapStore');
                store.load();
                // On each store record
                store.each(function(record, index, length) {



                    // Get position
                    //latLng = new google.maps.LatLng(record.get('lastLatitude'), record.get('lastLongitude'));
                    var m = new google.maps.LatLng(record.data.lastLatitude,
                                                   record.data.lastLongitude);
        //             var m = new google.maps.LatLng(25.6534939,
        //                                           -80.31298529999998);




                    // Create marker
                    marker = new google.maps.Marker({
                        position: m,
                        //map: gMap,
                        //animation: google.maps.Animation.DROP,
                        draggable: true,
                        icon: iconBase + 'logo_icon.png'
                    });


                   // if(count > 1){
                 setInterval(function() {

                 position = m,
                 //marker.setPosition(position);
                     marker.setMap(null);
             }, 5000);
                   // }else{

                   //
                    marker.setMap(map);
                    position = m;
                    marker.setPosition(position);
                    //marker.setMap(null);
                  //  count++;
                  //  }

                        //break;


                });

                        //console.log('callback!');
                        autocallFunction.call(this);
                    }, this);

                    task.delay(5000);
                };


                autocallFunction();
    }

});