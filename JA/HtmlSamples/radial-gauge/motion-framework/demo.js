$(function () {
            
            $("#radialgauge").igRadialGauge({
                width: "100%",
                height: "500px",
                transitionDuration: "1500"
            });

            function ChangeSelection(setting) {                
                if (setting == "setting1")
                    setting1();
                else if (setting == "setting2")
                    setting2();
                else if (setting == "setting3")
                    setting3();
            }

            $("#gaugeSettings").change(function (e) {
                var setting = $(this).val();
                ChangeSelection(setting);
            });

            //Apply the setting on initial load
            var setting = $("#gaugeSettings").val();
            ChangeSelection(setting);

            function setting1 () {
                    $("#radialgauge").igRadialGauge({
                    height: "350px",
                    width: "100%",
                    minimumValue: "0",
                    maximumValue: "100",
                    value: "0",
                    
                    //Scale Settings
                    scaleStartAngle: "135",
                    scaleEndAngle: "45",
                    scaleBrush: "rgba(68, 172, 214, 1)",

                    //Backing Settings
                    backingShape: "fitted",
                    backingOutline: "rgba(168, 168, 168, 1)",
                    backingBrush: "rgba(236, 237, 239, 1)",
                    
                    //Needle Settings
                        needleShape: "needle",
                    needlePivotShape: "circleOverlay",
                    needleEndExtent: "0.55",
                    needlePointFeatureExtent: "0.3",
                    needlePivotWidthRatio: "0.2",

                    //TickMark Settings
                    tickBrush: "rgba(51, 51, 51, 1)",
                    minorTickBrush: "rgba(73, 73, 73, 1)",

                    //Label Settings
                    labelInterval: 10
                });
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", remove: true }]);
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range2", remove: true }]);
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range3", remove: true }]);
            }
           
            function setting2() {
                $("#radialgauge").igRadialGauge({
                    height: "350px",
                    width: "100%",
                    minimumValue: "0",
                    maximumValue: "10",
                    value: "10",

                    //Scale Settings
                    scaleStartAngle: "180",
                    scaleEndAngle: "0",
                    scaleBrush: "transparent",
                    
                    //Backing Settings
                    backingShape: "fitted",
                    backingOutline: "rgba(22, 169, 231, 1)",
                    backingBrush: "rgba(224, 224, 224, 1)",

                    //Needle Settings
                    needleShape: "needle",
                    needlePivotShape: "circleOverlay",
                    needleEndExtent: "0.55",
                    needlePointFeatureExtent: "0.3",
                    needlePivotWidthRatio: "0.2",

                    //TickMark Settings
                    tickBrush: "rgba(160, 160, 160, 1)",
                    minorTickBrush: "gray",

                    //Label Settings
                    labelInterval: 1
                });

                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", remove: true }]);
                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range2", remove: true }]);
                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range3", remove: true }]);

                $("#radialgauge").igRadialGauge("option", "ranges", [{
                    name: "range1",
                    brush: "rgba(164, 189, 41, 1)",
                    startValue: "0",
                    endValue: "3",
                    outerStartExtent: "0.6",
                    outerEndExtent: "0.66"
                }, {
                    name: "range2",
                    brush: "rgba(253, 189, 72, 1)",
                    startValue: "3",
                    endValue: "7",
                    outerStartExtent: "0.66",
                    outerEndExtent: "0.72"
                }, {
                    name: "range3",
                    brush: "rgba(211, 64, 75, 1)",
                    startValue: "7",
                    endValue: "10",
                    outerStartExtent: "0.72",
                    outerEndExtent: "0.78"
                }]);
            }
            
            function setting3() {
                $("#radialgauge").igRadialGauge({

                    height: "350px",
                    width: "100%",

                    minimumValue: "0",
                    maximumValue: "5",
                    value: "2.30",

                    //Scale Settings
                    scaleStartAngle: "200",
                    scaleEndAngle: "-20",
                    scaleBrush: "transparent",

                    //Backing Settings
                    backingOutline: "transparent",
                    backingBrush: "transparent",

                    //Needle Settings
                    needleEndExtent: "1",
                    needleShape: "triangle",
                    needlePivotShape: "circle",
                    needlePivotWidthRatio: "0.1",

                    //TickMark Settings
                    tickBrush: "transparent",
                    minorTickBrush: "transparent",

                    //Label Settings
                    labelInterval: 5
                });

                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", remove: true }]);
                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range2", remove: true }]);
                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range3", remove: true }]);

                $("#radialgauge").igRadialGauge("option", "ranges", [{
                    name: "range1",
                    brush: "rgba(211, 64, 75, 1)",
                    startValue: "0",
                    endValue: "2.3",
                    outerStartExtent: "1",
                    outerEndExtent: "1",
                    innerStartExtent: "0.3",
                    innerEndExtent: "0.3",
                }, {
                    name: "range2",
                    brush: "rgba(164, 189, 41, 1)",
                    startValue: "2.30",
                    endValue: "5",
                    outerStartExtent: "1",
                    outerEndExtent: "1",
                    innerStartExtent: "0.3",
                    innerEndExtent: "0.3"
                }]);
            }

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