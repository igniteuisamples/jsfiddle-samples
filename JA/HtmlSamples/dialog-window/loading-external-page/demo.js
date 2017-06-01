$(function () {

            var width = $(window).width > 480 ? 440 : 280,
                height = $(window).width > 480 ? 440 : 440;

            // Initialize the open button with igButton
            $("#openDialog").igButton({ labelText: "ダイアログを開く" });

            // Initialize the igDialog
            $("#dialog").igDialog({
                height: height,
                width: width,
                headerText: "https://jp.infragistics.com",
                showMinimizeButton: true,
                showMaximizeButton: true,
                showPinButton: true
            });

            $("#openDialog").on({
                click: function (e) {
                    // Open the igDialog
                    $("#dialog").igDialog("open");
                } 
            });

        });