$(function () {
              
            function CreateChart(seriesType, chartTitle) {

                var xAxis = {};
                var yAxis = {};
                if (seriesType.contains("Bar"))
                {
                    // stack bar series require numeric xAxis and category yAxis
                    xAxis = { name: "xAxis", type: "numericX", title: "生産されたエネルギー (BTU 40 億単位)" };
                    yAxis = { name: "yAxis", type: "categoryY", label: "Year", gap: 0.5, };
                }
                else
                {
                    // other stack series require category xAxis and numeric yAxis
                    xAxis = { name: "xAxis", type: "categoryX", label: "Year", gap: 0.5,  };
                    yAxis = { name: "yAxis", type: "numericY", title: "生産されたエネルギー (BTU 40 億単位)" };
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

            CreateChart("stackedBar",           "積層型棒");
            CreateChart("stacked100Bar",        "積層型 100 棒");

            CreateChart("stackedArea",          "積層型エリア");
            CreateChart("stackedColumn",        "積層型柱状");
            CreateChart("stackedLine",          "積層型折れ線");
            CreateChart("stackedSpline",        "積層型スプライン");
            CreateChart("stackedSplineArea",    "積層型スプライン エリア");
            CreateChart("stacked100Area",       "積層型 100 エリア");
            CreateChart("stacked100Column",     "積層型 100 柱状");
            CreateChart("stacked100Line",       "積層型 100 折れ線");
            CreateChart("stacked100Spline",     "積層型 100 スプライン");
            CreateChart("stacked100SplineArea", "積層型 100 スプライン エリア");
        });