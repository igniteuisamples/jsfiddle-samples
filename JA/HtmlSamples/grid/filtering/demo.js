$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                columns: [
                    { headerText: "従業員 ID", key: "EmployeeID", dataType: "number" },
                    { headerText: "名前", key: "FirstName", dataType: "string" },
                    { headerText: "名字", key: "LastName", dataType: "string" },
                    { headerText: "生年月日", key: "BirthDate", dataType: "date" },
                    { headerText: "市", key: "City", dataType: "string" },
                    { headerText: "郵便番号", key: "PostalCode", dataType: "number" }
                ],
                dataSource: northwind,
                responseDataKey: "results",
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "EmployeeID",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "PostalCode",
                                classes: "ui-hidden-phone"
                            }
                        ]
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        mode: "advanced"
                    }
                ]
            });
        });