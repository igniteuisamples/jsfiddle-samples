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

            $("#htmlEditor").igHtmlEditor("setContent", "ラジアル メニュー コントロールは、中央ボタンの周りに項目を表示するコンテキスト メニューです。項目を円形に配置することで項目をすばやく選択できます。各項目は中央に対して均等に配置されます。ラジアル メニューは、数値、色値、または操作を実行する項目タイプをサポートします。サブ項目もサポートします。<br/>デフォルトで、ラジアル メニューの中央ボタンのみを表示します。ユーザーが中央ボタンをクリックすると、ラジアル メニューが開き、ルート レベルのメニュー項目を表示します。ルート レベル項目が表示されたときに中央ボタンをクリックすると、ラジアル メニューが閉じます。サブ項目に移動するには、外部リングの矢印をクリックし対応するサブ項目グループを表示します。サブ項目グループが表示されたときに中央ボタンをクリックすると、以前のレベルの項目を表示します。", "html");

            // create the radial menu
            $("#radialMenu").igRadialMenu({
                width: "300px",
                height: "300px",
                minWedgeCount: 1,
                items:
                [
                    {
                        type: "numericitem",
                        header: "フォント サイズ",
                        iconUri: "https://jp.igniteui.com/images/samples/radial-menu/Size.png",
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
                        header: "フォント",
                        iconUri: "https://jp.igniteui.com/images/samples/radial-menu/Font.png",
                        items:
                        [
                            {
                                header: "Arial",
                                name: "Arial",
                                click: function (evt, ui) { setFontFamily(evt.item.name); }
                            },
                            {
                                header: "Calibri",
                                name: "Calibri",
                                click: function (evt, ui) { setFontFamily(evt.item.name); }
                            },
                            {
                                header: "Comic Sans",
                                name: "Comic Sans MS",
                                click: function (evt, ui) { setFontFamily(evt.item.name); }
                            },
                            {
                                header: "Consolas",
                                name: "Consolas",
                                click: function (evt, ui) { setFontFamily(evt.item.name); }
                            },
                            {
                                header: "Courier New",
                                name: "Courier New",
                                click: function (evt, ui) { setFontFamily(evt.item.name); }
                            },
                            {
                                header: "Segoe",
                                name: "Segoe UI",
                                click: function (evt, ui) { setFontFamily(evt.item.name); }
                            },
                            {
                                header: "Tahoma",
                                name: "Tahoma",
                                click: function (evt, ui) { setFontFamily(evt.item.name); }
                            },
                            {
                                header: "Times",
                                name: "Times New Roman",
                                click: function (evt, ui) { setFontFamily(evt.item.name); }
                            },
                            {
                                header: "Verdana",
                                name: "Verdana",
                                click: function (evt, ui) { setFontFamily(evt.item.name); }
                            }
                        ]
                    },
                ]
            });
        });