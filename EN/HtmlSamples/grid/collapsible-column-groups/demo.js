$(function () {
            $("#grid1").igGrid({
                width: "100%",
                height: "500px",
                autoGenerateColumns: false,
                dataSource: nwCustomers,
                responseDataKey: "results",
                columns: [
                    { headerText: "Customer ID", key: "CustomerID", dataType: "string", width: "100px" },
                    {
                        headerText: "Company Information",
                        group: [
                            {
                                headerText: "Company Name",
                                key: "CompanyName",
                                dataType: "string",
                                width: "150px"
                            },
                            {
                                headerText: "Contact Name",
                                key: "ContactName",
                                dataType: "string",
                                width: "150px",
                                groupOptions: {
                                    hidden: "parentcollapsed"
                                }
                            },
                            {
                                headerText: "Contact Title",
                                key: "ContactTitle",
                                dataType: "string",
                                width: "150px",
                                groupOptions: {
                                    hidden: "parentcollapsed"
                                }
                            }
                        ],
                        groupOptions: {
                            expanded: true,
                            allowGroupCollapsing: true
                        }
                    },
                    {
                        headerText: "Address Information",
                        group: [
                            {
                                headerText: "Local Address",
                                group: [
                                    {
                                        headerText: "Address",
                                        key: "Address",
                                        dataType: "string",
                                        width: "150px"
                                    },
                                    {
                                        headerText: "City",
                                        key: "City",
                                        dataType: "string",
                                        width: "100px",
                                        groupOptions: {
                                            hidden: "parentcollapsed"
                                        }
                                    }
                                ],
                                groupOptions: {
                                    expanded: true,
                                    allowGroupCollapsing: true,
                                    hidden: "parentcollapsed"
                                }
                            },
                            {
                                headerText: "Postal Code",
                                key: "PostalCode",
                                dataType: "string",
                                width: "100px",
                                groupOptions: {
                                    hidden: "parentcollapsed"
                                }
                            },
                            {
                                headerText: "Full Address",
                                width: "200px",
                                key: "FullAddress",
                                dataType: "string",
                                unbound: true,
                                formula: function (data, grid) {
                                    return data["Address"] + ", " + data["City"];
                                },
                                groupOptions: {
                                    hidden: "parentexpanded"
                                }
                            }
                        ],
                        groupOptions: {
                            expanded: true,
                            allowGroupCollapsing: true
                        }
                    },
                    {
                        headerText: "Phone Information",
                        group: [
                            { headerText: "Phone", key: "Phone", dataType: "string", width: "150px" },
                            {
                                headerText: "Fax",
                                key: "Fax",
                                dataType: "string",
                                width: "150px",
                                groupOptions: {
                                    hidden: "parentcollapsed"
                                }
                            }
                        ],
                        groupOptions: {
                            expanded: true,
                            allowGroupCollapsing: true
                        }
                    }
                ],
                features: [
                    {
                        name: 'MultiColumnHeaders'
                    },
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'CustomerID',
                                classes: 'ui-hidden-phone ui-hidden-tablet'
                            }
                        ]
                    },
                ]
            });
        });