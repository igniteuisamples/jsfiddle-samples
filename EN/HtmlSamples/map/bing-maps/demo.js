$(function () {

            $("#map").igMap({
                width: "700px",
                height: "500px",
                windowRect: { left: 0.1, top: 0.1, height: 0.7, width: 0.7 },
                // specifies imagery tiles from BingMaps
                backgroundContent: {
                    type: "bing",
                    key: mapHelper.bingData(),
                    imagerySet: "AerialWithLabels", // alternative: "Road" | "Aerial"
                },
                series: [{
                    type: "geographicSymbol",
                    name: "worldCities",
                    dataSource: data,
                    latitudeMemberPath: "Latitude",
                    longitudeMemberPath: "Longitude",
                    markerType: "automatic",
                    markerCollisionAvoidance: "fade",
                    markerOutline: "#269bc9",
                    markerBrush: "#269bc9",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate"
                }],
                
            });

        });