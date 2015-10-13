$(function () {
// the JavaScript function used for the formula property
        function CalculateFreightExpence(data, grid) {
            return 2.95 * data["Freight"];
        }

        $(function () {

            /*----------------- Event Examples -------------------------*/

            $("#grid3").on("iggriddatabound", function (event, ui) {
                var i, grid = ui.owner,
                     ds = grid.dataSource,
                     data = ds.data(),
                     dataLength = data.length;

                for (i = 0; i < dataLength; i++) {
                    if (data[i]["Country"] === "USA") {
                        data[i]["IsUSA"] = true;
                    }
                    else {
                        data[i]["IsUSA"] = false;
                    }
                }
            });

            /*----------------- Instantiation -------------------------*/

            $("#grid3").igHierarchicalGrid({
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "Title",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "Region",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "City",
                                classes: "ui-hidden-phone"
                            }
                        ]
                    }
                ],
                width: "100%",
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                autoGenerateColumns: false,
                autofitLastColumn: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "0%", hidden: true },
                    { key: "LastName", headerText: "名字", dataType: "string", width: "20%" },
                    { key: "FirstName", headerText: "名前", dataType: "string", width: "20%" },
                    { key: "Title", headerText: "役職", dataType: "string", width: "20%" },
                    { key: "City", headerText: "市/州", dataType: "string", width: "15%" },
                    { key: "IsUSA", headerText: "米国内", unbound: true, dataType: "bool", width: "15%", format: "checkbox" },
                    { key: "Region", headerText: "地域", dataType: "string", width: "10%" },
                    { key: "Country", headerText: "国名", dataType: "string", width: "0%", hidden: true }
                ],
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        autofitLastColumn: false,
                        primaryKey: "OrderID",
                        width: "100%",
                        columns: [
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "0%", hidden: true },
                            { key: "CustomerID", headerText: "顧客 ID", dataType: "string", width: "15%" },
                            { key: "Freight", headerText: "輸送", dataType: "number", format:"0.00", width: "15%" },
                            { key: "FreightExpence", headerText: "輸送費", unbound: true, dataType: "number", format: "0.00", width: "20%", formula: "CalculateFreightExpence" },
                            { key: "ShipName", headerText: "配送先", dataType: "string", width: "25%" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "15%" },
                        ],
                        features: [
                            {
                                name: "Responsive",
                                enableVerticalRendering: false,
                                columnSettings: [
                                    {
                                        columnKey: "Freight",
                                        classes: "ui-hidden-phone"
                                    },
                                    {
                                        columnKey: "CustomerID",
                                        classes: "ui-hidden-phone"
                                    },
                                    {
                                        columnKey: "ShipName",
                                        classes: "ui-hidden-phone"
                                    }
                                ]
                            },
                            {
                                name: "Paging",
                                type: "local",
                                pageSize: 5
                            }
                        ]
                    }
                ]
            });
        });
});