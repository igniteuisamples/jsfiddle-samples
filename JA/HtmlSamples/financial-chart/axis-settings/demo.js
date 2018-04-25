$(function () {
            var stocks = []; 
            stocks.push(StockData.AMZN());
            stocks.push(StockData.GOOG());

            $("#chart").igFinancialChart({
                dataSource: stocks,
                zoomSliderType: "none", 
                volumeType: "line", 
                xAxisMode: "ordinal",
                yAxisMode: "numeric",
                xAxisLabelVisibility: "visible",
                yAxisLabelVisibility: "visible",
                xAxisLabelAngle: 0,
                yAxisLabelAngle: 0,
                xAxisLabelTextStyle: "10pt Verdona",
                yAxisLabelTextStyle: "10pt Verdona",
            }); 
            
            $("#xAxisMode").selectmenu({
                select: function(evt, ui) {
                    $("#chart").igFinancialChart("option", "xAxisMode", ui.item.value);
                }
            });
            $("#yAxisMode").selectmenu({
                select: function(evt, ui) {
                    $("#chart").igFinancialChart("option", "yAxisMode", ui.item.value);
                }
            });
            $("#xAxisLabelVisibility").selectmenu({
                select: function(evt, ui) {
                    $("#chart").igFinancialChart("option", "xAxisLabelVisibility", ui.item.value);
                }
            });
            $("#yAxisLabelVisibility").selectmenu({
                select: function(evt, ui) {
                    $("#chart").igFinancialChart("option", "yAxisLabelVisibility", ui.item.value);
                }
            });
            
            $("#xAxisLabelAngleSlider").slider({
                min: -90, max: 90, value: 0,
                slide: function (event, ui) {
                    $("#chart").igFinancialChart("option", "xAxisLabelAngle", ui.value);
                    $("#xAxisLabelAngle").text(ui.value);
                }
            });

            $("#yAxisLabelAngleSlider").slider({
                min: -90, max: 90, value: 0,
                slide: function (event, ui) {
                    $("#chart").igFinancialChart("option", "yAxisLabelAngle", ui.value);
                    $("#yAxisLabelAngle").text(ui.value);
                }
            });
        });