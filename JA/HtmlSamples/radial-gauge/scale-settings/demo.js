$(function () {
            $("#radialgauge").igRadialGauge({
                height: "350px",
                width: "100%",
                transitionDuration: "1500"
            });


            // Scale Start Extent
            $("#scaleStartExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.5,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "scaleStartExtent", ui.value);
                    $("#startExtentLabel").text(ui.value);
                }
            });

            // Scale End Extent
            $("#scaleEndExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.57,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "scaleEndExtent", ui.value);
                    $("#endExtentLabel").text(ui.value);
                }
            });

            // Scale Oversweep
            $("#scaleOversweepSlider").slider({
                min: 0,
                max: 100,
                value: 3,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "scaleOversweep", ui.value);
                    $("#scaleOversweepLabel").text(ui.value);
                }
            });

            // Sweep Direction
            $("#scaleOversweepDropdown").on({
                change: function (e) {
                    var sweepDir = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "scaleSweepDirection", sweepDir);
                }
            });

            // Scale Brush
            $("#scaleBrushDropdown").on({
                change: function (e) {
                    var scaleColor = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "scaleBrush", scaleColor);
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