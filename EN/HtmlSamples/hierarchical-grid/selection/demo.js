$(function () {
            /*----------------- Instantiation -------------------------*/
            createCellSelectionGrid();
            createRowSelectionGrid();
        });

        function createCellSelectionGrid() {
            $( "#cellSelectionGrid" ).igHierarchicalGrid( {
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                dataSourceType: "json",
                features: [
                        {
                            name: "Responsive",
                            enableVerticalRendering: false,
                            columnSettings: [
                                {
                                    columnKey: "Title",
                                    classes: "ui-hidden-tablet"
                                },
                                {
                                    columnKey: "Address",
                                    classes: "ui-hidden-tablet"
                                }
                            ]
                        },
                        {
                            name: "Selection",
                            mode: "cell",
                            multipleSelection: false,
                            touchDragSelect: false,
                            multipleCellSelectOnClick: false
                        },
                        {
                            name: "Paging",
                            pageSize: 5,
                            type: "local",
                            inherit: true
                        }
                    ],
                columns: [
                  { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "0%", hidden: true },
                  { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                  { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                  { key: "Title", headerText: "Title", dataType: "string", width: "20%" },
                  { key: "Address", headerText: "Address", dataType: "string", width: "20%" },
                  { key: "City", headerText: "City", dataType: "string", width: "10%" }
                ],
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        width: "100%",
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "0%", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "15%" }
                        ],
                        features: [
                            {
                                name: "Responsive",
                                enableVerticalRendering: false,
                                columnSettings: [
                                    {
                                        columnKey: "ShipAddress",
                                        classes: "ui-hidden-tablet"
                                    },
                                    {
                                        columnKey: "ShipName",
                                        classes: "ui-hidden-tablet"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        }

        function createRowSelectionGrid()
        {
            $( "#rowSelectionGrid" ).igHierarchicalGrid( {
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                dataSourceType: "json",
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "Title",
                                classes: "ui-hidden-tablet"
                            },
                            {
                                columnKey: "Address",
                                classes: "ui-hidden-tablet"
                            }
                        ]
                    },
                    {
                        name: "Selection",
                        mode: "row",
                        multipleSelection: true,
                        inherit: true
                    },
                    {
                        name: "Paging",
                        pageSize: 5,
                        type: "local",
                        inherit: true
                    }
                ],
                columns: [
                  { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "0%", hidden: true },
                  { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                  { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                  { key: "Title", headerText: "Title", dataType: "string", width: "20%" },
                  { key: "Address", headerText: "Address", dataType: "string", width: "20%" },
                  { key: "City", headerText: "City", dataType: "string", width: "10%" }
                ],
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        width: "100%",
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "0%", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "15%" }
                        ],
                        features: [
                            {
                                name: "Responsive",
                                enableVerticalRendering: false,
                                columnSettings: [
                                    {
                                        columnKey: "ShipAddress",
                                        classes: "ui-hidden-tablet"
                                    },
                                    {
                                        columnKey: "ShipName",
                                        classes: "ui-hidden-tablet"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            } );
        }