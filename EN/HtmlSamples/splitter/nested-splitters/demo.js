$(function () {
            $("#splitter").igSplitter({ height: 700, panels: [{ size: 200, min: 100, max: 250, resizable: false }, { collapsible: true }] });
            $("#detailSplitter").igSplitter({ orientation: "horizontal", panels: [{ size: 500, resizable: false, collapsible: true }, { size: 200, collapsible: true}] });
            $("#tree").igTree({
                dataSource: continentsWithCountriesAndCitiesCoordinates,
                dataSourceType: "json",
                bindings: {
                    textKey: "Text",
                    valueKey: "Text",
                    childDataProperty: "Countries"
                }
            });
            $("#map").igMap({
                width: "100%",
                height: "500px",
                crosshairVisibility: "visible",
                verticalZoomable: true,
                horizontalZoomable: true,
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://igniteui.com/images/samples/splitter/world.png",
                panModifier: "control",
                backgroundContent: {
                    type: "openStreet"
                },
                windowResponse: "immediate",
                windowRect: {
                    left: 0.27,
                    top: 0.20,
                    height: 0.45,
                    width: 0.45
                }
            });

            $("#tree").on("igtreeselectionchanged", function (sender, eventArgs) {
                var node = eventArgs.selectedNodes[0];
                if (node.data.Cities) {
                    $("#grid").igGrid({
                        width: "100%",
                        height: "100%",
                        dataSource: node.data.Cities,
                        features: [{
                            name: "Selection",
                            mode: "row",
                            rowSelectionChanged: function (ui, args) {
                                var selectedCity = $("#grid").data("igGrid").dataSource.dataView()[args.row.index];
                                var geographic = geographichFromCentered({
                                    latitude: selectedCity.Latitude,
                                    longitude: selectedCity.Longitude,
                                    radius: 0.5
                                });
                                var zoom = $("#map").igMap("getZoomFromGeographic", geographic);
                                $("#map").igMap("option", "windowRect", zoom);
                            }
                        }]
                    });
                }
                var geographic = geographichFromCentered({
                    latitude: node.data.Latitude,
                    longitude: node.data.Longitude,
                    radius: 23
                });
                var zoom = $("#map").igMap("getZoomFromGeographic", geographic);
                $("#map").igMap("option", "windowRect", zoom);
                $("#detailSplitter").igSplitter("expandAt", 1);
            });

            //  Calculates the geographich coordinates of a square around a central point and radius
            function geographichFromCentered(centered) {
                var geographic =
                {
                    left: centered.longitude - centered.radius,
                    top: centered.latitude - centered.radius,
                    width: centered.radius * 2,
                    height: centered.radius * 2
                };
                return geographic;
            }
        });