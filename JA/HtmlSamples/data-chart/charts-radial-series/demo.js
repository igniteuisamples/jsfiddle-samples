$(function () {
            function CreateChart(selector, seriesType, title, hasLegend) {
                var thickness = 3;
                var markerType = "none";
                if (seriesType == "radialColumn" || seriesType == "radialPie") {
                    thickness = 1;
                }

                if (seriesType == "radialLine" || seriesType == "radialArea") {
                    markerType = "circle";
                }

                $(selector).igDataChart({
                    width: "250px",
                    height: "250px",
                    dataSource: data,
                    legend: hasLegend ? { element: "legend" } : null,
                    title: title,
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate",
                    axes: [{
                        name: "angleAxis",
                        type: "categoryAngle",
                        label: "Time",
                        startAngleOffset: -90,
                        interval: 1
                    }, {
                        name: "radiusAxis",
                        type: "numericRadius",
                        innerRadiusExtentScale: .1,
                        radiusExtentScale: .8,
                        maximumValue: 95,
                        minimumValue: 75,
                        interval: 5,
                    }],
                    series: [{
                        name: "series1",
                        title: 'フィラデルフィア',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "PhiladelphiaTemp",
                        thickness: thickness,
                        markerType: markerType
                    }, {
                        name: "series2",
                        title: 'ニューヨーク',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "NewYorkCityTemp",
                        thickness: thickness,
                        markerType: markerType
                    }]
                });
            }

            CreateChart("#chartLine", "radialLine", "ラジアル折れ線チャート", false);
            CreateChart("#chartColumn", "radialColumn", "ラジアル柱状チャート", true);
            CreateChart("#chartPie", "radialPie", "ラジアル円チャート", false);
            CreateChart("#chartArea", "radialArea", "ラジアル エリア", false);
        });