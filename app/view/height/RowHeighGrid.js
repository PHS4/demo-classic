
Ext.define('Demo.view.height.RowHeighGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.height.RowHeighGridController',
        'Demo.view.height.RowHeighGridModel'
    ],

    xtype: 'height-rowheighgrid',
    controller: 'height-rowheighgrid',
    viewModel: {
        type: 'height-rowheighgrid'
    },

    title: 'Variable Row Height',
    store: 'Companies',
    multiSelect: true,
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: true,
    
    viewConfig: {
        enableTextSelection: true,
    },

    columns: [{
        text: 'Company',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Description',
        dataIndex: 'desc',
        flex: 2,
        variableRowHeight: true,
        cellWrap: true,
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
