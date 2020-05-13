Ext.define('Demo.view.source.SourceViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sourceviewmodel',

    data: {},

    stores: {
        files: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                        text: 'index.html',
                        leaf: true,
                    },
                    {
                        text: 'app.js',
                        leaf: true
                    },
                    {
                        text: 'app',
                        expanded: true,
                        children: [
                            {
                                text: 'model',
                                children: []
                            },
                            {
                                text: 'view',
                                children: []
                            },
                            {
                                text: 'store',
                                children: []
                            },
                            {
                                text: 'ux',
                                children: []
                            },
                            {
                                text: 'util',
                                children: []
                            },
                            {
                                text: 'Application.js',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        }
    }
});