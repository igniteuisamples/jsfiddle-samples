$(function () {
            createSimpleFilteringGrid();
            createAdvancedFilteringGrid();
       });

        function createSimpleFilteringGrid() {
            $("#gridSimpleFiltering").igGrid({
                autoGenerateColumns: false,
                columns: [
                    { headerText: "Employee ID", key: "EmployeeID", dataType: "number" },
                    { headerText: "First Name", key: "FirstName", dataType: "string" },
                    { headerText: "Last Name", key: "LastName", dataType: "string" },
                    { headerText: "Birth Date", key: "BirthDate", dataType: "date" },
                    { headerText: "City", key: "City", dataType: "string" },
                    { headerText: "Postal Code", key: "PostalCode", dataType: "string" }
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
                                        expressionText: "UK Postal Codes",
                                        requireExpr: false,
                                        filterFunc: filterUKPostalCodes
                                    }
                                ]
                            },
                            {
                                columnKey: "City",
                                customConditions: [
                                    {
                                        labelText: "In Country",
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
                    { headerText: "Employee ID", key: "EmployeeID", dataType: "number" },
                    { headerText: "First Name", key: "FirstName", dataType: "string" },
                    { headerText: "Last Name", key: "LastName", dataType: "string" },
                    { headerText: "Birth Date", key: "BirthDate", dataType: "date" },
                    { headerText: "City", key: "City", dataType: "string" },
                    { headerText: "Postal Code", key: "PostalCode", dataType: "string" }
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
                                        expressionText: "UK Postal Codes",
                                        requireExpr: false,
                                        filterFunc: filterUKPostalCodes
                                    }
                                ]
                            },
                            {
                                columnKey: "City",
                                customConditions: [
                                    {
                                        labelText: "In Country",
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