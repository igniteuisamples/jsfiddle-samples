$(function() {
            function toggleBold() {
                $("#htmlEditor").igHtmlEditor("executeAction", "bold");
                var cbElement = document.getElementById("cbCloseOnClick");
                if (cbElement && cbElement.checked) {
                    $("#radialMenu").igRadialMenu("option", "isOpen", false);
                }
            }

            function toggleItalic() {
                $("#htmlEditor").igHtmlEditor("executeAction", "italic");
                var cbElement = document.getElementById("cbCloseOnClick");
                if (cbElement && cbElement.checked) {
                    $("#radialMenu").igRadialMenu("option", "isOpen", false);
                }
            }

            // create the html editor
            $("#htmlEditor").igHtmlEditor({
                width: "98%",
                height: "450px"
            });

            $("#htmlEditor").igHtmlEditor("setContent", "The Radial Menu control is essentially a context menu presenting its items in a circular arrangement around a center button. The circular arrangement of the items speeds up items selection, because each item is equally positioned in relation to the center. The Radial Menu supports different item types for choosing numerical values, color values or performs actions. Sub-Items are also supported.<br/>By default the only visible part of the Radial Menu is the center button. When the user click on the center button, the Radial Menu opens and shows the root level menu items. Clicking on the center button when the root level items are shown closes the Radial Menu. To navigate Sub-Items the user should click the arrows in the outer ring and the corresponding sub-items group will be displayed. Clicking on the center button when a sub-items group is shown will display the items on the previous level.", "html");

            // create the radial menu
            $("#radialMenu").igRadialMenu({
                width: "300px",
                height: "300px",
                items:
                [
                    {
                        name: "button1",
                        header: "Bold",
                        iconUri: "https://igniteui.com/images/samples/radial-menu/Bold.png",
                        click: function () { toggleBold(); }
                    },
                    {
                        name: "button2",
                        header: "Italic",
                        iconUri: "https://igniteui.com/images/samples/radial-menu/Italic.png",
                        click: function () { toggleItalic(); }
                    },
                ]
            });

            // create slider for the horizontal radial menu sizing
            $("#sliderWidth").slider({
                min: 100,
                max: 500,
                value: 300,
                step: 1,
                slide: function (evt, ui) {
                    $("#radialMenu").igRadialMenu("option", "width", ui.value);
                    $("#labSliderWidth").text(ui.value);
                }
            });

            // create slider for the vertical radial menu sizing
            $("#sliderHeight").slider({
                min: 100,
                max: 500,
                value: 300,
                step: 1,
                slide: function (evt, ui) {
                    $("#radialMenu").igRadialMenu("option", "height", ui.value);
                    $("#labSliderHeight").text(ui.value);
                }
            });
        });