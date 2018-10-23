$(function () {
             

            function CreateSeries(seriesType) { 

                var markerType = "none"; 
                if (seriesType == "scatterPoint" || seriesType == "scatterBubble") {
                    markerType = "circle";
                }

                var series = {
                    name: seriesType + "Series",
                    type: seriesType,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    xMemberPath: "Year",
                    yMemberPath: "Value",
                    markerType: markerType,
                    thickness: 2
                };

                // scatter bubble series requires additional settings:
                if (seriesType == "scatterBubble") { 
                    series.radiusMemberPath = "Population";
                    series.fillMemberPath = "Population";
                    series.labelMemberPath = "Population"; 
                    series.radiusScale = {
                        minimumValue: 5,
                        maximumValue: 30,
                        isLogarithmic: false
                    };
                    series.fillScale = {
                        type: "value",
                        brushes: ["#DFB4FC", "#D092FA", "#7604C3"],
                        minimumValue: 150,
                        maximumValue: 400
                    };
                }

                return series;
            }

            function CreateChart(selector, seriesType, title) {
                $(selector).igDataChart({
                    width: "350px",
                    height: "350px",
                    title: title, 
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate",
                    dataSource: agriculturalData,
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "Year",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "Billions of USD",
                        maximumValue: 200000,
                        abbreviateLargeNumbers: true, 
                    }],
                    series: [
                        CreateSeries(seriesType), 
                    ]
                });
            } 

            CreateChart("#chartScatterPoint", "scatterPoint", "$$(SeriesType_Scatter)");
            CreateChart("#chartScatterBubble", "scatterBubble", "Scatter Spline");
            CreateChart("#chartScatterLine", "scatterLine", "Scatter Line");
            CreateChart("#chartScatterSpline", "scatterSpline", "Bubble Chart");
        });