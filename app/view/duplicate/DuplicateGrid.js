
Ext.define('Demo.view.duplicate.DuplicateGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.duplicate.DuplicateGridController',
        'Demo.view.duplicate.DuplicateGridModel'
    ],

    xtype: 'duplicate-duplicategrid',
    controller: 'duplicate-duplicategrid',
    viewModel: {
        type: 'duplicate-duplicategrid'
    },

    html: 'Hello, World!!'
});
