$(function () {
var editModes = [
			{ "ID": 1, "EditMode": "cell" },
			{ "ID": 2, "EditMode": "dialog" },
			{ "ID": 3, "EditMode": "row" },
		];
		$(function () {
			$("#grid-mrl").igGrid({
				dataSource: adventureWorks.slice(221, 250),
				autoCommit: true,
				width: "100%",
				autoGenerateColumns: false,
				primaryKey: "ProductID",
				columns: [
					{ headerText: "Product ID", key: "ProductID", dataType: "number", rowIndex: 0, columnIndex: 0, rowSpan: 2, width: "0%", navigationIndex: 0 },
					{ headerText: "Product Name", key: "Name", dataType: "string", rowIndex: 0, columnIndex: 1, width: "15%", navigationIndex: 1 },
					{ headerText: "Product Number", key: "ProductNumber", dataType: "string", rowIndex: 0, columnIndex: 2, width: "10%", navigationIndex: 2 },
					{ headerText: "Safety Stock Level", key: "SafetyStockLevel", dataType: "number", rowIndex: 0, columnIndex: 3, width: "10%", navigationIndex: 4 },
					{ headerText: "Sell Start Date", key: "SellStartDate", dataType: "date", rowIndex: 0, columnIndex: 4, rowSpan: 2, width: "15%", navigationIndex: 6 },
					{ headerText: "Modified Date", key: "ModifiedDate", dataType: "date", rowIndex: 0, columnIndex: 5, rowSpan: 2, width: "15%", navigationIndex: 7 },
					{ headerText: "Color", key: "Color", dataType: "string", rowIndex: 1, columnIndex: 1, colSpan: 2, template: "<span><b> Color: </b></span><div style='width:15px; height: 15px; background-color: ${Color}; border-style:solid; display:inline-block; margin-left: 5px; position: relative; top: 7px; '></div>", navigationIndex: 3 },
					{ headerText: "List Price", key: "ListPrice", dataType: "number", rowIndex: 1, columnIndex: 3, colSpan: 1, navigationIndex: 5 }
				],
				autofitLastColumn: false,
				features: [
					{
						name: "Paging",
						pageSize: 5
					},
					{
						name: "Updating",
						editMode: "dialog",
						columnSettings: [
							{
								columnKey: "ProductID",
								readOnly: true
							},
							{
								columnKey: "SellStartDate",
								readOnly: true
							},
							{
								columnKey: "ModifiedDate",
								readOnly: true
							},
						],
						rowEditDialogOptions: {
							showReadonlyEditors: false
						}
					}
				]
			});
			$("#editModeCombo").igCombo({
				dataSource: editModes,
				valueKey: "ID",
				textKey: "EditMode",
				initialSelectedItems: [
					{ index: 1 }
				],
				selectionChanged: function (evt, ui) {
					var newEditMode = ui.items[0].data.EditMode;
					changeGridEditMode(newEditMode);
				}
			});
			function changeGridEditMode(newEditMode) {
				$("#grid-mrl").igGridUpdating("option", "editMode", newEditMode);
				$("#grid-mrl").igGrid("dataBind");
			}
		});
});