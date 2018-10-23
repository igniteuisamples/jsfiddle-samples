$(function () {
$.support.cors = true;

        $(function () {
            var dataSource = new $.ig.OlapFlatDataSource({
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
                measures: "[Measures].[UnitPrice]"
            });

            $('#dataSelector').igPivotDataSelector({
                dataSource: dataSource,
                height: "565px"
            });

            $("#pivotGrid").igPivotGrid({
                dataSource: dataSource,
                height: "565px",
                width: "660px"
            });

            $(".custom-draggable").draggable({
                // You must set this option in a similar manner, because the pointer is used when 
                // calculating the drop position and its top should not be blocked by the dragged element
                cursorAt: {
                    top: -10,
                    left: 10
                },
                helper: "clone"
            });
        });
});