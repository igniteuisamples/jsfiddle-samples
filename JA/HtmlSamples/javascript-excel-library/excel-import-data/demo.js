$(function () {
            $("#input").on("change", function () {
                var excelFile,
                    fileReader = new FileReader();

                $("#result").hide();

                fileReader.onload = function (e) {
                    var buffer = new Uint8Array(fileReader.result);

                    $.ig.excel.Workbook.load(buffer, function (workbook) {
                        var column, row, newRow, cellValue, columnIndex, i,
                            worksheet = workbook.worksheets(0),
                            columnsNumber = 0,
                            gridColumns = [],
                            data = [],
                            worksheetRowsCount;

                        // Both the columns and rows in the worksheet are lazily created and because of this most of the time worksheet.columns().count() will return 0
                        // So to get the number of columns we read the values in the first row and count. When value is null we stop counting columns:
                        while (worksheet.rows(0).getCellValue(columnsNumber)) {
                            columnsNumber++;
                        }

                        // Iterating through cells in first row and use the cell text as key and header text for the grid columns
                        for (columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
                            column = worksheet.rows(0).getCellText(columnIndex);
                            gridColumns.push({ headerText: column, key: column });
                        }

                        // We start iterating from 1, because we already read the first row to build the gridColumns array above
                        // We use each cell value and add it to json array, which will be used as dataSource for the grid
                        for (i = 1, worksheetRowsCount = worksheet.rows().count() ; i < worksheetRowsCount; i++) {
                            newRow = {};
                            row = worksheet.rows(i);

                            for (columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
                                cellValue = row.getCellText(columnIndex);
                                newRow[gridColumns[columnIndex].key] = cellValue;
                            }

                            data.push(newRow);
                        }

                        // we can also skip passing the gridColumns use autoGenerateColumns = true, or modify the gridColumns array
                        createGrid(data, gridColumns);
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
        })

        function createGrid(data, gridColumns) {
            if ($("#grid1").data("igGrid") !== undefined) {
                $("#grid1").igGrid("destroy");
            }

            $("#grid1").igGrid({
                columns: gridColumns,
                autoGenerateColumns: true,
                dataSource: data,
                width: "100%"
            });
        }