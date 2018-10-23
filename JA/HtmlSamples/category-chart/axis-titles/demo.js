$(function () {
var data = [
            { "Year": "1995", "Brazil": 161, "Indonesia": 197, "United States": 266, "India": 920, "China": 1297 },
            { "Year": "2005", "Brazil": 186, "Indonesia": 229, "United States": 295, "India": 1090, "China": 1216 },
            { "Year": "2015", "Brazil": 204, "Indonesia": 256, "United States": 322, "India": 1251, "China": 1361 },
            { "Year": "2025", "Brazil": 218, "Indonesia": 277, "United States": 351, "India": 1396, "China": 1394 }
        ];

        // CODE SNIPPET
        $(function () {
            $("#chart").igCategoryChart({
                dataSource: data,
                xAxisTitle: "X 軸タイトル",
                yAxisTitle: "Y 軸タイトル",
                xAxisTitleTextColor: "gray",
                yAxisTitleTextColor: "gray",
                xAxisTitleTextStyle: "10pt Verdana",
                yAxisTitleTextStyle: "10pt Verdana",
                xAxisTitleTopMargin: 5,
                xAxisTitleBottomMargin: 5,
                yAxisTitleRightMargin: 5,
                yAxisTitleLeftMargin: 5,
                xAxisTitlelAngle: 0,
                yAxisTitlelAngle: 90, 
            });
        });
        // CODE SNIPPET

        $("#chart").igCategoryChart({ title: "国別人口" });
        $("#chart").igCategoryChart({
            yAxisFormatLabel: function (value) {
                return value + " M";
            }
        });

        // event handlers
        $("#xAxisTitleColorPicker").change(function (e) {
            var brush = $(this).val();
            $("#chart").igCategoryChart("option", "xAxisTitleTextColor", brush);
        });

        $("#xAxisTitleMarginSlider").slider({
            min: 0, max: 25, value: 5,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisTitleTopMargin", ui.value);
                $("#chart").igCategoryChart("option", "xAxisTitleBottomMargin", ui.value);
                $("#xAxisTitleMargin").text(ui.value);
            }
        });

        $("#xAxisTitleFontSizeSlider").slider({
            min: 5, max: 15, value: 10,
            slide: function (e, ui) {
                var size = ui.value + "pt";
                var style = size + " " + "Verdona";
                $("#chart").igCategoryChart("option", "xAxisTitleTextStyle", style);
                $("#xAxisTitleFontSize").text(ui.value);
            }
        });

        $("#xAxisTitleAngleSlider").slider({
            min: -90, max: 90, value: 0,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisTitleAngle", ui.value);
                $("#xAxisTitleAngle").text(ui.value);
            }
        });

        $("#yAxisTitleColorPicker").change(function (e) {
            var brush = $(this).val();
            $("#chart").igCategoryChart("option", "yAxisTitleTextColor", brush);
        });

        $("#yAxisTitleMarginSlider").slider({
            min: 0, max: 25, value: 5,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisTitleLeftMargin", ui.value);
                $("#chart").igCategoryChart("option", "yAxisTitleRightMargin", ui.value);
                $("#yAxisTitleMargin").text(ui.value);
            }
        });

        $("#yAxisTitleFontSizeSlider").slider({
            min: 5, max: 15, value: 10,
            slide: function (e, ui) {
                var size = ui.value + "pt";
                var style = size + " " + "Verdona";
                $("#chart").igCategoryChart("option", "yAxisTitleTextStyle", style);
                $("#yAxisTitleFontSize").text(ui.value);
            }
        });

        $("#yAxisTitleAngleSlider").slider({
            min: -90, max: 90, value: 0,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisTitleAngle", ui.value);
                $("#yAxisTitleAngle").text(ui.value);
            }
        });
});