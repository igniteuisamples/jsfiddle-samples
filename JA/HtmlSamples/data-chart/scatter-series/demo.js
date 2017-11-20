$(function () {
            function createScatterChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "散布図",
                    subtitle: "年の米国農業生産",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "年",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "合計農業生産 (USD 10 億単位)",
                        maximumValue: 200000,
                        formatLabel: function (val) {
                            var bVal = (val / 1000),
                            rounded = Math.round(bVal * 100) / 100;
                            return "$"+ rounded;
                        }
                    }],
                    series: [{
                        name: "scatter",
                        type: "scatter",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Year",
                        yMemberPath: "Value",
                        markerType: "circle",
                        title: "散布図",
                        showTooltip: true
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function createScatterLineChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "散布図 - 折れ線",
                    subtitle: "年の米国農業生産",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "年",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "合計農業生産 (USD 10 億単位)",
                        maximumValue: 200000,
                        formatLabel: function (val) {
                            var bVal = (val / 1000),
                            rounded = Math.round(bVal * 100) / 100;
                            return "$" + rounded;
                        }
                    }],
                    series: [{
                        name: "scatter",
                        type: "scatterLine",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Year",
                        yMemberPath: "Value",
                        markerType: "circle",
                        title: "散布図 - 折れ線",
                        showTooltip: true
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function createScatterSplineChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "散布図 - スプライン",
                    subtitle: "年の米国農業生産",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "年",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "合計農業生産 (USD 10 億単位)",
                        maximumValue: 200000,
                        formatLabel: function (val) {
                            var bVal = (val / 1000),
                            rounded = Math.round(bVal * 100) / 100;
                            return "$" + rounded;
                        }
                    }],
                    series: [{
                        name: "scatterSpline",
                        type: "scatterSpline",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Year",
                        yMemberPath: "Value",
                        markerType: "circle",
                        title: "散布図 - スプライン",
                        showTooltip: true
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function createBubbleChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "バブル",
                    subtitle: "年の米国農業生産",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "年",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "合計農業生産 (USD 10 億単位)",
                        maximumValue: 200000,
                        formatLabel: function (val) {
                            var bVal = (val / 1000),
                            rounded = Math.round(bVal * 100) / 100;
                            return "$" + rounded;
                        }
                    }],
                    series: [{
                        name: "bubble",
                        type: "bubble",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Year",
                        yMemberPath: "Value",
                        radiusMemberPath: "Population",
                        fillMemberPath: "Population",
                        labelMemberPath: "Population",
                        markerType: "circle",
                        title: "バブル",
                        showTooltip: true,
                        radiusScale: {
                            minimumValue: 2,
                            maximumValue: 12,
                            isLogarithmic: true
                        },
                        fillScale: {
                            type: "value",
                            brushes: ["red", "orange", "yellow"],
                            minimumValue: 150,
                            maximumValue: 400
                        }
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function createScatterAreaChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "$$(Chart_sel_scatterArea)",
                    subtitle: "$$(Chart_subtitle_scatter)",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 40,
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        interval: 40,
                    }],
                    series: [{
                        name: "area",
                        type: "scatterArea",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "X",
                        yMemberPath: "Y",
                        colorMemberPath: "Z",
                        title: "$$(Chart_sel_scatterArea)",
                        showTooltip: true,
                        colorScale: {
                            palette: ["red", "orange", "yellow"],
                            interpolationMode: "interpolateRGB",
                        }
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }
            function createScatterContourChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "$$(Chart_sel_scatterContour)",
                    subtitle: "$$(Chart_subtitle_scatter)",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 40,
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        interval: 40,
                    }],
                    series: [{
                        name: "contour",
                        type: "scatterContour",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "X",
                        yMemberPath: "Y",
                        valueMemberPath: "Z",
                        title: "$$(Chart_sel_scatterContour)",
                        showTooltip: true,
                        fillScale: {
                            type: "value",
                            brushes: ["red", "orange", "yellow"],
                        }
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            var dataSource = agriculturalData;
            createScatterChart("#chartScatter", dataSource);
            createScatterLineChart("#chartScatterLine", dataSource);
            createBubbleChart("#chartBubble", dataSource);
            createScatterSplineChart("#chartScatterSpline", dataSource);
            createScatterAreaChart("#chartScatterArea", scatterData);
            createScatterContourChart("#chartScatterContour", scatterData);
        });