Ext.define('Demo.store.Tasks', {
    extend: 'Ext.data.Store',
    model: 'Demo.model.Task',
    
    autoLoad: true,
    
    sorters: { 
        property: 'due', 
        direction: 'ASC' 
    },
    groupField: 'project',
    
    proxy: {
        type: 'ajax',
        url: 'data/tasks.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});