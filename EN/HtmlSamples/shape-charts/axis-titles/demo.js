$(function () {
var data = [
            { "X": 30, "Y": 30 },
            { "X": 30, "Y": 70 },
            { "X": 70, "Y": 70 },
            { "X": 70, "Y": 30 }];

        $(function () {

            $("#shapeChart").igShapeChart({
                dataSource: data,
                width: "600px",
                height: "400px",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                xAxisTitle: "X AXIS TITLE",
                yAxisTitle: "Y AXIS TITLE",
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });
        });

        $("#xAxisTitleAngleSlider").slider(
            {
                min: 0,
                max: 360,
                value: 0,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "xAxisTitleAngle", ui.value);
                    $("#xAxisTitleAngleValue").text(ui.value);
                }
            });

        $("#xAxisTitleFontSizeSlider").slider(
            {
                min: 0,
                max: 30,
                value: 12,
                slide: function (e, ui) {
                    var size = ui.value + "pt";
                    var style = "Verdona";
                    $("#shapeChart").igShapeChart("option", "xAxisTitleTextStyle", size + " " + style);
                    $("#xAxisTitleFontSizeValue").text(ui.value);
                }
            });

        $("#xAxisTitleMarginSlider").slider(
            {
                min: 0,
                max: 25,
                value: 2,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "xAxisTitleTopMargin", ui.value);
                    $("#xAxisTitleMarginValue").text(ui.value);
                }
            });


        $("#yAxisTitleAngleSlider").slider(
            {
                min: 0,
                max: 360,
                value: 270,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "yAxisTitleAngle", ui.value);
                    $("#yAxisTitleAngleValue").text(ui.value);
                }
            });

        $("#yAxisTitleFontSizeSlider").slider(
            {
                min: 0,
                max: 30,
                value: 12,
                slide: function (e, ui) {
                    var size = ui.value + "pt";
                    var style = "Verdona";
                    $("#shapeChart").igShapeChart("option", "yAxisTitleTextStyle", size + " " + style);
                    $("#yAxisTitleFontSizeValue").text(ui.value);
                }
            });

        $("#yAxisTitleMarginSlider").slider(
            {
                min: 0,
                max: 25,
                value: 2,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "yAxisTitleRightMargin", ui.value);
                    $("#yAxisTitleMarginValue").text(ui.value);
                }
            });
});