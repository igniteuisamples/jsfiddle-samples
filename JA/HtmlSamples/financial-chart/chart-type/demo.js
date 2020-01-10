$(function () {

            var data = PriceData.AMZN();
            $("#chart").igFinancialChart({
                dataSource: data,
                chartType: "candle",
                zoomSliderType: "candle",
            });
        });