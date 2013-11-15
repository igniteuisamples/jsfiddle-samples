$(function () {
            function generateCategoryYChart(chartType) {

                var selector = "#" + chartType;
                $(selector).igDataChart({
                    dataSource: lastFiveYears,
                    height: "400px",
                    width: "400px",
                    title: "Energy Production Per Country",
                    subtitle: "The top five Total Primary Energy producers",
                    axes: [{
                        name: "Year",
                        type: "categoryY",
                        label: "Year",
                        title: "Year",
                        gap: 1,
                        labelMargin: 0
                    }, {
                        name: "Volume",
                        type: "numericX",
                        title: "Quadrillion Btu"
                    }],
                    series: [{
                        name: "parent",
                        type: chartType,
                        xAxis: "Volume",
                        yAxis: "Year",
                        outline: "transparent",
                        radius: 0,
                        series: [{
                            name: "China",
                            title: "China",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "China",
                            valueMemberPath: "China"
                        }, {
                            name: "United States",
                            title: "United States",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "United States",
                            valueMemberPath: "UnitedStates"
                        }, {
                            name: "Russia",
                            title: "Russia",
                            showTooltip: true,
                            tooltipTemplate: "Russia",
                            type: "stackedFragment",
                            valueMemberPath: "Russia"
                        }, {
                            name: "Saudi Arabia",
                            title: "Saudi Arabia",
                            showTooltip: true,
                            tooltipTemplate: "Saudi Arabia",
                            type: "stackedFragment",
                            valueMemberPath: "SaudiArabia"
                        }, {
                            name: "Canada",
                            title: "Canada",
                            showTooltip: true,
                            tooltipTemplate: "Canada",
                            type: "stackedFragment",
                            valueMemberPath: "Canada"
                        }]
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function generateCategoryXChart(chartType) {

                var selector = "#" + chartType;
                var isColumnChart = chartType.contains("Column");

                $(selector).igDataChart({
                    dataSource: lastFiveYears,
                    height: "400px",
                    width: "400px",
                    title: "Energy Production Per Country",
                    subtitle: "The top five Total Primary Energy producers",
                    axes: [{
                        name: "Year",
                        type: "categoryX",
                        label: "Year",
                        title: "Year",
                        gap: 1,
                    },
                        {
                            name: "Volume",
                            type: "numericY",
                            title: "Quadrillion Btu"
                        }],
                    series: [function () { // a self executing function to create the series initialization object
                        var seriesObj = {
                            name: "parent",
                            xAxis: "Year",
                            yAxis: "Volume",
                            type: chartType,
                            outline: "transparent",
                            series: [{
                                name: "China",
                                title: "China",
                                type: "stackedFragment",
                                showTooltip: true,
                                tooltipTemplate: "China",
                                valueMemberPath: "China"
                            }, {
                                name: "United States",
                                title: "United States",
                                type: "stackedFragment",
                                showTooltip: true,
                                tooltipTemplate: "United States",
                                valueMemberPath: "UnitedStates"
                            }, {
                                name: "Russia",
                                title: "Russia",
                                showTooltip: true,
                                tooltipTemplate: "Russia",
                                type: "stackedFragment",
                                valueMemberPath: "Russia"
                            }, {
                                name: "Saudi Arabia",
                                title: "Saudi Arabia",
                                showTooltip: true,
                                tooltipTemplate: "Saudi Arabia",
                                type: "stackedFragment",
                                valueMemberPath: "SaudiArabia"
                            }, {
                                name: "Canada",
                                title: "Canada",
                                showTooltip: true,
                                tooltipTemplate: "Canada",
                                type: "stackedFragment",
                                valueMemberPath: "Canada"
                            }]
                        };
                        if (isColumnChart) { //for column charts set the radius to 0
                            seriesObj.radius = 0;
                        }
                        return seriesObj;
                    }()],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            };

            generateCategoryYChart("stackedBar");
            generateCategoryYChart("stacked100Bar");
            generateCategoryXChart("stackedArea");
            generateCategoryXChart("stackedColumn");
            generateCategoryXChart("stackedLine");
            generateCategoryXChart("stackedSpline");
            generateCategoryXChart("stackedSplineArea");
            generateCategoryXChart("stacked100Area");
            generateCategoryXChart("stacked100Column");
            generateCategoryXChart("stacked100Line");
            generateCategoryXChart("stacked100Spline");
            generateCategoryXChart("stacked100SplineArea");
        });