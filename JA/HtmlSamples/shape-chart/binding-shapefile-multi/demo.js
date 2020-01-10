$(function () {
var ds1Ready = false;
        var ds2Ready = false;
        var ds1 = null;
        var ds2 = null;

        function checkReady() {
            if (ds1Ready && ds2Ready) {
                var arr = [
                    ds1.converter().records(),
                    ds2.converter().records()
                ];

                $("#shapeChart").igShapeChart({
                    width: "800px",
                    height: "500px",
                    xAxisMinimumValue: -170,
                    xAxisMaximumValue: -20,
                    yAxisMaximumValue: 85,
                    yAxisMinimumValue: 0,
                    dataSource: arr,
                    isHorizontalZoomEnabled: true,
                    isVerticalZoomEnabled: true,
                });
            }
        }

        $(function () {
            ds1 = new $.ig.ShapeDataSource({
            shapefileSource: "https://www.igniteui.com/data-files/shapes/world_countries_reg.shp",
            databaseSource: "https://www.igniteui.com/data-files/shapes/world_countries_reg.dbf",
            callback: function() {
                ds1Ready = true;
                checkReady();
            }
        }).dataBind();

        ds2 = new $.ig.ShapeDataSource({
            shapefileSource: "https://www.igniteui.com/data-files/shapes/north_america_primary_roads.shp",
            databaseSource: "https://www.igniteui.com/data-files/shapes/north_america_primary_roads.dbf",
            callback: function() {
                ds2Ready = true;
                checkReady();
            }
        }).dataBind();

        });
});