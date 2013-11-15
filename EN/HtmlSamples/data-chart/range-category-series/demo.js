$(function () {
            function createChart(selector, seriesType, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: data,
                    title: "New York City vs. Philadelphia",
                    subtitle: "A comparison of daily temperatures",
                    axes: [{
                        name: "xAxis",
                        type: "categoryX",
                        label: "Time"
                    },
                    {
                        name: "yAxis",
                        type: "numericY",
                        title: "Temperature (Degrees Fahrenheit)",
                    }],
                    series: [{
                        name: "series1",
                        title: "Test Series",
                        type: seriesType,
                        isHighlightingEnabled: true,
                        isTransitionInEnabled: true,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        lowMemberPath: "NewYorkCityTemp",
                        highMemberPath: "PhiladelphiaTemp",
                        showTooltip: true,
                        tooltipTemplate: "tooltipTemplate"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            createChart("#chartRangeArea", "rangeArea", data);
            createChart("#chartRangeColumn", "rangeColumn", data);
        });