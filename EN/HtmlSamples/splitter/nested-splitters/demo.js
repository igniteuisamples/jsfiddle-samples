$(function () {
            $("#splitter").igSplitter({
                height: 700,
                expanded: function (evt, ui) {
                    $("#grid_headers").css("width", "100%");
                    $("#grid").css("width", "100%");
                },
                panels: [
                    { size: 200, min: 100, max: 250 },
                    { collapsible: true }
                ]
            });
            $("#detailSplitter").igSplitter({
                orientation: "horizontal",
                panels: [
                    { size: 500, collapsible: true },
                    { size: 200, collapsible: true }
                ]
            });
            $("#tree").igTree({
                dataSource: continentsWithCountriesAndCitiesCoordinates,
                dataSourceType: "json",
                bindings: {
                    textKey: "Text",
                    valueKey: "Text",
                    childDataProperty: "Countries"
                },
                rendered: onTreeRendered,
                selectionChanged: onTreeSelectionChanged
            });

            function onTreeRendered(evt, ui) {
                var unitedStatesNodeElement = ui.owner.nodeByPath("0_0");
                var unitedStatesNode = ui.owner.nodeFromElement(unitedStatesNodeElement);

                initMap();
                initCitiesGrid(unitedStatesNode.data.Cities);

                ui.owner.expandToNode(unitedStatesNodeElement);
                ui.owner.select(unitedStatesNodeElement);
            }

            function onTreeSelectionChanged (sender, eventArgs) {
                var node = eventArgs.selectedNodes[0];
                zoomMapTo(node.data.Latitude, node.data.Longitude, 23);

                $("#grid").igGrid("dataSourceObject", node.data.Cities);
                $("#grid").igGrid("dataBind");

                $("#detailSplitter").igSplitter("expandAt", 1);
            }
        
            function initMap() {
                var map = $("#map").igMap({
                    width: "100%",
                    height: "100%",
                    crosshairVisibility: "visible",
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
                $("#map").find(".ui-widget-content").append("<span class='copyright-notice'><a href='http://www.openstreetmap.org/copyright'>© OpenStreetMap contributors</a></span>");
                return map;
            }

            function initCitiesGrid(dataSource) {
                var grid = $("#grid").igGrid({
                    width: "100%",
                    height: "99%",
                    dataSource: dataSource,
                    defaultColumnWidth: "25%",
                    features: [{
                        name: "Selection",
                        mode: "row",
                        rowSelectionChanged: function (ui, args) {
                            var selectedCity = $("#grid").data("igGrid").dataSource.dataView()[args.row.index];
                            zoomMapTo(selectedCity.Latitude, selectedCity.Longitude, 0.5);
                        }
                    }]
                });

                return grid;
            }

            function zoomMapTo(latitude, longitude, radius) {
                var geographic = geographichFromCentered({
                    latitude: latitude,
                    longitude: longitude,
                    radius: radius
                });

                var zoom = $("#map").igMap("zoomToGeographic", geographic);
            }

            //  Calculates the geographich coordinates of a square around a central point and radius
            function geographichFromCentered(centered) {
                var geographic = {
                    left: centered.longitude - centered.radius,
                    top: centered.latitude - centered.radius,
                    width: centered.radius * 2,
                    height: centered.radius * 2
                };

                return geographic;
            }
        });