$(function () {

            var data = PriceData.AMZN();

            $("#chart").igFinancialChart({
                dataSource: data,

                crosshairsDisplayMode: "both",
                crosshairsSnapToData: true,
                crosshairsAnnotationEnabled: true,
            });
            
            $("#crosshairsDisplayMode").change(function(evt) {
                $("#chart").igFinancialChart("option", "crosshairsDisplayMode", evt.target.value);
            });
            
            $(".chartOptions input[type=checkbox]").change(function(evt){
                $("#chart").igFinancialChart("option", evt.target.name, evt.target.checked);
            });

        });