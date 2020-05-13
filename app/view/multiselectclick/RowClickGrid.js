
Ext.define('Demo.view.multiselectclick.RowClickGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.multiselectclick.RowClickGridController',
        'Demo.view.multiselectclick.RowClickGridModel'
    ],

    xtype: 'multiselectclick-rowclickgrid',
    controller: 'multiselectclick-rowclickgrid',
    viewModel: {
        type: 'multiselectclick-rowclickgrid'
    },

    
    store: 'Companies',
    columnLines: true,
    
    title: 'Multi Select: Click',
    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.selection.Rows.html
     */
    selModel: {
        selType: 'rowmodel',
        mode: 'MULTI'
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
