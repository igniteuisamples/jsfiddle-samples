$(function () {
                /*----------------- Instantiation -------------------------*/
                var $bulletGraph = $("#bulletgraph");

                $bulletGraph.igBulletGraph({
                    height: "80px",
                    width: "100%",
                    interval: 15000000,
                    //// Gets or sets the interval to use for rendering labels. This defaults to be the same interval as the tickmarks on the scale.
                    //labelInterval: 25000,
                    //// A value to start adding labels, added to the scale's MinimumValue.
                    //labelsPostInitial: 5000,
                    //// A value to stop adding labels, subtracted from the scale's MaximumValue.
                    //labelsPreTerminal: 4000,
                    //// Gets or sets the brush to use for the label font.
                    fontBrush: "#164F6D",
                    formatLabel: function (evt, ui) {
                        ui.label = "$" + ui.label;
                        if (ui.value != 90000000) {
                            var re = /000$/;
                            ui.label = ui.label.replace(re, " K");
                        }
                    },
                    alignLabel: function (evt, ui) {
                        // center the just the number part according to its tick, instead of centering the whole label
                        if (ui.value == 90000000) {
                            ui.offsetX += 20;
                        }
                    },
                    ranges: [
                        {
                            name: 'range1',
                            startValue: 0,
                            endValue: 45000000,
                            brush: '#164F6D'
                        },
                        {
                            name: 'range2',
                            startValue: 45000000,
                            endValue: 60000000,
                            brush: '#20789F'
                        },
                        {
                            name: 'range3',
                            startValue: 60000000,
                            endValue: 100000000,
                            brush: '#36A5D5'
                        }
                    ],
                    maximumValue: 100000000,
                    targetValue: 75000000,
                    value: 73000000,
                    transitionDuration: 500,
                    valueBrush: "white",
                    valueOutline: "white",
                    targetValueBrush: "white",
                    targetValueOutline: "white"
                });

                var $bulletGraph2 = $("#bulletgraph2");

                $bulletGraph2.igBulletGraph({
                    height: "80px",
                    width: "100%",
                    interval: 15000000,
                    // Gets or sets the interval to use for rendering labels. This defaults to be the same interval as the tickmarks on the scale.
                    labelInterval: 25000000,
                    // A value to start adding labels, added to the scale's MinimumValue.
                    labelsPostInitial: 5000000,
                    // A value to stop adding labels, subtracted from the scale's MaximumValue.
                    labelsPreTerminal: 4000000,
                    //// Gets or sets the brush to use for the label font.
                    //fontBrush: "aqua",
                    font: "14px Georgia",
                    fontBrush: "white",
                    labelExtent: .38,
                    formatLabel: function (evt, ui) {
                        ui.label = "$" + ui.label; 
                    }, 
                    ranges: [
                        {
                            name: 'range1',
                            startValue: 0,
                            endValue: 55000000,
                            brush: '#4D1276'
                        },
                        {
                            name: 'range2',
                            startValue: 55000000,
                            endValue: 80000000,
                            brush: '#702E9E'
                        },
                        {
                            name: 'range3',
                            startValue: 80000000,
                            endValue: 100000000,
                            brush: '#A276C1'
                        }
                    ],
                    maximumValue: 100000000,
                    targetValue: 74000000,
                    value: 70000000,
                    transitionDuration: 500,
                    valueBrush: "white",
                    valueOutline: "white",
                    targetValueBrush: "white",
                    targetValueOutline: "white"
                });

                var $bulletGraph3 = $("#bulletgraph3");

                $bulletGraph3.igBulletGraph({
                    height: "80px",
                    width: "100%",
                    interval: 5000000,
                    // Gets or sets the interval to use for rendering labels. This defaults to be the same interval as the tickmarks on the scale.
                    labelInterval: 20000000,
                    // A value to start adding labels, added to the scale's MinimumValue.
                    labelsPostInitial: 5000000,
                    // A value to stop adding labels, subtracted from the scale's MaximumValue.
                    labelsPreTerminal: 4000000,
                    // Gets or sets the brush to use for the label font.
                    fontBrush: "white",
                    font: "14px Arial",
                    labelExtent: .38,
                    formatLabel: function (evt, ui) {
                        ui.label = "$" + ui.label;
                        if (ui.value != 45000000) {
                            var re = /000$/;
                            ui.label = ui.label.replace(re, "K");
                        }
                    },
                    alignLabel: function (evt, ui) {
                        // center the just the number part according to its tick, instead of centering the whole label
                        if (ui.value == 45000000) {
                            ui.offsetX += 20;
                        }
                    },
                    ranges: [
                        {
                            name: 'range1',
                            startValue: 0,
                            endValue: 25000000,
                            brush: '#454545'
                        },
                        {
                            name: 'range2',
                            startValue: 25000000,
                            endValue: 30000000,
                            brush: '#5F5F5F'
                        },
                        {
                            name: 'range3',
                            startValue: 30000000,
                            endValue: 50000000,
                            brush: '#969696'
                        }
                    ],
                    maximumValue: 50000000,
                    targetValue: 40000000,
                    value: 38000000,
                    transitionDuration: 500,
                    valueBrush: "white",
                    valueOutline: "white",
                    targetValueBrush: "white",
                    targetValueOutline: "white"
                });

            });