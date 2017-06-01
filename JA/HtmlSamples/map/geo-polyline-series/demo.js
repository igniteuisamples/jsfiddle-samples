$(function () {
            
            // load geo-locations from shapefile and simplify data structure
            var worldAirports = [];
            var worldConnections = [];

            var worldCities = [];
            var points = [];
            var shapeDataSource = new $.ig.ShapeDataSource({
                shapefileSource: "http://jp.igniteui.com/data-files/shapes/world_cities.shp",
                databaseSource: "http://jp.igniteui.com/data-files/shapes/world_cities.dbf",
                transformRecord: function (rec) {
                    var pointX = rec.points.item(0).item(0).x();
                    var pointY = rec.points.item(0).item(0).y();
                    var city = rec.fields.item("NAME");
                    var country = rec.fields.item("COUNTRY");
                    var population = rec.fields.item("POPULATION");
                    if (population > 0) {
                        points.push({
                            Latitude: pointY, Longitude: pointX,
                            City: city, Country: country,
                            Population: population
                        });
                    }
                },
                // process data and create map when finished loading shapefile
                callback: function () {
                    worldCities = points;
                    generateConnections();
                    createMap();
                }
            });
            shapeDataSource.dataBind();
            // generate flight paths and airport connections
            function generateConnections() {

                var count = worldCities.length;
                var airports = [];
                var flights = [];
                var minDistance = 200;
                var maxDistance = 7000;
                var maxConnections = 300;
                var total = 0;
                
                for (var i = 0; i < count; i++) {
                    var connections = [];

                    var origin = worldCities[i];
                    
                    for (var ii = 0; ii < count; ii++)
                    {
                        var dest = worldCities[ii];
                        
                        if (origin.City != dest.City &&
                            origin.Population > dest.Population &&
                            origin.Country == "US" &&
                            dest.Country == "US") {

                            var hasConnection = false;
                            var distance = calcGeoDistance(origin, dest);
                            if (distance > minDistance &&
                                distance < maxDistance) {

                                if (origin.Population > 3000000 &&
                                      dest.Population > 500000 && distance < maxDistance) {
                                    hasConnection = true;
                                }
                                // optional code to add more connections
                                //if (origin.Population > 1000000 &&
                                //      dest.Population > 250000 && distance < maxDistance * 0.75) {
                                //    hasConnection = true;
                                //}
                                //if (origin.Population > 500000 &&
                                //      dest.Population > 100000 && distance < maxDistance * 0.5) {
                                //    hasConnection = true;
                                //}
                            }
                            if (hasConnection) {
                                var path = [];
                                path = calcGeoPath(origin, dest);
                                connections.push(path);
                                airports.push(dest);
                                total++;
                            }
                        }
                    }
                    if (connections.length > 0) {
                        
                        flights.push({ city: origin, points: connections });
                        airports.push(origin);
                    }
                    if (total > maxConnections) break;
                }
                worldConnections = flights;
                worldAirports = airports;
            }
            // calculate geo-path between two locations
            function calcGeoPath(origin, dest) {
                var interval = 200;
                var path = [];
                var distance = calcGeoDistance(origin, dest);
                if (distance <= interval) {
                    path.push({ x: origin.Longitude, y: origin.Latitude });
                    path.push({ x: dest.Longitude, y: dest.Latitude });
                } else {
                    
                    var current = origin;

                    for (var dist = interval; dist <= distance; dist += interval)
                    {
                        path.push({ x: current.Longitude, y: current.Latitude });
                         
                        var bearing = calcBearing(current, dest);
                        current = calcDestination(current, bearing, interval);
                    }
                    path.push({ x: dest.Longitude, y: dest.Latitude });
                }
                return path;
            }
            // calculate bearing angle between two locations
            function calcBearing(origin, dest)
            {
                origin = toRadianLocation(origin);
                dest = toRadianLocation(dest);
                //var dLat = (dest.Latitude - origin.Latitude);
                var dLon = (dest.Longitude - origin.Longitude);
                var y = Math.sin(dLon) * Math.cos(dest.Latitude);
                var x = Math.cos(origin.Latitude) * Math.sin(dest.Latitude) -
                        Math.sin(origin.Latitude) * Math.cos(dest.Latitude) * Math.cos(dLon);
                var angle = Math.atan2(y, x);
                return toDegreesNormalized(angle);
            }
            // calculate destination for origin location and travel distance
            function calcDestination(origin, bearing, distance) {

                var radius = 6371.0;
                
                origin = toRadianLocation(origin);
                bearing = toRadians(bearing);
                distance = distance / radius; // angular distance in radians
            
                var latitude = Math.asin(Math.sin(origin.Latitude) * Math.cos(distance) +
                               Math.cos(origin.Latitude) * Math.sin(distance) * Math.cos(bearing));
                var x = Math.sin(bearing) * Math.sin(distance) * Math.cos(origin.Latitude);
                var y = Math.cos(distance) - Math.sin(origin.Latitude) * Math.sin(origin.Latitude);
                var longitude = origin.Longitude + Math.atan2(x, y);
                longitude = (longitude + 3 * Math.PI) % (2 * Math.PI) - Math.PI;  // normalize to -180..+180º

                longitude = toDegrees(longitude);
                latitude = toDegrees(latitude);

                return { Longitude: longitude, Latitude: latitude };
            }
            // calculate distance between two locations
            function calcGeoDistance(origin, dest) {
                
                origin = toRadianLocation(origin);
                dest = toRadianLocation(dest);
                 
                var sinProd = Math.sin(origin.Latitude) * Math.sin(dest.Latitude);
                var cosProd = Math.cos(origin.Latitude) * Math.cos(dest.Latitude);
                var dLon = (dest.Longitude - origin.Longitude);

                var angle = Math.acos(sinProd + cosProd * Math.cos(dLon));
                var distance = angle * 6371.0;

                 

                return distance; // * 6371.0; // in km
            }

            function toRadianLocation(geoPoint) {
                var longitude = toRadians(geoPoint.Longitude);
                var latitude = toRadians(geoPoint.Latitude);

                return { Longitude: longitude, Latitude: latitude };
            }
            function toRadians(degrees)
            {
                return degrees * Math.PI / 180;
            }
            function toDegrees(radians) {
                return (radians * 180.0 / Math.PI);
            }
            function toDegreesNormalized(radians)
            {
                var degrees = toDegrees(radians);
                degrees = (degrees + 360) % 360;
                return degrees;
            }
            
            function createMap() {
                $("#map").igMap({
                    width: "700px",
                    height: "500px",
                    overviewPlusDetailPaneVisibility: "visible",
                    overviewPlusDetailPaneBackgroundImageUri: "http://jp.igniteui.com/images/samples/maps/world.png",
                    windowRect: {
                        left: 0.180,
                        top: 0.3143,
                        width: 0.180,
                        height: 0.180
                    },
                    series: [{
                        type: "geographicPolyline",
                        name: "worldConnections",
                        shapeMemberPath: "points",
                        dataSource: worldConnections,
                        shapeFilterResolution: 5.0,
                        outline: "rgba(20,20,20,0.5)",
                        thickness: 0.75,
                        showTooltip: false,
                    },
                    {
                        type: "geographicSymbol",
                        name: "worldAirports",
                        dataSource: worldAirports,
                        longitudeMemberPath: "Longitude",
                        latitudeMemberPath: "Latitude",
                        markerType: "circle",
                        markerCollisionAvoidance: "fade",
                        markerOutline: "rgba(90,160,220,0.9)",
                        markerBrush: "rgba(90,160,220,0.7)",
                        showTooltip: true,
                        tooltipTemplate: "geoSymbolTooltip",
                        }
                    ]
                });
                $("#map").find(".ui-widget-content").append("<span class='copyright-notice'><a href='https://www.openstreetmap.org/copyright'>© OpenStreetMap contributors</a></span>");
            };
        });