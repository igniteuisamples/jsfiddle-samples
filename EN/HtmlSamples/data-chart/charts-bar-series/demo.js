$(function () {
            
            $("#columnChart").igDataChart({
                width: "320px",
                height: "350px",
                dataSource: lastFiveYears,
                legend: { element: "legend" },
                title: "Energy Production Per Country",
                subtitle: "Column",
                // note that bar chart has category x-axis and numeric y-axis
                axes: [{
                    name: "xAxis", type: "categoryX", label: "Year", labelTopMargin: 5
                }, {
                    name: "yAxis", type: "numericY", minimumValue: 0,
                    title: "Quadrillion Btu",
                }],
                series: [
                    CreateSeries("column", "China"),
                    CreateSeries("column", "UnitedStates"),
                    CreateSeries("column", "Russia"), 
                ]
            });

            $("#barChart").igDataChart({
                width: "320px",
                height: "350px",
                dataSource: lastFiveYears,
                title: "Energy Production Per Country", 
                subtitle: "Bar",
                // note that bar chart has category y-axis and numeric x-axis
                axes: [{
                    name: "xAxis", type: "numericX", minimumValue: 0,
                    title: "Quadrillion Btu"
                }, {
                    name: "yAxis", type: "categoryY", label: "Year"
                }],
                series: [
                    CreateSeries("bar", "China"),
                    CreateSeries("bar", "UnitedStates"),
                    CreateSeries("bar", "Russia"),
                ]
            });
            
            function CreateSeries(seriesType, seriesMemberPath) {                
                var series = {
                    type: seriesType,
                    markerType: "none",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: seriesMemberPath + "series",
                    title: seriesMemberPath,
                    valueMemberPath: seriesMemberPath,
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    showTooltip: true,
                    thickness: 0
                }
                return series;
            }
        });