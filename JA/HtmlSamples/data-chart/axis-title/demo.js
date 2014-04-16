$(function () {
                $("#chart").igDataChart({
                    width: "98%",
                    height: "400px",
                    dataSource: lastFiveYears,
                    title: "国別エネルギー生産量",
                    subtitle: "総一次エネルギー生産国トップ 5 ",
                    legend: { element: "columnLegend" },
                    axes: [{
                            name: "xAxis",
                            type: "categoryX",
                            label: "Year",
                            title: "年"
                        }, {
                            name: "EnergyAxis",
                            type: "numericY",
                            title: "生産されたエネルギー (BTU 40 億単位)"
                        }],
                    series: [{
                            name: "series1",
                            title: "Canada",
                            type: "column",
                            isHighlightingEnabled: true,
                            isTransitionInEnabled: true,
                            xAxis: "xAxis",
                            yAxis: "EnergyAxis",
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
                            yAxis: "EnergyAxis",
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
                            yAxis: "EnergyAxis",
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
                            yAxis: "EnergyAxis",
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
                            yAxis: "EnergyAxis",
                            valueMemberPath: "China",
                            tooltipTemplate: "China",
                            showTooltip: true
                        }]
                });
           
        
            //yAxis Angle Transiton Duration Slider
            $("#yAxisAngleSlider").slider({
                min: -180,
                max: 180,
                value: -90,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "axes", [{ name: "EnergyAxis", titleAngle: ui.value}]);
                    $("#yAxisAngleLabel").text(ui.value);
                }
            });
                
                //xAxis Angle Transiton Duration Slider
            $("#xAxisAngleSlider").slider({
                min: -180,
                max: 180,
                value: -90,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "axes", [{ name: "xAxis", titleAngle: ui.value }]);
                    $("#xAxisAngleLabel").text(ui.value);
                }
            });
                
            });