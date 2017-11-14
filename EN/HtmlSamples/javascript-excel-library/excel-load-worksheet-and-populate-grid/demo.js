$(function () {
function handleFiles(files) {
                var excelFile,
                    fileReader = new FileReader();

                fileReader.onload = function (e) {
                    var buffer = new Uint8Array(fileReader.result);

                    $.ig.excel.Workbook.load(buffer,
                        function (workbook) {
                            var column, row, newRow, cellValue, columnIndex, i, excelFile,
                                worksheet = workbook.worksheets(0),
                                rowsNumber = worksheet.rows().count(),
							    columnsNumber = 0,
							    gridColumns = [],
							    data = [];

                            // Both the columns and rows in the worksheet are lazily created and because of this most of the time worksheet.columns().count() will return 0
						    // So to get the number of columns we read the values in the first row and count. When value is null we stop counting columns:
						    while (worksheet.rows(0).getCellValue(columnsNumber)) {
							    columnsNumber++;
						    }

                            // Iterating through cells in first row and use the cell text as key and header text for the grid columns
						    for (columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
						        column = worksheet.rows(0).getCellText(columnIndex);
							    gridColumns.push( {headerText: column, key: column} )
						    }

                            // We start iterating from 1, because we already read the first row to build the gridColumns array above
                            // We use each cell value and add it to json array, which will be used as dataSource for the grid
						    for (i = 1, length = worksheet.rows().count(); i < length; i++) {

							    newRow = {};
							    row = worksheet.rows(i);

							    for (columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
							        cellValue = row.getCellText(columnIndex);
							        newRow[gridColumns[columnIndex].key] = cellValue;
							    }

							    data.push(newRow);
						    }

						    createGrid(data, gridColumns); // we can also skip passing the gridColumns use autoGenerateColumns = true, or modify the gridColumns array

                        },
                        function error(er) {
                            console.log(er.message());
                        });
                }

                excelFile = files[0];
                fileReader.readAsArrayBuffer(excelFile);
            };

            function createGrid(data, gridColumns) {
				
				if ($("#grid1").data("igGrid") !== undefined) {
					$("#grid1").igGrid("destroy");
				}
				
                $("#grid1").igGrid({
                    columns: gridColumns,
					autoGenerateColumns: true,
				    dataSource: data,
                    width: "100%",
                });

            };
});