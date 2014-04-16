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
                rowTemplate: "<tr><td></td><td>${CompanyName}</td><td>${ContactName}</td>" +
                    "<td>${ContactTitle}</td><td><div data-id='${ID}' class='order-sparkline'></div></td></tr>",
                columns: [
                    { key: "ID", hidden: true },
                    { key: "CompanyName", headerText: "Company" },
                    { key: "ContactName", headerText: "Contact" },
                    { key: "ContactTitle", headerText: "Contact Title" },
                    { key: "Orders", headerText: "Order History" }
                ]
            });

        });