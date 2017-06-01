$(function () {
            $("#map").igMap({
                width: "700px",
                height: "500px",
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://jp.igniteui.com/images/samples/maps/world.png",
                windowRect: { left: 0.4, top: 0.2, height: 0.6, width: 0.6 },
                backgroundContent: {
                    type: "openStreet"
                },
                series: [
                    {
                        type: "geographicSymbol",
                        name: "igOffices",
                        dataSource: igOffices,
                        latitudeMemberPath: "Latitude",
                        longitudeMemberPath: "Longitude",
                        showTooltip: true,
                        tooltipTemplate: "customTooltip",
                        markerCollisionAvoidance: "fade",
                        //  Defines marker template rendering function
                        markerTemplate: {
                            measure: function (measureInfo) {
                                measureInfo.width = 10;
                                measureInfo.height = 10;
                            },
                            render: function (renderInfo) {
                                createMarker(renderInfo);
                            }
                        }
                    }
                ]
            });
            $("#map").find(".ui-widget-content").append("<span class='copyright-notice'><a href='https://www.openstreetmap.org/copyright'>© OpenStreetMap contributors</a></span>");
        });
        
        function createMarker(renderInfo) {
            var ctx = renderInfo.context;
            var x = renderInfo.xPosition;
            var y = renderInfo.yPosition;
            var size = 10;
            var heightHalf = size / 2.0;
            var widthHalf = size / 2.0;

            if (renderInfo.isHitTestRender) {
                //  This is called for tooltip hit test only
                //  Rough marker rectangle size calculation
                ctx.fillStyle = renderInfo.data.actualItemBrush().fill();
                ctx.fillRect(x - widthHalf, y - heightHalf, size, size);
            } else {
                var data = renderInfo.data;
                var name = data.item()["Name"];
                var type = data.item()["ID"];
                //  Draw text
                ctx.textBaseline = "top";
                ctx.font = '8pt Verdana';
                ctx.fillStyle = "black";
                ctx.textBaseline = "middle";
                wrapText(ctx, name, x + 3, y + 6, 80, 12);

                //  Draw marker
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 2 * Math.PI, false);
                if (type == "Marketing")
                    ctx.fillStyle = "#2372D1";
                else if (type == "Support")
                    ctx.fillStyle = "#4d4949";
                else if (type == "Development Lab")
                    ctx.fillStyle = "#d13521";
                else
                    ctx.fillStyle = "#36a815";

                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeStyle = "black";
                ctx.stroke();
            }
        }

        //  Plots a rectangle with rounded corners with a semi-transparent frame
        function plotTextBackground(context, left, top, width, height) {
            var cornerRadius = 3;
            context.beginPath();
            //  Upper side and upper right corner
            context.moveTo(left + cornerRadius, top);
            context.lineTo(left + width - cornerRadius, top);
            context.arcTo(left + width, top, left + width, top + cornerRadius, cornerRadius);
            //  Right side and lower right corner
            context.lineTo(left + width, top + height - cornerRadius);
            context.arcTo(left + width, top + height, left + width - cornerRadius, top + height, cornerRadius);
            //  Lower side and lower left corner
            context.lineTo(left + cornerRadius, top + height);
            context.arcTo(left, top + height, left, top + height - cornerRadius, cornerRadius);
            //  Left side and upper left corner
            context.lineTo(left, top + cornerRadius);
            context.arcTo(left, top, left + cornerRadius, top, cornerRadius);
            //  Fill white with 75% opacity
            context.globalAlpha = 1;
            context.fillStyle = "white";
            context.fill();
            context.globalAlpha = 1;
            //  Plot grey frame
            context.lineWidth = 1;
            context.strokeStyle = "grey";
            context.stroke();
        }

        //  Outputs text in a word wrapped fashion in a transparent frame
        function wrapText(context, text, x, y, maxWidth, lineHeight) {
            var words = text.split(" ");
            var line = "";
            var yCurrent = y;
            var lines = [], currentLine = 0;

            //  Find the longest word in the text and update the max width if the longest word cannot fit
            for (var i = 0; n < words.length; i++) {
                var testWidth = context.measureText(words[i]);
                if (testWidth > maxWidth)
                    maxWidth = metrics.width;
            }
            //  Arrange all words into lines
            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n];
                var testWidth = context.measureText(testLine).width;
                if (testWidth > maxWidth) {
                    lines[currentLine] = line;
                    currentLine++;
                    line = words[n] + " ";
                }
                else {
                    line = testLine + " ";
                }
            }
            lines[currentLine] = line;
            //  Plot frame and background
            if (lines.length > 1) {
                //  Multiline text
                plotTextBackground(context, x - 2, y - lineHeight / 2 - 2, maxWidth + 3, lines.length * lineHeight + 3);
            }
            else {
                //  Single line text
                var textWidth = context.measureText(lines[0]).width;    //  Limit frame width to the actual line width
                plotTextBackground(context, x - 2, y - lineHeight / 2 - 2, textWidth + 3, lines.length * lineHeight + 3);
            }
            //  Output lines of text
            context.fillStyle = "black";
            for (var n = 0; n < lines.length; n++) {
                context.fillText(" " + lines[n], x, yCurrent);
                yCurrent += lineHeight;
            }
        }