
Ext.define('Demo.view.rowexpand.RowExpanderGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.rowexpand.RowExpanderGridController',
        'Demo.view.rowexpand.RowExpanderGridModel'
    ],

    xtype: 'rowexpand-rowexpandergrid',
    controller: 'rowexpand-rowexpandergrid',
    viewModel: {
        type: 'rowexpand-rowexpandergrid'
    },

    title: 'Row Expander',

    store: 'Companies',
    columnLines: true,

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
        formatter: 'usMoney', 
        dataIndex: 'price', 
        width: 100 
    }, { 
        text: 'Change', 
        dataIndex: 'priceChange', 
        width: 100 
    }, { 
        text: '% Change', 
        dataIndex: 'priceChangePct', 
        width: 100 
    }, { 
        text: 'Last Updated', 
        formatter: 'date("m/d/Y")', 
        dataIndex: 'priceLastChange', 
        width: 100
    }],

    plugins: {
        rowexpander: {
            rowBodyTpl: new Ext.XTemplate(
                '<p><b>Company:</b> {name}</p>',
                '<p><b>Change:</b> {change:this.formatChange}</p>',
                '<p><b>Description:</b> {desc}</p>',
                {
                    formatChange: function (v) {
                        var color = v >= 0 ? 'green' : 'red';
                        return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
                    }
                }
            )
        }
    }
});
