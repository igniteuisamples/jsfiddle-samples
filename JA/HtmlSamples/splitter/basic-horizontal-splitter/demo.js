$(function () {
            $("#splitter").igSplitter({ height: "700px", orientation: "horizontal", panels: [{ collapsible: false }, { size: 200, collapsed: true, collapsible: true}] });
            $("#mainGrid").igGrid({
                width: "100%",
                height: "100%",
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                columns: [{
                    headerText: "ID",
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
                features: [{
                    name: "Selection",
                    mode: "row",
                    rowSelectionChanged: function (ui, args) {
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
                            dataSource: nwCustomersWithOrders[args.row.index].Orders || []
                        });
                        $("#splitter").igSplitter("expandAt", 1);
                    }
                }]
            });
        });