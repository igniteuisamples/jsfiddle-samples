$(function () {

                $("#basicJsonListView").igListView({
                    dataSource: northwindProducts,
                    bindings: {
                        textKey: "CategoryName",
                        headerKey: "ProductName"
                    },
                    features: [{
                        name: "Sorting",
                        type: "local",
                        sortedFields: [{
                            fieldName: "CategoryName",
                            direction: "asc"
                        }],
                        showGrouping: true
                    }]

                });

            });