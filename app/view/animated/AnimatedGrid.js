
Ext.define('Demo.view.animated.AnimatedGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.animated.AnimatedGridController',
        'Demo.view.animated.AnimatedGridModel'
    ],

    xtype: 'animated-animatedgrid',
    controller: 'animated-animatedgrid',
    viewModel: {
        type: 'animated-animatedgrid'
    },

    html: 'Hello, World!!'
});
