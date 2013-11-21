$(function () {

            $("#comboIG").igCombo({
                virtualization: true,
                filteringType: "remote",
                renderMatchItems: "contains",
                responseDataKey: "d.results",
                valueKey: "ProductName",
                width: "270px",
                dataSource: 'http://igniteui.com/api/invoices?&$top=1500&callback=?'
            });

        });