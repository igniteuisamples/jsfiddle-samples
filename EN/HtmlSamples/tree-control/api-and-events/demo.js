$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer(); 

            
            /*----------------- Method & Option Examples -------------------------*/

            // Remove Selected Node button click handler
            $("#btnRemoveNode").click(function (e) {
                var node = $("#tree").igTree("selectedNode");

                if (node.path != null) {

                    if (node.data.Text === "Tech") {
                        apiViewer.log("Tech node cannot be removed");
                    }
                    else {
                        // Remove selected node using path
                        $("#tree").igTree("removeAt", node.path);

                        apiViewer.log("Node Removed: " + node.data.Text);

                        $("#tree").igTree("clearSelection");
                    }
                } else {
                    apiViewer.log("Please select a node and try again.");
                }
            });

            // Select "Tech" Node button click handler
            $("#btnSelectNode").click(function (e) {

                var nodes = $("#tree").igTree("findNodesByText", "Tech");

                if (nodes.length > 0) {
                    $("#tree").igTree("select", nodes[0].element);
                }
            });
            
            // {Button Label} button click handler
            $("#btnAddNode").click(function (e) {
                var parentNode = $("#tree").igTree("selectedNode").element;                

                if (parentNode == null) {
                    $("#tree").igTree("addNode", { Text: "New Node" });
                }
                else {
                    $("#tree").igTree("addNode", { Text: "New Node" }, parentNode);
                    $("#tree").igTree("expand", parentNode);
                }

            });

            /*----------------- Event Examples -------------------------*/

            $("#tree").on("igtreeselectionchanged", function (e, ui) {
            	apiViewer.log("igtreeselectionchanged: [ " + "Selection Changed: " + ui.newNodes[0].data.Text + "]"); focusOnMobile();
            });

            $("#tree").on("igtreenodeclick", function (evt, ui) {
            	apiViewer.log("igtreenodeclick: [ " + "Node Clicked: " + ui.node.data.Text + "]"); focusOnMobile();
            });

            $("#tree").on("igtreedragstart", function (evt, ui) {
            	apiViewer.log("igtreedragstart: [ " + "Node Drag Start: " + ui.data.Text + "]"); focusOnMobile();
            });

            $("#tree").on("igtreedragstop", function (evt, ui) {
            	apiViewer.log("igtreedragstop"); focusOnMobile();
            });

            $("#tree").on("igtreenodedropped", function (evt, ui) {
            	apiViewer.log("igtreenodedropped"); focusOnMobile();
            });

            /*----------------- Instantiation -------------------------*/

            $("#tree").igTree({
                singleBranchExpand: true,
                dataSourceType: "json",
                dataSource: products, //defined in external script
                dragAndDrop: true,
                bindings: {
                    textKey: "Text",
                    valueKey: "Text",
                    childDataProperty: "Nodes"
                }
            });

            function focusOnMobile() {
            	setTimeout(function () {
            		if ($(window).width() < 600) {
            			$(".api-viewer").focus();
            		}
            	}, 0);
            }

        });