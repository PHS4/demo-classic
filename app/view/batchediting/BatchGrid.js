
Ext.define('Demo.view.batchediting.BatchGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.batchediting.BatchGridController',
        'Demo.view.batchediting.BatchGridModel'
    ],

    xtype: 'batchediting-batchgrid',
    controller: 'batchediting-batchgrid',
    viewModel: {
        type: 'batchediting-batchgrid'
    },

    title: 'Batch Editing',

    /**
     * Including the store in the grid definition 
     * to allow this grid to be used as a self contained component.
     */
    store: {
        autoLoad: true,
        type: 'users'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html#cfg-columns
     */
    columns: [{
        xtype: 'gridcolumn',
        dataIndex: 'id',
        text: 'ID',
        width: 60,
        align: 'right'
    }, {
        dataIndex: 'first_name',
        text: 'First Name',
        width: 110,
        align: 'left'
    }, {
        dataIndex: 'last_name',
        text: 'Last Name',
        width: 110,
        align: 'left'
    }, {
        dataIndex: 'email',
        text: 'Email',
        width: 300
    }, {
        xtype: 'booleancolumn',
        dataIndex: 'active',
        text: 'Active',
        width: 80,
        align: 'center',
        trueText: 'Yes',
        falseText: 'No'
    }, {
        xtype: 'datecolumn',
        dataIndex: 'created_at',
        text: 'Created',
        width: 100,
        align: 'center',
    }, {
        xtype: 'datecolumn',
        dataIndex: 'updated_at',
        text: 'Updated',
        width: 140,
        align: 'center'
    }]
});
