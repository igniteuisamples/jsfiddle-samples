$(function () {
var transparentBrush = "rgba(0,0,0,0)";

        var data = [
                 { "CountryName": "CHN", "Population 1995": 1216, "Population 2005": 1297, "Population 2015": 1361, "Population 2025": 1394 },
                 { "CountryName": "IND", "Population 1995": 920, "Population 2005": 1090, "Population 2015": 1251, "Population 2025": 1396 },
                 { "CountryName": "USA", "Population 1995": 266, "Population 2005": 295, "Population 2015": 322, "Population 2025": 351 },
                 { "CountryName": "BRA", "Population 1995": 161, "Population 2005": 186, "Population 2015": 204, "Population 2025": 218 }
        ];

        // CODE SNIPPET
        $(function () {
            $("#chart").igCategoryChart({ 
                xAxisMinorStroke: "Red",
                yAxisMinorStroke: "Red",
                yAxisMajorStroke: "Green",
                xAxisMajorStroke: "Green",
                xAxisMajorStrokeThickness: 1.0,
                yAxisMajorStrokeThickness: 1.0,
                xAxisMinorStrokeThickness: 0.5,
                yAxisMinorStrokeThickness: 0.5,
                xAxisMinorInterval: 0.5,
                yAxisMinorInterval: 250,
                xAxisInterval: 1,
                yAxisInterval: 500,
                yAxisMinimumValue: 0,
                yAxisMaximumValue: 1500,
                dataSource: data,
                chartType: "column",

            });
        });
        // CODE SNIPPET

        $("#chart").igCategoryChart({ title: "国別人口" });
        $("#chart").igCategoryChart({
            yAxisFormatLabel: function (value) {
                return value + " M";
            }
        });

        // event handers
        $("#xAxisMajorCheckbox").click(function (e) {
            var brush = $("#xAxisMajorCheckbox").is(":checked") ? "Green" : transparentBrush;
            $("#chart").igCategoryChart("option", "xAxisMajorStroke", brush);
        });

        $("#xAxisMinorCheckbox").click("change", function () {
            var brush = ($(this).is(":checked")) ? "Red" : transparentBrush;
            $("#chart").igCategoryChart("option", "xAxisMinorStroke", brush);
        });

        $("#yAxisMajorCheckbox").click("change", function () {
            var brush = ($(this).is(":checked")) ? "Green" : transparentBrush;
            $("#chart").igCategoryChart("option", "yAxisMajorStroke", brush);
        });

        $("#yAxisMinorCheckbox").click("change", function () {
            var brush = ($(this).is(":checked")) ? "Red" : transparentBrush;
            $("#chart").igCategoryChart("option", "yAxisMinorStroke", brush);
        });

        $("#xAxisMajorStrokeThicknessSlider").slider({
            min: 5, max: 50, value: 10,
            slide: function (e, ui) {
                var thickness = ui.value * 0.1;
                $("#chart").igCategoryChart("option", "xAxisMajorStrokeThickness", thickness);
                $("#xAxisMajorStrokeThicknessLabel").text(thickness.toFixed(1));
            }
        });

        $("#xAxisMinorStrokeThicknessSlider").slider({
            min: 5, max: 50, value: 10,
            slide: function (e, ui) {
                var thickness = ui.value * 0.1;
                $("#chart").igCategoryChart("option", "xAxisMinorStrokeThickness", thickness);
                $("#xAxisMinorStrokeThicknessLabel").text(thickness.toFixed(1));
            }
        });

        $("#yAxisMajorStrokeThicknessSlider").slider({
            min: 5, max: 50, value: 10,
            slide: function (e, ui) {
                var thickness = ui.value * 0.1;
                $("#chart").igCategoryChart("option", "yAxisMajorStrokeThickness", thickness);
                $("#yAxisMajorStrokeThicknessLabel").text(thickness.toFixed(1));
            }
        });

        $("#yAxisMinorStrokeThicknessSlider").slider({
            min: 5, max: 50, value: 10,
            slide: function (e, ui) {
                var thickness = ui.value * 0.1;
                $("#chart").igCategoryChart("option", "yAxisMinorStrokeThickness", thickness);
                $("#yAxisMinorStrokeThicknessLabel").text(thickness.toFixed(1));
            }
        });

        $("#xAxisMajorIntervalSlider").slider({
            min: 1, max: 5, value: 1,
            slide: function (e, ui) {
                var interval = ui.value;
                $("#chart").igCategoryChart("option", "xAxisInterval", interval);
                $("#xAxisMajorIntervalLabel").text(interval.toFixed(1));
            }
        });

        $("#yAxisMajorIntervalSlider").slider({
            min: 200, max: 1500, value: 500,
            slide: function (e, ui) {
                var interval = ui.value;
                $("#chart").igCategoryChart("option", "yAxisInterval", interval);
                $("#yAxisMajorIntervalLabel").text(interval);
            }
        });

        $("#xAxisMinorIntervalSlider").slider({
            min: 1, max: 10, value: 5,
            slide: function (e, ui) {
                var interval = ui.value * 0.1;
                $("#chart").igCategoryChart("option", "xAxisMinorInterval", interval);
                $("#xAxisMinorIntervalLabel").text(interval.toFixed(1));
            }
        });

        $("#yAxisMinorIntervalSlider").slider({
            min: 100, max: 500, value: 250,
            slide: function (e, ui) {
                var interval = ui.value;
                $("#chart").igCategoryChart("option", "yAxisMinorInterval", interval);
                $("#yAxisMinorIntervalLabel").text(interval);
            }
        });
});