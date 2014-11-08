Ext.define('PeopleMover.store.WayPointStore', {
    extend: 'Ext.data.Store',

    requires: [
        'PeopleMover.model.Waypoints',
        'Ext.util.Sorter'
    ],

    config: {
        autoLoad: true,
        model: 'PeopleMover.model.Waypoints',
        storeId: 'WayPointStore'
    }
});