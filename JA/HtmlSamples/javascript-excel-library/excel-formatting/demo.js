$(function () {
function createFormattingWorkbook() {

            var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
            var sheet = workbook.worksheets().add('Sheet1');
            sheet.columns(0).setWidth(96, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(4).setWidth(80, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(6).setWidth(96, $.ig.excel.WorksheetColumnWidthUnit.pixel);

            // Add merged regions for regions A1:D2 and E1:G2
            var mergedCellA1D2 = sheet.mergedCellsRegions().add(0, 0, 1, 3);
            var mergedCellE1G2 = sheet.mergedCellsRegions().add(0, 4, 1, 6);

            // Add two large headers in merged cells above the data
            mergedCellA1D2.value('アクミ会社');
            mergedCellA1D2.cellFormat().alignment($.ig.excel.HorizontalCellAlignment.center);
            mergedCellA1D2.cellFormat().fill($.ig.excel.CellFill.createSolidFill('#ED7D31'));
            mergedCellA1D2.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo($.ig.excel.WorkbookThemeColorType.light1));
            mergedCellA1D2.cellFormat().font().height(16 * 20);

            mergedCellE1G2.value('請求書 #32039');
            mergedCellE1G2.cellFormat().alignment($.ig.excel.HorizontalCellAlignment.center);
            mergedCellE1G2.cellFormat().fill($.ig.excel.CellFill.createSolidFill('#FFC000'));
            mergedCellE1G2.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo($.ig.excel.WorkbookThemeColorType.light1));
            mergedCellE1G2.cellFormat().font().height(16 * 20);

            // Format some rows and columns that should have similar formatting so we don't have to set it on individual cells.
            sheet.rows(2).cellFormat().font().bold(true);
            sheet.columns(4).cellFormat().formatString('$#,##0.00_);[Red]($#,##0.00)');
            sheet.columns(6).cellFormat().formatString('$#,##0.00_);[Red]($#,##0.00)');

            // Add a light color fill to all cells in the A3:G17 region to visually separate it from the rest of the sheet. We can iterate
            // all cells in the regions by getting an enumerator for the region and enumerating each item.
            var light1Fill = $.ig.excel.CellFill.createSolidFill(new $.ig.excel.WorkbookColorInfo($.ig.excel.WorkbookThemeColorType.light1));
            var cells = sheet.getRegion('A3:G17').getEnumerator();
            while (cells.moveNext()) {
                cells.current().cellFormat().fill(light1Fill);
            }

            // Populate the sheet with data
            sheet.getCell('A3').value('日付');
            sheet.getCell('B3').value('説明');
            sheet.getCell('D3').value('数量');
            sheet.getCell('E3').value('原価/出荷単位');
            sheet.getCell('G3').value('合計');

            sheet.getCell('A4').value(new Date('12/22/2014'));
            sheet.getCell('B4').value('ガレージ ドア');
            sheet.getCell('D4').value(1);
            sheet.getCell('E4').value(1875);
            sheet.getCell('G4').applyFormula('=D4*E4');

            sheet.getCell('A5').value(new Date('12/22/2014'));
            sheet.getCell('B5').value('トリム');
            sheet.getCell('D5').value(3);
            sheet.getCell('E5').value(27.95);
            sheet.getCell('G5').applyFormula('=D5*E5');

            sheet.getCell('A6').value(new Date('12/22/2014'));
            sheet.getCell('B6').value('インストール/就労');
            sheet.getCell('D6').value(8);
            sheet.getCell('E6').value(85);
            sheet.getCell('G6').applyFormula('=D6*E6');

            // Add a grand total which is bold and larger than the rest of the text to call attention to it.
            sheet.getCell('E17').value('合計');
            sheet.getCell('E17').cellFormat().font().height(14 * 20);
            sheet.getCell('E17').cellFormat().font().bold(true);

            sheet.getCell('G17').applyFormula('=SUM(G4:G16)');
            sheet.getCell('G17').cellFormat().font().height(14 * 20);
            sheet.getCell('G17').cellFormat().font().bold(true);

            // Save the workbook
            saveWorkbook(workbook, "Formatting.xlsx");
        }

        function saveWorkbook(workbook, name) {
            workbook.save({ type: 'blob' }, function (data) {
                saveAs(data, name);
            }, function (error) {
                alert('エクスポート エラー: : ' + error);
            });
        }
});