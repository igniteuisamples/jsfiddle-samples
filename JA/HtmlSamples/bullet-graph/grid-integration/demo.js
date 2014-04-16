$(function () {
var data = [
            { id: 0, month: "1 月", min: 0, max: 750, consumption: 555, production: 550, ranges: [{ start: 0, end: 500 }, { start: 500, end: 640 }, { start: 640, end: 750 }] },
            { id: 1, month: "2 月", min: 0, max: 750, consumption: 670, production: 620, ranges: [{ start: 0, end: 333 }, { start: 333, end: 567 }, { start: 567, end: 750 }] },
            { id: 2, month: "3 月", min: 0, max: 750, consumption: 670, production: 700, ranges: [{ start: 0, end: 320 }, { start: 320, end: 567 }, { start: 567, end: 750 }] },
            { id: 3, month: "4 月", min: 0, max: 750, consumption: 610, production: 666, ranges: [{ start: 0, end: 320 }, { start: 320, end: 567 }, { start: 567, end: 750 }] }
        ], bg;

        $(function () {

            $("#grid").igGrid({
                primaryKey:"id",
                columns: [
                    { headerText: "id", key: "id", dataType: "number", hidden: true },
                    { headerText: "月", key: "month", dataType: "string", width: 100 },
                    { headerText: "消費 (TWh)", key: "consumption", dataType: "number", width: 130 },
                    { headerText: "生産 (TWh)", key: "production", dataType: "number", width: 120 },
                    { headerText: "消費チャート (TWh)", key: "graph", width: 470, template: "<div class='bullet-graph'></div>" }
                ],
                dataSource: data,
                autoGenerateColumns: false,
                rowsRendered: function (evt, ui) {
                    $(".bullet-graph").each(function (i) {
                        var item = data[i];
                        $(this).igBulletGraph({
                            height: "60px",
                            width: "450px",
                            backingBrush: 'transparent',
                            backingOutline: 'transparent',
                            minimumValue: item.min,
                            maximumValue: item.max,
                            targetValue: item.production,
                            value: item.consumption,
                            interval: 150,
                            minorTickCount: 4,
                            ranges: $.map(item.ranges, function (el, index) {
                                return {
                                    name: item.month + index,
                                    startValue: el.start,
                                    endValue: el.end
                                };
                            }),
                            transitionDuration: 1200,
                            scaleEndExtent: 0.9
                        });
                    });
                },
                features: [
                    {
                        name: "Updating",
                        enableAddRow: false,
                        editMode: "cell",
                        enableDeleteRow: false,
                        showReadonlyEditors: false,
                        enableDataDirtyException: false,
                        columnSettings: [
                            {
                                columnKey: "consumption",
                                editorType: "numeric",
                                validation: true,
                                editorOptions: { minValue: 0, maxValue: 750, required: true }
                            },
                            {
                                columnKey: "production",
                                editorType: "numeric",
                                validation: true,
                                editorOptions: { minValue: 0, maxValue: 750, required: true }
                            },
                            {
                                columnKey: "month",
                                readOnly: true
                            },
                            {
                                columnKey: "graph",
                                readOnly: true
                            }
                        ],
                        editCellEnding: function (evt, ui) {
                            if (ui.value != ui.oldValue) {
                                bg = $(".bullet-graph").eq(ui.rowID).detach();
                            }
                        },
                        editCellEnded: function (evt, ui) {
                            if (ui.value != ui.oldValue) {
                                $(".bullet-graph").eq(ui.rowID).remove();
                                ui.owner.element.find("tr[data-id=" + ui.rowID + "]>td:eq(3)").append(bg);
                                if (ui.columnKey == "consumption") {
                                    $(".bullet-graph").eq(ui.rowID).igBulletGraph("option", "value", ui.value);
                                }
                                if (ui.columnKey == "production") {
                                    $(".bullet-graph").eq(ui.rowID).igBulletGraph("option", "targetValue", ui.value);
                                }
                            }
                        }
                    }],
                caption: "エネルギー源"
            });
        });
});