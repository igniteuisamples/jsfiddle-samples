$(function () {

            function CreateChart(selector, seriesType, title) {
                $(selector).igDataChart({
                    width: "250px",
                    height: "250px",
                    dataSource: data,
                    title: title,
                    subtitle: "風速 vs. 風向",
                    axes: [{
                        name: "angleAxis",
                        type: "numericAngle",
                        interval: 45,
                        minimumValue: 0,
                        maximumValue: 360,
                        startAngleOffset: -90,
                        formatLabel: function (value) { return value + "º"; }
                    },
                    {
                        name: "radiusAxis",
                        type: "numericRadius",
                        innerRadiusExtentScale: 0.1,
                        minimumValue: 0,
                        maximumValue: 10,
                        interval: 5
                    }],
                    series: [{
                        name: "series1", 
                        type: seriesType,
                        angleAxis: "angleAxis",
                        radiusAxis: "radiusAxis",
                        angleMemberPath: "WindDirection",
                        radiusMemberPath: "WindSpeed"
                    }],
                    horizontalZoomable: false,
                    verticalZoomable: false,
                    windowResponse: "immediate"
                });
            }

            CreateChart("#chartPolarScatter", "polarScatter", "極座標散布図");
            CreateChart("#chartPolarLine", "polarLine", "極座標折れ線チャート");
            CreateChart("#chartPolarArea", "polarArea", "極座標エリア チャート");
            CreateChart("#chartPolarSpline", "polarSpline", "極座標スプライン");
            CreateChart("#chartPolarSplineArea", "polarSplineArea", "極座標スプライン エリア");
        });