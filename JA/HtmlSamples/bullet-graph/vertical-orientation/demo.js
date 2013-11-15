$(function () {

            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                height: "300px",
                width: "60px",
                orientation: "vertical", 
                value: 85,
                targetValue: 77,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 33
                    },
                    {
                        name: 'acceptable',
                        startValue: 33,
                        endValue: 70
                    },
                    {
                        name: 'good',
                        startValue: 70,
                        endValue: 100
                    }],
                transitionDuration: 200, 
            });

            // Orientation
            $("#orientationButton").click(function () {
                var orientation = $bulletGraph.igBulletGraph("option", "orientation") == "vertical" ? "horizontal" : "vertical";
                $bulletGraph.igBulletGraph("option", "orientation", orientation);

                if (orientation == "horizontal") {
                    $bulletGraph.igBulletGraph("option", "width", "100%");
                    $bulletGraph.igBulletGraph("option", "height", 60);
                }
                else {
                    $bulletGraph.igBulletGraph("option", "width", 60);
                    $bulletGraph.igBulletGraph("option", "height", 300);
                }
                
                $("#orientationButton").text(orientation == "horizontal" ? "垂直方向" : "水平方向");
            });

            // Scale Inversion
            $("#isScaleInvertedCheckBox").click(function () {
                $bulletGraph.igBulletGraph("option", "isScaleInverted", $(this).is(":checked"));
            });
        });