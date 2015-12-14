$(function () {
            createSimpleFilteringGrid();
       });

        function createSimpleFilteringGrid() {
            $("#gridSimpleFiltering").igGrid({
                autoGenerateColumns: false,
                columns: [
                    { headerText: "Employee ID", key: "EmployeeID", dataType: "string", hidden: true },
                    { headerText: "First Name", key: "FirstName", dataType: "string" },
                    { headerText: "Last Name", key: "LastName", dataType: "string" },
                    { headerText: "Register Date", key: "RegistererDate", dataType: "date" },
                    { headerText: "Country", key: "Country", dataType: "string" },
                    { headerText: "Age", key: "Age", dataType: "number" },
                    { headerText: "Is Active", key: "IsActive", dataType: "bool" }
                ],
                dataSource: employees,
                renderCheckboxes : true,
                responseDataKey: "results",
                features: [
                    {
                        name: "Filtering",
                        type: "local",
                        mode: "simple",
                        filterDialogContainment: "window",
                        columnSettings: [
                        {
                            columnKey: "FirstName",
                            condition: "startsWith"
                            
                        },
                        {
                            columnKey: "LastName",
                            condition: "equals"

                        },
                         {
                             columnKey: "Country",
                             condition: "equals"

                         },
                         {
                             columnKey: "Age",
                             condition: "greaterThan"

                         }
                        ]
                      
                    },
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 10
                    }
                ]
            });
        }