$(function () {
            /*----------------- Instantiation -------------------------*/
            $("#grid2").igHierarchicalGrid({
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
                                columnKey: "Address",
                                classes: "ui-hidden-phone"
                            }
                        ]
                    },
                    {
                        name: "Updating",
                        editMode: "dialog",
                        rowEditDialogOptions: {
                            height: "350px",
                            width: "300px",
                            containment: "window",
                            showDoneCancelButtons: true
                        },
                        columnSettings:
                            [{
                                columnKey: "LastName",
                                required: true
                            }]
                    }
                ],
                width: "100%",
                autoCommit:true,
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                autoGenerateColumns: false,
                autofitLastColumn: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "0%", hidden: true },
                    { key: "FirstName", headerText: "名前", dataType: "string", width: "15%" },
                    { key: "LastName", headerText: "名字", dataType: "string", width: "15%" },
                    { key: "Title", headerText: "役職", dataType: "string", width: "25%" },
                    { key: "Address", headerText: "住所", dataType: "string", width: "25%" },
                    { key: "City", headerText: "市/州", dataType: "string", width: "20%" }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        width: "100%",
                        autoGenerateColumns: false,
                        autofitLastColumn: false,
                        primaryKey: "OrderID",
                        autoCommit: true,
                        columns: [
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "0%", hidden: true },
                            { key: "CustomerID", headerText: "顧客 ID", dataType: "string", width: "0%", hidden: true },
                            { key: "Freight", headerText: "輸送", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "配送先", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "25%" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "20%" },
                            { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "20%" }
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
                                name: "Updating",
                                enableAddRow: false,
                                editMode: "dialog",
                                rowEditDialogOptions: {
                                	height: "350px",
                                	width: "300px",
                                	containment: "window",
                                	showDoneCancelButtons: true
                                },
                                columnSettings:
                                [
                                    {
                                        columnKey: "ShipName",
                                        required: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });