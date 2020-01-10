$(function () {
var scatterData = [
            { "X": 20, "Y": 20, "R": 10, "Value": 10 },
            { "X": 20, "Y": 80, "R": 30, "Value": 10 },
            { "X": 80, "Y": 80, "R": 30, "Value": 90 },
            { "X": 80, "Y": 20, "R": 10, "Value": 90 }
        ];  
        var shapeData = [ [GetRectShapes(20, 20)] ];

        var highDensityData = GetDensityData(20, 20);

        $(function () {
            // CODE SNIPPET
            $("#pointChart").igShapeChart({
                chartType: "point",
                dataSource: scatterData,
                title: "Point", 
            });

            $("#bubbleChart").igShapeChart({
                chartType: "bubble",
                dataSource: scatterData, 
                title: "Bubble", 
            });

            $("#areaChart").igShapeChart({
                chartType: "area",
                dataSource: scatterData, 
                title: "Area", 
            });

            $("#polygonChart").igShapeChart({
                chartType: "polygon",
                dataSource: shapeData, 
                title: "Polygon", 
            });

            $("#lineChart").igShapeChart({
                chartType: "line",
                dataSource: scatterData, 
                title: "Line", 
            });

            $("#highDensityChart").igShapeChart({
                chartType: "highDensity",
                dataSource: highDensityData, 
                title: "High Density", 
            });

            $("#contourChart").igShapeChart({
                chartType: "contour",
                dataSource: scatterData, 
                title: "Contour", 
            });

            $("#polylineChart").igShapeChart({
                chartType: "polyline",
                dataSource: shapeData, 
                title: "Polyline", 
            });

            $("#splineChart").igShapeChart({
                chartType: "spline",
                dataSource: scatterData, 
                title: "Spline", 
            }); 
            // CODE SNIPPET

            StyleChart("#pointChart");
            StyleChart("#bubbleChart");
            StyleChart("#areaChart");
            StyleChart("#splineChart");
            StyleChart("#lineChart");
            StyleChart("#highDensityChart");
            StyleChart("#contourChart");
            StyleChart("#polylineChart");
            StyleChart("#polygonChart");
        });

        function GetRectShapes(x, y) {
            x = x || 0;
            y = y || 0;
            var shapes = [
                { "value": 5, "radius": 5, "x": x + 10, "y": y + 10, "points": [GetRectPoints(x, y)] },
                { "value": 50, "radius": 50, "x": x + 60, "y": y + 10, "points": [GetRectPoints(x, y + 40)] }];
            return shapes;
        }

        function GetRectPoints(x, y) {
            return [
                { "x": x, "y": y },
                { "x": x + 60, "y": y },
                { "x": x + 60, "y": y + 20 },
                { "x": x, "y": y + 20 },
                { "x": x, "y": y }];
        }

        function GetDensityData(x, y) {
            x = x || 0;
            y = y || 0;
            var density = [];

            var points = [
                { "x": x, "y": y , },
                { "x": x + 60, "y": y, },
                { "x": x, "y": y + 60, },
                { "x": x + 60, "y": y + 60 }];

            var range1 = 5;
            var range2 = 2.5;
            for (i = 0; i < points.length; i++) {
                for (p = 0; p < 500; p++) {
                    var dx = points[i].x + (GetRandom(-range1, range1) * Math.random());
                    var dy = points[i].y + (GetRandom(-range1, range1) * Math.random());
                    density.push({ "x": dx, "y": dy, });
                }
                for (p = 0; p < 100; p++) {
                    var dx = points[i].x + (GetRandom(-range2, range2) * Math.random());
                    var dy = points[i].y + (GetRandom(-range2, range2) * Math.random());
                    density.push({ "x": dx, "y": dy, });
                }
            }
            return density;
        }

        function GetRandom(min, max) {
            return Math.random() * (max - min) + min;
        }


        function StyleChart(chartID) {

            $(chartID).igShapeChart({
                width: "33%",
                height: "200px",
                xAxisInterval: 20,
                yAxisInterval: 20,
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 100,
                yAxisMaximumValue: 100,
                xAxisTickLength: 5,
                yAxisTickLength: 5,
                xAxisTickStrokeThickness: 1,
                yAxisTickStrokeThickness: 1,
                xAxisTickStroke: "gray",
                yAxisTickStroke: "gray",
                thickness: 2,
                markerTypes: [ "circle" ],
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });
        }
});