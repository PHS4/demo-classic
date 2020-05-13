
Ext.define('Demo.view.formediting.FormGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.formediting.FormGridController',
        'Demo.view.formediting.FormGridModel'
    ],

    xtype: 'formediting-formgrid',
    controller: 'formediting-formgrid',
    viewModel: {
        type: 'formediting-formgrid'
    },

    html: 'Hello, World!!'
});
