$(function () {

            var data = [
                { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
                { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
                { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
                { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
                { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
            ];

            $("#chart").igDataChart({
                width: "400px",
                height: "400px",
                title: "Population per Country",
                subtitle: "A comparison of population in 1995 and 2005",
                dataSource: data,
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate",
                axes: [
                {
                    name: "xAxis",
                    type: "categoryX",
                    title: "Country",
                    label: "CountryName",
                },
                {
                    name: "yAxis",
                    type: "numericY",
                    minimumValue: 0,
                    title: "Millions of People",
                }
                ],
                series: [
                {
                    name: "2005Population",
                    type: "column",
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Pop2005"
                },
                {
                    name: "1995Population",
                    type: "column",
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Pop1995"
                },
                {
                    name: "crosshairLayer",
                    title: "crosshair",
                    type: "crosshairLayer",
                    useInterpolation: false,
                    transitionDuration: 0
                }]
            })

            $("#brush").on({
                change: function (e) {
                    var brushColor = $(this).val();
                    $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", brush: brushColor }]);
                }
            });

            $("#thicknessSlider").slider({
                min: 0,
                max: 10,
                value: 2,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", thickness: ui.value }]);
                    $("#thicknessLabel").text(ui.value);
                }
            });

            $("#opacitySlider").slider({
                min: 0,
                max: 1,
                step: 0.1,
                value: 0.5,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", opacity: ui.value }]);
                    $("#opacityLabel").text(ui.value);
                }
            });

            $("#transitionDurationSlider").slider({
                min: 0,
                max: 1000,
                value: 500,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", transitionDuration: ui.value }]);
                    $("#transitionDurationLabel").text(ui.value);
                }
            });

            $("#useInterpolationCheckBox").click(function (e) {
                var useInterpolationResult = $("#useInterpolationCheckBox").is(":checked") ? true : false;
                $("#chart").igDataChart("option", "series", [{ name: "crosshairLayer", useInterpolation: useInterpolationResult }]);
            });

        });