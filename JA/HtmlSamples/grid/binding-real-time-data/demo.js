$(function () {
			var refreshCount = 0, intervalId = 0, doUpdate = null,
				toggleFeed = null, started = false;

			var realTimeData = $.connection.realTimeData;

			$.connection.hub.start().done(function () {
				$("#startDataFeed").click(function () {
					toggleFeed(true);
				});
				realTimeData.server.initData();
				toggleFeed(true);
			});

			$("#startDataFeed").igButton({ height:"100%", width:"100%", labelText: $("#startDataFeed").val() });
		
			$("#intervalSlider").slider({
				slide: function (event, ui) {
					$("#intervalText").text(ui.value.toString());
				},
				change: function( event, ui ) {
					realTimeData.server.stopFeed();
					setTimeout(function () {
					    //If the Data Feed was running before moving the slider this means that the button is saying "Stop Data Feed". We initiate the feed but do not change the button.
					    //Otherwise the startDataFeed button needs to be pressed after moving the slider to start feeding data.
					    if (started) {
                            //We set the started to false here since we stopped it above but wanted to check if the button is active.
					        started = false;
					        toggleFeed(false);
					    }
					}, 100);
				},
				min: 500,
				max: 3000,
				value: 1500,
				step: 500
			});

			toggleFeed = function (changeButton) {
				var updateTicks = parseInt($("#intervalText").text());
				if (!started) {
					started = true;
					if (changeButton) {
						$("#startDataFeed").igButton({ labelText: 'データ フィードの停止' });
					}
					realTimeData.server.startFeed(updateTicks);
				} else {
					started = false;
					if (changeButton) {
					    $("#startDataFeed").igButton({ labelText: 'データ フィードの開始' });
					}
					realTimeData.server.stopFeed();
				}
			};

			realTimeData.client.updateData = function (data) {
				//update random number of records

				$(data).each(function () {
					var grid = $("#grid"), cell = grid.igGrid("cellById", this.ID, "PriceChange"), chart;

					chart = cell.find("div.sparkline").detach();
					grid.igGridUpdating("updateRow", this.ID, this);

					//clear transactions
					var transactions = grid.igGrid("allTransactions");
					transactions.pop();

					cell.empty();
					cell.append(chart);

					chart.igSparkline("removeItem", 0);
					chart.igSparkline("addItem", this.ValueChangesList[this.ValueChangesList.length - 1]);

					//apply additional css to the updated record's Price and Change columns
					var row = grid.igGrid("rowById", this.ID);
					if (this.Change < 0) {
						row.addClass("price-down").removeClass("price-down", 2000);
					} else {
						row.addClass("price-up").removeClass("price-up", 2000);
					}
				});
			};

			renderCharts = function (recID) {
				//render all
				$(".sparkline").each(function (i) {
					var id = $(this).attr("data-id");
					var rec = $("#grid").igGrid("findRecordByKey", id);
					$(this).igSparkline({
						dataSource: rec.ValueChangesList,
						height: "25px",
						width: "100%",
						valueMemberPath: 'Price'
					})
					.css("background-color", "transparent");
				});
			}
			formatNumericColumn = function (val) {
				if (!val) {
					return "--";
				}
				return (val/1000000).toFixed(2) + "M";

			};
			formatCurrency = function (val) {
				return $.ig.formatter(val.toFixed(2), "number","currency");
			}
			realTimeData.client.initGrid = function (stockData) {
				$("#grid").igGrid({
					dataSource: stockData,
					localSchemaTransform : false,
					autoCommit: true,
					width: "100%",
					height: 80/100*$(window).height(),
					primaryKey: "ID",
					columns: [
						{ headerText: "ID", key: "ID", dataType: "string", hidden: true },
						{ headerText: "会社名", key: "CompanyName", dataType: "string", width: "*" },
						{ headerText: "ボリューム", key: "Volume", dataType: "number", columnCssClass: "rightAlign", headerCssClass: "rightAlign", formatter: formatNumericColumn, width: "150px"  },
						{ headerText: "価格", key: "Price", dataType: "number", template: "<td class='rightAlign'><span>${Price}</span></td>", headerCssClass: "rightAlign", formatter: formatCurrency, width: "100px" },
						{
							headerText: "変更", key: "Change", dataType: "number", headerCssClass: "rightAlign", format: "0.00", template: $("#colTmpl").html(), width: "100px" 
						},
						{
							headerText: "価格の変更", key: "PriceChange", unbound: true, template: "<div data-id='${ID}' class='sparkline'></div>", headerCssClass: "rightAlign"
						}
					],
					rowsRendered: function (evt, ui) {
						renderCharts();
					},
					features: [
						{
							name: "Updating",
							editMode: "none",
							enableAddRow: false,
							enableDeleteRow: false
						}, {
							name: "Filtering",
							columnSettings: [{
								columnKey: "Volume",
								condition: "greaterThan",
								conditionList:["greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo"]
							},{
								columnKey: "Change",
								condition: "greaterThan",
								conditionList:["greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo" ,"Positive", "Negative"],
								customConditions: {
									Positive: {
									    labelText: "正数",
										expressionText: "Positive",
										requireExpr: false,
										filterFunc: filterPositiveChangeItems,
										filterImgIcon: "ui-icon-plus"
									},
									Negative: {
									    labelText: "負数",
										expressionText: "Negative",
										requireExpr: false,
										filterFunc: filterNegativeChangeItems,
										filterImgIcon: "ui-icon-minus"
									}
								}
							}, {
								columnKey: "PriceChange",
								allowFiltering: false
							}, {
								columnKey: "Price",
								condition: "greaterThan",
								conditionList:["greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo"],
							}]
						}]
				});
			};
			function filterPositiveChangeItems(value, expression, dataType, ignoreCase, preciseDateFormat) {
				return value > 0;
			}
			function filterNegativeChangeItems(value, expression, dataType, ignoreCase, preciseDateFormat) {
				return value < 0;
			}
		});