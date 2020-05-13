
Ext.define('Demo.view.validediting.ValidateGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.validediting.ValidateGridController',
        'Demo.view.validediting.ValidateGridModel'
    ],

    xtype: 'validediting-validategrid',
    controller: 'validediting-validategrid',
    viewModel: {
        type: 'validediting-validategrid'
    },

    html: 'Hello, World!!'
});
