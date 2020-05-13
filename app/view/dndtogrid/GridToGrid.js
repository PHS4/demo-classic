
Ext.define('Demo.view.dndtogrid.GridToGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.dndtogrid.GridToGridController',
        'Demo.view.dndtogrid.GridToGridModel'
    ],

    xtype: 'dndtogrid-gridtogrid',
    controller: 'dndtogrid-gridtogrid',
    viewModel: {
        type: 'dndtogrid-gridtogrid'
    },

    html: 'Hello, World!!'
});
