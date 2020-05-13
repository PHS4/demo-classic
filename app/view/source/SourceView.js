/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.window.Window.html
 */
Ext.define('Demo.view.source.SourceView', {
    extend: 'Ext.window.Window',
    requires: [
        'Demo.ux.Code',

        'Demo.view.source.SourceViewModel',
        'Demo.view.source.SourceViewController'
    ],

    xtype: 'sourceview',
    viewModel: 'sourceviewmodel',
    controller: 'sourceviewcontroller',

    maximizable: true,
    collapsible: true,

    layout: 'fit',

    title: 'View Source',
    
    fileExtension: /^.*?((?:\.\w+)+)$/g,


    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.Component.html#method-initComponent
     */
    initComponent: function() {

        var me = this;
        var files = me.controller.collectSourceFiles();
        
        console.log(files);

        // files.forEach(f => f.split('/'))
        
        Ext.apply(me, {

            dockedItems: [
                {
                    dock: 'left',
                    xtype: 'grid',
                    scrollable: true,
                    width: 240,
                    height: '100%',
                    store: {
                        fields: [ 'text', 'type' ],
                        data: files
                    },
                    columns: [{
                        text: 'File',
                        dataIndex: 'text',
                        flex: 1
                    }],
                    listeners: {
                        select: 'changeSource'
                    }
                }
            ],

            items: [{
                xtype: 'code',
                language: 'javascript',
                value: '// choose a file',
                margin: 10
            }]
        });

        me.callParent(arguments);
    }
});