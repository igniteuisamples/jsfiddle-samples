$(function () {
            let uniqueCategoriesSet = new Set();
            let uniqueCategories = [];

            northwindProducts.forEach(function (product) {
                uniqueCategoriesSet.add(product.CategoryName)
            });

            uniqueCategoriesSet.forEach(function (item) {
                uniqueCategories.push(item);
            });

            $.ig.CustomComboEditorProvider = $.ig.CustomComboEditorProvider || $.ig.EditorProviderCombo.extend({
                setSize: function (width, height) {
                    this.editor.element.css({
                        width: width,
                        height: height
                    });
                },
                getValue: function () {
                    return this.editor.value();
                },
                destroy: function () {
                    this.editor.element.remove();
                }
            });

            $("#productsGrid").igGrid({
                autoGenerateColumns: false,
                width: '100%',
                columns: [
                { headerText: "Product Name", key: "ProductName", dataType: "string" },
                { headerText: "Units In Stock", key: "InStock", dataType: "number" },
                { headerText: "Category", key: "CategoryName", dataType: "string" }
                ],
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
                        columnKey: "CategoryName",
                        conditionList: [
                            "equals"
                        ],
                        editorProvider: new $.ig.CustomComboEditorProvider(),
                        editorOptions: {
                            dataSource: uniqueCategories,
                            allowCustomValue: false,
                            autoComplete: true,
                            multiSelection: {
                                enabled: true,
                                showCheckboxes: true,
                                itemSeparator: ', '
                            }
                        }
                    }
                    ]
                },
                {
                    name: "Paging",
                    pageSize: 10
                }
                ]
            });
        });