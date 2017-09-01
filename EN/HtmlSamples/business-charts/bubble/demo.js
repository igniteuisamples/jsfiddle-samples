$(function () {
            function createBubbleChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: dataSource,
                    title: "U.S. Agricultural Production Per Year",
                    subtitle: "Data from 1961-2007",
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
                        formatLabel: function (val) {
                            var bVal = (val / 1000),
                            rounded = Math.round(bVal * 100) / 100;
                            return "$" + rounded;
                        }
                    }],
                    series: [{
                        name: "bubble",
                        type: "bubble",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Year",
                        yMemberPath: "Value",
                        radiusMemberPath: "Population",
                        fillMemberPath: "Population",
                        labelMemberPath: "Population",
                        markerType: "circle",
                        radiusScale: {
                            minimumValue: 2,
                            maximumValue: 12,
                            isLogarithmic: true
                        },
                        fillScale: {
                            type: "value",
                            brushes: ["red", "orange", "yellow"],
                            minimumValue: 150,
                            maximumValue: 400
                        }
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            var dataSource = agriculturalData;
            createBubbleChart("#chartBubble", dataSource);
        });