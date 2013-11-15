$(function () {
            $("#radialgauge").igRadialGauge({
                height: "500px",
                width: "100%",
                maximumValue: 100
            });

            var lastPointX = 0, lastPointY = 0, lastValue = 0, isDragging = false;

            // Start the needle drag only on a mousedown on the needle
            document.getElementById("radialgauge").addEventListener("mousedown", function (e) {
                dragNeedle(e, true);
            });

            // Drag the needle to the new point only if the point being dragged to is inside the needle
            document.addEventListener("mousemove", function (e) {
                dragNeedle(e, false);
            });

            // Drag the needle to the final new point only if the point being dragged to is inside the needle
            document.addEventListener("mouseup", function (e) {
                dragNeedle(e, false);
                isDragging = false;
            });

            // Function that performs the needle drag/tap to the new point
            function dragNeedle(e, isMouseDown) {
                if (!isMouseDown && !isDragging) {
                    return;
                }

                e.preventDefault();
                var pointX = e.pageX - $("#radialgauge").offset().left;
                var pointY = e.pageY - $("#radialgauge").offset().top;
                if (isMouseDown) {
                    var isClickPointValid = $("#radialgauge").igRadialGauge("needleContainsPoint", pointX, pointY);
                    if (isClickPointValid) {
                        lastPointX = pointX;
                        lastPointY = pointY;
                    } else {
                        isClickPointValid = $("#radialgauge").igRadialGauge("needleContainsPoint", (pointX + 4 * lastPointX) / 5, (pointY + 4 * lastPointY) / 5);
                    }
                    if (isMobile() || isClickPointValid)
                        isDragging = true;
                    return;
                }

                var value = $("#radialgauge").igRadialGauge("getValueForPoint", pointX, pointY);
                if (isNaN(value))
                    return;

                // Prevent needle from dragging beyond the scale bounds
                var minimumValue = $("#radialgauge").igRadialGauge("option", "minimumValue");
                var maximumValue = $("#radialgauge").igRadialGauge("option", "maximumValue");

                var startValue = minimumValue <= maximumValue ? minimumValue : maximumValue;
                var endValue = minimumValue > maximumValue ? minimumValue : maximumValue;
                if (value < startValue || value > endValue)
                    return;

                $("#radialgauge").igRadialGauge("option", "value", value);
            }

            // Detect if the browser is a mobile one or not (including tablets)
            function isMobile() {
                var mobileDevice = getMobile();
                return mobileDevice !== "none";
            }
            var _mobile = null;
            // Get the name of the mobile device if possible
            function getMobile() {
                if (!_mobile) {
                    var agent = navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "";

                    if (agent.match(/iphone/i)) {
                        _mobile = "IPhone";
                    }
                    else if (agent.match(/ipad/i)) {
                        _mobile = "tablet";
                    }
                    else if (agent.match(/android/i)) {
                        _mobile = "tablet";
                        if (agent.match(/mobile/i))
                            _mobile = "android";
                    }
                    else if (agent.match(/mobile/i)) {
                        _mobile = "unknown";
                    }
                    else if (agent.match(/tablet/i)) {
                        _mobile = "tablet";
                    }                    
                    else {
                        _mobile = "none";
                    }
                }

                return _mobile;
            }
        });