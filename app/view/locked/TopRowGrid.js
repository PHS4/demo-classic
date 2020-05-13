
Ext.define('Demo.view.locked.TopRowGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.store.Tasks',
        'Demo.view.locked.TopRowGridController',
        'Demo.view.locked.TopRowGridModel'
    ],

    xtype: 'locked-toprowgrid',
    controller: 'locked-toprowgrid',
    viewModel: {
        type: 'locked-toprowgrid'
    },


    title: 'Locking Grid',
    store: 'Companies',
    
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: true,

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: 'Company Name',
        dataIndex: 'name',
        // locked: true,
        width: 230
    }, {
        text: 'Description',
        dataIndex: 'desc',
        flex: 2
    }, {
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 80
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 90
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        width: 105
    }, {
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")',
        width: 135
    }]
});
