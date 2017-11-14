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
                xAxisLabelMargin: 20,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });
        });

        $("#xAxisShowLabelsCheckbox").click(function (e) {
            var isChecked = $("#xAxisShowLabelsCheckbox").is(":checked");
            if (isChecked) {
                $("#shapeChart").igShapeChart("option", "xAxisLabelVisibility", "visible");
            }
            else {
                $("#shapeChart").igShapeChart("option", "xAxisLabelVisibility", "collapsed");
            }
        });

        $("#xAxisLabelAngleSlider").slider(
            {
                min: 0,
                max: 360,
                value: 0,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "xAxisLabelAngle", ui.value);
                    $("#xAxisLabelAngleValue").text(ui.value);
                }
            });

        $("#xAxisLabelFontSizeSlider").slider(
            {
                min: 0,
                max: 30,
                value: 12,
                slide: function (e, ui) {
                    var size = ui.value + "pt";
                    var style = "Verdona";
                    $("#shapeChart").igShapeChart("option", "xAxisLabelTextStyle", size + " " + style);
                    $("#xAxisLabelFontSizeValue").text(ui.value);
                }
            });

        $("#xAxisLabelMarginSlider").slider(
            {
                min: 0,
                max: 25,
                value: 2,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "xAxisLabelTopMargin", ui.value);
                    $("#xAxisLabelMarginValue").text(ui.value);
                }
            });


        $("#yAxisShowLabelsCheckbox").click(function (e) {
            var isChecked = $("#yAxisShowLabelsCheckbox").is(":checked");
            if (isChecked) {
                $("#shapeChart").igShapeChart("option", "yAxisLabelVisibility", "visible");
            }
            else {
                $("#shapeChart").igShapeChart("option", "yAxisLabelVisibility", "collapsed");
            }
        });

        $("#yAxisLabelAngleSlider").slider(
            {
                min: 0,
                max: 360,
                value: 0,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "yAxisLabelAngle", ui.value);
                    $("#yAxisLabelAngleValue").text(ui.value);
                }
            });

        $("#yAxisLabelFontSizeSlider").slider(
            {
                min: 0,
                max: 30,
                value: 12,
                slide: function (e, ui) {
                    var size = ui.value + "pt";
                    var style = "Verdona";
                    $("#shapeChart").igShapeChart("option", "yAxisLabelTextStyle", size + " " + style);
                    $("#yAxisLabelFontSizeValue").text(ui.value);
                }
            });

        $("#yAxisLabelMarginSlider").slider(
            {
                min: 0,
                max: 25,
                value: 2,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "yAxisLabelRightMargin", ui.value);
                    $("#yAxisLabelMarginValue").text(ui.value);
                }
            });
});