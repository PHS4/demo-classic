
Ext.define('Demo.view.clipboard.ClipboardGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.clipboard.ClipboardGridController',
        'Demo.view.clipboard.ClipboardGridModel'
    ],

    xtype: 'clipboard-clipboardgrid',
    controller: 'clipboard-clipboardgrid',
    viewModel: {
        type: 'clipboard-clipboardgrid'
    },

    html: 'Hello, World!!'
});
