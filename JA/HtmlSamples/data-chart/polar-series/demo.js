$(function () {
            function createChart(selector, seriesType, data) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: data,
                    title: "風速 vs. 風向",
                    subtitle: "ロサンゼルスの風データ (12 時間)",
                    axes: [{
                        name: "angleAxis",
                        type: "numericAngle"
                    },
                    {
                        name: "radiusAxis",
                        type: "numericRadius",
                        minimumValue: 0,
                        maximumValue: 10,
                        interval: 2
                    }],
                    series: [{
                        name: "series1",
                        //title: "$$(Chart_lbl_seriesTitle)",
                        type: seriesType,
                        angleAxis: "angleAxis",
                        radiusAxis: "radiusAxis",
                        angleMemberPath: "WindDirection",
                        radiusMemberPath: "WindSpeed"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            createChart("#chartScatter", "polarScatter", data);
            createChart("#chartScatterLine", "polarLine", data);
            createChart("#chartScatterArea", "polarArea", data);
            createChart("#chartPolarSpline", "polarSpline", data);
            createChart("#chartPolarSplineArea", "polarSplineArea", data);
        });