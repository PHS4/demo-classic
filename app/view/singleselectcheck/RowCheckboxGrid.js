
Ext.define('Demo.view.singleselectcheck.RowCheckboxGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.singleselectcheck.RowCheckboxGridController',
        'Demo.view.singleselectcheck.RowCheckboxGridModel'
    ],

    xtype: 'singleselectcheck-rowcheckboxgrid',
    controller: 'singleselectcheck-rowcheckboxgrid',
    viewModel: {
        type: 'singleselectcheck-rowcheckboxgrid'
    },
    
    title: 'Single Select: Check',
    store: 'Companies',
    columnLines: true,

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.selection.Rows.html
     */
    selModel: {
        selType: 'checkboxmodel',
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
