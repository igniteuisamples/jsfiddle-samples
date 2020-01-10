$(function() {
			var dataArr = new Array();
			var sparklineDestination = new Array();
			var dataAddress;
			var sparklineAddress;
			
            $("#hierarchicalGrid").igHierarchicalGrid({
			expandColWidth: 0,
                width: "100%",
                autoCommit: true,
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                responseDataKey: "results",
                dataSourceType: "json",
                autofitLastColumn: false,
                primaryKey: "ID",
                columns: [
					
					{ key: "UnboundOrders", unbound: true, dataType: "number", width: "0%", hidden: true },
					{ key: "Orders", width: "20%", headerText: "Freight Expenses", template: "<div data-id='${ID}' class='order-sparkline'></div>" }, 
					
                    { key: "ID", width: "20%", headerText: "Company ID", hidden: true },
                    { key: "CompanyName", width: "20%", headerText: "Company Name" },
                    { key: "ContactName", width: "20%", headerText: "Contact Name" },
                    { key: "ContactTitle", width: "20%", headerText: "Contact Title" }
                    
                ],
				rowExpanding: function (evt, ui) {
					return false;
				},				
				rowsRendered: function (evt, ui) {
						 //get data collection
						 var dataSource = ui.owner.dataSource;
						 $(".order-sparkline").each(function(i) {                    
							  $(this).igSparkline({
									dataSource: dataSource.findRecordByKey(
										 $(this).data("id")).Orders,
										 displayType: "column",
									height: "24px",
									width: "100%",
									valueMemberPath: 'Freight',
									brush: "#376092"
							  })
							  .css("background-color", "transparent");
						 });
                },
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        autoCommit: true,
                        autoGenerateColumns: false,
                        autofitLastColumn: false,
                        primaryKey: "OrderID",
                        width: "100%",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "10%", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "25%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "20%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "20%" }
                        ],
                    }
                ]
            });

            $("#exportButton").igButton({ labelText: "Export to Excel (.xlsx)" });

            $("#exportButton").on("igbuttonclick", function () {
              exportGrid(); 
            })
			
			function exportGrid()
			{
				 $.ig.GridExcelExporter.exportGrid($("#hierarchicalGrid"), {
				 columnsToSkip: ["Orders"],
					}, 
					{					
								exportEnding: function(sender, args) {									
									
									var sparkline1 = args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A2:A2", "Sheet1!B4:B9");
									var sparkline2 = args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A10:A10", "Sheet1!B12:B15");
									var sparkline3 = args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A10:A10", "Sheet1!B12:B15");
									var sparkline4 = args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A16:A16", "Sheet1!B18:B24");
									var sparkline5 = args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A25:A25", "Sheet1!B27:B39");
									var sparkline6 = args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A40:A40", "Sheet1!B42:B59");
									var sparkline7 = args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A60:A60", "Sheet1!B62:B68");					
									var sparkline8 = args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A69:A69", "Sheet1!B71:B81");
									var sparkline9 = args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A82:A82", "Sheet1!B84:B86");
									var sparkline10 =args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A87:A87", "Sheet1!B89:B105");
									var sparkline11 =args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A106:A106", "Sheet1!B108:B121");				
									var sparkline12 =args.worksheet.sparklineGroups().add($.ig.excel.SparklineType.column, "Sheet1!A122:A122", "Sheet1!B124:B133");
									
									sparkline1.displayHidden(true);
									sparkline2.displayHidden(true); 
									sparkline3.displayHidden(true); 
									sparkline4.displayHidden(true); 
									sparkline5.displayHidden(true); 
									sparkline6.displayHidden(true); 
									sparkline7.displayHidden(true); 
									sparkline8.displayHidden(true); 
									sparkline9.displayHidden(true); 
									sparkline10.displayHidden(true);
									sparkline11.displayHidden(true);
									sparkline12.displayHidden(true);
									
									args.worksheet.columns(0).width(5000);
									args.worksheet.rows(1).height(1000);
									args.worksheet.rows(9).height(1000);
									args.worksheet.rows(15).height(1000);
									args.worksheet.rows(24).height(1000);
									args.worksheet.rows(39).height(1000);
									args.worksheet.rows(59).height(1000);
									args.worksheet.rows(68).height(1000);
									args.worksheet.rows(81).height(1000);
									args.worksheet.rows(86).height(1000);
									args.worksheet.rows(105).height(1000);
									args.worksheet.rows(121).height(1000);
									return true;
								}								
					});
			}			
        });