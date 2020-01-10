$(function () {

            $("#shapeChart").igShapeChart({
                databaseSource: 'https://www.igniteui.com/data-files/shapes/world_countries_reg.dbf',
                shapeDataSource: 'https://www.igniteui.com/data-files/shapes/world_countries_reg.shp',
                chartType: "polygon",
                width: "600px",
                height: "400px",
                xAxisMinimumValue: -180,
                xAxisMaximumValue: 180,
                yAxisMinimumValue: -90,
                yAxisMaximumValue: 90,
                xAxisMajorStroke: "Green",
                yAxisMajorStroke: "Green",
                xAxisMinorStroke: "Red",
                yAxisMinorStroke: "Red",
                xAxisMajorStrokeThickness: 1,
                yAxisMajorStrokeThickness: 1,
                xAxisMinorStrokeThickness: 0.5,
                yAxisMinorStrokeThickness: 0.5,
                xAxisInterval: 30,
                yAxisInterval: 30,
                xAxisMinorInterval: 15,
                yAxisMinorInterval: 15,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
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
                    min: 5, max: 50, value: 10,
                    slide: function (e, ui) {
                        var thickness = ui.value * 0.1;
                        $("#shapeChart").igShapeChart("option", "xAxisMajorStrokeThickness", thickness);
                        $("#xAxisMajorThicknessValue").text(thickness.toFixed(1));
                    }
                });

            $("#yAxisMajorLineSlider").slider(
                {
                    min: 5, max: 50, value: 10,
                    slide: function (e, ui) {
                        var thickness = ui.value * 0.1;
                        $("#shapeChart").igShapeChart("option", "yAxisMajorStrokeThickness", thickness);
                        $("#yAxisMajorThicknessValue").text(thickness.toFixed(1));
                    }
                });

            $("#xAxisMinorLineThicknessSlider").slider(
                {
                    min: 5, max: 50, value: 10,
                    slide: function (e, ui) {
                        var thickness = ui.value * 0.1;
                        $("#shapeChart").igShapeChart("option", "xAxisMinorStrokeThickness", thickness);
                        $("#xAxisMinorThicknessValue").text(thickness.toFixed(1));
                    }
                });

            $("#yAxisMinorLineThicknessSlider").slider(
                {
                    min: 5, max: 50, value: 10,
                    slide: function (e, ui) {
                        var thickness = ui.value * 0.1;
                        $("#shapeChart").igShapeChart("option", "yAxisMinorStrokeThickness", thickness);
                        $("#yAxisMinorThicknessValue").text(thickness.toFixed(1));
                    }
                });

            $("#xAxisMajorLineIntervalSlider").slider(
                {
                    min: 30, max: 90, value: 30,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "xAxisInterval", ui.value);
                        $("#xAxisMajorIntervalValue").text(ui.value);
                    }
                });

            $("#yAxisMajorLineIntervalSlider").slider(
                {
                    min: 30, max: 90, value: 30,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "yAxisInterval", ui.value);
                        $("#yAxisMajorIntervalValue").text(ui.value);
                    }
                });

            $("#xAxisMinorLineIntervalSlider").slider(
                {
                    min: 10, max: 30, value: 15,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "xAxisMinorInterval", ui.value);
                        $("#xAxisMinorGridlinesInterval").text(ui.value);
                    }
                });

            $("#yAxisMinorLineIntervalSlider").slider(
                {
                    min: 10, max: 30, value: 15,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "yAxisMinorInterval", ui.value);
                        $("#yAxisMinorGridlinesInterval").text(ui.value);
                    }
                });
        });