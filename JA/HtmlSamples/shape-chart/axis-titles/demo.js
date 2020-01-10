$(function () {
            // CODE SNIPPET
            $("#shapeChart").igShapeChart({
                databaseSource: 'https://www.igniteui.com/data-files/shapes/world_countries_reg.dbf',
                shapeDataSource: 'https://www.igniteui.com/data-files/shapes/world_countries_reg.shp',
                chartType: "polygon",
                width: "600px",
                height: "400px",
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

                xAxisMinimumValue: -180,
                xAxisMaximumValue: 180,
                yAxisMinimumValue: -90,
                yAxisMaximumValue: 90,
                xAxisInterval: 30,
                yAxisInterval: 30,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });
            // CODE SNIPPET
            $("#xAxisTitleAngleSlider").slider(
                 {
                     min: -90, max: 90, value: 0,
                     slide: function (e, ui) {
                         $("#shapeChart").igShapeChart("option", "xAxisTitleAngle", ui.value);
                         $("#xAxisTitleAngleValue").text(ui.value);
                     }
                 });

            $("#xAxisTitleFontSizeSlider").slider(
                {
                    min: 5, max: 15, value: 10,
                    slide: function (e, ui) {
                        var size = ui.value + "pt";
                        var style = size + " " + "Verdona";
                        $("#shapeChart").igShapeChart("option", "xAxisTitleTextStyle", style);
                        $("#xAxisTitleFontSizeValue").text(ui.value);
                    }
                });

            $("#xAxisTitleMarginSlider").slider(
                {
                    min: 0, max: 25, value: 5,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "xAxisTitleTopMargin", ui.value);
                        $("#xAxisTitleMarginValue").text(ui.value);
                    }
                });


            $("#yAxisTitleAngleSlider").slider(
                {
                    min: -90, max: 90, value: 0,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "yAxisTitleAngle", ui.value);
                        $("#yAxisTitleAngleValue").text(ui.value);
                    }
                });

            $("#yAxisTitleFontSizeSlider").slider(
                {
                    min: 5, max: 15, value: 10,
                    slide: function (e, ui) {
                        var size = ui.value + "pt";
                        var style = size + " " + "Verdona";
                        $("#shapeChart").igShapeChart("option", "yAxisTitleTextStyle", style);
                        $("#yAxisTitleFontSizeValue").text(ui.value);
                    }
                });

            $("#yAxisTitleMarginSlider").slider(
                {
                    min: 0, max: 25, value: 5,
                    slide: function (e, ui) {
                        $("#shapeChart").igShapeChart("option", "yAxisTitleRightMargin", ui.value);
                        $("#yAxisTitleMarginValue").text(ui.value);
                    }
                });
        });