Ext.define('Demo.model.Item', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'manufacturer_id',
        'sku',
        'price',
        'name',
        'description',
        'image'
    ],
    proxy: {
        type: 'ajax',
        url: 'data/items',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});