$(function () {
var data = [
            { "X": 30, "Y": 30, "R": 10, "Value": 10 },
            { "X": 30, "Y": 70, "R": 40, "Value": 10 },
            { "X": 70, "Y": 70, "R": 40, "Value": 90 },
            { "X": 70, "Y": 30, "R": 10, "Value": 90 }];

        var polyData = [[GetRectShapes(30, 20)]];

        var highDensityData = GetDensityData(30, 30);

        $(function () {
            $("#pointChart").igShapeChart({
                chartType: "point",
                dataSource: data,
                width: "33%",
                height: "200px",
                title: "Point",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#bubbleChart").igShapeChart({
                chartType: "bubble",
                dataSource: data,
                width: "33%",
                height: "200px",
                title: "Bubble",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#areaChart").igShapeChart({
                chartType: "area",
                dataSource: data,
                width: "33%",
                height: "200px",
                title: "Area",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#polygonChart").igShapeChart({
                chartType: "polygon",
                dataSource: polyData,
                width: "33%",
                height: "200px",
                title: "Polygon",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#lineChart").igShapeChart({
                chartType: "line",
                dataSource: data,
                width: "33%",
                height: "200px",
                title: "Line",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#highDensityChart").igShapeChart({
                chartType: "highDensity",
                dataSource: highDensityData,
                width: "33%",
                height: "200px",
                title: "High Density",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#contourChart").igShapeChart({
                chartType: "contour",
                dataSource: data,
                width: "33%",
                height: "200px",
                title: "Contour",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#polylineChart").igShapeChart({
                chartType: "polyline",
                dataSource: polyData,
                width: "33%",
                height: "200px",
                title: "Polyline",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#splineChart").igShapeChart({
                chartType: "spline",
                dataSource: data,
                width: "33%",
                height: "200px",
                title: "Spline",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });
        });

        function GetRectShapes(x, y) {
            x = x || 0;
            y = y || 0;
            var shapes = [
                { "value": 5, "radius": 5, "x": x + 10, "y": y + 10, "points": [getRectPoints(x, y)] },
                { "value": 50, "radius": 50, "x": x + 40, "y": y + 10, "points": [getRectPoints(x, y + 40)] }];
            return shapes;
        }

        function getRectPoints(x, y) {
            return [
                { "x": x, "y": y },
                { "x": x + 40, "y": y },
                { "x": x + 40, "y": y + 20 },
                { "x": x, "y": y + 20 },
                { "x": x, "y": y }];
        }

        function GetDensityData(x, y) {
            x = x || 0;
            y = y || 0;
            var density = [];

            var points = [
                { "x": x, "y": y , },
                { "x": x + 40, "y": y, },
                { "x": x, "y": y + 40, },
                { "x": x + 40, "y": y + 40 }];

            var range1 = 5;
            var range2 = 2.5;
            for (i = 0; i < points.length; i++) {
                for (p = 0; p < 500; p++) {
                    var dx = points[i].x + (getRandom(-range1, range1) * Math.random());
                    var dy = points[i].y + (getRandom(-range1, range1) * Math.random());
                    density.push({ "x": dx, "y": dy, });
                }
                for (p = 0; p < 100; p++) {
                    var dx = points[i].x + (getRandom(-range2, range2) * Math.random());
                    var dy = points[i].y + (getRandom(-range2, range2) * Math.random());
                    density.push({ "x": dx, "y": dy, });
                }
            }
            return density;
        }

        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }
});