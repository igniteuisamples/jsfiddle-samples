$(function () {

				//igScroll initialization
				$("#scrollableContent").igScroll({
					bigIncrementStep: 100
				});


				generateTableContent(100, 5);


				$("#rowNumSlider").slider({
					change: function (event, ui) {
						$("#rowNum").text(ui.value);
						generateTableContent(ui.value, $("#colNumSlider").slider("value"));
					},
					min: 25,
					max: 600,
					value: 100,
					step: 25
				});

				$("#colNumSlider").slider({
					change: function (event, ui) {
						$("#colNum").text(ui.value);
						generateTableContent($("#rowNumSlider").slider("value"), ui.value);
					},
					min: 1,
					max: 10,
					value: 5,
					step: 1
				})

				$("#alwaysVisible").change(function () {
					$("#scrollableContent").igScroll("option", "alwaysVisible", $(this).is(':checked'));
				});

				$("#scrollbarType").change(function () {
					$("#scrollableContent").igScroll("option", "scrollbarType", $(this).val());
				});

				$("#smoothingDuration").slider({
					change: function (event, ui) {
						$(this).parent().find("label.currVal").text(ui.value);
						$("#scrollableContent").igScroll("option", "smoothingDuration", ui.value);
					},
					min: 1,
					max: 5,
					value: 1,
					step: 1
				});

				$("#smoothingStep").slider({
					change: function (event, ui) {
						$(this).parent().find("label.currVal").text(ui.value);
						$("#scrollableContent").igScroll("option", "smoothingStep", ui.value);
					},
					min: 1,
					max: 5,
					value: 1,
					step: 1
				});

				$("#wheelStep").slider({
					change: function (event, ui) {
						$(this).parent().find("label.currVal").text(ui.value);
						$("#scrollableContent").igScroll("option", "wheelStep", ui.value);
					},
					min: 50,
					max: 500,
					value: 50,
					step: 50
				});

				$("#inertiaDuration").slider({
					change: function (event, ui) {
						$(this).parent().find("label.currVal").text(ui.value);
						$("#scrollableContent").igScroll("option", "inertiaDuration", ui.value);
					},
					min: 0,
					max: 5,
					value: 1,
					step: 1
				});

				$("#inertiaStep").slider({
					change: function (event, ui) {
						$(this).parent().find("label.currVal").text(ui.value);
						$("#scrollableContent").igScroll("option", "inertiaStep", ui.value);
					},
					min: 0,
					max: 5,
					value: 1,
					step: 1
				});

				$("#smallIncrementStep").slider({
					change: function (event, ui) {
						$(this).parent().find("label.currVal").text(ui.value);
						$("#scrollableContent").igScroll("option", "smallIncrementStep", ui.value);
					},
					min: 25,
					max: 500,
					value: 25,
					step: 25
				});

				$("#bigIncrementStep").slider({
					change: function (event, ui) {
						$(this).parent().find("label.currVal").text(ui.value);
						$("#scrollableContent").igScroll("option", "bigIncrementStep", ui.value);
					},
					min: 100,
					max: 1000,
					value: 100,
					step: 100
				});

				$("#smoothing").change(function () {
					$("#scrollableContent").igScroll("option", "smoothing", $(this).is(':checked'));

					if (!$(this).is(':checked')) {
						$("#smoothingDuration").parent().hide();
						$("#smoothingStep").parent().hide();
					} else {
						$("#smoothingDuration").parent().show();
						$("#smoothingStep").parent().show();
					}
				});

				$("#scrTopApply").igButton();
				$("#scrLeftApply").igButton();

				$("#scrTopApply").click(function () {
					$("#scrollableContent").igScroll("option", "scrollTop", parseInt($("#scrollTop").val()));
				});

				$("#scrLeftApply").click(function () {
					$("#scrollableContent").igScroll("option", "scrollLeft", parseInt($("#scrollLeft").val()));
				});

				$("#swipeToleranceX").slider({
					change: function (event, ui) {
						$(this).parent().find("label.currVal").text(ui.value);
						$("#scrollableContent").igScroll("option", "swipeToleranceX", ui.value);
					},
					min: 0,
					max: 180,
					value: 30,
					step: 30
				});

				//helper functions
				function generateTableContent(rowCount, colCount) {
					var allCols = ["Count", "FirstName", "LastName", "Country", "Age", "RegistererDate", "IsActive", "EmployeeID", "Col1", "Col2"]
					var data = employees.slice(0, rowCount);

					$("#table-main > tbody").empty();
					var content = "";
					for (var i = 0; i < data.length; i++) {
						var rec = data[i];
						content += "<tr>"
						for (var j = 0; j < colCount; j++) {
							var col = allCols[j];
							if (col === "Count") {
								content += "<td>" + i + "</td>";
							} else {
								var text = rec[col] !== undefined ? rec[col] : "";
								content += "<td>" + text + "</td>";
							}
						}
						content += "</tr>"
						//content += "<tr> <td>" + i + "</td> <td>" + data[i].FirstName + "</td> <td>" + data[i].LastName +
						//	"</td> <td>" + data[i].Country + "</td> <td>" + data[i].Age + "</td> <td>" + data[i].RegistererDate + "</td> <td>" + data[i].IsActive + "</td></tr>"
					}

					$("#table-main > thead").empty();
					$("#table-main > colgroup").empty();
					var headers = "<tr>";
					var colGroups = "";
					for (var i = 0; i < colCount; i++) {
						headers += "<th style='width:200px;'>" + allCols[i] + "</th>";
						colGroups += "<col style='width:200px;'>"
					}
					headers += "</tr>"

					$("#table-main > colgroup").html(colGroups);
					$("#table-main > thead").html(headers);
					$("#table-main > tbody").html(content);


					$("#scrollableContent").igScroll("option", "scrollHeight", $("#table-main").height());
					$("#scrollableContent").igScroll("option", "scrollWidth", $("#table-main").width());
				}
			});