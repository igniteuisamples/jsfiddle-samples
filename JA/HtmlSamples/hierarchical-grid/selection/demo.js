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
                  { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "0%", hidden: true },
                  { key: "LastName", headerText: "名字", dataType: "string", width: "10%" },
                  { key: "FirstName", headerText: "名前", dataType: "string", width: "10%" },
                  { key: "Title", headerText: "役職", dataType: "string", width: "20%" },
                  { key: "Address", headerText: "住所", dataType: "string", width: "20%" },
                  { key: "City", headerText: "市/州", dataType: "string", width: "10%" }
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
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "0%", hidden: true },
                            { key: "Freight", headerText: "輸送", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "配送先", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "15%" }
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
                  { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "0%", hidden: true },
                  { key: "LastName", headerText: "名字", dataType: "string", width: "10%" },
                  { key: "FirstName", headerText: "名前", dataType: "string", width: "10%" },
                  { key: "Title", headerText: "役職", dataType: "string", width: "20%" },
                  { key: "Address", headerText: "住所", dataType: "string", width: "20%" },
                  { key: "City", headerText: "市/州", dataType: "string", width: "10%" }
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
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "0%", hidden: true },
                            { key: "Freight", headerText: "輸送", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "配送先", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "15%" }
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