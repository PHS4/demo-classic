
Ext.define('Demo.view.dndfieldtogrid.FieldToGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.dndfieldtogrid.FieldToGridController',
        'Demo.view.dndfieldtogrid.FieldToGridModel'
    ],

    xtype: 'dndfieldtogrid-fieldtogrid',
    controller: 'dndfieldtogrid-fieldtogrid',
    viewModel: {
        type: 'dndfieldtogrid-fieldtogrid'
    },

    html: 'Hello, World!!'
});
