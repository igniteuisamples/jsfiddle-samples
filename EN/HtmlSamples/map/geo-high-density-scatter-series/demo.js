$(function () {
            $("#map").igMap({
                width: "700px",
                height: "500px",
                backgroundContent: {
                    type: "openStreet"
                },
                series: [{
                    type: "geographicHighDensityScatter",
                    name: "australiaMap",
                    dataSource: placeData,
                    latitudeMemberPath: "lat",
                    longitudeMemberPath: "lon",
                    heatMinimum: 0,
                    heatMaximum: 5,
                    mouseOverEnabled: true,
                    showTooltip: true,
                    tooltipTemplate: "cityTemplate"
                }],
                windowRect: {
                    left: 0.7,
                    top: 0.52,
                    width: 0.127,
                    height: 0.127
                }
            });
            $("#map").find(".ui-widget-content").append("<span class='copyright-notice'><a href='https://www.openstreetmap.org/copyright'>© OpenStreetMap contributors</a></span>");
        // Resolution
        $("#resolutionSlider").slider({
            min: 0,
            max: 10,
            value: 0,
            slide: function (event, ui) {
                $("#map").igMap("option", "series", [{ name: "australiaMap", resolution: ui.value}]);
                $("#resolutionLabel").text(ui.value);
            }
        });
      
        // Minimum Heat Value
        $("#minimumHeatValueSlider").slider({
            min: 0,
            max: 5,
            value: 0,
            slide: function (event, ui) {
                $("#map").igMap("option", "series", [{ name: "australiaMap", heatMinimum: ui.value }]);
                $("#minimumHeatValueLabel").text(ui.value);
            }
        });

        // Maximum Heat Value
        $("#maximumHeatValueSlider").slider({
            min: 5,
            max: 10,
            value: 10,
            slide: function (event, ui) {
                $("#map").igMap("option", "series", [{ name: "australiaMap", heatMaximum: ui.value }]);
                $("#maximumHeatValueLabel").text(ui.value);
            }
        });

        // Heat Minimum Color
        $("#minimumHeatColorDropDown").on({
            change: function (e) {
                var minColor = $(this).val();
                $("#map").igMap("option", "series", [{ name: "australiaMap", heatMinimumColor: minColor }]);
            }
        });

        // Heat Maximum Color
        $("#maximumHeatColorDropDown").on({
            change: function (e) {
                var maxColor = $(this).val();
                $("#map").igMap("option", "series", [{ name: "australiaMap", heatMaximumColor: maxColor }]);
            }
        });
        // Point Extent
        $("#pointExtentSlider").slider({
            min: 1,
            max: 5,
            value: 1,
            slide: function (event, ui) {
                $("#map").igMap("option", "series", [{ name: "australiaMap", pointExtent: ui.value}]);
                $("#pointExtentLabel").text(ui.value);
            }
        });


        // Enable Mouse Over
        $("#enableMouseOverCheckBox").click(function (e) {
            var enableMouseOverSeries = $("#enableMouseOverCheckBox").is(":checked") ? true : false;
            $("#map").igMap("option", "series", [{ name: "australiaMap", mouseOverEnabled: enableMouseOverSeries}]);
        });
            
        // Use Brute Force
        $("#useBruteForceCheckBox").click(function (e) {
            var useBruteForceSeries = $("#useBruteForceCheckBox").is(":checked") ? true : false;
            $("#map").igMap("option", "series", [{ name: "australiaMap", useBruteForce: useBruteForceSeries }]);
        });

        });