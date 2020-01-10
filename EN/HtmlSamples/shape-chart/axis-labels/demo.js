$(function () {
            $("#shapeChart").igShapeChart({
                databaseSource: 'https://www.igniteui.com/data-files/shapes/world_countries_reg.dbf',
                shapeDataSource: 'https://www.igniteui.com/data-files/shapes/world_countries_reg.shp',
                chartType: "polygon",
                width: "600px",
                height: "400px",
                xAxisLabelVisibility: "visible",
                yAxisLabelVisibility: "visible",
                xAxisLabelAngle: 0,
                yAxisLabelAngle: 0,
                xAxisLabelTextColor: "gray",
                yAxisLabelTextColor: "gray",
                xAxisLabelTextStyle: "10pt Verdana",
                yAxisLabelTextStyle: "10pt Verdana",
                xAxisLabelLocation: "outsideBottom",
                yAxisLabelLocation: "outsideRight",
                xAxisLabelVerticalAlignment: "top",
                yAxisLabelHorizontalAlignment: "left",

                xAxisMinimumValue: -180,
                xAxisMaximumValue: 180,
                yAxisMinimumValue: -90,
                yAxisMaximumValue: 90,
                xAxisInterval: 30,
                yAxisInterval: 30,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#xAxisLabelAngleSlider").slider(
                {
                    min: -180, max: 180, value: 0,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "xAxisLabelAngle", ui.value);
                        $("#xAxisLabelAngleValue").text(ui.value);
                    }
                });

            $("#xAxisLabelFontSizeSlider").slider(
                {
                    min: 5, max: 15, value: 10,
                    slide: function (e, ui) {
                        var size = ui.value + "pt";
                        var style = size + " " + "Verdona";
                        $("#shapeChart").igShapeChart("option", "xAxisLabelTextStyle", style);
                        $("#xAxisLabelFontSizeValue").text(ui.value);
                    }
                });

            $("#xAxisLabelMarginSlider").slider(
                {
                    min: 0, max: 25, value: 5,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "xAxisLabelTopMargin", ui.value);
                        $("#shapeChart").igShapeChart("option", "xAxisLabelBottomMargin", ui.value);
                        $("#xAxisLabelMarginValue").text(ui.value);
                    }
                });

            $("#yAxisLabelAngleSlider").slider(
                {
                    min: -180, max: 180, value: 0,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "yAxisLabelAngle", ui.value);
                        $("#yAxisLabelAngleValue").text(ui.value);
                    }
                });

            $("#yAxisLabelFontSizeSlider").slider(
                {
                    min: 5, max: 15, value: 10,
                    slide: function (e, ui) {
                        var size = ui.value + "pt";
                        var style = size + " " + "Verdona";
                        $("#shapeChart").igShapeChart("option", "yAxisLabelTextStyle", style);
                        $("#yAxisLabelFontSizeValue").text(ui.value);
                    }
                });

            $("#yAxisLabelMarginSlider").slider(
                {
                    min: 0, max: 25, value: 5,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "yAxisLabelRightMargin", ui.value);
                        $("#shapeChart").igShapeChart("option", "yAxisLabelLeftMargin", ui.value);
                        $("#yAxisLabelMarginValue").text(ui.value);
                    }
                });
        });