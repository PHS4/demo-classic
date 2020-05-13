#!/bin/bash

# Row Operations

## Editing
sencha generate view -n="basicediting.BasicGrid" -b="Ext.grid.Panel"
sencha generate view -n="batchediting.BatchGrid" -b="Ext.grid.Panel"
sencha generate view -n="popupediting.PopupGrid" -b="Ext.grid.Panel"
sencha generate view -n="formediting.FormGrid" -b="Ext.grid.Panel"
sencha generate view -n="eventediting.EventGrid" -b="Ext.grid.Panel"
sencha generate view -n="widgetediting.WidgetGrid" -b="Ext.grid.Panel"
sencha generate view -n="validediting.ValidateGrid" -b="Ext.grid.Panel"

## Drag and Drop
sencha generate view -n="dndrow.RowOrderGrid" -b="Ext.grid.Panel"
sencha generate view -n="dndtogrid.GridToGrid" -b="Ext.grid.Panel"
sencha generate view -n="dndtoform.GridToForm" -b="Ext.grid.Panel"
sencha generate view -n="dndformtogrid.FormToGrid" -b="Ext.grid.Panel"
sencha generate view -n="dndfieldtogrid.FieldToGrid" -b="Ext.grid.Panel"

## Copy Paste
sencha generate view -n="duplicate.DuplicateGrid" -b="Ext.grid.Panel"
sencha generate view -n="clipboard.ClipboardGrid" -b="Ext.grid.Panel"

## Expansion
sencha generate view -n="rowexpand.RowExpanderGrid" -b="Ext.grid.Panel"
sencha generate view -n="rowexpandlocked.RowExpanderLockedColumnsGrid" -b="Ext.grid.Panel"

## Selection
sencha generate view -n="singleselect.SingleRowGrid" -b="Ext.grid.Panel"
sencha generate view -n="singleselectcheck.RowCheckboxGrid" -b="Ext.grid.Panel"
sencha generate view -n="multiselectshift.RowShiftGrid" -b="Ext.grid.Panel"
sencha generate view -n="multiselectclick.RowClickGrid" -b="Ext.grid.Panel"
sencha generate view -n="multiselectcheck.RowCheckboxGrid" -b="Ext.grid.Panel"
sencha generate view -n="multiselectgroup.RowGroupsGrid" -b="Ext.grid.Panel"

## Spanning
sencha generate view -n="rowspan.RowSpanGrid" -b="Ext.grid.Panel"
sencha generate view -n="colspan.ColumnSpanGrid" -b="Ext.grid.Panel"

## Pinning/Locking
sencha generate view -n="locked.TopRowGrid" -b="Ext.grid.Panel"

## Height
sencha generate view -n="height.RowHeighGrid" -b="Ext.grid.Panel"

## Numberer
sencha generate view -n="numberer.NumberedRowGrid" -b="Ext.grid.Panel"

## Summary Row
sencha generate view -n="summary.SummaryGrid" -b="Ext.grid.Panel"

## Summary Row
sencha generate view -n="summary.SummaryGrid" -b="Ext.grid.Panel"

## Custom Menu
sencha generate view -n="menu.MenuGrid" -b="Ext.grid.Panel"

## Overflow Tooltops
sencha generate view -n="overflow.OverflowTooltipGrid" -b="Ext.grid.Panel"

## Animation
sencha generate view -n="animated.AnimatedGrid" -b="Ext.grid.Panel"

## Master Detail View
sencha generate view -n="master.MasterDetailGrid" -b="Ext.grid.Panel"
