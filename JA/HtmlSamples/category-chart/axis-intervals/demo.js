$(function () {
var transparentBrush = "rgba(0,0,0,0)";
        var brush;

        var data = [
                 { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
                 { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
                 { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
                 { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
                 { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
        ];

        $(function () {
            $("#chart").igCategoryChart({
                title: "国別人口",
                subtitle: "1995 年と 2005 年の人口比較",
                xAxisTitle: "国",
                yAxisTitle: "人口 (百万)",
                dataSource: data,
                chartType: "column"
            });
        });

        $("#xAxisMajorLinesCkBx").click(function (e) {
            brush = $("#xAxisMajorLinesCkBx").is(":checked") ? "Green" : transparentBrush;
            $("#chart").igCategoryChart("option", "xAxisMajorStroke", brush);
        });

        $("#xAxisMinorLinesCkBx").click("change", function () {
            brush = ($(this).is(":checked")) ? "Red" : transparentBrush;
            $("#chart").igCategoryChart("option", "xAxisMinorStroke", brush);
        });

        $("#yAxisMajorLinesCkBx").click("change", function () {
            brush = ($(this).is(":checked")) ? "Green" : transparentBrush;
            $("#chart").igCategoryChart("option", "yAxisMajorStroke", brush);
        });

        $("#yAxisMinorLinesCkBx").click("change", function () {
            brush = ($(this).is(":checked")) ? "Red" : transparentBrush;
            $("#chart").igCategoryChart("option", "yAxisMinorStroke", brush);
        });

        $("#XMajorIntervalThicknessSlider").slider({
            min: 1,
            max: 10,
            value: 1,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisMajorStrokeThickness", ui.value);
                $("#XMajorIntervalThicknessValueLbl").text(ui.value);
            }
        });

        $("#XMinorIntervalThicknessSlider").slider({
            min: 1,
            max: 10,
            value: 1,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisMinorStrokeThickness", ui.value);
                $("#XMinorIntervalThicknessValueLbl").text(ui.value);
            }
        });

        $("#YMajorIntervalThicknessSlider").slider({
            min: 1,
            max: 10,
            value: 1,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisMajorStrokeThickness", ui.value);
                $("#YMajorIntervalThicknessValueLbl").text(ui.value);
            }
        });

        $("#YMinorIntervalThicknessSlider").slider({
            min: 1,
            max: 10,
            value: 1,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisMinorStrokeThickness", ui.value);
                $("#YMinorIntervalThicknessValueLbl").text(ui.value);
            }
        });

        $("#XMinorIntervalValueSlider").slider({
            min: 1,
            max: 20,
            value: 1,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisMinorInterval", ui.value * 0.05);
                var num = ui.value * 0.05;
                $("#XMinorIntervalActualValueLbl").text(num.toFixed(2));
            }
        });

        $("#YMinorIntervalValueSlider").slider({
            min: 1,
            max: 100,
            value: 50,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisMinorInterval", ui.value);
                $("#YMinorIntervalActualValueLbl").text(ui.value);
            }
        });
});