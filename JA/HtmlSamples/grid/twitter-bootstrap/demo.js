$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "顧客 ID", key: "ID", dataType: "string", width:"10%" },
                    { headerText: "会社名", key: "CompanyName", dataType: "string", width: "10%" },
                    { headerText: "名前", key: "ContactName", dataType: "string", width: "10%" },
                    { headerText: "連絡先", key: "ContactTitle", dataType: "string", width: "20%" },
                    { headerText: "住所", key: "Address", dataType: "string", width: "20%" },
                    { headerText: "市", key: "City", dataType: "string", width: "10%" },
                    { headerText: "国名", key: "Country", dataType: "string", width: "15%" }
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