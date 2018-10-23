$(function () {
            $("#columnChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: lastFiveYears,
                title: "国別エネルギー生産量",
                subtitle: "総一次エネルギー生産国トップ 5 ",
                horizontalZoomable: true,
                verticalZoomable: true,
                legend: { element: "columnLegend" },
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Year",
                    title: "年"
                }, {
                    name: "yAxis",
                    type: "numericY",
                    title: "生産されたエネルギー (BTU 40 億単位)",
                }],
                series: [{
                    name: "series1",
                    title: "Canada",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Canada",
                    tooltipTemplate: "Canada",
                    showTooltip: true

                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "SaudiArabia",
                    tooltipTemplate: "Saudi Arabia",
                    showTooltip: true
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia",
                    tooltipTemplate: "Russia",
                    showTooltip: true
                },
                {
                    name: "series4",
                    title: "United States",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "UnitedStates",
                    tooltipTemplate: "United States",
                    showTooltip: true
                },
                {
                    name: "series5",
                    title: "China",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China",
                    tooltipTemplate: "China",
                    showTooltip: true
                }]
            });
        });