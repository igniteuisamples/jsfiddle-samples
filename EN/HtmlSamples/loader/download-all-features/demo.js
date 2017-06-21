$(function () {
$.ig.loader({
            scriptPath: "http://cdn-na.infragistics.com/igniteui/latest/js/",
            cssPath: "http://cdn-na.infragistics.com/igniteui/latest/css/",
            resources: "igHierarchicalGrid.*",
            ready: function () {
            
                $("#grid").igHierarchicalGrid({
                    width: "100%",
                    dataSource: northwind,
                    initialDataBindDepth: -1,
                    responseDataKey: "results",
                    dataSourceType: "json",
                    autoGenerateColumns: false,
                    primaryKey: "EmployeeID",
                    columns: [
                        { key: "EmployeeID", headerText: "ID", dataType: "number", width: "15%" },
                        { key: "LastName", headerText: "Last Name", dataType: "string", width: "25%" },
                        { key: "FirstName", headerText: "First Name", dataType: "string", width: "25%" },
                        { key: "HomePhone", headerText: "Home Phone", dataType: "string", width: "35%" }
                    ],
                    childrenDataProperty: "Orders",
                    autoGenerateLayouts: false,
                    columnLayouts: [
                        {
                            key: "Orders",
                            responseDataKey: "results",
                            autoGenerateColumns: false,
                            primaryKey: "OrderID",
                            width: "100%",
                            columns: [
                                { key: "OrderID", headerText: "ID", dataType: "number", width: "10%" },
                                { key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "10%" },
                                { key: "Freight", headerText: "Freight", dataType: "string", width: "10%" },
                                { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                                { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "20%" },
                                { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "15%" },
                                { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "15%" }
                            ],
                            features: [
                                {
                                    name: "Paging",
                                    type: "local",
                                    pageSize: 10
                                },
                                {
                                    name: "Updating",
                                    enableDataDirtyException: false,
                                    columnSettings: [
                                        {
                                            columnKey: 'OrderID',
                                            readOnly: true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    features: [
                        {
                            name: "Paging",
                            type: "local",
                            pageSize: 4
                        },
                        {
                            name: "Sorting",
                            type: "local",
                            inherit: true
                        },
                        {
                            name: "Filtering",
                            type: "local",
                            inherit: true
                        },
                        {
                            name: "Updating",
                            enableDataDirtyException: false,
                            inherit: true,
                            columnSettings: [
                                {
                                    columnKey: 'EmployeeID',
                                    readOnly: true
                                }
                            ]
                        },
                        {
                            name: "Resizing",
                            allowDoubleClickToResize: true,
                            inherit: true
                        },
                        {
                            name: "Tooltips",
                            visibility: "always",
                            inherit: true
                        },
                        {
                            name: "Hiding",
                            inherit: true
                        },
                        {
                            name: "Summaries",
                            inherit: true
                        }
                    ]
                });
            }
        });
});