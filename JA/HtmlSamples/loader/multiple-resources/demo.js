$(function () {
$.ig.loader({
            scriptPath: "https://cdn-na.infragistics.com/igniteui/latest/js/",
            cssPath: "https://cdn-na.infragistics.com/igniteui/latest/css/",
            resources: "igDataChart.Radial,igChartLegend,igCombo",
            ready: function () {

                var data1 = [{ "Label": "管理", "Budget": 60, "Spending": 20 },
                    { "Label": "セールス", "Budget": 40, "Spending": 80 },
                    { "Label": "IT", "Budget": 60, "Spending": 20 },
                    { "Label": "マーケティング", "Budget": 40, "Spending": 80 },
                    { "Label": "開発", "Budget": 60, "Spending": 20 },
                    { "Label": "サポート", "Budget": 20, "Spending": 60 }];

                $("#chart1").igDataChart({
                    width: "500px",
                    height: "500px",
                    dataSource: data1,
                    legend: { element: "legend1" },
                    axes: [{
                        name: "angleAxis",
                        type: "categoryAngle",
                        label: "Label",
                        interval: 1
                    }, {
                        name: "radiusAxis",
                        type: "numericRadius",
                        innerRadiusExtentScale: .1,
                        maximumValue: 100,
                        minimumValue: 0,
                        interval: 25,
                        radiusExtentScale: .6
                    }],
                    series: [{
                        name: "series1",
                        title: '予算',
                        type: "radialLine",
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "Budget",
                        thickness: 5,
                        markerType: "circle"
                    }, {
                        name: "series2",
                        title: '支出',
                        type: "radialLine",
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "Spending",
                        thickness: 5,
                        markerType: "circle"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });

                $("#seriesType").igCombo({
                    selectionChanged: function (evt, ui) {
                        if (ui.items[0].data.value != undefined) {
                            $("#chart1").igDataChart("option", "series", [{
                                name: "series1", remove: true
                            }, {
                                name: "series2", remove: true
                            }, {
                                name: "series1",
                                title: '予算',
                                type: ui.items[0].data.value,
                                angleAxis: "angleAxis",
                                valueAxis: "radiusAxis",
                                valueMemberPath: "Budget",
                                thickness: 5,
                                markerType: "circle"
                            }, {
                                name: "series2",
                                title: '支出',
                                type: ui.items[0].data.value,
                                angleAxis: "angleAxis",
                                valueAxis: "radiusAxis",
                                valueMemberPath: "Spending",
                                thickness: 5,
                                markerType: "circle"
                            }]);
                        }
                    }
                });
            }
        });
});