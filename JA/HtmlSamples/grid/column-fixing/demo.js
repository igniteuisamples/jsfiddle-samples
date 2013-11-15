$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "顧客 ID", key: "ID", dataType: "string", width: "150px" },
                    { headerText: "会社名", key: "CompanyName", dataType: "string", width: "200px" },
                    { headerText: "名前", key: "ContactName", dataType: "string", width: "200px" },
                    { headerText: "連絡先", key: "ContactTitle", dataType: "string", width: "200px" },
                    { headerText: "住所", key: "Address", dataType: "string", width: "200px" },
                    { headerText: "市", key: "City", dataType: "string", width: "150px" },
                    { headerText: "国名", key: "Country", dataType: "string", width: "150px" }
                ],
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                width: "800px",
                height: "400px",
                features: [
                    {
                        name: "ColumnFixing",
                        fixingDirection: "left",
                        columnSettings: [
                            {
                                columnKey: "CompanyName",
                                isFixed: true,
                                allowFixing: false
                            },
                            {
                                columnKey: "ContactName",
                                isFixed: true
                            },
                            {
                                columnKey: "ContactTitle",
                                allowFixing: false
                            }
                        ]
                    }
                ]
            });
        });