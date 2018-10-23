$(function () {
            // generating new data column based on existing values
            for (i = 0; i < everyThreeYears.length; i++) {
                var chn = everyThreeYears[i]["China"];
                var usa = everyThreeYears[i]["UnitedStates"];
                var rus = everyThreeYears[i]["Russia"];
                everyThreeYears[i].Total = (chn + usa + rus).toFixed(2);
            }

            $("#chart").igDataChart({
                dataSource: everyThreeYears,
                width: "550px",
                height: "450px", 
                title: "Energy Production Per Country",
                legend: { element: "legend" },
                horizontalZoomable: true,
                verticalZoomable: true,
                leftMargin: 5,
                topMargin: 15, 
                axes: [{
                    // this axis is shared between column and line series 
                    type: "categoryX",
                    name: "sharedXAxis",
                    label: "Year",
                    strokeThickness: 5,
                    title: "Year"
                }, {
                    // this axis is shared between column series 
                    type: "numericY",
                    name: "sharedYAxis",
                    minimumValue: 0,
                    maximumValue: 100,
                    strokeThickness: 5,
                    title: "Quadrillion Btu"
                }, {
                    // this axis is not shared between any series 
                    type: "numericY",
                    name: "lineYAxis",
                    minimumValue: 50,
                    maximumValue: 250,
                    labelLocation: "outsideRight",
                    title: "Quadrillion Btu",
                }],
                series: [ 
                    CreateColumnSeries("China", "China"),
                    CreateColumnSeries("UnitedStates", "US"),
                    CreateColumnSeries("Russia", "Russia"),
                    CreateLineSeries("Total", "Total Energy"),
                ],
            }); 

            function CreateColumnSeries(seriesMemberPath, seriesTitle) {
                var series = {
                    type: "column",
                    markerType: "none",
                    xAxis: "sharedXAxis",
                    yAxis: "sharedYAxis",
                    name: seriesMemberPath + "series",
                    title: seriesTitle,
                    valueMemberPath: seriesMemberPath,
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    showTooltip: true,
                    thickness: 0
                }
                return series;
            }

            function CreateLineSeries(seriesMemberPath, seriesTitle) {
                var series = {
                    type: "line",
                    markerType: "none",
                    xAxis: "sharedXAxis",
                    yAxis: "lineYAxis",
                    brush: "#008DFF",
                    name: seriesMemberPath + "series",
                    title: seriesTitle,
                    valueMemberPath: seriesMemberPath,
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    showTooltip: true,
                    thickness: 3
                }
                return series;
            }
        });