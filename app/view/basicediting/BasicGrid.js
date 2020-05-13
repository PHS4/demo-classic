
Ext.define('Demo.view.basicediting.BasicGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.basicediting.BasicGridController',
        'Demo.view.basicediting.BasicGridModel'
    ],

    xtype: 'basicediting-basicgrid',
    controller: 'basicediting-basicgrid',
    viewModel: {
        type: 'basicediting-basicgrid'
    },
    
    title: 'Basic Editable',

    store: 'Companies',
    
    multiSelect: true,
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: true,

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html#cfg-columns
     */
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
        width: 95
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 80
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        width: 100
    }, {
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")',
        width: 115
    }],

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#cfg-listeners
     */
    listeners: {
        select: 'onSelect'
    }
});
