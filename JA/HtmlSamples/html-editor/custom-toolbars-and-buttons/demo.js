$(function () {
            var height = $('html').hasClass('touch') ? 500 : 350;
            // initialize igHtmlEditor
            var htmlEditor = $("#htmlEditor").igHtmlEditor({
                width: "99%",
                height: height,
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
                                value: "メール署名の入力",
                                action: '_tooltipAction'
                            },
                            imageButtonIcon: {
                                value: "ui-icon-insert-email",
                                action: '_buttonIconAction'
                            }
                        }
                    }]
                }]
            });
        });

        function appendSignature(ui) {
            var currentContent = $("#htmlEditor").igHtmlEditor("getContent", "html");
            var signature = "<p>以上、よろしくお願いいたします。<br/>山田 貴志<br/>インフラジスシックス・ジャパン<br/>03-555-1111</p>";
            $("#htmlEditor").igHtmlEditor("setContent", currentContent + signature, "html");
        }