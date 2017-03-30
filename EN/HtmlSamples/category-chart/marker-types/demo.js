$(function () {
var data = [
            { "Label": "1995", "Brazil": 161, "Indonesia": 197, "United States": 266, "India": 920, "China": 1297 },
            { "Label": "2005", "Brazil": 186, "Indonesia": 229, "United States": 295, "India": 1090, "China": 1216 },
            { "Label": "2015", "Brazil": 204, "Indonesia": 256, "United States": 322, "India": 1251, "China": 1361 },
            { "Label": "2025", "Brazil": 218, "Indonesia": 277, "United States": 351, "India": 1396, "China": 1394 }
        ];

        var comboData = [
            { "MarkerType": "automatic" }, { "MarkerType": "circle" },
            { "MarkerType": "triangle" }, { "MarkerType": "pyramid" },
            { "MarkerType": "square" }, { "MarkerType": "diamond" },
            { "MarkerType": "pentagon" }, { "MarkerType": "hexagon" },
            { "MarkerType": "tetragram" }, { "MarkerType": "pentagram" },
            { "MarkerType": "hexagram" }, { "MarkerType": "none" },
        ];

        $(function () {
            $("#theChart").igCategoryChart({
                dataSource: data,
                title: "A comparison of population over time",
                subtitle: "A comparison of the population of Brazil, Indonesia, United States, India and China",
            });

            $("#markerTypePicker").igCombo({
                dataSource: comboData,
                mode: "dropdown",
                valueKey: "MarkerType",
                textKey: "MarkerType",
                placeHolder: "Select Marker type",
                dropDownOnFocus: true,
                selectionChanged: function (evt, ui) {
                    $("#theChart").igCategoryChart("option", "markerTypes", [$("#markerTypePicker").igCombo("value")]);
                }
            });
        });
});