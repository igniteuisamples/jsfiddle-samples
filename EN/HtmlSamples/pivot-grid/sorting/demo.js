$(function () {
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
                rows: "[Date].[Dates]",
                columns: "[Product].[Product]",
                measures: "[Measures].[UnitsSold]"
            });

            $("#pivotGrid").igPivotGrid({
                allowSorting: true,
                allowHeaderRowsSorting: true,
                allowHeaderColumnsSorting: true,
                firstSortDirection: "ascending",
                firstLevelSortDirection: "ascending",
                levelSortDirections: [
                    { levelUniqueName: "[Date].[Dates].[year]", sortDirection: "descending" },
                    { levelUniqueName: "[Product].[Product].[ProductCategory]" }
                ],
                dataSource: dataSource,
                dataSourceInitialized: function (evt, ui) {
                    // expand the first members in the rows and in the columns in order to observe the applie sorting
                    $("#pivotGrid").igPivotGrid("expandTupleMember", "rowAxis", 0, 0, false);
                    $("#pivotGrid").igPivotGrid("expandTupleMember", "columnAxis", 0, 0, true);
                },
                height: "580px",
                width: "560px"
            });

            $('#dataSelector').igPivotDataSelector({
                dataSource: dataSource,
                height: "580px"
            });
        });