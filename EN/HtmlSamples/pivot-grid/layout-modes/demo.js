$(function () {
            var $pivotGridStandard = $("#pivotGridStandard"),
            $pivotGridSuperCompact = $("#pivotGridSuperCompact"),
            $pivotGridTree = $("#pivotGridTree"),
            dataSource = new $.ig.OlapFlatDataSource({
                dataSource: sales,
                metadata: {
                    cube: {
                        name: "Sales",
                        caption: "Sales",
                        measuresDimension: {
                            caption: "Measures",
                            measures: [
                                { caption: "Units Sold", name: "UnitsSold", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitsSold') },
                                { caption: "Unit Price", name: "UnitPrice", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitPrice', 2) }]
                        },

                        dimensions: [
                            {
                                caption: "Date", name: "Date", hierarchies: [
                                    $.ig.OlapUtilities.prototype.getDateHierarchy(
                                        "Date", ["year", "quarter", "month", "date"], "Dates", "Date",
                                        ["Year", "Quarter", "Month", "Day"], "All Periods")]
                            },
                            {
                                caption: "Location", name: "Location", hierarchies: [{
                                    caption: "Location", name: "Location", levels: [
                                             { name: "AllLocations", levelCaption: "All Locations", memberProvider: function (item) { return "All Locations"; } },
                                             { name: "Country", levelCaption: "Country", memberProvider: function (item) { return item.Country; } },
                                             { name: "City", levelCaption: "City", memberProvider: function (item) { return item.City; } }]
                                }]
                            },
                            {
                                caption: "Product", name: "Product", hierarchies: [{
                                    caption: "Product", name: "Product", levels: [
                                    { name: "AllProducts", levelCaption: "All Products", memberProvider: function (item) { return "All Products"; } },
                                    { name: "ProductCategory", levelCaption: "Category", memberProvider: function (item) { return item.ProductCategory; } }]
                                }]
                            },
                            {
                                caption: "Seller", name: "Seller", hierarchies: [{
                                    caption: "Seller", name: "Seller", levels: [
                                     { name: "AllSellers", levelCaption: "All Sellers", memberProvider: function (item) { return "All Sellers"; } },
                                     { name: "SellerName", levelCaption: "Seller", memberProvider: function (item) { return item.SellerName; } }]
                                }]
                            }
                        ]
                    }
                },
                rows: "[Date].[Dates],[Product].[Product]",
                measures: "[Measures].[UnitsSold]"
            });

            $pivotGridTree.igPivotGrid({
                dataSource: dataSource,
                rowHeadersLayout: "tree",
                treeRowHeaderIndentation: 10,
                compactRowHeaderIndentation: 20,
                rowHeaderLinkGroupIndentation: 10,
                allowHeaderRowsSorting: true,
                gridOptions: {
                    caption: "Tree Layout"
                },
                width: "100%",
                height: "300px"
            });

            $pivotGridStandard.igPivotGrid({
                dataSource: dataSource,
                rowHeadersLayout: "standard",
                isParentInFrontForRows: false,
                gridOptions: {
                    caption: "Standard Layout"
                },
                width: "100%",
                height: "300px"
            });

            $pivotGridSuperCompact.igPivotGrid({
                dataSource: dataSource,
                rowHeadersLayout: "superCompact",
                compactColumnHeaders: true,
                compactRowHeaderIndentation: 20,
                compactColumnHeaderIndentation: 30,
                isParentInFrontForColumns: true,
                gridOptions: {
                    caption: "Super Compact Layout"
                },
                width: "100%",
                height: "300px"
            });


        });