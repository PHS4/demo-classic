
Ext.define('Demo.view.rowspan.RowSpanGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.rowspan.RowSpanGridController',
        'Demo.view.rowspan.RowSpanGridModel'
    ],

    xtype: 'rowspan-rowspangrid',
    controller: 'rowspan-rowspangrid',
    viewModel: {
        type: 'rowspan-rowspangrid'
    },

    html: 'Hello, World!!'
});
