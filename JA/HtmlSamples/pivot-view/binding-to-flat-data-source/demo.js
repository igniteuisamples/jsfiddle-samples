$(function () {
            var sumAggregator = function (propertyName) {
                return function (items, cellMetadata) {
                    var sum = 0;
                    $.each(items, function (index, item) {
                        sum += item[propertyName];
                    });
                    return sum;
                };
            },
            saleValueCalculator = function (items, cellMetadata) {
                var sum = 0;
                $.each(items, function (index, item) {
                    sum += item.UnitPrice * item.UnitsSold;
                });
                return (Math.round(sum * 10) / 10).toFixed(2);
            };
            $("#pivotView").igPivotView({
                dataSourceOptions: {
                    flatDataOptions: {
                        dataSource:
                        [{ "ProductCategory": "Clothing", "UnitPrice": 12.81, "SellerName": "Stanley Brooker", "Country": "Bulgaria", "City": "Plovdiv", "Date": "01/01/2012", "UnitsSold": 282 },
                        { "ProductCategory": "Clothing", "UnitPrice": 49.57, "SellerName": "Elisa Longbottom", "Country": "US", "City": "New York", "Date": "01/05/2013", "UnitsSold": 296 },
                        { "ProductCategory": "Bikes", "UnitPrice": 3.56, "SellerName": "Lydia Burson", "Country": "Uruguay", "City": "Ciudad de la Costa", "Date": "01/06/2011", "UnitsSold": 68 },
                        { "ProductCategory": "Accessories", "UnitPrice": 85.58, "SellerName": "David Haley", "Country": "UK", "City": "London", "Date": "04/07/2012", "UnitsSold": 293 },
                        { "ProductCategory": "Components", "UnitPrice": 18.13, "SellerName": "John Smith", "Country": "Japan", "City": "Yokohama", "Date": "12/08/2012", "UnitsSold": 240 },
                        { "ProductCategory": "Clothing", "UnitPrice": 68.33, "SellerName": "Larry Lieb", "Country": "Uruguay", "City": "Ciudad de la Costa", "Date": "05/12/2011", "UnitsSold": 456 },
                        { "ProductCategory": "Components", "UnitPrice": 16.05, "SellerName": "Walter Pang", "Country": "Bulgaria", "City": "Sofia", "Date": "02/19/2013", "UnitsSold": 492 }],
                        metadata: {
                            cube: {
                                name: "Sales",
                                caption: "セールス",
                                measuresDimension: {
                                    caption: "メジャー",
                                    measures: [ //for each measure, name and aggregator are required
                                        { caption: "販売単位数", name: "UnitsSold", aggregator: sumAggregator('UnitsSold') },
                                        { caption: "単価", name: "UnitPrice", aggregator: sumAggregator('UnitPrice') },
                                        { caption: "販売値", name: "SaleValue", aggregator: saleValueCalculator }]
                                },
                                dimensions: [ // for each dimension
                                    {
                                        caption: "日付", name: "Date", /*displayFolder: "Folder1\\Folder2",*/ hierarchies: [
                                            $.ig.OlapUtilities.prototype.getDateHierarchy(
                                                "Date", // the source property name
                                                ["year", "quarter", "month", "date"], // the date parts for which levels will be generated (optional)
                                                "Dates", // The name for the hierarchy (optional)
                                                "日付", // The caption for the hierarchy (optional)
                                                ["年", "四半期", "月", "日"], // the captions for the levels (optional)
                                                "すべての期間") // the root level caption (optional)
                                        ]
                                    },
                                    {
                                        caption: "位置", name: "Location", hierarchies: [{
                                            caption: "位置", name: "Location", levels: [
                                                {
                                                    name: "AllLocations", caption: "すべての場所",
                                                    memberProvider: function (item) { return "すべての場所"; }
                                                },
                                                {
                                                    name: "Country", caption: "国",
                                                    memberProvider: function (item) { return item.Country; }
                                                },
                                                {
                                                    name: "City", caption: "市",
                                                    memberProvider: function (item) { return item.City; }
                                                }]
                                        }]
                                    },
                                    {
                                        caption: "製品", name: "Product", hierarchies: [{
                                            caption: "製品", name: "Product", levels: [
                                                {
                                                    name: "AllProducts", caption: "すべての製品",
                                                    memberProvider: function (item) { return "すべての製品"; }
                                                },
                                                {
                                                    name: "ProductCategory", caption: "カテゴリ",
                                                    memberProvider: function (item) { return item.ProductCategory; }
                                                }]
                                        }]
                                    },
                                    {
                                        caption: "販売員", name: "Seller", hierarchies: [{
                                            caption: "販売員", name: "Seller", levels: [
                                                {
                                                    name: "AllSellers", caption: "すべての販売員",
                                                    memberProvider: function (item) { return "すべての販売員"; }
                                                },
                                                {
                                                    name: "SellerName", caption: "販売員",
                                                    memberProvider: function (item) { return item.SellerName; }
                                                }]
                                        }]
                                    }]
                            }
                        }
                    },
                    // Preload hiearhies for the rows, columns, filters and measures
                    rows: "[Date].[Dates]",
                    columns: "[Product].[Product]",
                    measures: "[Measures].[UnitsSold]"//,[Measures].[UnitPrice]"
                }
            });
        });