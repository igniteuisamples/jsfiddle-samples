$(function() {
            $("#radialgauge").igRadialGauge({
                height: "350px",
                width: "100%",
                transitionDuration: "1500",
                ranges: [{
                    name: "range1",
                    brush: "rgba(164, 189, 41, 1)",
                    startValue: "70",
                    endValue: "100",
                    outerStartExtent: "0.55",
                    outerEndExtent: "0.65"
                }]
            });


            // Inner Start Extent
            $("#innerStartExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.5,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", innerStartExtent: ui.value }]);
                    $("#innerStartExtentLabel").text(ui.value);
                }
            });

            // Inner End Extent
            $("#innerEndExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.5,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", innerEndExtent: ui.value }]);
                    $("#innerEndExtentLabel").text(ui.value);
                }
            });

            // Outer Start Extent
            $("#outerStartExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.72,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", outerStartExtent: ui.value }]);
                    $("#outerStartExtentLabel").text(ui.value);
                }
            });

            // Outer End Extent
            $("#outerEndExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.78,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", outerEndExtent: ui.value }]);
                    $("#outerEndExtentLabel").text(ui.value);
                }
            });

            // Start Value
            $("#startValueSlider").slider({
                min: 0,
                max: 100,
                value: 70,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", startValue: ui.value }]);
                    $("#startValueLabel").text(ui.value);
                }
            });

            // End Value
            $("#endValueSlider").slider({
                min: 0,
                max: 100,
                value: 100,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", endValue: ui.value }]);
                    $("#endValueLabel").text(ui.value);
                }
            });

            // Transiton Duration Slider
            $("#transitionDurationSlider").slider({
                min: 0,
                max: 5,
                step: 0.01,
                value: 2,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "transitionDuration", ui.value * 1000);
                    $("#transitionDurationLabel").text(ui.value);
                }
            });
            
            // Brush
            $("#brushDropdown").on({
                change: function (e) {
                    var rangeColor = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", brush: rangeColor }]);
                }
            });
            
            // Outline Brush
            $("#outlineBrushDropdown").on({
                change: function (e) {
                    var outlineColor = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", outline: outlineColor }]);
                }
            });
        });