
Ext.define('Demo.view.dndtoform.GridToForm',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.dndtoform.GridToFormController',
        'Demo.view.dndtoform.GridToFormModel'
    ],

    xtype: 'dndtoform-gridtoform',
    controller: 'dndtoform-gridtoform',
    viewModel: {
        type: 'dndtoform-gridtoform'
    },

    html: 'Hello, World!!'
});
