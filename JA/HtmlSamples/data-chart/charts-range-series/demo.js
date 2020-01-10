$(function () {
            function CreateChart(selector, seriesType, title) {
                $(selector).igDataChart({
                    width: "250px",
                    height: "250px",
                    dataSource: data,
                    title: title,
                    subtitle: "ニューヨーク vs. フィラデルフィア",
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate",
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
                        type: seriesType,
                        name: "series1", 
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        lowMemberPath: "NewYorkCityTemp",
                        highMemberPath: "PhiladelphiaTemp",
                        tooltipTemplate: "tooltipTemplate",
                        showTooltip: true,
                        isHighlightingEnabled: true,
                        isTransitionInEnabled: true
                    }]
                });
            }

            CreateChart("#chartArea", "rangeArea", "範囲エリア チャート");
            CreateChart("#chartColumn", "rangeColumn", "範囲柱状チャート");
        });