$(function () {
            $("#lineargauge").igLinearGauge({
                height: "100px",
                width: "100%",
                minimumValue: 0,
                maximumValue: 10, 
                value: 1,
                needleBrush: "white",
                needleOutline: "#2582a9", 
                ranges: [
                   {
                       name: 'first',
                       startValue: 0,
                       endValue: 3, 
                   },
                   {
                       name: 'second',
                       startValue: 3,
                       endValue: 7, 
                   },
                   {
                       name: 'third',
                       startValue: 7,
                       endValue: 10, 
                   }
                ], 
            });

            var lastPointX = 0, lastPointY = 0, lastValue = 0, isDragging = false;

            // Start the needle drag only on a mousedown on the needle
            document.getElementById("lineargauge").addEventListener("mousedown", function (e) {
                dragNeedle(e, true);
            });

            // Drag the needle to the new point only if the point being dragged to is inside the needle
            document.addEventListener("mousemove", function (e) {
                dragNeedle(e, false);
            });

            // Drag the needle to the final new point only if the point being dragged to is inside the needle
            document.addEventListener("mouseup", function (e) {
                isDragging = false;
                dragNeedle(e, false);
            });

            // Function that performs the needle drag/tap to the new point
            function dragNeedle(e, isMouseDown) {
                if (!isMouseDown && !isDragging) {
                    return;
                }

                e.preventDefault();
                var pointX = e.pageX - $("#lineargauge").offset().left;
                var pointY = e.pageY - $("#lineargauge").offset().top;
                if (isMouseDown) {
                    var isClickPointValid = $("#lineargauge").igLinearGauge("needleContainsPoint", pointX, pointY);
                    if (isClickPointValid) {
                        lastPointX = pointX;
                        lastPointY = pointY;
                    } else {
                        isClickPointValid = $("#lineargauge").igLinearGauge("needleContainsPoint", (pointX + 4 * lastPointX) / 5, (pointY + 4 * lastPointY) / 5);
                    }
                        isDragging = true;
                        if (isMobile() || !isClickPointValid) {
                            isDragging = false;
                            return;
                        }
                    
                }

                var value = $("#lineargauge").igLinearGauge("getValueForPoint", pointX, pointY);
                if (isNaN(value))
                    return;

                // Prevent needle from dragging beyond the scale bounds
                var minimumValue = $("#lineargauge").igLinearGauge("option", "minimumValue");
                var maximumValue = $("#lineargauge").igLinearGauge("option", "maximumValue");

                var startValue = minimumValue <= maximumValue ? minimumValue : maximumValue;
                var endValue = minimumValue > maximumValue ? minimumValue : maximumValue;
                
                if (value > startValue && value < endValue) {
                    $("#lineargauge").igLinearGauge("option", "value", value);
                } else {
                    value = value >=endValue ? endValue:startValue;
                    $("#lineargauge").igLinearGauge("option", "value", value);
                }
            }

            // Check if the sample is being used in the following mobile devices
            function isMobile() {
                return navigator.userAgent.match(/Android/i) ||
						navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
						navigator.userAgent.match(/IEMobile/i) ||
						navigator.userAgent.match(/BlackBerry/i) ||
						navigator.userAgent.match(/Opera Mini/i) ||
						navigator.userAgent.match(/webOS/i) ||
						navigator.userAgent.match(/Windows Phone/i) ||
						navigator.userAgent.match(/ZuneWP7/i) ? true : false;
            }
        });