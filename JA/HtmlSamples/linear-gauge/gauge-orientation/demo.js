$(function () {

            var linearGauge = $("#lineargauge");

            linearGauge.igLinearGauge({
                height: "300px",
                width: "60px",
                orientation: "vertical", 
                value: 85, 
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
                

                var orientation = linearGauge.igLinearGauge("option", "orientation") == "vertical" ? "horizontal" : "vertical";
                linearGauge.igLinearGauge("option", "orientation", orientation);

                if (orientation == "horizontal") {
                    linearGauge.igLinearGauge("option", "width", "100%");
                    linearGauge.igLinearGauge("option", "height", 60);
                }
                else {
                    linearGauge.igLinearGauge("option", "width", 60);
                    linearGauge.igLinearGauge("option", "height", 300);
                }

                $("#orientationButton").text(orientation == "horizontal" ? "垂直方向" : "水平方向");
            });

            // Scale Inversion
            $("#isScaleInvertedCheckBox").click(function () {
                linearGauge.igLinearGauge("option", "isScaleInverted", $(this).is(":checked"));
            });
        });