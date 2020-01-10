$(function () {
            function CreateChart(selector, seriesType, title) {
                $(selector).igDataChart({
                    width: "250px",
                    height: "250px",
                    dataSource: data,
                    title: title,
                    subtitle: "New York City vs. Philadelphia",
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
                        title: "Temperature (Degrees Fahrenheit)",
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

            CreateChart("#chartArea", "rangeArea", "Range Area");
            CreateChart("#chartColumn", "rangeColumn", "Range Column");
        });