$(function () {
            function rgbaToRgb(rgbaColor) {
                // remove the "a" from "rgba"
                var result = rgbaColor.replace("rgba(", "rgb(");
                // remove the alpha channel
                result = result.replace(",1)", ")");
                return result;
            }

            function setForeColor(color) {
                $("#htmlEditor").igHtmlEditor("executeAction", "forecolor", color);
            }

            function setBackColor(color) {
                $("#htmlEditor").igHtmlEditor("executeAction", "backcolor", color);
            }

            // create the html editor
            $("#htmlEditor").igHtmlEditor({
                width: "98%",
                height: "450px"
            });

            $("#htmlEditor").igHtmlEditor("setContent", "ラジアル メニュー コントロールは、中央ボタンの周りに項目を表示するコンテキスト メニューです。項目を円形に配置することで項目をすばやく選択できます。各項目は中央に対して均等に配置されます。ラジアル メニューは、数値、色値、または操作を実行する項目タイプをサポートします。サブ項目もサポートします。<br/>デフォルトで、ラジアル メニューの中央ボタンのみを表示します。ユーザーが中央ボタンをクリックすると、ラジアル メニューが開き、ルート レベルのメニュー項目を表示します。ルート レベル項目が表示されたときに中央ボタンをクリックすると、ラジアル メニューが閉じます。サブ項目に移動するには、外部リングの矢印をクリックし対応するサブ項目グループを表示します。サブ項目グループが表示されたときに中央ボタンをクリックすると、以前のレベルの項目を表示します。", "html");

            // create the radial menu
            $('#radialMenu').igRadialMenu({
                width: "300px",
                height: "300px",
                items:
                [
                    {
                        // defining color item 1
                        type: "coloritem",
                        header: "前景",
                        iconUri: "https://jp.igniteui.com/images/samples/radial-menu/FColor.png",
                        color: "rgba(0,0,0,1)",
                        colorChanged: function (evt) {
                            var colValue = evt.newValue;
                            colValue = rgbaToRgb(colValue);
                            setForeColor(colValue);
                        },
                        // defining color wells as sub-items for color item 1
                        items:
                        [
                            {
                                type: "colorwell",
                                color: "#FFFF00"
                            },
                            {
                                type: "colorwell",
                                color: "#C00000"
                            },
                            {
                                type: "colorwell",
                                color: "#008000"
                            },
                            {
                                type: "colorwell",
                                color: "#002060"
                            },
                            {
                                type: "colorwell",
                                color: "#000000"
                            },
                            {
                                type: "colorwell",
                                color: "#FFFFFF"
                            },
                        ]
                    },
                    {
                        // defining color item 2
                        type: "coloritem",
                        header: "背景",
                        iconUri: "https://jp.igniteui.com/images/samples/radial-menu/BColor.png",
                        color: "rgba(255,255,255,1)",
                        colorChanged: function (evt) {
                            var colValue = evt.newValue;
                            colValue = rgbaToRgb(colValue);
                            setBackColor(colValue);
                        },
                        // defining color wells as sub-items for color item 2
                        items:
                        [
                            {
                                type: "colorwell",
                                color: "#FFFF00"
                            },
                            {
                                type: "colorwell",
                                color: "#C00000"
                            },
                            {
                                type: "colorwell",
                                color: "#008000"
                            },
                            {
                                type: "colorwell",
                                color: "#002060"
                            },
                            {
                                type: "colorwell",
                                color: "#000000"
                            },
                            {
                                type: "colorwell",
                                color: "#FFFFFF"
                            },
                        ]
                    }
                ]
            });
        });