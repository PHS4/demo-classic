/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    viewSource: function (btn) {
        if (window.viewSourceWindow) {
            return;
        }
        window.viewSourceWindow = Ext.create('Demo.view.source.SourceView', {
            width: '65%',
            height: '75%',
            autoShow: true
        });

        window.viewSourceWindow.on('close', e => window.viewSourceWindow = null);
    }
});
