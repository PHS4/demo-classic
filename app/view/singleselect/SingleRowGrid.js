
Ext.define('Demo.view.singleselect.SingleRowGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.singleselect.SingleRowGridController',
        'Demo.view.singleselect.SingleRowGridModel'
    ],

    xtype: 'singleselect-singlerowgrid',
    controller: 'singleselect-singlerowgrid',
    viewModel: {
        type: 'singleselect-singlerowgrid'
    },

    title: 'Single Select: Click',
    store: 'Companies',
    columnLines: true,

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.selection.Rows.html
     */
    selModel: {
        selType: 'rowmodel',
        mode: 'SINGLE'
    },

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
