$(function () {
            // initialize igHtmlEditor
            var htmlEditor = $("#htmlEditor").igHtmlEditor({
                width: "99%",
                inputName: "htmlEditor",
                customToolbars: [
                {
                    name: "EmailSignature",
                    collapseButtonIcon: "ui-igbutton-collapse",
                    expandButtonIcon: "ui-igbutton-expand",
                    items: [{
                        name: "appendSignature",
                        type: "button",
                        handler: appendSignature,
                        scope: this,
                        props: {
                            isImage: {
                                value: false,
                                action: '_isSelectedAction'
                            },
                            imageButtonTooltip: {
                                value: "Insert e-mail signature",
                                action: '_tooltipAction'
                            },
                            imageButtonIcon: {
                                value: "ui-icon-contact",
                                action: '_buttonIconAction'
                            }
                        }
                    }]
                }]
            });

        });

        function appendSignature(ui) {
            var currentContent = $("#htmlEditor").igHtmlEditor("getContent", "html");
            var signature = "<p>Best regards,<br/>John Doe<br/>Acme Corp<br/>555-1111</p>";
            $("#htmlEditor").igHtmlEditor("setContent", currentContent + signature, "html");
        }