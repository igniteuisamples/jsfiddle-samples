$(function () {
            var $pivotGrid = $("#pivotGrid"),
                $transposeCheckBox = $("#transpose"),
                $chart = $("#olapChart"),
                hasValue = function (value) {
                    return value !== undefined && value !== null && value.count() > 0;
                },
                dataSource = new $.ig.OlapFlatDataSource({
                    dataSource: sales,
                    metadata: {
                        cube: {
                            name: "Sales",
                            caption: "セールス",
                            measuresDimension: {
                                caption: "メジャー",
                                measures: [
                                { caption: "販売単位数", name: "UnitsSold", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitsSold') },
                                { caption: "単価", name: "UnitPrice", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitPrice', 2) }]
                            },
                            dimensions: [
                                {
                                    caption: "日付", name: "Date", hierarchies: [
                                        $.ig.OlapUtilities.prototype.getDateHierarchy(
                                            "Date", ["year", "quarter", "month", "date"], "Dates", "日付",
                                            ["年", "四半期", "月", "日"], "すべての期間")]
                                },
                                {
                                    caption: "位置", name: "Location", hierarchies: [{
                                        caption: "位置", name: "Location", levels: [
                                        { name: "AllLocations", levelCaption: "すべての場所", memberProvider: function (item) { return "すべての場所"; } },
                                        { name: "Country", levelCaption: "国", memberProvider: function (item) { return item.Country; } },
                                        { name: "City", levelCaption: "市", memberProvider: function (item) { return item.City; } }]
                                    }]
                                },
                                {
                                    caption: "製品", name: "Product", hierarchies: [{
                                        caption: "製品", name: "Product", levels: [
                                        { name: "AllProducts", levelCaption: "すべての製品", memberProvider: function (item) { return "すべての製品"; } },
                                        { name: "ProductCategory", levelCaption: "カテゴリ", memberProvider: function (item) { return item.ProductCategory; } }]
                                    }]
                                },
                                {
                                    caption: "販売員", name: "Seller", hierarchies: [{
                                        caption: "販売員", name: "Seller", levels: [
                                        { name: "AllSellers", levelCaption: "すべての販売員", memberProvider: function (item) { return "すべての販売員"; } },
                                        { name: "SellerName", levelCaption: "販売員", memberProvider: function (item) { return item.SellerName; } }]
                                    }]
                                }
                            ]
                        }
                    },
                    rows: "[Date].[Dates]",
                    measures: "[Measures].[UnitsSold],[Measures].[UnitPrice]"
                }),
                getCellData = function (rowIndex, columnIndex, columnCount, cells) {
                    var cellOrdinal = (rowIndex * columnCount) + columnIndex;
                    if (!hasValue(cells)) {
                        return 0;
                    }
                    for (var index = 0; index < cells.count() ; index++) {
                        var cell = cells.item(index);
                        if (cell.cellOrdinal() == cellOrdinal) {
                            return new Number(cell.value());
                        }
                    }
                    return 0;
                },
                updateChart = function (tableView, transpose) {
                    var columnHeaders,
                        rowHeaders,
                        cells = tableView.resultCells(),
                        dataArray = [],
                        series = [],
                        rowHeaderIndex,
                        columnHeaderIndex,
                        ds,
                        headerCell,
                        columnCount,
                        rowCount,
                        data;

                    if (transpose) {
                        columnHeaders = tableView.rowHeaders(),
                            rowHeaders = tableView.columnHeaders()
                    }
                    else {
                        columnHeaders = tableView.columnHeaders(),
                            rowHeaders = tableView.rowHeaders()
                    }

                    if (!hasValue(cells) && !hasValue(rowHeaders) && !hasValue(columnHeaders)) {
                        $chart.igDataChart("destroy");
                        return;
                    }

                    if (!hasValue(rowHeaders)) {
                        rowHeaders = [{ caption: function () { return ""; } }];
                    }

                    if (!hasValue(columnHeaders)) {
                        columnHeaders = [{ caption: function () { return ""; } }];
                    }

                    for (rowHeaderIndex = 0; rowHeaderIndex < rowHeaders.count() ; rowHeaderIndex++) {
                        headerCell = rowHeaders.item(rowHeaderIndex);
                        columnCount = columnHeaders.count();
                        rowCount = rowHeaders.count();
                        data = { caption: headerCell.caption() };
                        var value;
                        for (columnHeaderIndex = 0; columnHeaderIndex < columnCount; columnHeaderIndex++) {
                            if (transpose) {
                                value = getCellData(columnHeaderIndex, rowHeaderIndex, rowCount, cells, transpose);
                            }
                            else {
                                value = getCellData(rowHeaderIndex, columnHeaderIndex, columnCount, cells, transpose);
                            }
                            data["col" + columnHeaderIndex] = value;
                        }

                        dataArray[rowHeaderIndex] = data;
                    };

                    for (columnHeaderIndex = 0; columnHeaderIndex < columnHeaders.count() ; columnHeaderIndex++) {
                        series[columnHeaderIndex] = {
                            name: "series" + columnHeaderIndex,
                            title: columnHeaders.item(columnHeaderIndex).caption(),
                            type: "column",
                            xAxis: "xAxis",
                            yAxis: "yAxis",
                            valueMemberPath: "col" + columnHeaderIndex
                        };
                    };

                    ds = new $.ig.DataSource({ dataSource: dataArray });

                    if ($chart.data("igDataChart")) {
                        $chart.igDataChart("destroy");
                    }
                    $chart.igDataChart({
                        width: "700px",
                        height: "500px",
                        dataSource: ds,
                        series: series,
                        legend: { element: "olapChartLegend" },
                        axes: [{
                            name: "xAxis",
                            type: "categoryX",
                            label: "caption"
                        },
                        {
                            name: "yAxis",
                            type: "numericY"
                        }],
                        horizontalZoomable: true,
                        verticalZoomable: true,
                        windowResponse: "immediate"
                    });
                };

            $pivotGrid.igPivotGrid({
                dataSource: dataSource,
                pivotGridRendered: function () {
                    updateChart($pivotGrid.data("igPivotGrid")._tableView, $transposeCheckBox.is(':checked'));
                },
                hideFiltersDropArea: true,
                disableColumnsDropArea: true,
                disableRowsDropArea: true,
                disableMeasuresDropArea: true
            });
            $transposeCheckBox.click(function () {
                updateChart($pivotGrid.data("igPivotGrid")._tableView, $transposeCheckBox.is(':checked'));
            });
        });