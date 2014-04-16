$(function () {
            function setFontSize(_size) {
                if (_size == null) return;
                $("#htmlEditor").igHtmlEditor("executeAction", "fontsize", _size);
            }

            function setFontFamily(_font) {
                if (_font == null) return;
                $("#htmlEditor").igHtmlEditor("executeAction", "fontname", _font);
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
                minWedgeCount: 1,
                items:
                [
                    {
                        type: "numericitem",
                        header: "Font Size",
                        iconUri: "http://igniteui.com/images/samples/radial-menu/Size.png",
                        value: "8",
                        items:
                        [
                            {
                                name: "gauge1",
                                type: "numericgauge",
                                ticks: "10,12,18,24,36",
                                value: 12,
                                smallIncrement: 2,
                                valueChanged: function (evt, ui) {
                                    if (evt.newValue == 10) setFontSize(2);
                                    else if (evt.newValue == 12) setFontSize(3);
                                    else if (evt.newValue == 18) setFontSize(5);
                                    else if (evt.newValue == 24) setFontSize(6);
                                    else if (evt.newValue == 36) setFontSize(7);
                                }
                            }
                        ]
                    },
                    {
                        type: "list",
                        header: "Font",
                        iconUri: "http://igniteui.com/images/samples/radial-menu/Font.png",
                        items:
                        [
                            {
                                header: "Arial",
                                tag: "Arial",
                                click: function (evt, ui) { setFontFamily(evt.item.tag); }
                            },
                            {
                                header: "Calibri",
                                tag: "Calibri",
                                click: function (evt, ui) { setFontFamily(evt.item.tag); }
                            },
                            {
                                header: "Comic Sans",
                                tag: "Comic Sans MS",
                                click: function (evt, ui) { setFontFamily(evt.item.tag); }
                            },
                            {
                                header: "Consolas",
                                tag: "Consolas",
                                click: function (evt, ui) { setFontFamily(evt.item.tag); }
                            },
                            {
                                header: "Courier New",
                                tag: "Courier New",
                                click: function (evt, ui) { setFontFamily(evt.item.tag); }
                            },
                            {
                                header: "Segoe",
                                tag: "Segoe UI",
                                click: function (evt, ui) { setFontFamily(evt.item.tag); }
                            },
                            {
                                header: "Tahoma",
                                tag: "Tahoma",
                                click: function (evt, ui) { setFontFamily(evt.item.tag); }
                            },
                            {
                                header: "Times",
                                tag: "Times New Roman",
                                click: function (evt, ui) { setFontFamily(evt.item.tag); }
                            },
                            {
                                header: "Verdana",
                                tag: "Verdana",
                                click: function (evt, ui) { setFontFamily(evt.item.tag); }
                            }
                        ]
                    },
                ]
            });
        });