$(function () {
            var data = [
                 { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
                 { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
                 { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
                 { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
                 { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
            ];

            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                legend: { element: "lineLegend" },
                title: "国別人口",
                subtitle: "1995 年と 2005 年の人口の比較",
                dataSource: data,
                axes: [
                    {
                        name: "NameAxis",
                        type: "categoryX",
                        label: "CountryName"
                    },
                    {
                        name: "PopulationAxis",
                        type: "numericY",
                        minimumValue: 0,
                        title: "人口 (百万人単位)",
                    }
                ],
                series: [
                    {
                        name: "2005Population",
                        type: "line",
                        title: "2005",
                        xAxis: "NameAxis",
                        yAxis: "PopulationAxis",
                        valueMemberPath: "Pop2005",
                        isTransitionInEnabled: true,
                        isHighlightingEnabled: true,
                        thickness: 5
                    },
                    {
                        name: "1995Population",
                        type: "line",
                        title: "1995",
                        xAxis: "NameAxis",
                        yAxis: "PopulationAxis",
                        valueMemberPath: "Pop1995",
                        isTransitionInEnabled: true,
                        isHighlightingEnabled: true,
                        thickness: 5
                    }
                ]
            });
            $("#seriesType").change(function (e) {
                redrawChart();
            });
            var redrawChart = function () { 
                transMode = $("#transitionInTypeSlider").val();
                transType = $("#transitionInSpeedTypeSlider").val();
                transEasingFunc = $("#transitionEasingFunctionSlider").val();

                var thickness = 5,
                seriesType = $("#seriesType").val();

                if (seriesType == "area" ||
                    seriesType == "splineArea" ||
                    seriesType == "column" ||
                    seriesType == "stepArea" ||
                    seriesType == "bar" ||
                    seriesType == "point") {
                    thickness = 1;
                }
                
                $("#chart").igDataChart("option", "series", [{ name: "2005Population", remove: true }]);
                $("#chart").igDataChart("option", "series", [{ name: "1995Population", remove: true }]);
                $("#chart").igDataChart("option", "axes", [{ name: "PopulationAxis", remove: true }]);
                $("#chart").igDataChart("option", "axes", [{ name: "NameAxis", remove: true }]);
                
                if (seriesType == "bar") {
                    $("#chart").igDataChart("option", "axes", [{
                        name: "NameAxis",
                        type: "numericX"
                    }]);
                    $("#chart").igDataChart("option", "axes", [{
                        name: "PopulationAxis",
                        type: "categoryY",
                        minimumValue: 0,
                        label: "CountryName",
                        title: "人口 (百万人単位)"
                    }]);
                    
                    $("#chart").igDataChart("option", "series", [{
                        type: seriesType,
                        name: "2005Population",
                        title: "2005",
                        xAxis: "NameAxis",
                        yAxis: "PopulationAxis",
                        valueMemberPath: "Pop2005",
                        isTransitionInEnabled: true,
                        isHighlightingEnabled: true,
                        thickness: thickness,
                        transitionInMode: transMode,
                        transitionInSpeedType: transType,
                        transitionInEasingFunction: transEasingFunc
                    }]);
                    $("#chart").igDataChart("option", "series", [{
                        type: seriesType,
                        name: "1995Population",
                        title: "1995",
                        xAxis: "NameAxis",
                        yAxis: "PopulationAxis",
                        valueMemberPath: "Pop1995",
                        isTransitionInEnabled: true,
                        isHighlightingEnabled: true,
                        thickness: thickness,
                        transitionInMode: transMode,
                        transitionInSpeedType: transType,
                        transitionInEasingFunction: transEasingFunc
                    }]);
                } else {
                    $("#chart").igDataChart("option", "axes", [{
                        name: "NameAxis",
                        type: "categoryX",
                        label: "CountryName"
                    }]);
                    $("#chart").igDataChart("option", "axes", [{
                        name: "PopulationAxis",
                        type: "numericY",
                        minimumValue: 0,
                        title: "人口 (百万人単位)",
                    }]);
                    
                    if (seriesType == "rangeColumn" || seriesType == "rangeArea") {
                        $("#chart").igDataChart("option", "series", [{
                            type: seriesType,
                            name: "2005Population",
                            title: "2005",
                            highMemberPath: "Pop2005",
                            lowMemberPath: "Pop1995",
                            xAxis: "NameAxis",
                            yAxis: "PopulationAxis",
                            isTransitionInEnabled: true,
                            isHighlightingEnabled: true,
                            thickness: thickness,
                            transitionInMode: transMode,
                            transitionInSpeedType: transType,
                            transitionInEasingFunction: transEasingFunc
                        }]);

                    } else {
                        $("#chart").igDataChart("option", "series", [{
                            type: seriesType,
                            name: "2005Population",
                            title: "2005",
                            xAxis: "NameAxis",
                            yAxis: "PopulationAxis",
                            valueMemberPath: "Pop2005",
                            isTransitionInEnabled: true,
                            isHighlightingEnabled: true,
                            thickness: thickness,
                            transitionInMode: transMode,
                            transitionInSpeedType: transType,
                            transitionInEasingFunction: transEasingFunc
                        }]);
                        $("#chart").igDataChart("option", "series", [{
                            type: seriesType,
                            name: "1995Population",
                            title: "1995",
                            xAxis: "NameAxis",
                            yAxis: "PopulationAxis",
                            valueMemberPath: "Pop1995",
                            isTransitionInEnabled: true,
                            isHighlightingEnabled: true,
                            thickness: thickness,
                            transitionInMode: transMode,
                            transitionInSpeedType: transType,
                            transitionInEasingFunction: transEasingFunc
                        }]);
                    }
                }
            };
           
            $("#transitionInTypeSlider").change(function (e) {
                redrawChart();
            });

            $("#transitionInSpeedTypeSlider").change(function (e) {
                redrawChart();
            });

            $("#transitionEasingFunctionSlider").change(function (e) {
                redrawChart();
            });
        });