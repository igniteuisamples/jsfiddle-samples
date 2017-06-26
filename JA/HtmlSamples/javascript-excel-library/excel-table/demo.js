$(function () {
function createTableWorkbook() {
            var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
            var sheet = workbook.worksheets().add('Sheet1');
            sheet.columns(0).setWidth(72, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(1).setWidth(160, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(2).setWidth(110, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(3).setWidth(275, $.ig.excel.WorksheetColumnWidthUnit.pixel);

            // Create a to-do list table with columns for tasks and their priorities.
            sheet.getCell('A1').value('ID');
            sheet.getCell('B1').value('応募者');
            sheet.getCell('C1').value('状態');
            sheet.getCell('D1').value('コメント');
            var table = sheet.tables().add('A1:D8', true);

            // Specify the style to use in the table (this can also be specified as an optional 3rd argument to the 'add' call above).
            table.style(workbook.standardTableStyles('TableStyleMedium2'))

            // Populate the table with data
            sheet.getCell('A2').value(3223);
            sheet.getCell('B2').value('ジャック バナー');
            sheet.getCell('C2').value('承認');
            sheet.getCell('D2').value('');

            sheet.getCell('A3').value(3224);
            sheet.getCell('B3').value('アーミン バリウォーター');
            sheet.getCell('C3').value('レビュー');
            sheet.getCell('D3').value('保険業者が来週まで不在');

            sheet.getCell('A4').value(3225);
            sheet.getCell('B4').value('シエラ ドナヒュー');
            sheet.getCell('C4').value('レビュー');
            sheet.getCell('D4').value('');

            sheet.getCell('A5').value(3226);
            sheet.getCell('B5').value('ペリー ケイン');
            sheet.getCell('C5').value('保留中');
            sheet.getCell('D5').value('顧客からの書類待ち');

            sheet.getCell('A6').value(3235);
            sheet.getCell('B6').value('ハビエア ファネロー');
            sheet.getCell('C6').value('新規');
            sheet.getCell('D6').value('');

            sheet.getCell('A7').value(3244);
            sheet.getCell('B7').value('ジョージ アンゲルチョブ');
            sheet.getCell('C7').value('新規');
            sheet.getCell('D7').value('');

            sheet.getCell('A8').value(3257);
            sheet.getCell('B8').value('イメルダ サンチェズ');
            sheet.getCell('C8').value('新規');
            sheet.getCell('D8').value('');

            // Sort the table by the Applicant column
            table.columns('応募者').sortCondition(new $.ig.excel.OrderedSortCondition());

            // Filter out the Approved applicants
            table.columns('状態').applyCustomFilter(new $.ig.excel.CustomFilterCondition($.ig.excel.ExcelComparisonOperator.notEqual, '承認'));

            // Save the workbook
            saveWorkbook(workbook, "Table.xlsx");
        }

        function saveWorkbook(workbook, name) {
            workbook.save({ type: 'blob' }, function (data) {
                saveAs(data, name);
            }, function (error) {
                alert('エクスポート エラー: : ' + error);
            });
        }
});