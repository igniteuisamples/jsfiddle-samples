$(function () {
var data = [
            { "Label": "1995", "United States": 266000000, "India": 920000000,  "China": 1117000000 },
            { "Label": "2000", "United States": 275000000, "India": 990000000,  "China": 1166000000 },
            { "Label": "2005", "United States": 295000000, "India": 1090000000, "China": 1216000000 },
            { "Label": "2010", "United States": 314000000, "India": 1121000000, "China": 1271000000 },
            { "Label": "2015", "United States": 322000000, "India": 1251000000, "China": 1361000000 },
            { "Label": "2020", "United States": 332000000, "India": 1331000000, "China": 1389000000 },
            { "Label": "2025", "United States": 356000000, "India": 1396000000, "China": 1394000000 },
            { "Label": "2030", "United States": 373000000, "India": 1526000000, "China": 1422000000 }
        ];

        var comboData = [
            { "MarkerType": "automatic"}, { "MarkerType": "circle"     },
            { "MarkerType": "triangle" }, { "MarkerType": "pyramid"    },
            { "MarkerType": "square"   }, { "MarkerType": "diamond"    },
            { "MarkerType": "pentagon" }, { "MarkerType": "hexagon"    },
            { "MarkerType": "tetragram"}, { "MarkerType": "pentagram"  },
            { "MarkerType": "hexagram" }, { "MarkerType": "none"       },
        ];

        $(function () {
            $("#chart").igCategoryChart({
                dataSource: data,
                chartType: "line",
                markerTypes: ["automatic"],
                thickness: 2.0,
                xAxisAbbreviateLargeNumbers: true,
                title: "人口の比較 (年)",
            });

            $("#markerTypePicker").igCombo({
                dataSource: comboData,
                mode: "dropdown",
                valueKey: "MarkerType",
                textKey: "MarkerType",
                placeHolder: "マーカー タイプの選択",
                dropDownOnFocus: true,
                selectionChanged: function (evt, ui) {
                    var selectedMarker = $("#markerTypePicker").igCombo("value");
                    // setting marker type for all series in the chart
                    $("#chart").igCategoryChart("option", "markerTypes", [ selectedMarker ] );
                }
            });
            $("#markerTypePicker").igCombo("value", "automatic");
        });
});