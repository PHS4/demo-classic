
Ext.define('Demo.view.multiselectgroup.RowGroupsGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.multiselectgroup.RowGroupsGridController',
        'Demo.view.multiselectgroup.RowGroupsGridModel'
    ],

    xtype: 'multiselectgroup-rowgroupsgrid',
    controller: 'multiselectgroup-rowgroupsgrid',
    viewModel: {
        type: 'multiselectgroup-rowgroupsgrid'
    },

    html: 'Hello, World!!'
});
