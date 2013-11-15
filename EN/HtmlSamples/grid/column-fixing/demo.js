$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "Customer ID", key: "ID", dataType: "string", width: "150px" },
                    { headerText: "Company Name", key: "CompanyName", dataType: "string", width: "200px" },
                    { headerText: "Contact Name", key: "ContactName", dataType: "string", width: "200px" },
                    { headerText: "Contact Title", key: "ContactTitle", dataType: "string", width: "200px" },
                    { headerText: "Address", key: "Address", dataType: "string", width: "200px" },
                    { headerText: "City", key: "City", dataType: "string", width: "150px" },
                    { headerText: "Country", key: "Country", dataType: "string", width: "150px" }
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