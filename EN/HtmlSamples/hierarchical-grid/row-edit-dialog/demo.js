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
                            width: "390px",
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
                    { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "0%", hidden: true },
                    { key: "FirstName", headerText: "First Name", dataType: "string", width: "15%" },
                    { key: "LastName", headerText: "Last Name", dataType: "string", width: "15%" },
                    { key: "Title", headerText: "Title", dataType: "string", width: "25%" },
                    { key: "Address", headerText: "Address", dataType: "string", width: "25%" },
                    { key: "City", headerText: "City", dataType: "string", width: "20%" }
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
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "0%", hidden: true },
                            { key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "0%", hidden: true },
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