$(function () {
            $("#radialgauge").igRadialGauge({
                height: "350px",
                width: "100%",
                transitionDuration: "1500"
            });


            // Tickmark Start Extent
            $("#tickmarkStartExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.5,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "tickStartExtent", ui.value);
                    $("#tickmarkStartExtentLabel").text(ui.value);
                }
            });

            // Tickmark End Extent
            $("#tickmarkEndExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.57,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "tickEndExtent", ui.value);
                    $("#tickmarkEndExtentLabel").text(ui.value);
                }
            });

            // Tickmark Stroke Thickness
            $("#tickmarkStrokeThicknessSlider").slider({
                min: 1,
                max: 10,
                value: 3,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "tickStrokeThickness", ui.value);
                    $("#tickmarkStrokeThicknessLabel").text(ui.value);
                }
            });

            // Minor Tickmark Start Extent
            $("#minorTickmarkStartExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.57,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "minorTickStartExtent", ui.value);
                    $("#minorTickmarkStartExtentLabel").text(ui.value);
                }
            });

            // Minor Tickmark End Extent
            $("#minorTickmarkEndExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.54,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "minorTickEndExtent", ui.value);
                    $("#minorTickmarkEndExtentLabel").text(ui.value);
                }
            });

            // Tickmark Count
            $("#tickCountSlider").slider({
                min: 0,
                max: 10,
                value: 5,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "minorTickCount", ui.value);
                    $("#tickCountLabel").text(ui.value);
                }
            });

            // Minor Tickmark Stroke Thickness
            $("#minorTickmarkStrokeThicknessSlider").slider({
                min: 1,
                max: 10,
                value: 1,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "minorTickStrokeThickness", ui.value);
                    $("#minorTickmarkStrokeThicknessLabel").text(ui.value);
                }
            });

            // Tickmark Brush
            $("#tickmarkBrushDropdown").on({
                change: function (e) {
                    var tickmarkColor = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "tickBrush", tickmarkColor);
                }
            });

            // Minor Tickmark Brush
            $("#minorTickmarkBrushDropdown").on({
                change: function (e) {
                    var minorTickmarkColor = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "minorTickBrush", minorTickmarkColor);
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
        });