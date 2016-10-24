$(function () {

            var data = [
                { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
                { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
                { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
                { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
                { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
            ];

            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                title: "Population per Country",
                subtitle: "A comparison of population in 1995 and 2005",
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate",
                dataSource: data,
                axes: [
                    {name: "NameAxis",
                        type: "categoryX",
                        title: "Country",
                        label: "CountryName"
                    },
                    {
                        name: "PopulationAxis",
                        type: "numericY",
                        minimumValue: 0,
                        title: "Millions of People",
                    }
                ],
                series: [
                    {
                        name: "2005Population",
                        type: "column",
                        xAxis: "NameAxis",
                        yAxis: "PopulationAxis",
                        isTransitionInEnabled: true,
                        isHighlightingEnabled: true,
                        valueMemberPath: "Pop2005"
                    },
                    {
                        name: "1995Population",
                        type: "column",
                        xAxis: "NameAxis",
                        yAxis: "PopulationAxis",
                        isTransitionInEnabled: true,
                        isHighlightingEnabled: true,
                        valueMemberPath: "Pop1995"
                    },
                    {
                        name: "crosshairLayer",
                        title: "crosshair",
                        type: "crosshairLayer",
                        useInterpolation: false,
                        transitionDuration: 500
                    }]
            });

            // Brush
            $("#brush").on({
                change: function (e) {
                    var brushColor = $(this).val();
                    $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", brush: brushColor }]);
                }
            });
            
            // Thickness 
            $("#thicknessSlider").slider({
                min: 1,
                max: 10,
                value: 1,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", thickness: ui.value }]);
                    $("#thicknessLabel").text(ui.value);
                }
            });

            // Opacity
            $("#opacitySlider").slider({
                min: 0,
                max: 1,
                step: 0.1,
                value: 1,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", opacity: ui.value }]);
                    $("#opacityLabel").text(ui.value);
                }
            });

            // Transiton Duration Slider
            $("#transitionDurationSlider").slider({
                min: 0,
                max: 1000,
                value: 500,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", transitionDuration: ui.value }]);
                    $("#transitionDurationLabel").text(ui.value);
                }
            });

            // Use Interpolation
            $("#useInterpolationCheckBox").click(function (e) {
                var useInterpolationResult = $("#useInterpolationCheckBox").is(":checked") ? true : false;
                $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", useInterpolation: useInterpolationResult }]);
            });
        });