$(function () {
var data = [4, 5, 2, 7, -1, 3, 0, 5, 2, 6]

        $(function () {

		
            $("#lineSparkline").igSparkline({
                dataSource: data,
                displayType: "line",
                height: "100px",
                width: "100%", 
				brush: "#376092",				
            });

            $("#columnSparkline").igSparkline({
                dataSource: data,
                displayType: "column",
                height: "100px",
                width: "100%",  
				brush: "#376092",				
            });
			
        });
		
		function createWorkbook() {

            var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
            var sheet1 = workbook.worksheets().add('Sparklines');
			var sheet2 = workbook.worksheets().add('Data');
			sheet1.columns(0).width(10000);							
			sheet1.rows(0).height(3000);
			sheet1.rows(1).height(3000);
            var letters = ["A"]
            var headers = ["Data"]
            
           
            for (var i = 0; i < letters.length; i++) {
                for (var j = 1; j < data.length + 2; j++) {
                    var str = letters[i] + (j).toString();
                    var cell = sheet2.getCell(str);
                    if (j == 1) {
                        
                        cell.value(headers[i]);
                    }
                    else {
                        if (i == 0) {
                            cell.value(data[j - 2]);
                        }
                        
                    }
                }
            }			
			
			sheet1.sparklineGroups().add($.ig.excel.SparklineType.line, "Sparklines!A1:A1", "Data!A2:A11"); 
			sheet1.sparklineGroups().add($.ig.excel.SparklineType.column, "Sparklines!A2:A2", "Data!A2:A11"); 
			
			saveWorkbook(workbook, "Sparklines.xlsx");			
		}
				
		function saveWorkbook(workbook, name) {
            workbook.save({ type: 'blob' }, function (data) {
                saveAs(data, name);
            }, function (error) {
                alert('Error exporting: : ' + error);
            });
        }
});