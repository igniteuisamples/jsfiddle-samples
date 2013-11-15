$(function () {

            $("#sparkline").igSparkline({
                dataSource: northwindInvoices,
                height: "100px",
                width: "100%",
                valueMemberPath: 'ExtendedPrice',
                normalRangeVisibility: "visible",
                normalRangeMinimum: 200,
                normalRangeMaximum: 600,
                trendLineType: "simpleAverage"
            });

        });