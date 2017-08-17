$( function () {
			if ($("#spreadsheet1").length !== 0) {
				$("#spreadsheet1").igSpreadsheet({
					height: "600",
					width: "100%",
					activeWorksheetChanged: function (evt, ui) {
						if (ui.newActiveWorksheetName == "Statistics") {
							$("#spreadsheet1").igSpreadsheet("option", "activeCell", "E7");
						} else {
							$("#spreadsheet1").igSpreadsheet("option", "activeCell", "J15");
						}
					}
				});

				var workbook = null;
				var xhr = new XMLHttpRequest();
				xhr.open('GET', 'http://igniteui.com/data-files/statistic.xlsx', true);
				xhr.responseType = 'arraybuffer';

				xhr.onload = function (e) {
					// response is unsigned 8 bit integer
					var responseArray = new Uint8Array(this.response);
					$.ig.excel.Workbook.load(responseArray, function () {
						workbook = arguments[0];
						setInitialSettings();
					}, function () {
						console.log("fail");
					})
				};
				xhr.send();

				function setInitialSettings() {
					$("#spreadsheet1").igSpreadsheet("option", "workbook", workbook);
					var ws = workbook.worksheets("Table data");
					$("#spreadsheet1").igSpreadsheet("option", "activeWorksheet", ws);
					$("#spreadsheet1").igSpreadsheet("option", "activeCell", "J15");
					$("#spreadsheet1").igSpreadsheet("option", "zoomLevel", "95");
				}
			}
		});