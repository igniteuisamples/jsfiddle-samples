$(function () {
            for (var i = 0; i < northwindProducts.length; i++) {
                northwindProducts[i].ImageUrl = "https://lorempixel.com/50/50/food/" + (i % 10) + "/";
            }
            $("#grid").igGrid({
                primaryKey: "ProductID",
                width: '100%',
                columns: [
                    { headerText: "Product ID", key: "ProductID", dataType: "number", width: "15%", hidden: true },
                    { headerText: "Image", key: "ImageUrl", dataType: "string", width: "15%", template: "<img style=\"height:50px;\" src=\"${ImageUrl}\"/>" },
                    { headerText: "Product Name", key: "ProductName", dataType: "string", width: "25%" },
                    { headerText: "Category", key: "CategoryName", dataType: "string", width: "25%" },
                    { headerText: "Units In Stock", key: "InStock", dataType: "number", width: "35%" }
                ],
                autofitLastColumn: false,
                autoGenerateColumns: false,
                dataSource: northwindProducts,
                responseDataKey: "results",
                autoCommit: true,
                features: [
                    {
                        name: "Sorting",
                        sortingDialogContainment: "window"
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        columnSettings: [
                            {
                                columnKey: "ImageUrl",
                                allowFiltering: false
                            },
                            {
                                columnKey: "InStock",
                                condition: "greaterThan"
                            }
                        ]
                    },
                    {
                        name: "GroupBy",
                        columnSettings: [
                            {
                                columnKey: "CategoryName",
                                isGroupBy: true
                            }
                        ]
                    },
                    {
                        name: "Selection"
                    },
                    {
                        name: "Paging",
                        pageSize: 10
                    },
                    {
                        name: "Resizing"
                    },
                    {
                        name: "Updating",
                        editMode: "dialog",
                        enableAddRow: false,
                        columnSettings: [
                            {
                                columnKey: "ImageUrl",
                                readOnly: false
                            }
                        ]
                    }
                ]
            });
        });