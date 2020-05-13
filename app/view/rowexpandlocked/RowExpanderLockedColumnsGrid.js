
Ext.define('Demo.view.rowexpandlocked.RowExpanderLockedColumnsGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.rowexpandlocked.RowExpanderLockedColumnsGridController',
        'Demo.view.rowexpandlocked.RowExpanderLockedColumnsGridModel'
    ],

    xtype: 'rowexpandlocked-rowexpanderlockedcolumnsgrid',
    controller: 'rowexpandlocked-rowexpanderlockedcolumnsgrid',
    viewModel: {
        type: 'rowexpandlocked-rowexpanderlockedcolumnsgrid'
    },

    title: 'Row Expander with Locked Columns',

    store: 'Companies',
    
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: true,

    columns: [{
        text: 'Company',
        dataIndex: 'name',
        locked: true,
        width: 230
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
