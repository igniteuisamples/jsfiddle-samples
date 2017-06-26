$(function () {
function createFormulasWorkbook() {

            var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
            var sheet = workbook.worksheets().add('Sheet1');
            sheet.columns(0).setWidth(180, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(1).setWidth(116, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(2).setWidth(124, $.ig.excel.WorksheetColumnWidthUnit.pixel);

            // Create some rows and columns of data
            sheet.getCell('A1').value('プロジェクト/クライアント');
            sheet.getCell('B1').value('状態');
            sheet.getCell('C1').value('予想期間 (月)');

            sheet.getCell('A2').value('インフラジスティックス銀行');
            sheet.getCell('B2').value('処理中');
            sheet.getCell('C2').value(7);

            sheet.getCell('A3').value('アルバリス社');
            sheet.getCell('B3').value('交渉');
            sheet.getCell('C3').value(3);

            sheet.getCell('A4').value('パナモラミック スタジオ');
            sheet.getCell('B4').value('交渉');
            sheet.getCell('C4').value(15);

            sheet.getCell('A5').value('Werkz.me');
            sheet.getCell('B5').value('変更要求');
            sheet.getCell('C5').value(24);

            // Add a formula to average one fo the columns of data
            sheet.getCell('C6').applyFormula('=AVERAGE(C2:C5)');

            // Alternatively, the formula can be parsed and applied manually, like so:
            //var formula = $.ig.excel.Formula.parse('=AVERAGE(C2:C5)', $.ig.excel.CellReferenceMode.a1);
            //formula.applyTo(sheet.getCell('C6'));

            // Save the workbook
            saveWorkbook(workbook, "Formulas.xlsx");
        }

        function saveWorkbook(workbook, name) {
            workbook.save({ type: 'blob' }, function (data) {
                saveAs(data, name);
            }, function (error) {
                alert('エクスポート エラー: : ' + error);
            });
        }
});