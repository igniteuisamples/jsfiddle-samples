$(function () {

            var data = PriceData.AMZN();
            $("#chart").igFinancialChart({
                dataSource: data,
                trendLineType: "quadraticFit",
                trendLineThickness: 2,
                trendLinePeriod: 5,
            });

        });