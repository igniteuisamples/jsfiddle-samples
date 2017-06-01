$(function () {
var data = [
            { "Label": "1995", "Brazil": 161, "Indonesia": 197, "United States": 266, "India": 920, "China": 1297 },
            { "Label": "2005", "Brazil": 186, "Indonesia": 229, "United States": 295, "India": 1090, "China": 1216 },
            { "Label": "2015", "Brazil": 204, "Indonesia": 256, "United States": 322, "India": 1251, "China": 1361 },
            { "Label": "2025", "Brazil": 218, "Indonesia": 277, "United States": 351, "India": 1396, "China": 1394 }
        ];

        var comboData = [
            { "ChartType": "line" },
            { "ChartType": "column" },
            { "ChartType": "point" },
            { "ChartType": "area" },
            { "ChartType": "spline" },
            { "ChartType": "splineArea" },
            { "ChartType": "stepLine" },
            { "ChartType": "stepArea" },
        ];

        $(function () {
            $("#theChart").igCategoryChart({
                dataSource: data,
                title: "人口の比較 (年)",
                subtitle: "ブラジル、インドネシア、米国、インド、中国の人口の比較"
            });

            $("#chartTypePicker").igCombo({
                dataSource: comboData,
                mode: "dropdown",
                valueKey: "ChartType",
                textKey: "ChartType",
                placeHolder: "チャート タイプの選択",
                dropDownOnFocus : true,
                selectionChanged: function (evt, ui) {
                    $("#theChart").igCategoryChart("option", "chartType", $("#chartTypePicker").igCombo("value"));
                }
            });
        });
});