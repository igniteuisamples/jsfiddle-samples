$(function () {
            $("#splitter").igSplitter({ height: "700px", orientation: "horizontal", panels: [{ collapsible: false }, { size: 200, collapsed: true, collapsible: true}] });
            $("#mainGrid").igGrid({
                width: "100%",
                height: "100%",
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                columns: [{
                    headerText: "顧客 ID",
                    key: "ID"
                }, {
                    headerText: "会社名",
                    key: "CompanyName"
                }, {
                    headerText: "名前",
                    key: "ContactName"
                }, {
                    headerText: "連絡先",
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
                        headerText: "注文 ID",
                        key: "OrderID"
                    }, {
                        headerText: "顧客 ID",
                        key: "CustomerID"
                    }, {
                        headerText: "出荷名",
                        key: "ShipName"
                    }],
                    dataSource: nwCustomersWithOrders[rowIndex].Orders || []
                });
                $("#splitter").igSplitter("expandAt", 1);
            }
        });