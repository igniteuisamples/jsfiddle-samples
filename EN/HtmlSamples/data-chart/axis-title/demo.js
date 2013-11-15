$(function () {
                $("#chart").igDataChart({
                    width: "98%",
                    height: "400px",
                    dataSource: lastFiveYears,
                    title: "Energy Production Per Country",
                    subtitle: "The top five Total Primary Energy producers",
                    legend: { element: "columnLegend" },
                    axes: [{
                            name: "xAxis",
                            type: "categoryX",
                            label: "Year",
                            title: "Year"
                        }, {
                            name: "EnergyAxis",
                            type: "numericY",
                            title: "Quadrillion Btu"
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
           
        
            //Angle Transiton Duration Slider
            $("#axisAngleSlider").slider({
                min: -180,
                max: 180,
                value: -90,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "axes", [{ name: "EnergyAxis", titleAngle: ui.value}]);
                    $("#axisAngleLabel").text(ui.value);
                }
            });
            });