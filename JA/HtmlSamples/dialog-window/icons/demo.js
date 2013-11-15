$(function () {
            // Initialize the open button with igButton
            $("#openDialog").igButton({ labelText: "ダイアログを開く" });

            $("#dialog").igDialog({
                imageClass: "ui-icon ui-icon-flag",
                closeButtonTitle: "ダイアログ ウィンドウを閉じる",
                minimizeButtonTitle: "ダイアログ ウィンドウを最小化",
                maximizeButtonTitle: "ダイアログ ウィンドウを最大化",
                pinButtonTitle: "ダイアログ ウィンドウをピン固定",
                unpinButtonTitle: "ダイアログ ウィンドウのピン固定を解除",
                restoreButtonTitle: "ダイアログ ウィンドウの復元",
                showMinimizeButton: true,
                showMaximizeButton: true,
                showPinButton: true,
                height: "300px",
                width: "280px"
            });

            $('#openDialog').on({
                click: function () {
                    // Open the igDialog
                    $("#dialog").igDialog("open");
                }
            });

        });