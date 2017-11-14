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
                xAxisInterval: 10,
                xAxisMajorStroke: "Green",
                xAxisMajorStrokeThickness: 2,
                xAxisMinorStroke: "Red",
                xAxisMinorStrokeThickness: 0.5,
                xAxisMinorInterval: 5,
                yAxisInterval: 10,
                yAxisMajorStroke: "Green",
                yAxisMajorStrokeThickness: 2,
                yAxisMinorStroke: "Red",
                yAxisMinorStrokeThickness: 0.5,
                yAxisMinorInterval: 5,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });
        });


        $("#xAxisMajorLinesCheckbox").click(function (e) {
            var isChecked = $("#xAxisMajorLinesCheckbox").is(":checked");
            if (isChecked) {
                $("#shapeChart").igShapeChart("option", "xAxisMajorStroke", "Green");
            }
            else {
                $("#shapeChart").igShapeChart("option", "xAxisMajorStroke", "Transparent");
            }
        });

        $("#xAxisMinorLinesCheckbox").click(function (e) {
            var isChecked = $("#xAxisMinorLinesCheckbox").is(":checked");
            if (isChecked) {
                $("#shapeChart").igShapeChart("option", "xAxisMinorStroke", "Red");
            }
            else {
                $("#shapeChart").igShapeChart("option", "xAxisMinorStroke", "Transparent");
            }
        });

        $("#yAxisMajorLinesCheckbox").click(function (e) {
            var isChecked = $("#yAxisMajorLinesCheckbox").is(":checked");
            if (isChecked) {
                $("#shapeChart").igShapeChart("option", "yAxisMajorStroke", "Green");
            }
            else {
                $("#shapeChart").igShapeChart("option", "yAxisMajorStroke", "Transparent");
            }
        });

        $("#yAxisMinorLinesCheckbox").click(function (e) {
            var isChecked = $("#yAxisMinorLinesCheckbox").is(":checked");
            if (isChecked) {
                $("#shapeChart").igShapeChart("option", "yAxisMinorStroke", "Red");
            }
            else {
                $("#shapeChart").igShapeChart("option", "yAxisMinorStroke", "Transparent");
            }
        });

        $("#xAxisMajorLineSlider").slider(
            {
                min: 0.5,
                max: 5,
                value: 2,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "xAxisMajorStrokeThickness", ui.value);
                    $("#xAxisMajorThicknessValue").text(ui.value);
                }
            });

        $("#yAxisMajorLineSlider").slider(
            {
                min: 0.5,
                max: 5,
                value: 2,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "yAxisMajorStrokeThickness", ui.value);
                    $("#yAxisMajorThicknessValue").text(ui.value);
                }
            });

        $("#xAxisMinorLineThicknessSlider").slider(
            {
                min: 0.5,
                max: 5,
                value: 0.5,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "xAxisMinorStrokeThickness", ui.value);
                    $("#xAxisMinorThicknessValue").text(ui.value);
                }
            });

        $("#yAxisMinorLineThicknessSlider").slider(
            {
                min: 0.5,
                max: 5,
                value: 0.5,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "yAxisMinorStrokeThickness", ui.value);
                    $("#yAxisMinorThicknessValue").text(ui.value);
                }
            });

        $("#xAxisMajorLineIntervalSlider").slider(
            {
                min: 10,
                max: 30,
                value: 10,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "xAxisInterval", ui.value);
                    $("#xAxisMajorIntervalValue").text(ui.value);
                }
            });

        $("#yAxisMajorLineIntervalSlider").slider(
            {
                min: 10,
                max: 30,
                width: "100px",
                value: 10,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "yAxisInterval", ui.value);
                    $("#yAxisMajorIntervalValue").text(ui.value);
                }
            });

        $("#xAxisMinorLineIntervalSlider").slider(
            {
                min: 1,
                max: 10,
                value: 5,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "xAxisMinorInterval", ui.value);
                    $("#xAxisMinorIntervalValue").text(ui.value);
                }
            });

        $("#yAxisMinorLineIntervalSlider").slider(
            {
                min: 1,
                max: 10,
                width: "100px",
                value: 5,
                slide: function (e, ui) {
                    $("#shapeChart").igShapeChart("option", "yAxisMinorInterval", ui.value);
                    $("#yAxisMinorIntervalValue").text(ui.value);
                }
            });
});