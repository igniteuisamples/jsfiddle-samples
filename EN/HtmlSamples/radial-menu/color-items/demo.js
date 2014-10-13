$(function () {
            function rgbaToRgb(rgbaColor) {
                // remove the "a" from "rgba"
                var result = rgbaColor.replace("rgba(", "rgb(");
                // remove the alpha channel
                result = result.replace(",1)", ")");
                return result;
            }

            function setForeColor(color) {
                $("#htmlEditor").igHtmlEditor("executeAction", "forecolor", color);
            }

            function setBackColor(color) {
                $("#htmlEditor").igHtmlEditor("executeAction", "backcolor", color);
            }

            // create the html editor
            $("#htmlEditor").igHtmlEditor({
                width: "98%",
                height: "450px"
            });

            $("#htmlEditor").igHtmlEditor("setContent", "The Radial Menu control is essentially a context menu presenting its items in a circular arrangement around a center button. The circular arrangement of the items speeds up items selection, because each item is equally positioned in relation to the center. The Radial Menu supports different item types for choosing numerical values, color values or performs actions. Sub-Items are also supported.<br/>By default the only visible part of the Radial Menu is the center button. When the user click on the center button, the Radial Menu opens and shows the root level menu items. Clicking on the center button when the root level items are shown closes the Radial Menu. To navigate Sub-Items the user should click the arrows in the outer ring and the corresponding sub-items group will be displayed. Clicking on the center button when a sub-items group is shown will display the items on the previous level.", "html");

            // create the radial menu
            $('#radialMenu').igRadialMenu({
                width: "300px",
                height: "300px",
                items:
                [
                    {
                        // defining color item 1
                        type: "coloritem",
                        header: "Foreground",
                        iconUri: "http://igniteui.com/images/samples/radial-menu/FColor.png",
                        color: "rgba(0,0,0,1)",
                        colorChanged: function (evt) {
                            var colValue = evt.newValue;
                            colValue = rgbaToRgb(colValue);
                            setForeColor(colValue);
                        },
                        // defining color wells as sub-items for color item 1
                        items:
                        [
                            {
                                type: "colorwell",
                                color: "#FFFF00"
                            },
                            {
                                type: "colorwell",
                                color: "#C00000"
                            },
                            {
                                type: "colorwell",
                                color: "#008000"
                            },
                            {
                                type: "colorwell",
                                color: "#002060"
                            },
                            {
                                type: "colorwell",
                                color: "#000000"
                            },
                            {
                                type: "colorwell",
                                color: "#FFFFFF"
                            },
                        ]
                    },
                    {
                        // defining color item 2
                        type: "coloritem",
                        header: "Background",
                        iconUri: "http://igniteui.com/images/samples/radial-menu/BColor.png",
                        color: "rgba(255,255,255,1)",
                        colorChanged: function (evt) {
                            var colValue = evt.newValue;
                            colValue = rgbaToRgb(colValue);
                            setBackColor(colValue);
                        },
                        // defining color wells as sub-items for color item 2
                        items:
                        [
                            {
                                type: "colorwell",
                                color: "#FFFF00"
                            },
                            {
                                type: "colorwell",
                                color: "#C00000"
                            },
                            {
                                type: "colorwell",
                                color: "#008000"
                            },
                            {
                                type: "colorwell",
                                color: "#002060"
                            },
                            {
                                type: "colorwell",
                                color: "#000000"
                            },
                            {
                                type: "colorwell",
                                color: "#FFFFFF"
                            },
                        ]
                    }
                ]
            });
        });