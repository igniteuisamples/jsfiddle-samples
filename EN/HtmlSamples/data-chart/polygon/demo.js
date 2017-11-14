$(function () {
(function () {
            var roomData = [
                { "Label": "", "Points": [[{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 7 }, { x: 7, y: 7 }, { x: 7, y: 10 }, { x: 0, y: 10 }], ] },
                { "Label": "Master Bedroom", "Points": [[{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 5 }, { x: 0, y: 5 }], ] },
                { "Label": "Guest Bedroom", "Points": [[{ x: 2, y: 10 }, { x: 7, y: 10 }, { x: 7, y: 7 }, { x: 2, y: 7 }], ] },
                { "Label": "Bath", "Points": [[{ x: 0, y: 10 }, { x: 2, y: 10 }, { x: 2, y: 7 }, { x: 0, y: 7 }], ] },
                { "Label": "Kitchen", "Points": [[{ x: 6, y: 7 }, { x: 10, y: 7 }, { x: 10, y: 4 }, { x: 6, y: 4 }], ] },
                { "Label": "Living Room", "Points": [[{ x: 6, y: 4 }, { x: 10, y: 4 }, { x: 10, y: 0 }, { x: 6, y: 0 }], ] },
            ];

            $("#polygonChart").igDataChart({
                width: "98%",
                height: "550px",
                title: "Home Floor Plan",
                dataSource: roomData,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
                axes: [{
                    name: "xAxis",
                    type: "numericX",
                }, {
                    name: "yAxis",
                    type: "numericY",
                }],
                series: [{
                    name: "polygonSeries",
                    type: "scatterPolygon",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    shapeMemberPath: "Points",
                    outline: "white",
                    markerTemplate: {
                        render: function (renderInfo) {
                            renderInfo.context.font = "16px serif";
                            renderInfo.context.fillStyle = "white";
                            renderInfo.context.textAlign = "center";
                            renderInfo.context.fillText(renderInfo.data.item().Label, renderInfo.xPosition, renderInfo.yPosition);
                        }
                    }
                }],
            });
        })();
});