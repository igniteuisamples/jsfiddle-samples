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
                    width: "250px",
                    height: "250px",
                    title: title, 
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate",
                    dataSource: agriculturalData,
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "年",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "合計農業生産 (USD 10 億単位)",
                        maximumValue: 200000,
                        abbreviateLargeNumbers: true, 
                    }],
                    series: [
                        CreateSeries(seriesType), 
                    ]
                });
            } 

            CreateChart("#chartScatterPoint", "scatterPoint", "散布図");
            CreateChart("#chartScatterBubble", "scatterBubble", "散布図 - スプライン");
            CreateChart("#chartScatterLine", "scatterLine", "散布図 - 折れ線");
            CreateChart("#chartScatterSpline", "scatterSpline", "バブル");
        });