
Ext.define('Demo.view.eventediting.EventGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.eventediting.EventGridController',
        'Demo.view.eventediting.EventGridModel'
    ],

    xtype: 'eventediting-eventgrid',
    controller: 'eventediting-eventgrid',
    viewModel: {
        type: 'eventediting-eventgrid'
    },

    html: 'Hello, World!!'
});
