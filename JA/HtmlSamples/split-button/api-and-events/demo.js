$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            $("#split-button").igSplitButton({
                items: [{
                    name: "arrowLeft",
                    label: "arrowLeft",
                    icon: "ui-igbutton ui-igbutton-undo"
                }, {
                    name: "arrorRight",
                    label: "arrorRight",
                    icon: "ui-igbutton ui-igbutton-redo"
                }],
                defaultItemName: "arrowLeft"
            });

            $("#split-button").on("igsplitbuttonclick", function () {
                var message = "igsplitbuttonclick";
                apiViewer.log(message);
            });

            $("#split-button").on("igsplitbuttonexpanded", function () {
                var message = "igsplitbuttonexpanded";
                apiViewer.log(message);
            });

            $("#split-button").on("igsplitbuttonexpanding", function () {
                var message = "igsplitbuttonexpanding";
                apiViewer.log(message);
            });

            $("#split-button").on("igsplitbuttoncollapsed", function () {
                var message = "igsplitbuttoncollapsed";
                apiViewer.log(message);
            });

            $("#split-button").on("igsplitbuttoncollapsing", function () {
                var message = "igsplitbuttoncollapsing";
                apiViewer.log(message);
            });

            $("#split-expand").on("click", function () {
                $("#split-button").igSplitButton("expand");
            });


            $("#split-collapse").on("click", function () {
                $("#split-button").igSplitButton("collapse");
            });
        });