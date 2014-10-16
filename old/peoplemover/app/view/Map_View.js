Ext.define('PeopleMover.view.Map_View', {
    extend: 'Ext.Map',
    xtype: 'map_view',
    config: {
        layout: 'fit',
        id: 'map_view',
        alias: 'map_view',
        iconCls: 'icon-location',
        title: 'Location',
        useCurrentLocation: true,
        styleHtmlContent: true,
        // header:{
        //         titlePosition: 0,
        //         items:[{
        //             xtype:'button',
        //             text: 'Edit',
        //             handler: function(){
        //                 alert('button clicked!');
        //             }
        //         }]    
        //     },
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'MyLocation',

        }],
         // trackingButton = Ext.create('Ext.Button', {
         //        iconCls: 'locate'
         //    }),

         //    PinecrestButton = Ext.create('Ext.Button', {
         //        pressed: true,
         //        iconCls: 'maps'
         //    }),
        mapOptions: {
          center: new google.maps.LatLng(25.662715, -80.308101),
          zoom: 15,
          disableDefaultUI: true
       }
    },
    constructor: function(config) {
        this.callParent(config);
        if(google.maps == undefined )
        {
              this.setHtml('<p id="maperror">Internet Connection Required!</p>');
        }
        // if (!(window.google || {}).maps) {
        //     this.setHtml('<p id="maperror">Internet Connection Required!</p>');
        // }
    }
});