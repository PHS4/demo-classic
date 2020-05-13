
Ext.define('Demo.view.master.MasterDetailGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.master.MasterDetailGridController',
        'Demo.view.master.MasterDetailGridModel'
    ],

    xtype: 'master-masterdetailgrid',
    controller: 'master-masterdetailgrid',
    viewModel: {
        type: 'master-masterdetailgrid'
    },

    html: 'Hello, World!!'
});
