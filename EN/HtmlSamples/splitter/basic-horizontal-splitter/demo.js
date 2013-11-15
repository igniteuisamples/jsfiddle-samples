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
                    headerText: "Company Name",
                    key: "CompanyName"
                }, {
                    headerText: "Contact Name",
                    key: "ContactName"
                }, {
                    headerText: "Contact Title",
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
                                 headerText: "Order ID",
                                key: "OrderID"
                            }, {
                                headerText: "Customer ID",
                                key: "CustomerID"
                            }, {
                                headerText: "Ship Name",
                                key: "ShipName"
                            }],
                            dataSource: nwCustomersWithOrders[args.row.index].Orders || []
                        });
                        $("#splitter").igSplitter("expandAt", 1);
                    }
                }]
            });
        });