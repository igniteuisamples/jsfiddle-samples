$(function () {
              
            function CreateChart(seriesType, chartTitle) {

                var xAxis = {};
                var yAxis = {};
                if (seriesType.contains("Bar"))
                {
                    // stack bar series require numeric xAxis and category yAxis
                    xAxis = { name: "xAxis", type: "numericX", title: "Quadrillion Btu" };
                    yAxis = { name: "yAxis", type: "categoryY", label: "Year", gap: 0.5, };
                }
                else
                {
                    // other stack series require category xAxis and numeric yAxis
                    xAxis = { name: "xAxis", type: "categoryX", label: "Year", gap: 0.5,  };
                    yAxis = { name: "yAxis", type: "numericY", title: "Quadrillion Btu" };
                }

                var selector = "#" + seriesType;
                $(selector).igDataChart({
                    dataSource: lastFiveYears,
                    height: "250px",
                    width: "250px",
                    title: chartTitle,
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate",
                    axes: [ xAxis, yAxis ],
                    series: [
                        CreateStackedSeries(seriesType), 
                    ], 
                });
            };

            function CreateStackedSeries(seriesType) {
                var series = {
                    name: seriesType + "Series",
                    type: seriesType,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    outline: "transparent",
                    series: [
                        CreateStackedFragment("Canada"),
                        CreateStackedFragment("Russia"),
                        CreateStackedFragment("China"),
                        CreateStackedFragment("UnitedStates"),
                        CreateStackedFragment("SaudiArabia"),
                    ]
                }

                if (seriesType.contains("Column")) {
                    series.radius = 0;
                }

                return series;
            }

            function CreateStackedFragment(memberPath) {

                var stackFragment = {
                    name: memberPath + "Fragment",
                    title: memberPath,
                    valueMemberPath: memberPath,
                    type: "stackedFragment",
                    showTooltip: true,
                    tooltipTemplate: memberPath,
                };
                return stackFragment;
            }

            CreateChart("stackedBar",           "Stacked Bar");
            CreateChart("stacked100Bar",        "Stacked 100 Bar");

            CreateChart("stackedArea",          "Stacked Area");
            CreateChart("stackedColumn",        "Stacked Column");
            CreateChart("stackedLine",          "Stacked Line");
            CreateChart("stackedSpline",        "Stacked Spline");
            CreateChart("stackedSplineArea",    "Stacked Spline Area");
            CreateChart("stacked100Area",       "Stacked 100 Area");
            CreateChart("stacked100Column",     "Stacked 100 Column");
            CreateChart("stacked100Line",       "Stacked 100 Line");
            CreateChart("stacked100Spline",     "Stacked 100 Spline");
            CreateChart("stacked100SplineArea", "Stacked 100 Spline Area");
        });