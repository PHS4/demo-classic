
Ext.define('Demo.view.popupediting.PopupGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.popupediting.PopupGridController',
        'Demo.view.popupediting.PopupGridModel'
    ],

    xtype: 'popupediting-popupgrid',
    controller: 'popupediting-popupgrid',
    viewModel: {
        type: 'popupediting-popupgrid'
    },

    html: 'Hello, World!!'
});
