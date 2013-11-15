$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "Customer ID", key: "ID", dataType: "string", width:"10%" },
                    { headerText: "Company Name", key: "CompanyName", dataType: "string", width: "10%" },
                    { headerText: "Contact Name", key: "ContactName", dataType: "string", width: "10%" },
                    { headerText: "Contact Title", key: "ContactTitle", dataType: "string", width: "20%" },
                    { headerText: "Address", key: "Address", dataType: "string", width: "20%" },
                    { headerText: "City", key: "City", dataType: "string", width: "10%" },
                    { headerText: "Country", key: "Country", dataType: "string", width: "15%" }
                ],
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                width: "100%",
                height: "400px",
                autofitLastColumn: false,
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "ID",
                                classes: "hidden-tablet hidden-phone"
                            },
                            {
                                columnKey: "ContactName",
                                classes: "hidden-phone"
                            },
                            {
                                columnKey: "ContactTitle",
                                classes: "hidden-tablet hidden-phone"
                            },
                            {
                                columnKey: "Address",
                                classes: "hidden-phone"
                            },
                            {
                                columnKey: "City",
                                classes: "hidden-phone"
                            },
                            {
                                columnKey: "Country",
                                classes: "hidden-tablet hidden-phone"
                            }
                        ]
                    }
                ]
            });
        });