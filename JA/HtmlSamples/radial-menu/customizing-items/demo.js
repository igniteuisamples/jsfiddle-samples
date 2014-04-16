$(function () {
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

            function setFontSize(_size) {
                if (_size == null) return;
                $("#htmlEditor").igHtmlEditor("executeAction", "fontsize", _size);
            }

            // create the html editor
            $("#htmlEditor").igHtmlEditor({
                width: "98%",
                height: "450px"
            });

            $("#htmlEditor").igHtmlEditor("setContent", "ラジアル メニュー コントロールは、中央ボタンの周りに項目を表示するコンテキスト メニューです。項目を円形に配置することで項目をすばやく選択できます。各項目は中央に対して均等に配置されます。ラジアル メニューは、数値、色値、または操作を実行する項目タイプをサポートします。サブ項目もサポートします。<br/>デフォルトで、ラジアル メニューの中央ボタンのみを表示します。ユーザーが中央ボタンをクリックすると、ラジアル メニューが開き、ルート レベルのメニュー項目を表示します。ルート レベル項目が表示されたときに中央ボタンをクリックすると、ラジアル メニューが閉じます。サブ項目に移動するには、外部リングの矢印をクリックし対応するサブ項目グループを表示します。サブ項目グループが表示されたときに中央ボタンをクリックすると、以前のレベルの項目を表示します。", "html");

            // create the radial menu
            $("#radialMenu").igRadialMenu({
                width: "300px",
                height: "300px",
                items:
                [
                    {
                        name: "button1",
                        header: "太字",
                        iconUri: "http://jp.igniteui.com/images/samples/radial-menu/Bold.png",
                        click: function () { toggleBold(); }
                    },
                    {
                        name: "button2",
                        header: "イタリック",
                        iconUri: "http://jp.igniteui.com/images/samples/radial-menu/Italic.png",
                        click: function () { toggleItalic(); }
                    },
                    {
                        type: "numericitem",
                        header: "フォント サイズ",
                        iconUri: "http://jp.igniteui.com/images/samples/radial-menu/Size.png",
                        value: "8",
                        items:
                        [
                            {
                                name: "gauge1",
                                type: "numericgauge",
                                ticks: "8pt,9pt,10pt,12pt,14pt,16pt,18pt",
                                value: 8,
                                valueChanged: function (evt, ui) {
                                    setFontSize(evt.newValue);
                                }
                            }
                        ]
                    }
                ]
            });
        });