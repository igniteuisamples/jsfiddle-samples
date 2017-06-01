$(function () {
			$("#grid").igGrid({
				autoGenerateColumns: false,
				renderCheckboxes: true,
				width: "100%",
				height: "500px",
				columns: [
					{ headerText: "製品名", key: "Name", dataType: "string", width: "20%" },
					{ headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "20%" },
					{ headerText: "メーカー フラグ", key: "MakeFlag", dataType: "bool", width: "10%" },
					{ headerText: "再注文", key: "ReorderPoint", dataType: "number", width: "10%" },
					{ headerText: "販売の開始日付", key: "SellStartDate", dataType: "date", width: "15%" },
					{ headerText: "変更日付", key: "ModifiedDate", dataType: "date", width: "15%" },
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