$(function () {

		function CreateEarthquakes(count) {
		count = count || 50; 
		var data = [];
			for (i = 0; i < count; i++)
			{
				var x = Math.floor((Math.random() * 360) - 180);
				var y = Math.floor((Math.random() * 180) - 90);
				var m = Math.floor((Math.random() * 10) + 1);
				var point = { "Magnitude": m, "Longitude": x, "Latitude": y };
				data.push(point);
			}
			return data;
        }
        var data = CreateEarthquakes(100);
             
        function createMap() {

            $("#map").igMap({
                width: "700px",
                height: "500px", 
                 
                series: [{
                    name: "series1",
                    type: "geographicProportionalSymbol", 
                    dataSource: data,
                    markerType: "circle", 
                    markerOutline: "black",
                    longitudeMemberPath: "Longitude",
                    latitudeMemberPath: "Latitude",
                    radiusMemberPath: "Magnitude",					
                    radiusScale: {
                        minimumValue: 10,
                        maximumValue: 40, 
                    },
                    fillMemberPath: "Magnitude",
                    fillScale: {
                         type: "value",
                         brushes: ["red", "yellow"],
                         minimumValue: 1,
                         maximumValue: 12,
						 
                     }
                }, 
                ]
            });
        };
		
		createMap();

    });