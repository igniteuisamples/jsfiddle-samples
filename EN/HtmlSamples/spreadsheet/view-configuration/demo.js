$(function () {
$.ig.loader({
			scriptPath: "http://cdn-na.infragistics.com/igniteui/latest/js/",
			cssPath: "http://cdn-na.infragistics.com/igniteui/latest/css/",
			resources: "igSpreadsheet,igExcel.LoadSaveXlsx,igEditors",
			ready: function () {
				if ($("#spreadsheet2").length !== 0) {
					$("#tabs").tabs();
					$("#spreadsheet2").igSpreadsheet({
						height: "600",
						width: "100%"
					});

					var workbook = null;
					var xhr = new XMLHttpRequest();
					xhr.open('GET', 'http://igniteui.com/data-files/FormattingData.xlsx', true);
					xhr.responseType = 'arraybuffer';

					xhr.onload = function (e) {
						// response is unsigned 8 bit integer
						var responseArray = new Uint8Array(this.response);
						$.ig.excel.Workbook.load(responseArray, function () {
							workbook = arguments[0];
							$("#spreadsheet2").igSpreadsheet("option", "workbook", workbook);
						}, function () {
							console.log("fail");
						})
					};

					xhr.send();

					$("#zoomSlider").slider({
						change: function (event, ui) {
							$("#spreadsheet2").igSpreadsheet("option", "zoomLevel", ui.value);
						},
						min: 10,
						max: 400,
						value: 100,
						step: 1
					});

					$("#zoomIn").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "zoomIn");
						var zoomInLevel = $('#spreadsheet2').igSpreadsheet('option', "zoomLevel");
						$("#zoomSlider").slider("value", zoomInLevel);
					});
					$("#zoomOut").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "zoomOut");
						var zoomOutLevel = $('#spreadsheet2').igSpreadsheet('option', "zoomLevel");
						$("#zoomSlider").slider("value", zoomOutLevel);
					});
					$("#zoom").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "zoomTo100");
						var zoomLevel = $('#spreadsheet2').igSpreadsheet('option', "zoomLevel");
						$("#zoomSlider").slider("value", zoomLevel);
					});
					$("#zoomSelection").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "zoomToSelection");
						var zoomSelectionLevel = $('#spreadsheet2').igSpreadsheet('option', "zoomLevel");
						$("#zoomSlider").slider("value", zoomSelectionLevel);
					});

					$("#split").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "toggleSplitPanes");
					});

					$("#gridlines").igCheckboxEditor({
						checked: true,
						valueChanged: function (evt, ui) {
							if (ui.newState) {
								$("#spreadsheet2").igSpreadsheet("option", "areGridlinesVisible", true);
							} else {
								$("#spreadsheet2").igSpreadsheet("option", "areGridlinesVisible", false);
							}
						}
					});
					$("#headings").igCheckboxEditor({
						checked: true,
						valueChanged: function (evt, ui) {
							if (ui.newState) {
								$("#spreadsheet2").igSpreadsheet("option", "areHeadersVisible", true);
							} else {
								$("#spreadsheet2").igSpreadsheet("option", "areHeadersVisible", false);
							}
						}
					});
					$("#formulabar").igCheckboxEditor({
						checked: true,
						valueChanged: function (evt, ui) {
							if (ui.newState) {
								$("#spreadsheet2").igSpreadsheet("option", "isFormulaBarVisible", true);
							} else {
								$("#spreadsheet2").igSpreadsheet("option", "isFormulaBarVisible", false);
							}
						}
					});
					var listItems = [{ id: 1, action: "freeze pane" }, { id: 2, action: "freeze first row" }, { id: 3, action: "freeze first column" }];
					$("#freeze").igCombo({
						dataSource: listItems,
						textKey: "action",
						valueKey: "action",
						width: "150px",
						enableClearButton : false,
						autoSelectFirstMatch: false,
						selectionChanged: function (evt, ui) {
							if (ui.items[0].data.id == 1) {
								if (ui.items[0].data.action == "unfreeze pane") {
									var currentValue = ui.items[0].data.action;
									listItems[0].action = "freeze pane";
									$("#freeze").igCombo("dataBind");
									$("#freeze").igCombo("text", currentValue);
								} else {
									var paneValue = ui.items[0].data.action;
									listItems[0].action = "unfreeze pane";
									$("#freeze").igCombo("dataBind");
									$("#freeze").igCombo("text", paneValue);
								}
								$('#spreadsheet2').igSpreadsheet('executeAction', "toggleFreezePanes");
							} else if (ui.items[0].data.id == 2) {
								$('#spreadsheet2').igSpreadsheet('executeAction', "freezeFirstRow");
								listItems[0].action = "unfreeze pane";
								$("#freeze").igCombo("dataBind");
								$("#freeze").igCombo("value", ui.items[0].data.action);
							} else {
								$('#spreadsheet2').igSpreadsheet('executeAction', "freezeFirstColumn");
								listItems[0].action = "unfreeze pane";
								$("#freeze").igCombo("dataBind");
								$("#freeze").igCombo("value", ui.items[0].data.action);
							}
						}
					});
					$("#delSheet").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "deleteWorksheets");
					});
					$("#delContent").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "clearContents");
					});
					$("#bold").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "toggleBold");
					});
					$("#italic").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "toggleItalic");
					});
					$("#underline").click(function () {
						$('#spreadsheet2').igSpreadsheet('executeAction', "toggleUnderline");
					});
				}
			}
		});
});