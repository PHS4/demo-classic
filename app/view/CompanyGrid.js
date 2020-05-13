Ext.define('Demo.view.CompanyGrid', {
    extend: 'Ext.grid.Panel',

    controller: {
        onApprove: function (grid, rowIndex, colIndex) {
            var rec = grid.getStore().getAt(rowIndex);
            Ext.Msg.alert('Approve', rec.get('name'));
        },

        onDecline: function (grid, rowIndex, colIndex) {
            var rec = grid.getStore().getAt(rowIndex);
            Ext.Msg.alert('Decline', rec.get('name'));
        },

        renderChange: function (value) {
            return this.renderSign(value, '0.00');
        },

        renderPercent: function (value) {
            return this.renderSign(value, '0.00%');
        },

        renderSign: function (value, format) {
            var text = Ext.util.Format.number(value, format),
                tpl = this.signTpl,
                data = this.data;

            if (Math.abs(value) > 0.1) {
                if (!tpl) {
                    this.signTpl = tpl = this.getView().lookupTpl('signTpl');
                    this.data = data = {};
                }

                data.value = value;
                data.text = text;

                text = tpl.apply(data);
            }

            return text;
        }
    },

    store: 'Companies',
    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',
    headerBorders: false,

    viewConfig: {
        enableTextSelection: true
    },

    columns: [{
        text: 'Company',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'Price',
        width: 95,
        formatter: 'usMoney',
        dataIndex: 'price'
    }, {
        text: 'Change',
        width: 80,
        renderer: 'renderChange',
        dataIndex: 'priceChange'
    }, {
        text: '% Change',
        width: 100,
        renderer: 'renderPercent',
        dataIndex: 'priceChangePct'
    }, {
        text: 'Last Updated',
        width: 115,
        formatter: 'date("m/d/Y")',
        dataIndex: 'priceLastChange'
    }, {
        xtype: 'actioncolumn',
        width: 50,
        menuDisabled: true,
        sortable: false,
        items: [{
            iconCls: 'x-fa fa-check green icon-margin',
            handler: 'onApprove'
        }, {
            iconCls: 'x-fa fa-ban red',
            handler: 'onDecline'
        }]
    }],

    signTpl: '<span style="color:{value:sign(\'"#cf4c35"\',\'"#73b51e"\')}">{text}</span>'
});