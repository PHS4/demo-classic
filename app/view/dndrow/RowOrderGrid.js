
Ext.define('Demo.view.dndrow.RowOrderGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.dndrow.RowOrderGridController',
        'Demo.view.dndrow.RowOrderGridModel'
    ],

    xtype: 'dndrow-rowordergrid',
    controller: 'dndrow-rowordergrid',
    viewModel: {
        type: 'dndrow-rowordergrid'
    },

    html: 'Hello, World!!'
});
