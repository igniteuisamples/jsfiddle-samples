$(function () {
var data = [
            {
                "Units": 100, "Revenue": 1800, "VariableCost": 600, "FixedCost": 1000,
            }];

         $(function () {
            $("#shapeChart").igShapeChart({
                dataSource: data,
				thickness: 3,
                width: "600px",
                height: "500px",
                yAxisTitle: "価格 ($)",
                xAxisTitle: "単位数",
                brushes: ["#7F2AFA", "#FF3100", "#02B602", "#7222E7", "#C62600", "#808080", "#282828", "#029802", "#078FE4"],
                legend: "legend",
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
            });

            $("#legend").igChartLegend({});
        });
});