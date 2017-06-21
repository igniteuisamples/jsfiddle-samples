$(function () {
			$("#grid").igGrid({
				autoGenerateColumns: false,
				width: "100%",
				height: "500px",
			    rowVirtualization: true,
			    virtualizationMode: "continuous",
				columns: [
					{ headerText: "Order ID", key: "OrderID", dataType: "number", width: "0%", hidden: true },
					{ headerText: "Ship Country", key: "ShipCountry", dataType: "string", width: "12%" },
					{ headerText: "Order Date", key: "OrderDate", dataType: "date", width: "18%" },
					{ headerText: "Ship Name", key: "ShipName", dataType: "string", width: "14%" },
					{ headerText: "Ship City", key: "ShipCity", dataType: "string", width: "13%" },
					{ headerText: "Customer City", key: "City", dataType: "string", width: "13%" },
					{ headerText: "Unit Price", key: "UnitPrice", dataType: "number", width: "17%" },
					{ headerText: "Discount", key: "Discount", dataType: "number", width: "13%" },
				],
				dataSource: northwindInvoices,
				features: [
					{
						name: 'GroupBy',
						groupByDialogContainment: "window",
						groupSummaries: [
							{
								summaryFunction: "Sum", label: "Sum = ", format: ".##"
							}
						],
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
						name: "Filtering"
					},
					{
						name: "CellMerging"
					}
				]
			});
		});