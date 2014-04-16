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