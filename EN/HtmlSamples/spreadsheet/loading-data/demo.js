$(function () {
			var editingEnabled = true;
			$("#spreadsheet").igSpreadsheet({
				height: "600",
				width: "100%",
				isFormulaBarVisible: true,
				editModeEntering: function (e, args) {
					return editingEnabled;
				}
			});

			$("#enableEditing").igCheckboxEditor({
				checked: true,
				valueChanged: function (evt, ui) {
					editingEnabled = ui.newState;
				}
			});

			//Check for Browser's - File API support
			if (window.FileReader) {
				$("#input").on("change", function () {
					var excelFile,
						fileReader = new FileReader();

					$("#result").hide();

					fileReader.onload = function (e) {
						var buffer = new Uint8Array(fileReader.result);

						$.ig.excel.Workbook.load(buffer, function () {
							workbook = arguments[0];
							setWorkbook();

						}, function (error) {
							$("#result").text("The excel file is corrupted.");
							$("#result").show(1000);
						});
					}

					if (this.files.length > 0) {
						excelFile = this.files[0];
						if (excelFile.type === "application/vnd.ms-excel" || excelFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || (excelFile.type === "" && (excelFile.name.endsWith("xls") || excelFile.name.endsWith("xlsx")))) {
							fileReader.readAsArrayBuffer(excelFile);
						} else {
							$("#result").text("The format of the file you have selected is not supported. Please select a valid Excel file ('.xls, *.xlsx').");
							$("#result").show(1000);
						}
					}
				})
			} else {
				$("#result").text("The File APIs are not fully supported in this browser.");
				$("#result").show(1000);
			}
		});

		function setWorkbook() {
			if ($("#spreadsheet").igSpreadsheet !== undefined && workbook != null) {
				//load specific workbook
				$("#spreadsheet").igSpreadsheet("option", "workbook", workbook);
			}
		}

		function saveWorkbook(workbook, name) {
			$("#spreadsheet").igSpreadsheet("option", "workbook")
				.save({ type: 'blob' }, function (data) {
					saveAs(data, name);
				}, function (error) {
					alert('Error exporting: : ' + error);
				});
		}