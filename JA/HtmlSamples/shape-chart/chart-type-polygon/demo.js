$(function () {
(function () {
            $("#chart").igShapeChart({
                width: "98%",
                height: "550px",
                title: "家の間取り図",
                dataSource: createRoomData(),
                chartType: "polygon",
                brushes: ["#1C6ABB"],
                outlines: ["#084482"],
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
                tooltipTemplate: "customTooltip",
                // customizing marker template on seriesAdded event
                seriesAdded: function (evt, args) {
                    args.series.title = "Rooms";
                    args.series.markerTemplate = {
                        render: function (renderInfo) {
                            renderInfo.context.font = "16px serif";
                            renderInfo.context.fillStyle = "white";
                            renderInfo.context.textAlign = "center";
                            renderInfo.context.fillText(renderInfo.data.item().Label, renderInfo.xPosition, renderInfo.yPosition);
                        }
                    }
                }
            });
            $("#chart").igShapeChart({
                yAxisFormatLabel: function (value) {
                    return value + " m";
                },
                xAxisFormatLabel: function (value) {
                    return value + " m";
                },
                xAxisMinimumValue: -2,
                xAxisMaximumValue: 12,
                yAxisMinimumValue: -2,
                yAxisMaximumValue: 12,
                //xAxisMajorStrokeThickness: 0,
                //yAxisMajorStrokeThickness: 0,
            });

            function createRoomData() {
                var shapes = [
                     {
                         "Label": "Hallway", "Points": [[
                              { x: 6, y: 0 },
                              { x: 6, y: 7 },
                              { x: 4, y: 7 },
                              { x: 4, y: 0 }, ]]
                     },
                     {
                         "Label": "Entrance", "Points": [[
                           { x: 0, y: 5 },
                           { x: 4, y: 5 },
                           { x: 4, y: 7 },
                           { x: 0, y: 7 }, ]]
                     },
                     { "Label": "Guest Bedroom", "Points": [[{ x: 2, y: 10 }, { x: 7, y: 10 }, { x: 7, y: 7 }, { x: 2, y: 7 }], ] },
                     { "Label": "Bathroom", "Points": [[{ x: 0, y: 10 }, { x: 2, y: 10 }, { x: 2, y: 7 }, { x: 0, y: 7 }], ] },
                     { "Label": "Kitchen", "Points": [[{ x: 6, y: 7 }, { x: 10, y: 7 }, { x: 10, y: 4 }, { x: 6, y: 4 }], ] },
                     { "Label": "Living Room", "Points": [[{ x: 6, y: 4 }, { x: 10, y: 4 }, { x: 10, y: 0 }, { x: 6, y: 0 }], ] },
                     { "Label": "Master Bedroom", "Points": [[{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 5 }, { x: 0, y: 5 }], ] },
                ];

                // optional code to calculate dimensions of all shapes
                for (i = 0; i < shapes.length; i++) {
                    var xMin = 1000;
                    var yMin = 1000;
                    var xMax = 0;
                    var yMax = 0;
                    for (p = 0; p < shapes[i].Points[0].length; p++) {

                        var point = shapes[i].Points[0][p];
                        xMin = Math.min(xMin, point.x);
                        yMin = Math.min(yMin, point.y);
                        xMax = Math.max(xMax, point.x);
                        yMax = Math.max(yMax, point.y);
                    }
                    shapes[i].PointsCount = shapes[i].Points[0].length;
                    shapes[i].Width = Math.abs(xMax - xMin);
                    shapes[i].Height = Math.abs(yMax - yMin);
                    shapes[i].Area = shapes[i].Width * shapes[i].Height;
                    shapes[i].AreaStr = shapes[i].Area.toFixed(2);
                }
                return shapes;
            };
        })();
});