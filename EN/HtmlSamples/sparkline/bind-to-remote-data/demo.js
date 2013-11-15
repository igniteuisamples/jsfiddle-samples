$(function () {

            $("#sparkline").igSparkline({
            	dataSource: "http://labs.infragistics.com/igniteui/api/invoices?callback=?",
                responseDataKey: "d.results",
                height: "100px",
                width: "100%",
                valueMemberPath: 'ExtendedPrice'
            });

        });