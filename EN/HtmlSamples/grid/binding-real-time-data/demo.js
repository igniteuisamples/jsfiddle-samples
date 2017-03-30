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
						$("#startDataFeed").igButton({ labelText: 'Stop Data Feed' });
					}
					realTimeData.server.startFeed(updateTicks);
				} else {
					started = false;
					if (changeButton) {
					    $("#startDataFeed").igButton({ labelText: 'Start Data Feed' });
					}
					realTimeData.server.stopFeed();
				}
			};

			realTimeData.client.updateData = function (data) {
				//update random number of records

				$(data).each(function () {
					$("#grid").igGridUpdating("updateRow", this.ID, this);
					renderCharts(this.ID);
					//apply additional css to the updated record's Price and Change columns
					var row = $("#grid").igGrid("rowById", this.ID);
					if (this.Change < 0) {
						row.addClass("price-down").removeClass("price-down", 2000);
					} else {
						row.addClass("price-up").removeClass("price-up", 2000);
					}
				});
			};

			renderCharts = function (recID) {
				if (recID) {
					//render specific chart
					var rec = $("#grid").igGrid("findRecordByKey", recID);
					$("div.sparkline[data-id=" + recID + "]").igSparkline({
						dataSource: rec.ValueChangesList,
						height: "25px",
						width: "100%",
						valueMemberPath: 'Price'
					}).css("background-color", "transparent");
				} else { 
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
						{ headerText: "Company Name", key: "CompanyName", dataType: "string" },
						{ headerText: "Volume", key: "Volume", dataType: "string", columnCssClass: "rightAlign" },
						{ headerText: "Price", key: "Price", dataType: "number", format:"currency", template: "<td class='rightAlign'><span>${Price}</span></td>" },
						{
							headerText: "Change", key: "Change", dataType: "number", format: "number", template: $("#colTmpl").html()
						},
						{
							headerText: "Price Change", key: "PriceChange", unbound: true, template: "<div data-id='${ID}' class='sparkline'></div>"
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
								columnKey: "Change",
								customConditions: {
									Positive: {
									    labelText: "Positive",
										expressionText: "Positive",
										requireExpr: false,
										filterFunc: filterPositiveChangeItems
									},
									Negative: {
									    labelText: "Negative",
										expressionText: "Negative",
										requireExpr: false,
										filterFunc: filterNegativeChangeItems
									}
								}
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