$(function () {
            var height = $('html').hasClass('touch') ? 500 : 430,
                contentText = "<img src=\"../images/samples/html-editor/ig-html-editor-shutterstock.jpg\" width=\"300px\" height=\"auto\">" +
                        "<div style=\"width:50%\">" +
                            "<table height=\"139\" border=\"1\" width=\"100%\">" +
                                "<tbody><tr><td><font size=\"2\" style=\"font-weight: bold;\">Property</font></td><td><font size=\"2\" style=\"font-weight: bold;\">&nbsp;Portland Cement</font></td><td><font size=\"2\" style=\"font-weight: bold;\">&nbsp;Siliceous Fly Ash</font></td><td><font size=\"2\" style=\"font-weight: bold;\">&nbsp;Calcareous Fly Ash</font></td><td><font size=\"2\" style=\"font-weight: bold;\">Slag Cement <br></font></td><td><font size=\"2\" style=\"font-weight: bold;\">&nbsp;Silica Fume</font></td></tr><tr><td><font size=\"2\">Specific surface*<br>(m2/kg)</font></td><td style=\"text-align: right;\"><font size=\"2\">370</font></td><td style=\"text-align: right;\"><font size=\"2\">420</font></td><td style=\"text-align: right;\"><font size=\"2\">420</font></td><td style=\"text-align: right;\"><font size=\"2\">400</font></td><td style=\"text-align: right;\"><font size=\"2\">15.000-30.000</font></td></tr><tr><td><font size=\"2\">Specific gravity<br></font></td><td style=\"text-align: right;\"><font size=\"2\">3.15</font></td><td style=\"text-align: right;\"><font size=\"2\">2.38</font></td><td style=\"text-align: right;\"><font size=\"2\">2.65</font></td><td style=\"text-align: right;\"><font size=\"2\">2.94</font></td><td style=\"text-align: right;\"><font size=\"2\">2.22</font></td></tr><tr><td><font size=\"2\">General use<br>in concrete Primary</font></td><td><font size=\"2\">Primary<br>binder</font></td><td><font size=\"2\">Cement<br>replacement</font></td><td><font size=\"2\">Cement<br>replacement</font></td><td><font size=\"2\">Cement<br>replacement</font></td><td><font size=\"2\">Property<br>enhancer</font></td></tr>" +
                                "</tbody>" +
                            "</table>" +
                            "<font size=\"2\"><div style=\"text-align: center;\"><span style=\"font-weight: bold;\">Table 1. Components of Cement</span>" +
                        "</div><br></font><span style=\"font-style: italic;\">*Specific surface measurements for silica fume by nitrogen adsorption (BET) method, others by air permeability method (Blaine).</span></div><br><br>";
            var $igTBar = null;
            
            $("#htmlEditor").igHtmlEditor({
                height: height,
                width: "100%",
                customToolbars: [
                {
                    name: "DeleteContentButton",
                    collapseButtonIcon: "ui-igbutton-collapse",
                    expandButtonIcon: "ui-igbutton-expand",
                    items: [{
                        name: "appendDeleteButton",
                        type: "button",
                        handler: appendDeleteButton,
                        scope: this,
                        props: {
                            isImage: {
                                value: false,
                                action: '_isSelectedAction'
                            },
                            imageButtonTooltip: {
                                value: "すべてクリア",
                                action: '_tooltipAction'
                            },
                            imageButtonIcon: {
                                value: "ui-icon-clear-content",
                                action: '_buttonIconAction'
                            }
                        }
                    }]
                }]
            });

            $("#htmlEditor").igHtmlEditor("setContent", contentText, "html");

            changeToolbarsPosition();
        });

        function appendDeleteButton(ui) {
            $("#htmlEditor").igHtmlEditor("setContent", "", "html");
        }

        function changeToolbarsPosition() {
            $($("#htmlEditor").find("span[id*='insertObjectToolbar'].ui-igtoolbar")).insertAfter($("#htmlEditor").find("span[id*='textToolbar'].ui-igtoolbar"));
        }