
Ext.define('Demo.view.widgetediting.WidgetGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.widgetediting.WidgetGridController',
        'Demo.view.widgetediting.WidgetGridModel'
    ],

    xtype: 'widgetediting-widgetgrid',
    controller: 'widgetediting-widgetgrid',
    viewModel: {
        type: 'widgetediting-widgetgrid'
    },

    
});
