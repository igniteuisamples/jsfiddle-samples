$(function () { 
            var stocks = [];
            stocks.push(StockData.MSFT());
            stocks.push(StockData.TGT());

            $("#chart").igFinancialChart({
                legend: { element: "chartLegend" },
                dataSource: stocks,
                volumeType: "line",
                chartType: "bar",
                zoomSliderType: "bar",

            });
        });