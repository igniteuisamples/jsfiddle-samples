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
            sheet.getCell('B1').value('Applicant');
            sheet.getCell('C1').value('Status');
            sheet.getCell('D1').value('Comment');

			//var table = sheet.tables().add('A1:D8', true);

            // Specify the style to use in the table (this can also be specified as an optional 3rd argument to the 'add' call above).
           // table.style(workbook.standardTableStyles('TableStyleMedium2'))

            // Populate the table with data
             sheet.getCell('A2').value(3224);
            sheet.getCell('B2').value('Armin Barrywater');
            sheet.getCell('C2').value('In Review');
            sheet.getCell('D2').value('Underwriter is out until next week.');

            sheet.getCell('A3').value(3244);
            sheet.getCell('B3').value('Georgi Angelchov');
            sheet.getCell('C3').value('New');
            sheet.getCell('D3').value('');

            sheet.getCell('A4').value(3257);
            sheet.getCell('B4').value('Imelda Sanchez');
            sheet.getCell('C4').value('New');
            sheet.getCell('D4').value('');

            sheet.getCell('A5').value(3226);
            sheet.getCell('B5').value('Perry Kane');
            sheet.getCell('C5').value('On Hold');
            sheet.getCell('D5').value('Waiting on paperwork from customer.');

            sheet.getCell('A6').value(3225);
            sheet.getCell('B6').value('Shiela Donahue');
            sheet.getCell('C6').value('In Review');
            sheet.getCell('D6').value('');

            sheet.getCell('A7').value(3235);
            sheet.getCell('B7').value('Xavier Fannello');
            sheet.getCell('C7').value('New');
            sheet.getCell('D7').value('');

			// Sort the worksheet object

			sheet.sortSettings().sortType($.ig.excel.WorksheetSortType.rows);
			sheet.sortSettings().caseSensitive(true);
			sheet.sortSettings().setRegion("A2:D7");
			sheet.sortSettings().sortConditions().add(new $.ig.excel.RelativeIndex(1), new $.ig.excel.OrderedSortCondition($.ig.excel.SortDirection.descending));
		  // Save the workbook
            saveWorkbook(workbook, "Table.xlsx");
        }

        function saveWorkbook(workbook, name) {
            workbook.save({ type: 'blob' }, function (data) {
                saveAs(data, name);
            }, function (error) {
                alert('Error exporting: ' + error);
            });
        }
});