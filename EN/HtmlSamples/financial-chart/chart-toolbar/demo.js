$(function () {
            var data = PriceData.AMZN();
            $("#chart").igFinancialChart({
                dataSource: data,
                isToolbarVisible: true,
            });

            $("#chkVisible").change(function(evt){
                $("#chart").igFinancialChart("option", "isToolbarVisible", evt.target.checked);
            });
        });