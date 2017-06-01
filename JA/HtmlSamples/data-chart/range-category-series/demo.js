$(function () {
            function createChart(selector, seriesType, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: data,
                    title: "ニューヨーク vs. フィラデルフィア",
                    subtitle: "気温の比較",
                    axes: [{
                        name: "xAxis",
                        type: "categoryX",
                        label: "Time"
                    },
                    {
                        name: "yAxis",
                        type: "numericY",
                        title: "温度 (華氏)",
                    }],
                    series: [{
                        name: "series1",
                        title: "テスト シリーズ",
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