Ext.define('PeopleMover.model.SubModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
    ],

    config: {
        fields: [
            {
                name: 'latitude',//,
                //mapping: 'latitude'
            },
            {
                name: 'longitude',//,
                //mapping: 'latitude'
            }
        ],
    }
});