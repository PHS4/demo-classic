Ext.define('Demo.view.basicediting.BasicGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.basicediting-basicgrid',


    onSelect: function () {
        console.log(arguments.callee.name, ...arguments);
    }
});
