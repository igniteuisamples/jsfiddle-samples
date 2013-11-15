$(function () {
            $("#columnChart").igDataChart({
                width: "98%",
                height: "350px",
                dataSource: lastFiveYears,
                legend: { element: "columnLegend" },
                title: "Energy Production Per Country",
                subtitle: "The top five Total Primary Energy producers",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Year",
                    labelTopMargin: 5
                }, {
                    name: "yAxis",
                    type: "numericY",
                    title: "Quadrillion Btu",
                }],
                series: [{
                    name: "series1",
                    title: "Canada",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Canada"
                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "SaudiArabia"
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia"
                },
                {
                    name: "series4",
                    title: "United States",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "UnitedStates"
                },
                {
                    name: "series5",
                    title: "China",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China"
                }]
            });

            $("#barChart").igDataChart({
                width: "98%",
                height: "550px",
                dataSource: lastFiveYears,
                title: "Energy Production Per Country",
                subtitle: "The top five Total Primary Energy producers",
                legend: { element: "barLegend" },
                axes: [{
                    name: "xAxis",
                    type: "numericX",
                    title: "Quadrillion Btu"
                }, {
                    name: "yAxis",
                    type: "categoryY",
                    label: "Year"
                }],
                series: [{
                    name: "series1",
                    title: "Canada",
                    type: "bar",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Canada"
                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "bar",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "SaudiArabia"
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "bar",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia"
                }, {
                    name: "series4",
                    title: "United States",
                    type: "bar",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "UnitedStates"
                }, {
                    name: "series5",
                    title: "China",
                    type: "bar",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China"
                }]
            });
        });