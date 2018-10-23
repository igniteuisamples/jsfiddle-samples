$(function () {

            var data = [
               { "Year": 1960, "China": 667, "India": 449, "US": 181 },
               { "Year": 1965, "China": 715, "India": 498, "US": 194 },
               { "Year": 1970, "China": 818, "India": 554, "US": 205 },
               { "Year": 1975, "China": 916, "India": 621, "US": 216 },
               { "Year": 1980, "China": 981, "India": 697, "US": 227 },
               { "Year": 1985, "China": 1051, "India": 782, "US": 238 },
               { "Year": 1990, "China": 1135, "India": 870, "US": 250 },
               { "Year": 1995, "China": 1205, "India": 960, "US": 266 },
               { "Year": 2000, "China": 1263, "India": 1053, "US": 282 },
               { "Year": 2005, "China": 1304, "India": 1144, "US": 296 },
               { "Year": 2010, "China": 1338, "India": 1231, "US": 309 },
               { "Year": 2015, "China": 1371, "India": 1309, "US": 321 },
            ];

            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                title: "Population per Country",
                horizontalZoomable: true,
                verticalZoomable: true,
                dataSource: data,
                axes: [
                    {
                        name: "xAxis",
                        type: "categoryX",
                        label: "Year",
                        interval: 1
                    },
                    {
                        name: "yAxis",
                        type: "numericY",
                        minimumValue: 0,
                        maximumValue: 2000,
                        title: "Millions of People",
                    }
                ],
                series: [
                    {
                        type: "line",
                        name: "PopIndia",
                        title: "India",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "India",
                        showTooltip: true,
                        markerType: "circle"
                    },
                    {
                        type: "line",
                        name: "PopChina",
                        title: "China",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "China",
                        showTooltip: true,
                        markerType: "circle"
                    },
                    {
                        type: "line",
                        name: "PopUS",
                        title: "United States",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "US",
                        showTooltip: true,
                        markerType: "circle"
                    },
                    {
                        name: "itemToolTipLayer",
                        title: "itemToolTip",
                        type: "itemToolTipLayer",
                        useInterpolation: false,
                        transitionDuration: 250
                    }]
            });


             //Transiton Duration Slider
            $("#transitionDurationSlider").slider({
                min: 0,
                max: 1000,
                value: 250,
                slide: function (event, ui) {
                    $("#transitionDurationLabel").text(ui.value);
                    $("#chart").igDataChart("option", "series", [
                        { name: "itemToolTipLayer", transitionDuration: ui.value }
                    ]);
                }
            });

             //Use Interpolation
            $("#useInterpolationCheckBox").click(function (e) {
                var useInterpolationResult = $("#useInterpolationCheckBox").is(":checked") ? true : false;
                $("#chart").igDataChart("option", "series", [{ name: "itemToolTipLayer", useInterpolation: useInterpolationResult }]);
            });
        });