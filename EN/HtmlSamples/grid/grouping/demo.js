$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                height: "400px",
                columns: [
                    { headerText: "Order ID", key: "OrderID", dataType: "number", width: "10%" },
                    { headerText: "Order Date", key: "OrderDate", dataType: "date", width: "10%" },
                    { headerText: "Ship Name", key: "ShipName", dataType: "string", width: "30%" },
                    { headerText: "Ship City", key: "ShipCity", dataType: "string", width: "15%" },
                    { headerText: "Ship Country", key: "ShipCountry", dataType: "string", width: "20%" },
                    { headerText: "Customer City", key: "City", dataType: "string", width: "15%" }
                ],
                dataSource: northwindInvoices,
                features: [
                    {
                        name: 'GroupBy',
                        columnSettings: [
                            {
                                columnKey: "OrderDate",
                                summaries: [
                                    {
                                        summaryFunction: "custom",
                                        text: "After 8/1/1996:",
                                        customSummary: function (data) {
                                            var count = 0, date = new Date(1996, 7, 1);
                                            $.map(data, function (d) {
                                                  if (d > date) {
                                                      count++;
                                                  }
                                              });
                                              return count.toFixed(0);
                                        }
                                    }
                                ]
                            }
                        ],
                        summarySettings: {
                            summaryFormat: "#"
                        }
                    }
                ]
            });
        });