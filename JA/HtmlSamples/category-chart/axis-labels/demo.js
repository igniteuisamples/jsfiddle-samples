$(function () {
var data = [
            { "Country": "CHN", "Population 1995": 1216, "Population 2005": 1297, "Population 2015": 1361, "Population 2025": 1394 },
            { "Country": "IND", "Population 1995": 920,  "Population 2005": 1090, "Population 2015": 1251, "Population 2025": 1396 },
            { "Country": "USA", "Population 1995": 266,  "Population 2005": 295,  "Population 2015": 322,  "Population 2025": 351 },
            { "Country": "BRA", "Population 1995": 161,  "Population 2005": 186,  "Population 2015": 204,  "Population 2025": 218 }
        ]; 

        // CODE SNIPPET
        $(function () {
            $("#chart").igCategoryChart({ 
                xAxisLabelTopMargin: 5,
                xAxisLabelBottomMargin: 5,
                yAxisLabelRightMargin: 5,
                yAxisLabelLeftMargin: 5,
                xAxisLabelAngle: 0,
                yAxisLabelAngle: 0,
                xAxisLabelTextColor: "gray",
                yAxisLabelTextColor: "gray",
                xAxisLabelTextStyle: "10pt Verdana",
                yAxisLabelTextStyle: "10pt Verdana",
                yAxisLabelLocation: "outsideRight",
                yAxisLabelHorizontalAlignment: "left",
                dataSource: data,
                chartType: "column",
                yAxisInterval: 500,
                yAxisMinimumValue: 0,
                yAxisMaximumValue: 1500,
            });
        });
        $("#chart").igCategoryChart({
            yAxisFormatLabel: function (value) {
                return value + " M";
            }
        });
        $("#chart").igCategoryChart({
            xAxisFormatLabel: function (item) {
                var code = item["Country"];
                if (code == "CHN") return "CHINA";
                if (code == "IND") return "INDIA"; 
                if (code == "BRA") return "BRAZIL"; 
                return code;
            }
        });
        // CODE SNIPPET

        $("#chart").igCategoryChart({ title: "国別人口" });

        // event handlers
        $("#xAxisLabelColorPicker").change(function (e) {
            var xbrush = $(this).val();
            $("#chart").igCategoryChart("option", "xAxisLabelTextColor", xbrush);
        });

        $("#xAxisLabelMarginSlider").slider({
            min: 0, max: 25, value: 5,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisLabelTopMargin", ui.value);
                $("#chart").igCategoryChart("option", "xAxisLabelBottomMargin", ui.value);
                $("#xAxisLabelMargin").text(ui.value);
            }
        });

        $("#xAxisLabelFontSizeSlider").slider({
            min: 5, max: 15, value: 10,
            slide: function (e, ui) {
                var size = ui.value + "pt";
                var style = size + " " + "Verdona";
                $("#chart").igCategoryChart("option", "xAxisLabelTextStyle", style);
                $("#xAxisLabelFontSize").text(ui.value);
            }
        });

        $("#xAxisLabelAngleSlider").slider({
            min: -180, max: 180, value: 0,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisLabelAngle", ui.value);
                $("#xAxisLabelAngle").text(ui.value);
            }
        });

        $("#yAxisLabelColorPicker").change(function (e) {
            var xbrush = $(this).val();
            $("#chart").igCategoryChart("option", "yAxisLabelTextColor", xbrush);
        });

        $("#yAxisLabelMarginSlider").slider({
            min: 0, max: 25,  value: 5,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisLabelLeftMargin", ui.value);
                $("#chart").igCategoryChart("option", "yAxisLabelRightMargin", ui.value);
                $("#yAxisLabelMargin").text(ui.value);
            }
        });
        
        $("#yAxisLabelFontSizeSlider").slider({
            min: 5, max: 15, value: 10,
            slide: function (e, ui) {
                var size = ui.value + "pt";
                var style = size + " " + "Verdona";
                $("#chart").igCategoryChart("option", "yAxisLabelTextStyle", style);
                $("#yAxisLabelFontSize").text(ui.value);
            }
        });

        $("#yAxisLabelAngleSlider").slider({
            min: -90, max: 90, value: 0,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisLabelAngle", ui.value);
                $("#yAxisLabelAngle").text(ui.value);
            }
        });
});