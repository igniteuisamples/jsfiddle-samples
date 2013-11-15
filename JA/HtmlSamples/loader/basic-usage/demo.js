$(function () {
$.ig.loader({
	        scriptPath: "http://cdn-na.infragistics.com/jquery/20132/latest/js/",
	        cssPath: "http://cdn-na.infragistics.com/jquery/20132/latest/css/",
	        resources: "igGrid.Sorting"
	    });

	    $.ig.loader(function () {
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
	    });
});