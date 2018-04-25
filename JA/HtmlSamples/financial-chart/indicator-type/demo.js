$(function () {

            var data = PriceData.AMZN();
            $("#chart").igFinancialChart({
                dataSource: data,
                zoomSliderType: "none",
                indicatorTypes: ["AverageTrueRange", "ForceIndex"]
            });

        });