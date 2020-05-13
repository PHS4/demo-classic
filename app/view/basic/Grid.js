
Ext.define('Demo.view.basic.Grid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.store.Companies',
        'Demo.view.basic.GridController',
        'Demo.view.basic.GridModel'
    ],

    xtype: 'basic-grid',
    controller: 'basic-grid',
    viewModel: {
        type: 'basic-grid'
    },

    title: 'Basic',
    
    store: 'Companies',
    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',
    headerBorders: false,

    viewConfig: {
        enableTextSelection: true
    },

    columns: [{
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
