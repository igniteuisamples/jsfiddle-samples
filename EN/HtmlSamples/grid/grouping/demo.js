$(function () {
			$("#grid").igGrid({
				autoGenerateColumns: false,
				width: "100%",
				height: "400px",
				columns: [
					{ headerText: "Order ID", key: "OrderID", dataType: "number", width: "0%", hidden: true },
					{ headerText: "Ship Country", key: "ShipCountry", dataType: "string", width: "20%" },
					{ headerText: "Order Date", key: "OrderDate", dataType: "date", width: "10%" },
					{ headerText: "Unit Price", key: "UnitPrice", dataType: "string", width: "20%" },
					{ headerText: "Discount", key: "Discount", dataType: "string", width: "10%" },
					{ headerText: "Ship Name", key: "ShipName", dataType: "string", width: "20%" },
					{ headerText: "Ship City", key: "ShipCity", dataType: "string", width: "12%" },
					{ headerText: "Customer City", key: "City", dataType: "string", width: "8%" }
				],
				dataSource: northwindInvoices,
				features: [
					{
						name: 'GroupBy',
						groupByDialogContainment: "window",
						columnSettings: [
							{
								columnKey: "ShipCountry",
								isGroupBy: true
							},
							{
								columnKey: "OrderDate",
								summaries: [
									{
										summaryFunction: "custom",
										text: "After 8/1/1996:",
										customSummary: function (data) {
											var count = 0, date = new Date(1996, 7, 1);
											$.map(data.array, function (d) {
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
					},
					{
						name: "Paging"
					},
					{
						name: "Filtering"
					},
					{
						name: "CellMerging"
					}
				]
			});
		});