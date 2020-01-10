$(function () {
$.ig.loader({
			scriptPath: "https://cdn-na.infragistics.com/igniteui/latest/js/",
			cssPath: "https://cdn-na.infragistics.com/igniteui/latest/css/",
			resources: "igGrid.Sorting",
			ready: function () {
				$("#grid").igGrid({
					autoGenerateColumns: false,
					columns: [
						{ headerText: "ID", key: "ProductID", dataType: "number" },
						{ headerText: "Name", key: "Name", dataType: "string" },
						{ headerText: "Number", key: "ProductNumber", dataType: "string" },
						{ headerText: "Cost", key: "StandardCost", dataType: "number" }
					],
					dataSource: adventureWorks,
					height: "400px",
					features: [
						{
							name: "Sorting",
							type: "local",
							mode: "multiple"
						}
					]
				});
			}
		});
});