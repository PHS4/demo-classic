
Ext.define('Demo.view.overflow.OverflowTooltipGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.overflow.OverflowTooltipGridController',
        'Demo.view.overflow.OverflowTooltipGridModel'
    ],

    xtype: 'overflow-overflowtooltipgrid',
    controller: 'overflow-overflowtooltipgrid',
    viewModel: {
        type: 'overflow-overflowtooltipgrid'
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
    columns: {
        defaults: {
            // apply a renderer to all cells so the tooltip 
            // attribute is appended to the cell.
            renderer: Util.Renderer.tooltip
        },
        items: [{
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
            xtype: 'templatecolumn',
            tpl: '{priceChangePct}%',
            width: 100
        }, {
            text: 'Last Updated',
            dataIndex: 'priceLastChange',
            formatter: 'date("m/d/Y")',
            width: 115
        }]
    },

    listeners: {
        focus: function (view, e, eOpts) {
            console.log('focus', view)
        }
    }
});
