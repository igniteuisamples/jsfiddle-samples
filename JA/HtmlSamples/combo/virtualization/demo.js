$(function () {

            $("#comboIG").igCombo({
                virtualization: true,
                filteringType: "remote",
                renderMatchItems: "contains",
                responseDataKey: "d.results",
                valueKey: "OrderID",
                textKey: "ShipName",
                itemTemplate: "${ShipName} (ID: ${OrderID})",
                width: "370px",
                dataSourceUrl: 'http://igniteui.com/api/orders?&$top=1500&callback=?',
                responseDataType: "json"
            });

        });