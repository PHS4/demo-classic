
Ext.define('Demo.view.summary.SummaryGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.summary.SummaryGridController',
        'Demo.view.summary.SummaryGridModel'
    ],

    xtype: 'summary-summarygrid',
    controller: 'summary-summarygrid',
    viewModel: {
        type: 'summary-summarygrid'
    },

    store: 'Tasks',
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        items: [{
            tooltip: 'Toggle the visibility of the summary row',
            text: 'Toggle Summary',
            enableToggle: true,
            pressed: true,
            handler: function () {
                grid.getView().getFeature('group').toggleSummaryRow();
            }
        }]
    }],
    features: [{
        id: 'group',
        ftype: 'groupingsummary',
        groupHeaderTpl: '{name}',
        hideGroupedHeader: true,
        enableGroupingMenu: false
    }],
    columns: [{
        text: 'Task',
        flex: 1,
        tdCls: 'task',
        sortable: true,
        dataIndex: 'description',
        hideable: false,
        summaryType: 'count',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return ((value === 0 || value > 1) ? '(' + value + ' Tasks)' : '(1 Task)');
        }
    }, {
        header: 'Project',
        width: 180,
        sortable: true,
        dataIndex: 'project'
    }, {
        header: 'Due Date',
        width: 136,
        sortable: true,
        dataIndex: 'due',
        summaryType: 'max',
        renderer: Ext.util.Format.dateRenderer('m/d/Y'),
        summaryRenderer: Ext.util.Format.dateRenderer('m/d/Y'),
        field: {
            xtype: 'datefield'
        }
    }, {
        header: 'Estimate',
        width: 100,
        sortable: true,
        dataIndex: 'estimate',
        summaryType: 'sum',
        renderer: function (value, metaData, record, rowIdx, colIdx, store, view) {
            return value + ' hours';
        },
        summaryRenderer: function (value, summaryData, dataIndex) {
            return value + ' hours';
        },
        field: {
            xtype: 'numberfield'
        }
    }, {
        header: 'Rate',
        width: 120,
        sortable: true,
        renderer: Ext.util.Format.usMoney,
        summaryRenderer: Ext.util.Format.usMoney,
        dataIndex: 'rate',
        summaryType: 'average',
        field: {
            xtype: 'numberfield'
        }
    }, {
        id: 'cost',
        header: 'Cost',
        width: 100,
        sortable: false,
        groupable: false,
        renderer: function (value, metaData, record, rowIdx, colIdx, store, view) {
            return Ext.util.Format.usMoney(record.get('estimate') * record.get('rate'));
        },
        dataIndex: 'cost',
        summaryType: function (records, values) {
            var i = 0,
                length = records.length,
                total = 0,
                record;

            for (; i < length; ++i) {
                record = records[i];
                total += record.get('estimate') * record.get('rate');
            }

            return total;
        },
        summaryRenderer: Ext.util.Format.usMoney
    }]
});
