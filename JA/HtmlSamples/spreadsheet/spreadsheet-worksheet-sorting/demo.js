$(function () {
            
        //Initializing igSpreadsheet
            $("#spreadsheet").igSpreadsheet({
                height: "600",
                width: "100%",
            });

        });

        //display the workbook via igSpreadsheet
        function loadWorkbook(workbook) {
            $("#spreadsheet").igSpreadsheet("option", "workbook", workbook);
        }


        function createWorkbook() {
            var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
            var sheet = workbook.worksheets().add('Sheet1');

            sheet.columns(0).setWidth(72, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(1).setWidth(160, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(2).setWidth(110, $.ig.excel.WorksheetColumnWidthUnit.pixel);
            sheet.columns(3).setWidth(275, $.ig.excel.WorksheetColumnWidthUnit.pixel);

            sheet.rows(0).cellFormat().font().bold(true);

            // Populate the sheet with data

            sheet.getCell('A1').value('ID');
            sheet.getCell('B1').value('Applicant');
            sheet.getCell('C1').value('Status');
            sheet.getCell('D1').value('Comment');

            // Populate the table with data
            sheet.getCell('A2').value(3224);
            sheet.getCell('B2').value('Armin Barrywater');
            sheet.getCell('C2').value('Approved');
            sheet.getCell('D2').value('');

            sheet.getCell('A3').value(3244);
            sheet.getCell('B3').value('Georgi Angelchov');
            sheet.getCell('C3').value('In Review');
            sheet.getCell('D3').value('Underwriter is out until next week.');

            sheet.getCell('A4').value(3257);
            sheet.getCell('B4').value('Imelda Sanchez');
            sheet.getCell('C4').value('In Review');
            sheet.getCell('D4').value('');

            sheet.getCell('A5').value(3226);
            sheet.getCell('B5').value('Perry Kane');
            sheet.getCell('C5').value('On Hold');
            sheet.getCell('D5').value('Waiting on paperwork from customer.');

            sheet.getCell('A6').value(3225);
            sheet.getCell('B6').value('Shiela Donahue');
            sheet.getCell('C6').value('New');
            sheet.getCell('D6').value('');

            sheet.getCell('A7').value(3235);
            sheet.getCell('B7').value('Xavier Fannello');
            sheet.getCell('C7').value('New');
            sheet.getCell('D7').value('');

            // Load the workbook in igSpreadsheet
            loadWorkbook(workbook);
        }
        
        var sortDirection = $.ig.excel.SortDirection.descending

        function sortWorksheet() {

            var workbook = $("#spreadsheet").igSpreadsheet("option", "workbook");
            var sheet = workbook.worksheets(0);

            sheet.sortSettings().sortType($.ig.excel.WorksheetSortType.rows);
            sheet.sortSettings().caseSensitive(true);

            sheet.sortSettings().setRegion("A2:D7");
            sheet.sortSettings().sortConditions().clear();
            sheet.sortSettings().sortConditions().add(new $.ig.excel.RelativeIndex(1), new $.ig.excel.OrderedSortCondition(sortDirection));

            if (sortDirection == $.ig.excel.SortDirection.descending)
                sortDirection = $.ig.excel.SortDirection.ascending;
            else
                sortDirection = $.ig.excel.SortDirection.descending;
        }