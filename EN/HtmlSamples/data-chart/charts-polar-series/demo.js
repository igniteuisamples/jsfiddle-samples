$(function () {

            function CreateChart(selector, seriesType, title) {
                $(selector).igDataChart({
                    width: "250px",
                    height: "250px",
                    dataSource: data,
                    title: title,
                    subtitle: "Wind Speed vs. Wind Direction",
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

            CreateChart("#chartPolarScatter", "polarScatter", "Polar Scatter");
            CreateChart("#chartPolarLine", "polarLine", "Polar Line");
            CreateChart("#chartPolarArea", "polarArea", "Polar Area");
            CreateChart("#chartPolarSpline", "polarSpline", "Polar Spline");
            CreateChart("#chartPolarSplineArea", "polarSplineArea", "Polar Spline Area");
        });