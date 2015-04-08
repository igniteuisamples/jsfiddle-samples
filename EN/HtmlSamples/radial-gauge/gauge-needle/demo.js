$(function () {
            $("#radialgauge").igRadialGauge({
                height: "500px",
                width: "100%",
                transitionDuration: "1500",
                value: "60"
            });


            // Needle Value
            $("#needleValueSlider").slider({
                min: 0,
                max: 100,
                value: 60,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "value", ui.value);
                    $("#needleValueLabel").text(ui.value);
                }
            });

            // Start Extent
            $("#startExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "needleStartExtent", ui.value);
                    $("#startExtentLabel").text(ui.value);
                }
            });

            // End Extent
            $("#endExtentSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0.48,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "needleEndExtent", ui.value);
                    $("#endExtentLabel").text(ui.value);
                }
            });

            // Start Width Ratio
            $("#startWidthRatioSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "needleStartWidthRatio", ui.value);
                    $("#startWidthRatioLabel").text(ui.value);
                }
            });

            // End Width Ratio
            $("#endWidthRatioSlider").slider({
                min: 0,
                max: 1,
                step: 0.01,
                value: 0,
                disabled: true,
                slide: function (event, ui) {
                    $("#radialgauge").igRadialGauge("option", "needleEndWidthRatio", ui.value);
                    $("#endWidthRatioLabel").text(ui.value);
                }
            });

            // Needle Shape
            $("#needleShapeDropdown").change(function (e) {
                var needleShape = $(this).val();
                $("#radialgauge").igRadialGauge("option", "needleShape", needleShape);

                if (needleShape == "rectangle" || needleShape == "trapezoid" || needleShape == "rectangleWithBulb" || needleShape == "trapezoidWithBulb") {
                    $("#endWidthRatioSlider").slider("enable");
                }
                else {
                    $("#endWidthRatioSlider").slider("disable");
                }
            });

            // Pivot Shape
            $("#pivotShapesDropdown").change(function (e) {
                var pivotShape = $(this).val();
                $("#radialgauge").igRadialGauge("option", "needlePivotShape", pivotShape);
            });


            // Needle Brush
            $("#needleBrushDropdown").on({
                change: function (e) {
                    var needleColor = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "needleBrush", needleColor);
                }
            });

            // Needle Outline Brush
            $("#needleOutlineDropdown").on({
                change: function (e) {
                    var needleOutlineColor = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "needleOutline", needleOutlineColor);
                }
            });

            // Pivot Brush
            $("#pivotBrushDropdown").on({
                change: function (e) {
                    var pivotColor = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "needlePivotBrush", pivotColor);
                }
            });

            // Pivot Outline Brush
            $("#pivotOutlineDropdown").on({
                change: function (e) {
                    var pivotOutlineColor = $(this).val();
                    $("#radialgauge").igRadialGauge("option", "needlePivotOutline", pivotOutlineColor);
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