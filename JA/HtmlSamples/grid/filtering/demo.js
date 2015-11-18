$(function () {
            createSimpleFilteringGrid();
            createAdvancedFilteringGrid();
       });

        function createSimpleFilteringGrid() {
            $("#gridSimpleFiltering").igGrid({
                autoGenerateColumns: false,
                columns: [
                    { headerText: "従業員 ID", key: "EmployeeID", dataType: "number" },
                    { headerText: "名前", key: "FirstName", dataType: "string" },
                    { headerText: "名字", key: "LastName", dataType: "string" },
                    { headerText: "生年月日", key: "BirthDate", dataType: "date" },
                    { headerText: "市", key: "City", dataType: "string" },
                    { headerText: "郵便番号", key: "PostalCode", dataType: "string" }
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
                        mode: "simple",
                        filterDialogContainment: "window",
                        columnSettings: [
                            {
                                columnKey: "PostalCode",
                                customConditions: [
                                    {
                                        labelText: "USA",
                                        expressionText: "98###",
                                        requireExpr: false,
                                        filterFunc: filterUSAPostalCodes
                                    },
                                    {
                                        labelText: "UK",
                                        expressionText: "UK 郵便番号",
                                        requireExpr: false,
                                        filterFunc: filterUKPostalCodes
                                    }
                                ]
                            },
                            {
                                columnKey: "City",
                                customConditions: [
                                    {
                                        labelText: "国",
                                        requireExpr: true,
                                        filterFunc: filterInCountry
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        }

        function createAdvancedFilteringGrid() {
            $("#gridAdvancedFiltering").igGrid({
                autoGenerateColumns: false,
                columns: [
                    { headerText: "従業員 ID", key: "EmployeeID", dataType: "number" },
                    { headerText: "名前", key: "FirstName", dataType: "string" },
                    { headerText: "名字", key: "LastName", dataType: "string" },
                    { headerText: "生年月日", key: "BirthDate", dataType: "date" },
                    { headerText: "市", key: "City", dataType: "string" },
                    { headerText: "郵便番号", key: "PostalCode", dataType: "string" }
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
                        mode: "advanced",
                        filterDialogContainment: "window",
                        columnSettings: [
                            {
                                columnKey: "PostalCode",
                                customConditions: [
                                    {
                                        labelText: "USA",
                                        expressionText: "98###",
                                        requireExpr: false,
                                        filterFunc: filterUSAPostalCodes
                                    },
                                    {
                                        labelText: "UK",
                                        expressionText: "UK 郵便番号",
                                        requireExpr: false,
                                        filterFunc: filterUKPostalCodes
                                    }
                                ]
                            },
                            {
                                columnKey: "City",
                                customConditions: [
                                    {
                                        labelText: "国",
                                        requireExpr: true,
                                        filterFunc: filterInCountry
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        }
        
        function filterUKPostalCodes(value, expression, dataType, ignoreCase, preciseDateFormat) {
            return !value.startsWith("98");
        }

        function filterUSAPostalCodes(value, expression, dataType, ignoreCase, preciseDateFormat) {
            return value.startsWith("98");
        }

        function filterInCountry(value, expression, dataType, ignoreCase, preciseDateFormat) {
            if (expression === "UK") {
                return value === "London";
            }

            else if (expression === "USA") {
                return value !== "London";
            }
        }