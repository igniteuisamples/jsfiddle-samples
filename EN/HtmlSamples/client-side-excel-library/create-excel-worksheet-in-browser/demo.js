$(function () {
$.ig.loader({
            scriptPath: "http://cdn-na.infragistics.com/igniteui/latest/js/",
            cssPath: "http://cdn-na.infragistics.com/igniteui/latest/css/",
            resources: 'modules/infragistics.util.js,' +
                       'modules/infragistics.documents.core.js,' +
                       'modules/infragistics.xml.js,' +
                       'modules/infragistics.excel.js,' +
                       'igGrid.Summaries,' +
                       'igGrid.Sorting'
        });

        $.ig.loader(function () {

            $("#exportButton").igButton({ labelText: $("#exportButton").val(), width: 200 });

            $("#grid1").igGrid({
                autoGenerateColumns: false,
                autoCommit: true,
                columns: [
                    { headerText: "Product ID", key: "ProductID", dataType: "number", width: "200px" },
                    { headerText: "Product Name", key: "Name", dataType: "string", width: "300px" },
                    {
                        headerText: "Product Number",
                        key: "ProductNumber",
                        dataType: "string",
                        width: "200px",
                        template: "<span style='font-weight: bold;'>${ProductNumber}</span>"
                    },
                    { headerText: "SellStartDate", key: "SellStartDate", dataType: "date", width: "200px" }
                ],
                primaryKey: "ProductID",
                dataSource: adventureWorks,
                height: "500px",
                features: [
                    {
                        name: "Summaries"
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    }
                ]
            });

            $('#exportButton').click(function () {

                var
                    headers,
                    $statusContainer = $('#status-container'),
                    $status = $('#status'),
                    $progress = $('#progress'),
                    gridId = this.getAttribute('data-export-target');

                function getErrorMessage(err) {
                    if (typeof err.message === 'function') {
                        return err.message();
                    }

                    if (err.message) {
                        return err.message;
                    }

                    return err.toString();
                };

                function exportAllCellsInHeader() {
                    headers = $(gridId).igGrid("headersTable");

                    for (var headerTableIndex = 0; headerTableIndex < headers.length; headerTableIndex++) {
                        var headerTable = headers[headerTableIndex];

                        for (var headerRowIndex = 0; headerRowIndex < headerTable.rows.length; headerRowIndex++, xlRowIndex++) {

                            var headerRow = headerTable.rows[headerRowIndex];
                            var xlHeaderRow = worksheet.rows(xlRowIndex);
                            exportFormat(headerRow, workbook, xlHeaderRow.cellFormat());

                            for (var headerCellIndex = 0; headerCellIndex < headerRow.cells.length; headerCellIndex++) {
                                var headerCell = headerRow.cells[headerCellIndex];
                                worksheet.columns(headerCellIndex).setWidth(headerCell.offsetWidth, $.ig.excel.WorksheetColumnWidthUnit.pixel);
                                exportCell(headerCell, workbook, xlHeaderRow, headerCellIndex);
                            }
                        }
                    }
                }

                function exportDataSegment(stopIndex) {
                    for (; dataRowIndex < stopIndex; dataRowIndex++, xlRowIndex++) {

                        $progress.attr('value', dataRowIndex);

                        var dataRow = rows[dataRowIndex];
                        var xlRow = worksheet.rows(xlRowIndex);
                        exportFormat(dataRow, workbook, xlRow.cellFormat());

                        var primaryKey = Number($(dataRow).attr('data-id'));

                        for (var dataCellIndex = 0; dataCellIndex < dataRow.cells.length; dataCellIndex++) {
                            var dataCell = dataRow.cells[dataCellIndex];
                            var cellValue = $(gridId).igGrid("getCellValue", primaryKey, columns[dataCellIndex].key);
                            exportCell(dataCell, workbook, xlRow, dataCellIndex, cellValue);
                        }
                    }

                    if (stopIndex === rows.length) {
                        $progress.attr('value', rows.length)
                        setTimeout(finalize, 1);
                    }
                    else {
                        setTimeout(function () { exportDataSegment(Math.min(stopIndex + segmentSize, rows.length)); }, 1);
                    }
                };

                function isTransparent(color) {
                    return color === 'rgba(0, 0, 0, 0)' || color === 'transparent';
                };

                function exportCell(domCell, workbook, xlRow, columnIndex, cellValue) {

                    exportFormat(domCell, workbook, xlRow.getCellFormat(columnIndex));

                    if (cellValue === undefined) {
                        cellValue = $(domCell).text();
                    } else if (cellValue instanceof Date) {
                        // Note: Dates are not currently supported 
                        // with the preview, so just write out their text
                        cellValue = $(domCell).text();
                    }

                    // If the cell value is a string and the element has 
                    // child elements, create a FormattedString to represent 
                    // it so it can have the mixed formatting which might be present
                    if (typeof cellValue === 'string' && domCell.children.length) {

                        var formattedString = new $.ig.excel.FormattedString("");
                        xlRow.setCellValue(columnIndex, formattedString);

                        var currentLength = 0;

                        for (var i = 0; i < domCell.children.length; i++) {
                            var child = domCell.children[i];
                            var newText = $(child).text();

                            if (!newText.length) {
                                continue;
                            }

                            // Append the text from the current child onto 
                            // the FormattedString's raw text
                            formattedString.unformattedString(formattedString.unformattedString() + newText);

                            // Get the font applying to the newly appended 
                            // text and apply the current child's appearance 
                            // to the font
                            var font = formattedString.getFont(currentLength, newText.length);
                            exportFont(window.getComputedStyle(child), font);

                            currentLength += newText.length;
                        }
                    }
                    else {
                        // Otherwise, just write out the raw value
                        xlRow.setCellValue(columnIndex, cellValue);
                    }
                };

                function exportFormat(domElement, workbook, xlFormat) {

                    // Due to internal format sharing logic, each set of a format 
                    // property used by a row, column, or cell could be relatively 
                    // expensive, especially when setting multiple properties on 
                    // the formats of each cell in the entire grid. So instead, 
                    // create a temporary standalone format, initialize it with 
                    // the values from the target format, export to it, and then 
                    // copy the values as a block to the target.
                    var temp = workbook.createNewWorksheetCellFormat();
                    temp.setFormatting(xlFormat);
                    exportFormatCore(domElement, temp);
                    xlFormat.setFormatting(temp);
                };

                function exportFormatCore(domElement, xlFormat) {
                    var computedStyle = window.getComputedStyle(domElement);

                    switch (computedStyle.textAlign) {
                        case "left":
                        case "start":
                            xlFormat.alignment($.ig.excel.HorizontalCellAlignment.left);
                            break;
                        case "right":
                        case "end":
                            xlFormat.alignment($.ig.excel.HorizontalCellAlignment.right);
                            break;
                        case "center":
                            xlFormat.alignment($.ig.excel.HorizontalCellAlignment.center);
                            break;
                        case "justify":
                            xlFormat.alignment($.ig.excel.HorizontalCellAlignment.justify);
                            break;
                    }

                    switch (computedStyle.verticalAlign) {
                        case "top":
                        case "text-top":
                            xlFormat.verticalAlignment($.ig.excel.VerticalCellAlignment.top);
                            break;
                        case "middle":
                            xlFormat.verticalAlignment($.ig.excel.VerticalCellAlignment.center);
                            break;
                        case "bottom":
                        case "text-bottom":
                            xlFormat.verticalAlignment($.ig.excel.VerticalCellAlignment.bottom);
                            break;
                    }

                    exportBorderColor(computedStyle.borderBottomColor, xlFormat.bottomBorderColorInfo.bind(xlFormat));
                    exportBorderStyle(computedStyle.borderBottomStyle, xlFormat.bottomBorderStyle.bind(xlFormat));
                    exportBorderColor(computedStyle.borderLeftColor, xlFormat.leftBorderColorInfo.bind(xlFormat));
                    exportBorderStyle(computedStyle.borderLeftStyle, xlFormat.leftBorderStyle.bind(xlFormat));
                    exportBorderColor(computedStyle.borderRightColor, xlFormat.rightBorderColorInfo.bind(xlFormat));
                    exportBorderStyle(computedStyle.borderRightStyle, xlFormat.rightBorderStyle.bind(xlFormat));
                    exportBorderColor(computedStyle.borderTopColor, xlFormat.topBorderColorInfo.bind(xlFormat));
                    exportBorderStyle(computedStyle.borderTopStyle, xlFormat.topBorderStyle.bind(xlFormat));

                    if (!isTransparent(computedStyle.backgroundColor)) {
                        var fill = $.ig.excel.CellFill.createSolidFill(computedStyle.backgroundColor);
                        xlFormat.fill(fill);
                    }

                    exportFont(computedStyle, xlFormat.font());
                };

                function exportFont(computedStyle, xlFont) {
                    if (computedStyle.fontWeight === 'bold') {
                        xlFont.bold($.ig.excel.ExcelDefaultableBoolean.true);
                    }

                    xlFont.colorInfo(new $.ig.excel.WorkbookColorInfo(computedStyle.color));

                    switch (computedStyle.fontStyle) {
                        case "italic":
                        case "oblique":
                            xlFont.italic($.ig.excel.ExcelDefaultableBoolean.true);
                            break;
                    }

                    var fontFamily = computedStyle.fontFamily;
                    var commaIndex = fontFamily.indexOf(',');
                    if (0 <= commaIndex) {
                        fontFamily = fontFamily.substr(0, commaIndex);
                    }

                    fontFamily = fontFamily.trim();

                    if (fontFamily.length) {

                        if (fontFamily[0] === "'" && fontFamily[fontFamily.length - 1] === "'") {
                            fontFamily = fontFamily.slice(1, -1);
                        }

                        xlFont.name(fontFamily);
                    }

                    var textDecorationParts = computedStyle.textDecoration.split(' ');

                    switch (textDecorationParts[0]) {
                        case "line-through":
                            xlFont.strikeout($.ig.excel.ExcelDefaultableBoolean.true);
                            break;
                        case "underline":
                            xlFont.underlineStyle($.ig.excel.ExcelDefaultableBoolean.true);
                            break;
                    }

                    switch (computedStyle.verticalAlign) {
                        case "sub":
                            xlFont.superscriptSubscriptStyle($.ig.excel.FontSuperscriptSubscriptStyle.subscript);
                            break;
                        case "super":
                            xlFont.superscriptSubscriptStyle($.ig.excel.FontSuperscriptSubscriptStyle.superscript);
                            break;
                    }
                };

                function exportBorderColor(domBorderColor, xlBorderColorSetter) {
                    if (!isTransparent(domBorderColor)) {
                        xlBorderColorSetter(new $.ig.excel.WorkbookColorInfo(domBorderColor));
                    }
                };

                function exportBorderStyle(domBorderStyle, xlBorderStyleSetter) {
                    switch (domBorderStyle) {
                        case "none":
                        case "hidden":
                            xlBorderStyleSetter($.ig.excel.CellBorderLineStyle.none);
                            break;
                        case "dotted":
                            xlBorderStyleSetter($.ig.excel.CellBorderLineStyle.dotted);
                            break;
                        case "dashed":
                            xlBorderStyleSetter($.ig.excel.CellBorderLineStyle.dashed);
                            break;
                        case "solid":
                            xlBorderStyleSetter($.ig.excel.CellBorderLineStyle.thin);
                            break;
                        case "double":
                            xlBorderStyleSetter($.ig.excel.CellBorderLineStyle.double);
                            break;
                        case "groove":
                        case "ridge":
                        case "inset":
                        case "outset":
                            xlBorderStyleSetter($.ig.excel.CellBorderLineStyle.medium);
                            break;
                    }
                };

                function finalize() {
                    var argumentSeparator = (1.2).toLocaleString().charAt(1) === ',' ? ';' : ',';
                    var dataEndRowIndex = xlRowIndex - 1;

                    // Export all summary cells with their appropriate formulas
                    var summaries = $(gridId).igGridSummaries("summaryCollection");
                    for (var columnIndex = 0; columnIndex < columns.length; columnIndex++) {

                        var column = columns[columnIndex];
                        var summariesForColumn = summaries[column.key];

                        // To get the range string in the form of "A1:A45", we can construct a WorksheetRegion instance
                        // and then get its string representation in the A1 reference mode, without the sheet name, and
                        // with relative row and column identifiers. This is the range to which each summary in the
                        // current column will apply.
                        var columnReference =
                            new $.ig.excel.WorksheetRegion(worksheet, dataStartRowIndex, columnIndex, dataEndRowIndex, columnIndex)
                            .toString($.ig.excel.CellReferenceMode.a1, false, true, true);

                        // Export each summary cell applied to the current column
                        for (var summaryIndex = 0; summaryIndex < summariesForColumn.length; summaryIndex++) {
                            var summary = summariesForColumn[summaryIndex];

                            var summaryType;
                            var formatString;
                            switch (summary.type) {
                                case "avg":
                                    summaryType = 101;
                                    formatString = '"Avg = "0.00';
                                    break;
                                case "min":
                                    summaryType = 105;
                                    formatString = '"Min = "0.00';
                                    break;
                                case "max":
                                    summaryType = 104;
                                    formatString = '"Max = "0.00';
                                    break;
                                case "count":
                                    summaryType = 103;
                                    formatString = '"Count = "0.00';
                                    break;
                                case "sum":
                                    summaryType = 109;
                                    formatString = '"Sum = "0.00';
                                    break;
                            }

                            if (summaryType) {
                                var xlRow = worksheet.rows(xlRowIndex + summaryIndex);
                                xlRow.applyCellFormula(columnIndex, "=SUBTOTAL(" + summaryType + argumentSeparator + columnReference + ")");
                                xlRow.getCellFormat(columnIndex).formatString(formatString);
                            }
                        }
                    }

                    $status.text("Saving workbook...");

                    setTimeout(function () {
                        // Finally, save the workbook and create a link so the .xlsx document can be downloaded
                        workbook.save(function (err, data) {
                            if (err) {
                                $status.text("Error exporting: " + getErrorMessage(err));
                            }
                            else {
                                var blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                                saveAs(blob, "grid.xlsx");
                                $status.text("Export complete");
                            }
                        });
                    }, 1);
                };

                $status.text("Exporting to workbook...");

                $statusContainer.fadeIn('fast');

                // Create a workbook with a single worksheet
                var
                    workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007),
                    worksheet = workbook.worksheets().add('Sheet1'),
                    xlRowIndex = 0;

                exportAllCellsInHeader();

                // Freeze panes just below the last header row so they always remain in view
                worksheet.displayOptions().frozenPaneSettings().frozenRows(xlRowIndex);
                worksheet.displayOptions().panesAreFrozen(true);

                var
                    rows = $(gridId).igGrid("rows"),
                    columns = $(gridId).igGrid("option", "columns"),
                    dataStartRowIndex = xlRowIndex,
                    dataRowIndex = 0,
                    segmentSize = 16;

                $progress.attr('max', rows.length);

                exportDataSegment(segmentSize);
            });
        });
});