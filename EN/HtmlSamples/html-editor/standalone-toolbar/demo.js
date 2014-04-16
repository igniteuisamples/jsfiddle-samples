$(function () {
function getSelectionCoords() {
            var sel = window.frames[0].document.selection, range;
            var x = 0, y = 0;
            if (sel) {
                if (sel.type != "Control") {
                    range = sel.createRange();
                    range.collapse(true);
                    x = range.boundingLeft;
                    y = range.boundingTop;
                }
            } else if (window.frames[0].document.getSelection) {
                sel = window.frames[0].document.getSelection();
                if (sel.rangeCount) {
                    range = sel.getRangeAt(0).cloneRange();
                    if (range.getClientRects) {
                        range.collapse(true);
                        var rect = range.getClientRects()[0];
                        if (rect) {
                            x = rect.left;
                            y = rect.top;
                        }
                    }
                }
            }

            return {
                x: x,
                y: y + 118
            };
        }

        function selectionIs(sel, state) {
            var range, isState = false;
            if (window.frames[0].document.getSelection) {
                if (sel && sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
            if (window.frames[0].document.queryCommandState) {
                isState = window.frames[0].document.queryCommandState(state);
            }
            return isState;
        }

        $(function () {
            var $iframe,
                mouseMoveCoord,
                $htmlEditor = $("#htmlEditor"),
                $toolbarHolder = $("#toolbarHolder"),
                $textToolbar = $('#text'),
                height = $('html').hasClass('touch') ? 500 : 350;

            $toolbarHolder.hide();

            $htmlEditor.igHtmlEditor({
                width: "99%",
                height: height,
                inputName: "htmlEditor"
            });

            $textToolbar.igToolbar({
                "name": "textToolbar",
                "displayName": "Toolbar text",
                "isExpanded": true,
                "collapseButtonIcon": "ui-igbutton-collapse",
                "expandButtonIcon": "ui-igbutton-expand",
                "items": [{
                    "name": "Bold",
                    "type": "button",
                    "scope": null,
                    "props": {
                        "allowToggling": {
                            "value": true
                        },
                        "isBold": {
                            "value": false,
                            "action": "_isSelectedAction"
                        },
                        "boldButtonTooltip": {
                            "value": "Bold",
                            "action": "_tooltipAction"
                        },
                        "boldButtonIcon": {
                            "value": "ui-igbutton-bold",
                            "action": "_buttonIconAction"
                        }
                    }
                }, {
                    "name": "Italic",
                    "type": "button",
                    "props": {
                        "isItalic": {
                            "value": false,
                            "action": "_isSelectedAction"
                        },
                        "italicButtonTooltip": {
                            "value": "Italic",
                            "action": "_tooltipAction"
                        },
                        "italicButtonIcon": {
                            "value": "ui-igbutton-italic",
                            "action": "_buttonIconAction"
                        }
                    }
                }, {
                    "name": "Underline",
                    "type": "button",
                    "props": {
                        "isUnderline": {
                            "value": false,
                            "action": "_isSelectedAction"
                        },
                        "underlineButtonTooltip": {
                            "value": "Underline",
                            "action": "_tooltipAction"
                        },
                        "underlineButtonIcon": {
                            "value": "ui-igbutton-underline",
                            "action": "_buttonIconAction"
                        }
                    }
                }]
            });

            $iframe = $('#htmlEditor_editor');

            $iframe.contents().find("body").on("mouseup", function (ev) {
                var userSelection = window.frames[0].document.getSelection(),
                    $bold = $textToolbar.find("div[id*='Bold']"),
                    $italic = $textToolbar.find("div[id*='Italic']"),
                    $underline = $textToolbar.find("div[id*='Underline']"),
                    coord = getSelectionCoords();

                if (userSelection.toString() !== "") {
                    $toolbarHolder.parent().css({
                        position: 'relative'
                    });

                    $toolbarHolder.css({
                        top: coord.y,
                        left: coord.x,
                        position: 'absolute'
                    });

                    mouseMoveCoord = {
                        x: ev.pageX,
                        y: ev.pageY
                    };

                    if (selectionIs(userSelection, "bold")) {
                        $bold.igToolbarButton("activate");
                    }

                    if (selectionIs(userSelection, "italic")) {
                        $italic.igToolbarButton("activate");
                    }

                    if (selectionIs(userSelection, "underline")) {
                        $underline.igToolbarButton("activate");
                    }

                    $iframe.contents().find("body").on("mousemove", function (ev) {
                        if (userSelection.toString() !== "") {
                            if (mouseMoveCoord &&
                                ((Math.abs(mouseMoveCoord.x - ev.pageX) > 50) ||
                                (Math.abs(mouseMoveCoord.y - ev.pageY) > 50))) {
                                
                                $toolbarHolder.fadeOut();
                            } else {
                                $toolbarHolder.fadeIn();
                            }
                        }
                    });

                    $iframe.contents().find("body").on("keydown", function (ev) {
                        if (ev.keyCode === 66 && ev.ctrlKey) {
                            $bold.igToolbarButton("toggle");
                        }

                        if (ev.keyCode === 73 && ev.ctrlKey) {
                            $italic.igToolbarButton("toggle");
                        }

                        if (ev.keyCode === 85 && ev.ctrlKey) {
                            $underline.igToolbarButton("toggle");
                        }
                    });

                    $toolbarHolder.fadeIn();                   
                } else {
                    $iframe.contents().find("body").off("mousemove");
                    $iframe.contents().find("body").off("keydown")

                    $toolbarHolder.hide();
                    if ($bold.igToolbarButton) {
                        $bold.igToolbarButton("deactivate");
                    }

                    if ($italic) {
                        $italic.igToolbarButton("deactivate");
                    }

                    if ($underline) {
                        $underline.igToolbarButton("deactivate");
                    }
                }
            });

            $(document).on("igtoolbarbuttonclick", function (ev) {
                var command = $(ev.target).attr("id").replace($textToolbar.attr("id") + "_item_", "");
                $htmlEditor.igHtmlEditor("executeAction", command.toLowerCase());
            });

            $(document).on("ightmleditoractionexecuting", function (ev, ui) {
                var $button = $textToolbar.find("div[id*='" + ui.actionName + "']");

                if ($button.igToolbarButton) {
                    $textToolbar.find("div[id*='" + ui.actionName + "']").igToolbarButton("toggle");
                }
            });
        });
});