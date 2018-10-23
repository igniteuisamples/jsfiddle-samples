$(function () {
var data = [
            { "Year": "1995", "China": 1297, "India": 920,  "United States": 266 },
            { "Year": "2005", "China": 1216, "India": 1090, "United States": 295 },
            { "Year": "2010", "China": 1271, "India": 1131, "United States": 314 },
            { "Year": "2015", "China": 1361, "India": 1251, "United States": 322 },
            { "Year": "2020", "China": 1381, "India": 1341, "United States": 342 },
            { "Year": "2025", "China": 1394, "India": 1466, "United States": 361 }
        ];

        var ChartTypes = [
            { "ChartType": "column" },
            { "ChartType": "point" },
            { "ChartType": "line" },
            { "ChartType": "spline" },
            { "ChartType": "splineArea" },
            { "ChartType": "area" },
            { "ChartType": "stepLine" },
            { "ChartType": "stepArea" },
            { "ChartType": "auto" },
        ];

        $(function () {
            // CODE SNIPPET
            $("#chart").igCategoryChart({
                dataSource: data,
                chartType: "column",
            });
            // CODE SNIPPET

            $("#chart").igCategoryChart({ title: "Population per Country" });
            $("#chart").igCategoryChart({
                yAxisFormatLabel: function (value) {
                    return value + " M";
                }
            });

            $("#chartTypePicker").igCombo({
                dataSource: ChartTypes,
                mode: "dropdown",
                valueKey: "ChartType",
                textKey: "ChartType",
                placeHolder: "Select Chart type",
                dropDownOnFocus: true,
                initialSelectedItems: [ { index: 0 } ],
                selectionChanged: function (evt, ui) {
                    var type = $("#chartTypePicker").igCombo("value");

                    $("#chart").igCategoryChart("option", "chartType", type);

                    if (type == "column" || type == "auto")  
                        $("#chart").igCategoryChart("option", "markerTypes", [ "none" ]);
                    else
                        $("#chart").igCategoryChart("option", "markerTypes", ["circle"]);

                }
            });
        });
});