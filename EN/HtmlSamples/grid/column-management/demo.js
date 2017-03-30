$(function () {
			$("#grid").igGrid({
				autoGenerateColumns: false,
				renderCheckboxes: true,
				width: "100%",
				height: "500px",
				columns: [
					{ headerText: "Product Name", key: "Name", dataType: "string", width: "20%" },
					{ headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
					{ headerText: "Make Flag", key: "MakeFlag", dataType: "bool", width: "10%" },
					{ headerText: "Reorder Point", key: "ReorderPoint", dataType: "number", width: "10%" },
					{ headerText: "Sell Start Date", key: "SellStartDate", dataType: "date", width: "15%" },
					{ headerText: "Modified Date", key: "ModifiedDate", dataType: "date", width: "15%" },
				],
				dataSource: adventureWorks.slice(0, 100),
				features: [
					{
						name: "Resizing"
					},
					{
						name: "ColumnMoving",
						columnMovingDialogContainment: "window"
					},
					{
						name: "Hiding"
					}
				]
			});
		});