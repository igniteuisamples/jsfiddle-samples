$(function () {
                $("#shapeChart").igShapeChart({
                        width: "800px",
                        height: "400px",
                        databaseSource: 'https://www.igniteui.com/data-files/shapes/world_countries_reg.dbf',
                        shapeDataSource: 'https://www.igniteui.com/data-files/shapes/world_countries_reg.shp',
                        isHorizontalZoomEnabled: true,
                        isVerticalZoomEnabled: true,
                    });
            });