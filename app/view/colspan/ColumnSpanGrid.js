
Ext.define('Demo.view.colspan.ColumnSpanGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.colspan.ColumnSpanGridController',
        'Demo.view.colspan.ColumnSpanGridModel'
    ],

    xtype: 'colspan-columnspangrid',
    controller: 'colspan-columnspangrid',
    viewModel: {
        type: 'colspan-columnspangrid'
    },

    html: 'Hello, World!!'
});
