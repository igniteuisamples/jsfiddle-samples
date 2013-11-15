$(function () {           

            $("#map").igMap({
                width: "700px",
                height: "500px",
                windowRect: { left: 0.1, top: 0.1, height: 0.7, width: 0.7 },
                verticalZoomable: true,
                horizontalZoomable: true,
                // specifies imagery tiles from OpenStreetMap
                backgroundContent: {
                    type: "openStreet"
                },
                series: [{
                    type: "geographicSymbol",
                    name: "worldCities",
                    dataSource: data,
                    latitudeMemberPath: "Latitude",
                    longitudeMemberPath: "Longitude",
                    markerType: "automatic",
                    markerCollisionAvoidance: "fade",
                    markerOutline: "#b51c1c",
                    markerBrush: "#b51c1c",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate"
                }],
                
                
            });

        });