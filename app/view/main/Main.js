/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.grid.plugin.Exporter',
        
        'Demo.view.source.SourceView',

        'Demo.view.basic.Grid',
        
        // Editing:
        'Demo.view.basicediting.BasicGrid',
        'Demo.view.batchediting.BatchGrid',
        'Demo.view.popupediting.PopupGrid',
        'Demo.view.formediting.FormGrid',
        'Demo.view.eventediting.EventGrid',
        'Demo.view.widgetediting.WidgetGrid',
        'Demo.view.validediting.ValidateGrid',
        
        // Drag and Drop:
        'Demo.view.dndrow.RowOrderGrid',
        'Demo.view.dndtogrid.GridToGrid',
        'Demo.view.dndtoform.GridToForm',
        'Demo.view.dndformtogrid.FormToGrid',
        'Demo.view.dndfieldtogrid.FieldToGrid',

        // Copy/Duplicate:
        'Demo.view.duplicate.DuplicateGrid',
        'Demo.view.clipboard.ClipboardGrid',
        'Demo.view.rowexpand.RowExpanderGrid',
        'Demo.view.rowexpandlocked.RowExpanderLockedColumnsGrid',

        // Selections
        'Demo.view.singleselect.SingleRowGrid',
        'Demo.view.singleselectcheck.RowCheckboxGrid',
        'Demo.view.multiselectshift.RowShiftGrid',
        'Demo.view.multiselectclick.RowClickGrid',
        'Demo.view.multiselectcheck.RowCheckboxGrid',
        'Demo.view.multiselectgroup.RowGroupsGrid',
        
        'Demo.view.rowspan.RowSpanGrid',
        'Demo.view.colspan.ColumnSpanGrid',
        
        'Demo.view.locked.TopRowGrid',
        'Demo.view.height.RowHeighGrid',
        'Demo.view.numberer.NumberedRowGrid',
        'Demo.view.summary.SummaryGrid',
        'Demo.view.menu.MenuGrid',
        'Demo.view.overflow.OverflowTooltipGrid',
        'Demo.view.animated.AnimatedGrid',

        'Demo.view.master.MasterDetailGrid',

        'Demo.view.main.MainController',
        'Demo.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    tabRotation: 0,
    tabPosition: 'left',
    tabStretchMax: true,

    header: {
        bind: { title: '{title}' },
        itemPosition: 1,
        items: [{
            xtype: 'button',
            ui: 'default-toolbar',
            cls: 'dock-tab-btn',
            iconCls: 'x-fa fa-code',
            text: 'View Source',
            handler: 'viewSource'
        }]
    },
    
    // bodyPadding: 20,

    tabBar: {
        layout: {
            pack: 'start'
        },
        border: false
    },

    layout: 'fit',
    defaults: { 
        layout: 'fit', 
        bodyPadding: 20,
        defaults: {
            headerBorders: true,
            gridLines: true,
            columnLines: true,
            frame: true
        }
    },
    items: [
        {
            title: 'Test Grid',
            items: {
                title: 'Test Grid',
                xtype: 'grid',
                
                header: {
                    itemPosition: 1, // after title before collapse tool
                    items: [{
                        ui: 'default-toolbar',
                        xtype: 'button',
                        cls: 'dock-tab-btn',
                        text: 'Export to ...',
                        menu: {
                            defaults: { handler: 'exportTo' },
                            items: [{
                                text: 'Excel xlsx',
                                cfg: { type: 'excel07', ext: 'xlsx' }
                            }, {
                                text: 'Excel xlsx (include groups)',
                                cfg: { type: 'excel07', ext: 'xlsx', includeGroups: true, includeSummary: true }
                            }, {
                                text: 'Excel xml',
                                cfg: { type: 'excel03', ext: 'xml' }
                            }, {
                                text: 'Excel xml (include groups)',
                                cfg: { includeGroups: true, includeSummary: true }
                            }, {
                                text: 'CSV',
                                cfg: { type: 'csv' }
                            }, {
                                text: 'TSV',
                                cfg: { type: 'tsv', ext: 'csv' }
                            }, {
                                text: 'HTML',
                                cfg: { type: 'html' }
                            }, {
                                text: 'HTML (include groups)',
                                cfg: { type: 'html', includeGroups: true, includeSummary: true }
                            }]
                        }
                    }]
                },

                plugins: {
                    gridexporter: true
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
                    dataIndex: 'name',
                    flex: 1,
                    tooltip: 'Company Name'
                }, {
                    text: 'Description',
                    dataIndex: 'desc',
                    flex: 2,
                    tooltip: 'Company Description'
                }, {
                    text: 'Price',
                    dataIndex: 'price',
                    formatter: 'usMoney',
                    width: 95,
                    exportStyle: [{
                        type: 'html', // used by the html exporter
                        format: 'Currency',
                        alignment: {
                            horizontal: 'Right'
                        },
                        font: {
                            italic: true
                        }
                    }, {
                        type: 'csv', // used by the `csv` exporter
                        format: 'General'
                    }]
                }, {
                    text: 'Change',
                    dataIndex: 'priceChange',
                    width: 80
                }, {
                    text: '% Change',
                    dataIndex: 'priceChangePct',
                    width: 100,
                }, {
                    text: 'Last Updated',
                    dataIndex: 'priceLastChange',
                    formatter: 'date("m/d/Y")',
                    width: 115,
                }]
            }
        },
        { title: 'Basic Grid',                   iconCls: 'x-fa fa-check-circle',    items: { xtype: 'basic-grid',                                   } },
        
        { title: 'Row: Numbered',                iconCls: 'x-fa fa-check-circle',    items: { xtype: 'numberer-numberedrowgrid',                     } },
        { title: 'Row: Variable Height',         iconCls: 'x-fa fa-check-circle',    items: { xtype: 'height-rowheighgrid',                          } },
        { title: 'Row: Locked Rows',             iconCls: 'x-fa fa-check-circle',    items: { xtype: 'locked-toprowgrid',                            } },
        { title: 'Row: Row Span',                iconCls: 'x-fa fa-question',        items: { xtype: 'rowspan-rowspangrid',                          } },
        { title: 'Row: Expansion',               iconCls: 'x-fa fa-check-circle',    items: { xtype: 'rowexpand-rowexpandergrid',                    } },
        { title: 'Row: Expand + Locked Columns', iconCls: 'x-fa fa-check-circle',    items: { xtype: 'rowexpandlocked-rowexpanderlockedcolumnsgrid', } },
        
        { title: 'Cell: Oveflow Tooltips',       iconCls: 'x-fa fa-check-circle',    items: { xtype: 'overflow-overflowtooltipgrid',                 } },
        
        { title: 'Column: Col Span',             iconCls: 'x-fa fa-question',        items: { xtype: 'colspan-columnspangrid',                       } },
        { title: 'Column: Menu',                 iconCls: 'x-fa fa-',                items: { xtype: 'menu-menugrid',                                } },
        
        { title: 'Editing: Row',                 iconCls: 'x-fa fa-',                items: { xtype: 'basicediting-basicgrid'                        } },
        { title: 'Editing: Cell',                iconCls: 'x-fa fa-',                items: { xtype: 'basicediting-basicgrid'                        } },
        { title: 'Editing: Batch',               iconCls: 'x-fa fa-question',        items: { xtype: 'batchediting-batchgrid'                        } },
        { title: 'Editing: Popup',               iconCls: 'x-fa fa-',                items: { xtype: 'popupediting-popupgrid'                        } },
        { title: 'Editing: Form',                iconCls: 'x-fa fa-',                items: { xtype: 'formediting-formgrid'                          } },
        { title: 'Editing: Events',              iconCls: 'x-fa fa-',                items: { xtype: 'eventediting-eventgrid'                        } },
        { title: 'Editing: Widgets',             iconCls: 'x-fa fa-',                items: { xtype: 'widgetediting-widgetgrid'                      } },
        { title: 'Editing: Validation',          iconCls: 'x-fa fa-',                items: { xtype: 'validediting-validategrid'                     } },
        
        { title: 'Selection: Row',               iconCls: 'x-fa fa-check-circle',    items: { xtype: 'singleselect-singlerowgrid',                   } },
        { title: 'Selection: Check',             iconCls: 'x-fa fa-check-circle',    items: { xtype: 'singleselectcheck-rowcheckboxgrid',            } },
        { title: 'Multi Select: Click',          iconCls: 'x-fa fa-check-circle',    items: { xtype: 'multiselectclick-rowclickgrid',                } },
        { title: 'Multi Select: Shift Click',    iconCls: 'x-fa fa-check-circle',    items: { xtype: 'multiselectshift-rowshiftgrid',                } },
        { title: 'Multi Select: Check',          iconCls: 'x-fa fa-check-circle',    items: { xtype: 'multiselectcheck-rowcheckboxgrid',             } },
        { title: 'Multi Select: Groups',         iconCls: 'x-fa fa',                 items: { xtype: 'multiselectgroup-rowgroupsgrid',               } },
        
        { title: 'Drag n Drop: Reorder',         iconCls: 'x-fa fa',                 items: { xtype: 'dndrow-rowordergrid',                          } },
        { title: 'Drag n Drop: Grid to Grid',    iconCls: 'x-fa fa',                 items: { xtype: 'dndtogrid-gridtogrid',                         } },
        { title: 'Drag n Drop: Grid to Form',    iconCls: 'x-fa fa',                 items: { xtype: 'dndtoform-gridtoform',                         } },
        { title: 'Drag n Drop: Form to Grid',    iconCls: 'x-fa fa',                 items: { xtype: 'dndformtogrid-formtogrid',                     } },
        { title: 'Drag n Drop: Field to Grid',   iconCls: 'x-fa fa',                 items: { xtype: 'dndfieldtogrid-fieldtogrid',                   } },
        
        { title: 'Animated',                     iconCls: 'x-fa fa-question',        items: { xtype: 'animated-animatedgrid',                        } },
        { title: 'Master Detail',                iconCls: 'x-fa fa',                 items: { xtype: 'master-masterdetailgrid',                      } }
    ]
});
