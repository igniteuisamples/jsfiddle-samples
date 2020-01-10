$(function () { 
            var stocks = [];
            stocks.push(StockData.MSFT());
            stocks.push(StockData.TGT());

            $("#chart").igFinancialChart({
                isLegendVisible: true,
                dataSource: stocks,
                volumeType: "line",
                chartType: "bar",
                zoomSliderType: "bar",
            });
        });