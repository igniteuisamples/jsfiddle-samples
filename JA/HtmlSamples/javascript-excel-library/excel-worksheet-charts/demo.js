$(function () {
var alphabet = "A;B;C;D;E;F;G;H;I;J;K;L;M;N;O;P;Q;R;S;T;U;V;W;X;Y;Z".split(";");
        var headers = "Expenses;Feb;Feb;Mar;Apr;May;Jun;Jul;Aug;Sep;Oct;Nov;Dec".split(";");
        var months = "Jan;Feb;Mar;Apr;May;Jun;Jul;Aug;Sep;Oct;Nov;Dec".split(';');

        var data = getGridData();
        var chartData = getChartData(data, months);

        $(function(){
            $("#chart").igCategoryChart({
                width: "800px",
                height: "400px",
                dataSource: chartData,
                yAxisMinimumValue: 0
            });

            $("#grid").igGrid({
                dataSource: data,
                width: "800px",
                height: "300px"
            });
        });

        function createWorkbook() {

            var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
            var sheet = workbook.worksheets().add("Sheet1");
            sheet.defaultColumnWidth(200 * 20);
    
            for (var i = 0; i < headers.length; i++) {
                var cell = sheet.getCell(alphabet[i] + "3");
                cell.value(headers[i]);
            }

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < 13; j++) {

                    var stringAddress = alphabet[j] + (i + 4).toString();
                    var cell = sheet.getCell(stringAddress);

                    switch (j) {
                        case 0: {
                            cell.value(data[i].Expenses);
                            break;
                        }
                        case 1: {
                            cell.value(data[i].Feb);
                            break;
                        }
                        case 2: {
                            cell.value(data[i].Feb);
                            break;
                        }
                        case 3: {
                            cell.value(data[i].Mar);
                            break;
                        }
                        case 4: {
                            cell.value(data[i].Apr);
                            break;
                        }
                        case 5: {
                            cell.value(data[i].May);
                            break;
                        }
                        case 6: {
                            cell.value(data[i].Jun);
                            break;
                        }
                        case 7: {
                            cell.value(data[i].Jul);
                            break;
                        }
                        case 8: {
                            cell.value(data[i].Aug);
                            break;
                        }
                        case 9: {
                            cell.value(data[i].Sep);
                            break;
                        }
                        case 10: {
                            cell.value(data[i].Oct);
                            break;
                        }
                        case 11: {
                            cell.value(data[i].Nov);
                            break;
                        }
                        case 12: {
                            cell.value(data[i].Dec);
                            break;
                        }
                    }
                }
            }

            sheet.rows(0).height(5000);

            var cell1 = sheet.getCell('A1');
            var cell2 = sheet.getCell('M1');

            var chart = sheet.shapes().addChart($ig.excel.ChartType.columnClustered, cell1, { x: 0, y: 0 }, cell2, { x: 100, y: 100 });
            chart.setSourceData('Sheet1!B3:M8', true);

            saveWorkbook(workbook, "Table.xlsx");
        }

        function getRandomBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function saveWorkbook(workbook, name) {
            workbook.save({ type: 'blob' }, function (data) {
                saveAs(data, name);
            }, function (error) {
                alert('エクスポート エラー: ' + error);
            });
        }
});