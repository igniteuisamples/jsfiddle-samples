$(function () {

            var data = [StockData.AMZN(), StockData.GOOG()];

            $("#chart").igFinancialChart({
                dataSource: data,
                
                toolTipType: "category"
            });

        });