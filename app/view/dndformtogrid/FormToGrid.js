
Ext.define('Demo.view.dndformtogrid.FormToGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.dndformtogrid.FormToGridController',
        'Demo.view.dndformtogrid.FormToGridModel'
    ],

    xtype: 'dndformtogrid-formtogrid',
    controller: 'dndformtogrid-formtogrid',
    viewModel: {
        type: 'dndformtogrid-formtogrid'
    },

    html: 'Hello, World!!'
});
