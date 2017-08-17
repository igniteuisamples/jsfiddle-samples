$( function () {
			$("#spreadsheet").igSpreadsheet({
				height: "600",
				width: "100%",
				isFormulaBarVisible: true
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
							$("#result").text("Excel ファイルは破損しています。");
							$("#result").show(1000);
						});
					}

					if (this.files.length > 0) {
						excelFile = this.files[0];
						if (excelFile.type === "application/vnd.ms-excel" || excelFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || (excelFile.type === "" && (excelFile.name.endsWith("xls") || excelFile.name.endsWith("xlsx")))) {
							fileReader.readAsArrayBuffer(excelFile);
						} else {
							$("#result").text("選択のファイル形式がサポートされていません。有効な Excel ファイルを選択してください ('.xls, *.xlsx')。");
							$("#result").show(1000);
						}
					}
				})
			} else {
				$("#result").text("File API はこのブラウザーで完全にはサポートされていません。");
				$("#result").show(1000);
			}
		});

		function setWorkbook() {
			if ($("#spreadsheet").igSpreadsheet !== undefined && workbook != null) {
				//load specific workbook
				$("#spreadsheet").igSpreadsheet("option", "workbook", workbook);
			}
		}