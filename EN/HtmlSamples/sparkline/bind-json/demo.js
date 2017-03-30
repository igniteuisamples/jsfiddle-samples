$(function () {

            $("#sparkline").igSparkline({
                dataSource: northwindInvoices,
                height: "100px",
                width: "100%",
                valueMemberPath: 'ExtendedPrice',
                tooltipTemplate: "Low:${Low}<br>High:${High}"
            });

        });