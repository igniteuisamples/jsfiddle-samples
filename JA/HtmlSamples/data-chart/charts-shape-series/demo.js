$(function () {
            var roomData = createRoomData();

            $("#chartPolygon").igDataChart({
                width: "320px",
                height: "320px",
                title: "家の間取り図",
                subtitle: "Scatter Polygon",
                dataSource: roomData,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true, 
                axes: [{
                    name: "xAxis",
                    type: "numericX",
                    interval: 1, 
                }, {
                    name: "yAxis",
                    type: "numericY",
                    interval: 1, 
                }],
                series: [{
                    name: "scatterPolygon",
                    type: "scatterPolygon",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    outline: "white", 
                    shapeMemberPath: "Points",
                    tooltipTemplate: "customTooltip",
                    showTooltip: true,
                    markerTemplate: {
                        render: function (renderInfo) {
                            renderInfo.context.font = "12px serif";
                            renderInfo.context.fillStyle = "white";
                            renderInfo.context.textAlign = "center";
                            renderInfo.context.fillText(
                                renderInfo.data.item().Label,
                                renderInfo.xPosition,
                                renderInfo.yPosition);
                        }
                    },
                }],
            });
            $("#chartPolyline").igDataChart({
                width: "320px",
                height: "320px",
                title: "家の間取り図",
                subtitle: "Scatter Polyline", 
                dataSource: roomData,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
                axes: [{
                    name: "xAxis",
                    type: "numericX",
                    interval: 1, 
                }, {
                    name: "yAxis",
                    type: "numericY",
                    interval: 1, 
                }],
                series: [{
                    name: "scatterPolyline",
                    type: "scatterPolyline",
                    xAxis: "xAxis",
                    yAxis: "yAxis", 
                    shapeMemberPath: "Points",
                    tooltipTemplate: "customTooltip",
                    showTooltip: true, 
                }],
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
                     { "Label": "Bath", "Points": [[{ x: 0, y: 10 }, { x: 2, y: 10 }, { x: 2, y: 7 }, { x: 0, y: 7 }], ] },
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
        });