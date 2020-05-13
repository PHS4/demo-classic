
Ext.define('Demo.view.menu.MenuGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.menu.MenuGridController',
        'Demo.view.menu.MenuGridModel'
    ],

    xtype: 'menu-menugrid',
    controller: 'menu-menugrid',
    viewModel: {
        type: 'menu-menugrid'
    },

    html: 'Hello, World!!'
});
