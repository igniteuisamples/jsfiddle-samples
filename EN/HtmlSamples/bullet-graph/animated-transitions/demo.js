$(function () { 
            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                width: "100%",
                height: "80px",
                targetValueOutline: "transparent",
                valueOutline: "transparent",
                transitionDuration: 1000
            });

            function setting1() {
                $bulletGraph.igBulletGraph({
                    targetValue: 160,
                    value: 180,
                    interval: 40,
                    minimumValue: 0,
                    maximumValue: 200,
                    targetValueBrush: "white",
                    valueBrush: "white"
                });

                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range1", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range2", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range3", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range4", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range5", remove: true }]);

                $bulletGraph.igBulletGraph("option", "ranges", [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 50,
                        brush: "#C62D36",
                        outline: "#C62D36"
                    },
                    {
                        name: 'range2',
                        startValue: 50,
                        endValue: 150,
                        brush: "#FDBD48",
                        outline: "#FDBD48"
                    },
                    {
                        name: 'range3',
                        startValue: 150,
                        endValue: 200,
                        brush: "#48892D",
                        outline: "#48892D"
                    }
                ]);
            }

            function setting2() {
                $bulletGraph.igBulletGraph({
                    targetValue: 70,
                    value: 80,
                    interval: 50,
                    minimumValue: 50,
                    maximumValue: 100,
                    targetValueBrush: "#fff7a3",
                    valueBrush: "#fff7a3"
                });

                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range1", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range2", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range3", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range4", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range5", remove: true }]);

                $bulletGraph.igBulletGraph("option", "ranges", [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 60,
                        brush: "#527211",
                        outline: "#527211"
                    },
                    {
                        name: 'range2',
                        startValue: 60,
                        endValue: 100,
                        brush: "#ABD652",
                        outline: "#ABD652"
                    }
                ]);
            }

            function setting3() {
                $bulletGraph.igBulletGraph({
                    targetValue: 800,
                    value: 700,
                    interval: 200,
                    minimumValue: 0,
                    maximumValue: 1000,
                    targetValueBrush: null,
                    valueBrush: null,
                    
                });

                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range1", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range2", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range3", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range4", remove: true }]);
                $bulletGraph.igBulletGraph("option", "ranges", [{ name: "range5", remove: true }]);

                $bulletGraph.igBulletGraph("option", "ranges", [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 100
                    },
                    {
                        name: 'range2',
                        startValue: 100,
                        endValue: 250
                    },
                    {
                        name: 'range3',
                        startValue: 250,
                        endValue: 500
                    },
                    {
                        name: 'range4',
                        startValue: 500,
                        endValue: 700
                    },
                    {
                        name: 'range5',
                        startValue: 700,
                        endValue: 1000
                    }
                ]);
            }

            setting1();

            // Transition Duration
            $("#transitionDurationSlider").slider({
                min: 0,
                max: 3000,
                step: 50,
                value: 1000,
                slide: function (event, ui) {
                    $bulletGraph.igBulletGraph("option", "transitionDuration", ui.value);
                    $("#transitionDurationLabel").text(ui.value);
                }
            });

            $("#graphSettings").change(function (e) {
                eval($(this).val());
            });
        });