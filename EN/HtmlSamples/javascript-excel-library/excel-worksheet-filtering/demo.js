$(function () {
function createWorkbook() {

			var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
            var sheet = workbook.worksheets().add('Sheet1'); 
			
            // Populate the table with data
            sheet.getCell('A2').value(3224);
            sheet.getCell('B2').value('Armin Barrywater');
            sheet.getCell('C2').value('In Review');
            sheet.getCell('D2').value('');

            sheet.getCell('A3').value(3244);
            sheet.getCell('B3').value('Georgi Angelchov');
            sheet.getCell('C3').value('New');
            sheet.getCell('D3').value('Underwriter is out until next week.');

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
			
			sheet.filterSettings().clearRegion();
			sheet.filterSettings().setRegion("C1:C15");			
			sheet.filterSettings().applyCustomFilter(0, new $.ig.excel.CustomFilterCondition($.ig.excel.ExcelComparisonOperator.equals, "New")); 
			
            //Save(workbook);  
			saveWorkbook(workbook, "Table.xlsx");				
            }

            function getRandomBetween(min, max){
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
		
			function saveWorkbook(workbook, name) {
            workbook.save({ type: 'blob' }, function (data) {
                saveAs(data, name);
            }, function (error) {
                alert('Error exporting: ' + error);
            });
        }
});