/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Demo.Application',

    name: 'Demo',

    requires: [
        'Util.Renderer',
        // 'Demo.util.Renderer',
        'Demo.view.main.Main'
    ],
    
    models: [ 'Personnel', 'User', 'Company', 'Task' ],

    stores: [ 'Personnel', 'Users', 'Companies', 'Tasks' ],

    mainView: 'Demo.view.main.Main'
});
