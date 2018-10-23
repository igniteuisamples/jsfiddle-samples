$(function () {

            var data = [
                { "Year": "1995", "China": 1297, "India": 920, "United States": 266 },
                { "Year": "2005", "China": 1216, "India": 1090, "United States": 295 },
                { "Year": "2010", "China": 1271, "India": 1131, "United States": 314 },
                { "Year": "2015", "China": 1361, "India": 1251, "United States": 322 },
                { "Year": "2020", "China": 1381, "India": 1341, "United States": 342 },
                { "Year": "2025", "China": 1394, "India": 1466, "United States": 361 }
            ];

            CreateChart("#columnChart", "column", "柱状チャート");
            CreateChart("#pointChart", "point", "ポイント");

            CreateChart("#lineChart", "line", "折れ線チャート");
            CreateChart("#splineChart", "spline", "スプライン チャート");

            CreateChart("#areaChart", "area", "エリア チャート");
            CreateChart("#splineAreaChart", "splineArea", "スプライン エリア チャート");

            CreateChart("#stepLineChart", "stepLine", "ステップ折れ線チャート");
            CreateChart("#stepAreaChart", "stepArea", "ステップ エリア チャート");
            CreateChart("#waterfallChart", "waterfall", "ウォーターフォール");

            function CreateChart(chartID, seriesType, chartTitle) {
                $(chartID).igDataChart({
                    width: "250px",
                    height: "250px",
                    title: chartTitle,
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    dataSource: data,
                    axes: [
                        {
                            name: "xAxis", type: "categoryX", label: "Year",
                            labelTextStyle: "8pt Verdana",
                        },
                        {
                            name: "yAxis", type: "numericY", minimumValue: 0,
                            title: "人口 (百万人単位)",
                            labelTextStyle: "8pt Verdana",
                        }
                    ],
                    series: [
                        CreateSeries(seriesType, "China"),
                        CreateSeries(seriesType, "India"),
                        CreateSeries(seriesType, "United States"),
                    ]
                });
            }

            function CreateSeries(seriesType, seriesMemberPath) {
                var thickness = 3;
                var markerType = "none";
                if (seriesType == "column" || seriesType == "waterfall")
                {
                    thickness = 1;
                }

                if (seriesType == "point") {
                    markerType = "circle";
                }

                var series = {
                    type: seriesType,
                    markerType: markerType,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: seriesMemberPath + "series",
                    title: seriesMemberPath,
                    valueMemberPath: seriesMemberPath,
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    showTooltip: true,
                    thickness: thickness
                }
                return series;
            }
             
        });