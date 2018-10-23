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
                title: "国別エネルギー生産量",
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
                    title: "年"
                }, {
                    // this axis is shared between column series 
                    type: "numericY",
                    name: "sharedYAxis",
                    minimumValue: 0,
                    maximumValue: 100,
                    strokeThickness: 5,
                    title: "生産されたエネルギー (BTU 40 億単位)"
                }, {
                    // this axis is not shared between any series 
                    type: "numericY",
                    name: "lineYAxis",
                    minimumValue: 50,
                    maximumValue: 250,
                    labelLocation: "outsideRight",
                    title: "生産されたエネルギー (BTU 40 億単位)",
                }],
                series: [ 
                    CreateColumnSeries("China", "中国"),
                    CreateColumnSeries("UnitedStates", "アメリカ"),
                    CreateColumnSeries("Russia", "ロシア"),
                    CreateLineSeries("Total", "総エネルギー"),
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