$(function () {
            $("#grid1").igGrid({
                width: "100%",
                height: "500px",
                autoGenerateColumns: false,
                dataSource: nwCustomers,
                responseDataKey: "results",
                columns: [
                    { headerText: "顧客 ID", key: "CustomerID", dataType: "string", width: "100px" },
                    {
                        headerText: "会社情報",
                        group: [
                            {
                                headerText: "会社名",
                                key: "CompanyName",
                                dataType: "string",
                                width: "150px"
                            },
                            {
                                headerText: "名前",
                                key: "ContactName",
                                dataType: "string",
                                width: "150px",
                                groupOptions: {
                                    hidden: "parentcollapsed"
                                }
                            },
                            {
                                headerText: "連絡先",
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
                        headerText: "アドレス情報",
                        group: [
                            {
                                headerText: "住所",
                                group: [
                                    {
                                        headerText: "住所",
                                        key: "Address",
                                        dataType: "string",
                                        width: "150px"
                                    },
                                    {
                                        headerText: "市",
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
                                headerText: "郵便番号",
                                key: "PostalCode",
                                dataType: "string",
                                width: "100px",
                                groupOptions: {
                                    hidden: "parentcollapsed"
                                }
                            },
                            {
                                headerText: "フルアドレス",
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
                        headerText: "電話情報",
                        group: [
                            { headerText: "電話", key: "Phone", dataType: "string", width: "150px" },
                            {
                                headerText: "FAX",
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