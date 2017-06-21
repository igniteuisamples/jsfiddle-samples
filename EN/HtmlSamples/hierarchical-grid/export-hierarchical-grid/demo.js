$(function() {

            $("#hierarchicalGrid").igHierarchicalGrid({
                width: "100%",
                autoCommit: true,
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                dataSourceType: "json",
                autofitLastColumn: false,
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number", hidden: true },
                   { key: "LastName", headerText: "First Name", dataType: "string", width: "10%" },
                   { key: "FirstName", headerText: "Last Name", dataType: "string", width: "10%" },
                   { key: "Title", headerText: "Title", dataType: "string", width: "25%" },
                   { key: "Address", headerText: "Address", dataType: "string", width: "20%" },
                   { key: "City", headerText: "City", dataType: "string", width: "10%" },
                   { key: "Region", headerText: "Region", dataType: "string", width: "10%" },
                   { key: "Country", headerText: "Country", dataType: "string", width: "10%" }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        autoCommit: true,
                        autoGenerateColumns: false,
                        autofitLastColumn: false,
                        primaryKey: "OrderID",
                        width: "100%",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "10%", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "25%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "20%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "20%" }
                        ],
                    }
                ]
            });

            $("#exportButton").igButton({ labelText: "Export" });

            $("#exportButton").on("igbuttonclick", function () {
                $.ig.GridExcelExporter.exportGrid($("#hierarchicalGrid"), {
                    dataExportMode: $("#dataExportMode").val()
                });
            })
        });