
Ext.define('Demo.view.numberer.NumberedRowGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.numberer.NumberedRowGridController',
        'Demo.view.numberer.NumberedRowGridModel'
    ],

    xtype: 'numberer-numberedrowgrid',
    controller: 'numberer-numberedrowgrid',
    viewModel: {
        type: 'numberer-numberedrowgrid'
    },

    title: 'Grid with Numbered Rows',

    columnLines: true,
    store: 'Companies',

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: 'Company',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Description',
        dataIndex: 'desc',
        flex: 2
    }, {
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 95,
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 80
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        width: 100,
    }, {
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")',
        width: 115,
    }]
});
