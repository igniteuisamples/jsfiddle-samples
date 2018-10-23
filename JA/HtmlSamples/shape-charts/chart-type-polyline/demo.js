$(function () {
(function () {
            $("#polylineChart").igShapeChart({
                width: "98%",
                height: "550px",
                chartType: "auto",
                markerTypes: ["circle"],
                dataSource: createPolylineData(),
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
                xAxisInterval: 40,
                yAxisInterval: 50,
                xAxisMinimumValue: -120,
                yAxisMinimumValue: 20,
                xAxisMaximumValue: 120,
                yAxisMaximumValue: -300,
            });

            function createPolylineData() {
                var polyline = [
                // vertical and horizontal lines
                { "Points": [Line(0, 0, 0, -250)], },
                { "Points": [Line(-40, -200, 0, -200), Line(0, -200, 40, -200)], },
                { "Points": [Line(-100, -50, 0, -50), Line(0, -50, 100, -50)], },
                // right side
                { "Points": [Line(0, 0, 50, -25), Line(50, -25, 60, -50), Line(60, -50, 40, -200), Line(40, -200, 0, -250), ] },
                { "Points": [Line(0, 0, 50, -25), Line(50, -25, 40, -50), Line(40, -50, 40, -200), Line(40, -200, 0, -250), ] },
                { "Points": [Line(0, 0, 40, -50), Line(40, -50, 20, -200), Line(20, -200, 0, -250), ] },
                { "Points": [Line(0, 0, 10, -50), Line(10, -50, 20, -200), Line(20, -200, 0, -250), ] },
                { "Points": [Line(0, 0, 60, 0), Line(60, 0, 100, -50), Line(100, -50, 40, -200), Line(40, -200, 0, -250)] },
                { "Points": [Line(0, 0, 50, -25), Line(50, -25, 80, -50), Line(80, -50, 40, -200), Line(40, -200, 0, -250), ] },
                // left side
                { "Points": [Line(0, 0, -50, -25), Line(-50, -25, -60, -50), Line(-60, -50, -40, -200), Line(-40, -200, 0, -250), ] },
                { "Points": [Line(0, 0, -50, -25), Line(-50, -25, -40, -50), Line(-40, -50, -40, -200), Line(-40, -200, 0, -250), ] },
                { "Points": [Line(0, 0, -40, -50), Line(-40, -50, -20, -200), Line(-20, -200, 0, -250), ] },
                { "Points": [Line(0, 0, -10, -50), Line(-10, -50, -20, -200), Line(-20, -200, 0, -250), ] },
                { "Points": [Line(0, 0, -60, 0), Line(-60, 0, -100, -50), Line(-100, -50, -40, -200), Line(-40, -200, 0, -250)] },
                { "Points": [Line(0, 0, -50, -25), Line(-50, -25, -80, -50), Line(-80, -50, -40, -200), Line(-40, -200, 0, -250), ] },
                ];

                // optional markers showing intersection of polylines
                var markers = [];
                for (i = 0; i < polyline.length; i++) {
                    var points = polyline[i].Points;
                    for (p = 0; p < points.length; p++) {
                        var shape = points[p];
                        for (s = 0; s < shape.length; s++) {
                            markers.push({ "x": shape[s].x, "y": shape[s].y, });
                        }
                    }
                }

                function Line(x1, y1, x2, y2) {
                    return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
                }

                return [polyline, markers];
            }
        })();
});