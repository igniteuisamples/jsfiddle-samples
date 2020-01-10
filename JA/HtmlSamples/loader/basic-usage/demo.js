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
						{ headerText: "名前", key: "Name", dataType: "string" },
						{ headerText: "数値", key: "ProductNumber", dataType: "string" },
						{ headerText: "原価", key: "StandardCost", dataType: "number" }
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