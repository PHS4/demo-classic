Ext.define('Demo.view.multiselectcheck.RowCheckboxGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.multiselectcheck.RowCheckboxGridController',
        'Demo.view.multiselectcheck.RowCheckboxGridModel'
    ],

    xtype: 'multiselectcheck-rowcheckboxgrid',
    controller: 'multiselectcheck-rowcheckboxgrid',
    viewModel: {
        type: 'multiselectcheck-rowcheckboxgrid'
    },

    title: 'Multi Select: Checkbox',

    store: 'Companies',
    columnLines: true,
    selType: 'checkboxmodel',

    columns: [{
        text: "Company",
        dataIndex: 'name',
        flex: 1
    }, {
        text: "Price",
        dataIndex: 'price',
        width: 100,
        formatter: 'usMoney'
    }, {
        text: "Change",
        width: 100,
        dataIndex: 'priceChange'
    }, {
        text: "% Change",
        width: 100,
        dataIndex: 'priceChangePct'
    }, {
        text: "Last Updated",
        width: 120,
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")'
    }]
});
