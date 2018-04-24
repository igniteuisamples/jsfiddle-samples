$(function () {
function createFormulasWorkbook() {

            var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
            var sheet = workbook.worksheets().add('Sheet1');

            var letters = ["A", "B", "C", "D", "E", "F", "G"]
            var headers = ["SKU", "Name", "Category", "Supplier", "Back Order", "Unit Price", "Units in Stock"]
            var skus = ["401043204-423", "534041202-345", "601041205-784", "51041204-426", "41041204-427", "31041204-428", "21041204-429", "41041204-430", "61022204-431", "11043204-432", "41041204-433", "21041204-434", "401043204-423", "31041204-436", "21041204-437"]
            var names = ["Guaraná Fantástica", "NuNuCa Nuß-Nougat-Creme", "Gumbär Gummibärchen", "Schoggi Schokolade", "Rössle Sauerkraut", "", "Nord-Ost Matjeshering", "Gorgonzola Telino", "Mascarpone Fabioli", "Geitost", "Sasquatch Ale", "", "Inlagd Sill", "Gravad lax"]
            var categories = ["Grains/Cereals", "Beverages", "Confections", "Confections", "Confections", "Produce", "Meat/Poultry", "Seafood", "Dairy Products", "Dairy Products", "Dairy Products", "Beverages", "Beverages", "Seafood", "Seafood"]
            var suppliers = ["PB Knäckebröd AB", "Refrescos Americanas LTDA", "Heli Süßwaren GmbH & Co. KG", "Heli Süßwaren GmbH & Co. KG", "Heli Süßwaren GmbH & Co. KG", "Plutzer Lebensmittelgroßmärkte AG", "Plutzer Lebensmittelgroßmärkte AG", "Nord-Ost-Fisch Handelsgesellschaft mbH", "Formaggi Fortini s.r.l.", "Formaggi Fortini s.r.l.", "Norske Meierier", "Bigfoot Breweries", "Bigfoot Breweries", "Svensk Sjöföda AB", "Svensk Sjöföda AB"]

            for (var i = 0; i < letters.length; i++) {
                for (var j = 1; j < skus.length + 1; j++) {
                    var str = letters[i] + (j).toString();
                    var cell = sheet.getCell(str);
                    if (j == 1) {
                        sheet.columns(i).width(6000);
                        cell.value(headers[i]);
                    }
                    else {
                        if (i == 0) {
                            cell.value(skus[j - 2]);
                        }
                        else if (i == 1) {
                            cell.value(names[j - 2]);
                        }
                        else if (i == 2) {
                            cell.value(categories[j - 2]);
                        }
                        else if (i == 3) {
                            cell.value(suppliers[j - 2]);
                        }
                        else if (i == 4) {
                            var x = getRandomBetween(1, 2);
                            if (x == 1) {
                                cell.value(true);
                            }
                            else {
                                cell.value("");
                            }
                        }
                        else if (i == 5) {
                            var x = getRandomBetween(1, 100);
                            cell.value(x);
                        }
                        else if (i == 6) {
                            var x = getRandomBetween(1, 100);
                            cell.value(x);
                        }
                    }
                }
            }

            var duplicateCondition = sheet.conditionalFormats().addDuplicateCondition("A2:A15");
            duplicateCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("red"));

            var blanksCondition = sheet.conditionalFormats().addBlanksCondition("B2:B15");
            blanksCondition.cellFormat().fill($.ig.excel.CellFill.createSolidFill("gray"));

            var textCondition = sheet.conditionalFormats().addTextCondition("C2:C15", "Bev");
            textCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("blue"));

            var uniqueCondition = sheet.conditionalFormats().addUniqueCondition("D2:D15");
            uniqueCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("orange"));

            var notBlankCondition = sheet.conditionalFormats().addNoBlanksCondition("E2:E15");
            notBlankCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("green"));

            sheet.conditionalFormats().addDataBarCondition("F2:F15");

            var avgCondition = sheet.conditionalFormats().addAverageCondition("G2:G15");
            avgCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("red"));

            saveWorkbook(workbook, "Formulas.xlsx");
        }

        function saveWorkbook(workbook, name) {
            workbook.save({ type: 'blob' }, function (data) {
                saveAs(data, name);
            }, function (error) {
                alert('Error exporting: : ' + error);
            });
        }

        function getRandomBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
});