$(function () {
var lastCliked = null;

        function setWedgeIndex(_index) {
            if (lastCliked == null) return;
            if (isNaN(_index)) {
                alert("整数値を指定してください。");
                return;
            }
            $("#radialMenu").igRadialMenu("itemOption", lastCliked, "wedgeIndex", _index);
        }

        function setWedgeSpan(_span) {
            if (lastCliked == null) return;
            if (isNaN(_span) || _span < -1) {
                alert("0 より大きい整数値を指定してください。");
                return;
            }
            $("#radialMenu").igRadialMenu("itemOption", lastCliked, "wedgeSpan", _span);
        }

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
                        click: function (evt, ui) {
                            lastCliked = evt.item.name;
                            toggleBold();
                        }
                    },
                    {
                        name: "button2",
                        header: "イタリック",
                        iconUri: "http://jp.igniteui.com/images/samples/radial-menu/Italic.png",
                        click: function (evt, ui) {
                            lastCliked = evt.item.name;
                            toggleItalic();
                        }
                    }
                ]
            });

            // create slider for the radial menu minimum wedges
            $("#minWedgeSlider").slider({
                min: 1,
                max: 16,
                value: 8,
                step: 1,
                slide: function (evt, ui) {
                    $("#radialMenu").igRadialMenu("option", "minWedgeCount", ui.value);
                    $("#labMinWedgeSlider").text(ui.value);
                }
            });

            // create slider for the radial menu start angle of wedges
            $("#startAngleSlider").slider({
                min: -180,
                max: 180,
                value: -90,
                step: 1,
                slide: function (evt, ui) {
                    $("#radialMenu").igRadialMenu("option", "rotationInDegrees", ui.value);
                    $("#labStartAngleSlider").text(ui.value);
                }
            });
        });
});