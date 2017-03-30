$(function () {
			createSingleCellSelectionGrid();
			createMultipleCellSelectionGrid();
			createRowSelectionGrid();
			createRowSelectionRowSelectorsGrid();
	});
		
	function createSingleCellSelectionGrid() {
		$("#singleCellSelectionGrid").igGrid({
				width: "100%",
				autoGenerateColumns: false,
				dataSource: northwindEmployees,
				responseDataKey: "results",
				dataSourceType: "json",
				columns: [
					{ headerText: "Employee ID", key: "ID", dataType: "number", width: "120px" },
					{ headerText: "Name", key: "Name", dataType: "string" },
					{ headerText: "Title", key: "Title", dataType: "string" },
					{ headerText: "Phone", key: "Phone", dataType: "string" }
				],
				features: [
					{
						name: 'Responsive',
						enableVerticalRendering: false,
						columnSettings: [
							{
								columnKey: 'ID',
								classes: 'ui-hidden-phone'
							}
						]
					},
					{
						name: "Selection",
						mode: "cell",
						multipleSelection: false,
						touchDragSelect: false, // this is true by default
						multipleCellSelectOnClick: false
					}
				]
		});
	}
	function createMultipleCellSelectionGrid() {
		$("#multipleCellSelectionGrid").igGrid({
			width: "100%",
			autoGenerateColumns: false,
			dataSource: northwindEmployees,
			responseDataKey: "results",
			dataSourceType: "json",
			columns: [
				{ headerText: "Employee ID", key: "ID", dataType: "number", width: "120px" },
				{ headerText: "Name", key: "Name", dataType: "string" },
				{ headerText: "Title", key: "Title", dataType: "string" },
				{ headerText: "Phone", key: "Phone", dataType: "string" }
			],
			features: [
					{
						name: 'Responsive',
						enableVerticalRendering: false,
						columnSettings: [
							{
								columnKey: 'ID',
								classes: 'ui-hidden-phone'
							}
						]
					},
					{
						name: "Selection",
						mode: "cell",
						multipleSelection: true,
						touchDragSelect: false, // this is true by default
						multipleCellSelectOnClick: false,
						allowMultipleRangeSelection: true
					}
			]
		});
	}

	function createRowSelectionGrid() {
		$("#rowSelectionGrid").igGrid({
			width: "100%",
			autoGenerateColumns: false,
			dataSource: northwindEmployees,
			responseDataKey: "results",
			dataSourceType: "json",
			columns: [
				{ headerText: "Employee ID", key: "ID", dataType: "number", width: "120px" },
				{ headerText: "Name", key: "Name", dataType: "string" },
				{ headerText: "Title", key: "Title", dataType: "string" },
				{ headerText: "Phone", key: "Phone", dataType: "string" }
			],
			features: [
				{
					name: 'Responsive',
					enableVerticalRendering: false,
					columnSettings: [
						{
							columnKey: 'ID',
							classes: 'ui-hidden-phone'
						}
					]
				},
				{
					name: "Selection",
					mode: 'row',
					multipleSelection: true
				}
			]
		});
	}
	function createRowSelectionRowSelectorsGrid() {
		$("#rowSelectionRowSelectorsGrid").igGrid({
			width: "100%",
			autoGenerateColumns: false,
			dataSource: northwindEmployees,
			responseDataKey: "results",
			dataSourceType: "json",
			columns: [
				{ headerText: "Employee ID", key: "ID", dataType: "number", width: "120px" },
				{ headerText: "Name", key: "Name", dataType: "string" },
				{ headerText: "Title", key: "Title", dataType: "string" },
				{ headerText: "Phone", key: "Phone", dataType: "string" }
			],
			features: [
				{
					name: 'Responsive',
					enableVerticalRendering: false,
					columnSettings: [
						{
							columnKey: 'ID',
							classes: 'ui-hidden-phone'
						}
					]
				},
					{
						name: "Selection",
						mode: 'row',
						multipleSelection: true
					},
					{
						name: "RowSelectors",
						enableCheckBoxes: true,
						enableRowNumbering: false,
						enableSelectAllForPaging: true // this option is true by default
					},
					{
						name: "Paging",
						pageSize: 5
					}
			]
		});
	}