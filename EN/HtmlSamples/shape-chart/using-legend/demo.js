$(function () {
var list1 = [
        { "X": 20, "Y": 20 },
        { "X": 20, "Y": 40 },
        { "X": 40, "Y": 40 },
        { "X": 40, "Y": 20 }];

        var list2 = [
        { "X": 60, "Y": 20 },
        { "X": 60, "Y": 40 },
        { "X": 80, "Y": 40 },
        { "X": 80, "Y": 20 }];

        var data = [[list1], [list2]];

        $(function () {

            $("#legend").igChartLegend({});

            $("#shapeChart").igShapeChart({
                dataSource: data,
                width: "700px",
                height: "400px",
                xAxisMinimumValue: 0,
                yAxisMinimumValue: 0,
                xAxisMaximumValue: 90,
                yAxisMaximumValue: 50,
                legend: "legend",
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });
        });
});