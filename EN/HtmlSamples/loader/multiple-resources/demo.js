$(function () {
$.ig.loader({
            scriptPath: "http://cdn-na.infragistics.com/igniteui/latest/js/",
            cssPath: "http://cdn-na.infragistics.com/igniteui/latest/css/",
            resources: "igDataChart.Radial,igCombo"
        });

        $.ig.loader(function () {
            var data1 = [{ "Label": "Administration", "Budget": 60, "Spending": 20 },
                { "Label": "Sales", "Budget": 40, "Spending": 80 },
                { "Label": "IT", "Budget": 60, "Spending": 20 },
                { "Label": "Marketing", "Budget": 40, "Spending": 80 },
                { "Label": "Development", "Budget": 60, "Spending": 20 },
                { "Label": "Support", "Budget": 20, "Spending": 60 }];

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
                    title: 'Budget',
                    type: "radialLine",
                    angleAxis: "angleAxis",
                    valueAxis: "radiusAxis",
                    valueMemberPath: "Budget",
                    thickness: 5,
                    markerType: "circle"
                }, {
                    name: "series2",
                    title: 'Spending',
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
                    if ($.isArray(ui.items) && ui.items[0] != undefined) {
                        $("#chart1").igDataChart("option", "series", [{
                            name: "series1", remove: true
                        }, {
                            name: "series2", remove: true
                        }, {
                            name: "series1",
                            title: 'Budget',
                            type: ui.items[0].value,
                            angleAxis: "angleAxis",
                            valueAxis: "radiusAxis",
                            valueMemberPath: "Budget",
                            thickness: 5,
                            markerType: "circle"
                        }, {
                            name: "series2",
                            title: 'Spending',
                            type: ui.items[0].value,
                            angleAxis: "angleAxis",
                            valueAxis: "radiusAxis",
                            valueMemberPath: "Spending",
                            thickness: 5,
                            markerType: "circle"
                        }]);
                    }
                }
            });
        });
});