$(function () {
var lg; 
        $(function () {

            $("#grid").igGrid({
                height: 500,
                primaryKey:"id",
                columns: [
                    { headerText: "id", key: "id", dataType: "number", hidden: true},
                    { headerText: "時間", key: "Time", dataType: "string", width: 80 },
                    { headerText: "風速 (mph)", key: "WindSpeed", dataType: "number", width: 160 },
                    { headerText: "風速ゲージ (mph)", key: "gauge", width: 370, template: "<div class='linear-gauge' ></div>" }
                ],
                dataSource: data,
                autoGenerateColumns: false,
                rowsRendered: function (evt, ui) {
                    $(".linear-gauge").each(function (i) {
                        var item = data[i];
                        $(this).igLinearGauge({
                            height: "60px",
                            width: "100%",
                            backingBrush: "transparent",
                            backingOutline: "transparent",
                            minimumValue: 0,
                            maximumValue: 9,
                            scaleEndExtent: 0.9,
                            labelsPostInitial: 1, 
                            value: item.WindSpeed,
                            needleBrush: "white",
                            needleOutline: "#2582a9",  
                            ranges: [
                                { name: "calm", startValue: 0, endValue: 1 },
                                { name: "lightAir", startValue: 1, endValue: 4 },
                                { name: "lightBreeze", startValue: 4, endValue: 7 },
                                { name: "gentleBreeze", startValue: 7, endValue: 9 }
                            ],
                            transitionDuration: 1200, 
                            labelInterval: 2,
                            interval: 1
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
                                columnKey: "WindSpeed",
                                editorType: "numeric",
                                validation: true,
                                editorOptions: { minValue: 0, maxValue: 9, required: true }
                            },
                            {
                                columnKey: "Time",
                                readOnly: true
                            },
                            {
                                columnKey: "gauge",
                                readOnly: true
                            }
                        ],

                        editCellEnding: function (evt, ui) {
                            if (ui.value != ui.oldValue) { 
                                lg = $(".linear-gauge").eq(ui.rowID).detach();
                            } 
                        },
                        editCellEnded: function (evt, ui) {
                            if (ui.value != ui.oldValue) { 
                                $(".linear-gauge").eq(ui.rowID).remove();
                                ui.owner.element.find("tr[data-id=" + ui.rowID + "]>td:eq(2)").append(lg);
                                if (ui.columnKey == "WindSpeed") {
                                    $(".linear-gauge").eq(ui.rowID).igLinearGauge("option", "value", ui.value);
                                }
                            }
                        }
                    }],
                caption: "NOAA からの生データ。ロサンゼルス観測所からの風情報 (2013/07/16)。"
            });
        });
});