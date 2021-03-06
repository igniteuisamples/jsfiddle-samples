$(function () {
            /*----------------- Instantiation -------------------------*/
            createGrid();
        });
       

        function createGrid() {
            $( "#grid1" ).igHierarchicalGrid({
                width: "100%",
                autoCommit: true,
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                dataSourceType: "json",
                autofitLastColumn: false,
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number", hidden:true },
                   { key: "LastName", headerText: "First Name", dataType: "string", width: "15%" },
                   { key: "FirstName", headerText: "Last Name", dataType: "string", width: "15%" },
                   { key: "Title", headerText: "Title", dataType: "string", width: "15%" },
                   { key: "Address", headerText: "Address", dataType: "string", width: "20%" },
                   { key: "City", headerText: "City", dataType: "string", width: "10%" },
                   { key: "Region", headerText: "Region", dataType: "string", width: "10%" },
                   { key: "Country", headerText: "Country", dataType: "string", width: "10%" }
                ],
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "Title",
                                classes: "ui-hidden-phone ui-hidden-tablet"
                            },
                            {
                                columnKey: "Address",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "Region",
                                classes: "ui-hidden-phone"
                            }
                        ]
                    },
                    {
                        name: "CellMerging",
                        inherit: true,
                        mergeOn: "always"
                    },
                    {
                        name: "Sorting",
                        type: "local",
                        inherit: true,
                        applySortedColumnCss: false
                    }
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
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "10%", hidden:true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "25%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "20%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "20%" }
                        ],
                        features: [
                            {
                                name: "Responsive",
                                enableVerticalRendering: false,
                                columnSettings: [
                                    {
                                        columnKey: "ShipAddress",
                                        classes: "ui-hidden-phone"
                                    },
                                    {
                                        columnKey: "ShipCity",
                                        classes: "ui-hidden-phone"
                                    }
                                ]
                            },
                            {
                                name: "Paging",
                                pageSize: 10
                            },
                            {
                                name: "Sorting",
                                type: "local",
                                applySortedColumnCss: false,
                                columnSettings: [
                                    {
                                        columnKey: "ShipCountry",
                                        allowSorting: true,
                                        currentSortDirection: "ascending"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        }