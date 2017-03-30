$(function () {
            $("#splitter").igSplitter({ height: "700px", orientation: "horizontal", panels: [{ collapsible: false }, { size: 200, collapsed: true, collapsible: true}] });
            $("#mainGrid").igGrid({
                width: "100%",
                height: "100%",
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                columns: [{
                    headerText: "Customer ID",
                    key: "ID"
                }, {
                    headerText: "Company Name",
                    key: "CompanyName"
                }, {
                    headerText: "Contact Name",
                    key: "ContactName"
                }, {
                    headerText: "Contact Title",
                    key: "ContactTitle"
                }],
                dataRendered: function(evt, ui) {
                    $("#mainGrid").igGridSelection("selectRow", 0);
                    selectRowAndExpandSecondPane(0);
                },
                features: [{
                    name: "Selection",
                    mode: "row",
                    rowSelectionChanged: function (ui, args) {
                        selectRowAndExpandSecondPane(args.row.index);
                    }
                }]
            });

            function selectRowAndExpandSecondPane(rowIndex) {
                $("#detailGrid").igGrid({
                    width: "100%",
                    height: "100%",
                    autoGenerateColumns: false,
                    columns: [{
                        headerText: "Order ID",
                        key: "OrderID"
                    }, {
                        headerText: "Customer ID",
                        key: "CustomerID"
                    }, {
                        headerText: "Ship Name",
                        key: "ShipName"
                    }],
                    dataSource: nwCustomersWithOrders[rowIndex].Orders || []
                });
                $("#splitter").igSplitter("expandAt", 1);
            }
        });