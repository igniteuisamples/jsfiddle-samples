$(function () {

            $("#grid").igGrid({
                dataSource: nwCustomersWithOrders,
                autoGenerateColumns: false,
                height: "400px",
                rowsRendered: function (evt, ui) {
						 //get data collection
						 var dataSource = ui.owner.dataSource;
						 $(".order-sparkline").each(function(i) {                    
							  $(this).igSparkline({
									dataSource: dataSource.findRecordByKey(
										 $(this).data("id")).Orders,
									height: "24px",
									width: "100%",
									valueMemberPath: 'TotalPrice'
							  })
							  .css("background-color", "transparent");
						 });
                },
                primaryKey: "ID",
                columns: [
                    { key: "ID", hidden: true },
                    { key: "CompanyName", headerText: "会社名" },
                    { key: "ContactName", headerText: "名前" },
                    { key: "ContactTitle", headerText: "役職" },
                    { key: "Orders", headerText: "注文履歴", template: "<div data-id='${ID}' class='order-sparkline'></div>" }
                ]
            });

        });