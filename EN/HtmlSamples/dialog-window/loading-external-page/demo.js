$(function () {

            var width = $(window).width > 480 ? 440 : 280,
                height = $(window).width > 480 ? 440 : 440;

            // Initialize the open button with igButton
            $("#openDialog").igButton({ labelText: "Open Dialog" });

            // Initialize the igDialog
            $("#dialog").igDialog({
                height: height,
                width: width,
                headerText: "http://www.infragistics.com",
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