$(function () {
function ColorPickerByIndex(min, max) {
             //  Initialize internal state
             var brushes = ["#d9c616", "#d96f17", "#d1150c"];
             var interval = (max - min) / (brushes.length - 1);
             //  Returns a color from the brushes array depending on the input value 
             this.getColorByIndex = function(val) {
                 var index = Math.round(val / interval);
                 if (index < 0) {
                     index = 0;
                 } else if (index > (brushes.length - 1)) {
                     index = brushes.length - 1;
                 }
                 return brushes[index];
             };
         }

         $(function () {
             
             var colorPicker = new ColorPickerByIndex(100000, 500000000);

             //  alternative functions for generating color based on a data value 
             var getColorValue = function (val) {
                 var ratio = val / 1338299500.0;
                 var col = 255.0 * ratio;
                 var colString = "rgba(0,50," + Math.round(col) + ",0.45)";
                 return colString;
             };
             var getLogColorValue = function (val) {
                 var ratio = Math.log(val) / Math.log(1338299500.0);
                 var col = 255.0 * ratio;
                 var colString = "rgba(0,50," + Math.round(col) + ",0.45)";
                 return colString;
             };
             
            $("#map").igMap({
                width: "700px",
                height: "500px",
                windowRect: { left: 0.1, top: 0.1, height: 0.7, width: 0.7 },
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://igniteui.com/images/samples/maps/world.png",
                series: [{
                    type: "geographicShape",
                    name: "worldCountries",
                    markerType: "none",
                    shapeMemberPath: "points",
                    shapeDataSource: 'http://igniteui.com/data-files/shapes/world_countries_reg.shp',
                    databaseSource: 'http://igniteui.com/data-files/shapes/world_countries_reg.dbf',
                    opacity: 0.8,
                    outlineThickness: 1,
                    showTooltip: true,
                    tooltipTemplate: "geoShapeTooltip",
                    shapeStyleSelector: {
                        selectStyle: function (s, o) {
                            var pop = s.fields.item("POP2005");
                            var popInt = parseInt(pop);
                            var colString = colorPicker.getColorByIndex(popInt); //getColorValue(popInt);
                            return {
                                fill: colString,
                                stroke: "gray"
                            };
                        }
                    }
                }],

            });
        });
});