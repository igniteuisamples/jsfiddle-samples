$(function () {
				var pasteMode = "Paste data as new records", updates;
				var grid = $("#grid");

				//editors and buttons
				$("#pasteMode").igCombo({
					mode: "dropdown",
					width: "300px",
					dataSource: [
						 "Paste data as new records",
						 "Paste starting from active cell"
					],
					selectionChanged: function (evt, ui) {
						if (ui.items.length == 1) {
							pasteMode = ui.items[0].data.value;
						}
					}
				});

				$("#saveChanges").igButton({ labelText: $("#saveChanges").val(), disabled: true });
				$("#undo").igButton({ labelText: $("#undo").val(), disabled: true });
				$("#redo").igButton({ labelText: $("#redo").val(), disabled: true });

				$("#undo").on('igbuttonclick',
					function (e, args) {
						updates = $.extend({}, grid.data('igGrid').pendingTransactions());
						$.each(updates, function (index, transaction) {
							grid.igGrid("rollback", transaction.rowId, true);
						});
						$("#redo").igButton("option", "disabled", false);
						$("#undo").igButton("disable");
						$("#saveChanges").igButton("disable");
						return false;
					}
				);

				$("#redo").on('igbuttonclick',
					function (e) {
						$.each(updates, function (index, transaction) {
							switch (transaction.type) {
								case "row":
									grid.igGridUpdating('updateRow', transaction.rowId, transaction.row, null, false);
									break;
								case "newrow":
									grid.igGridUpdating('addRow', transaction.row, false);
									break;
								case "deleterow":
									grid.igGridUpdating('deleteRow', transaction.rowId, false);
									break;
							}

						});
						$(this).igButton("disable");
						$("#undo").igButton("option", "disabled", false);
						$("#saveChanges").igButton("option", "disabled", false);
					}
				);

				$("#saveChanges").on('igbuttonclick',
				   function (e) {
				   	grid.igGrid("commit");
				   	updates = null;
				   	$("#undo").igButton("disable");
				   	$(this).igButton("disable");
				   	return false;
				   }
			   );

				grid.on("iggridupdatingdatadirty", function (event, ui) {
					grid.igGrid("commit");
					updates = null;
					$("#undo").igButton("disable");
					$("#saveChanges").igButton("disable");
					//saving local changes to the datasource when sorting and filtering
					return false;
				});

				//grid definition and functionality
				$("#grid").igGrid({
					width: "100%",
					autoGenerateColumns: false,
					dataSource: northwindEmployees,
					responseDataKey: "results",
					dataSourceType: "json",
					primaryKey: "ID",
					columns: [
						{ headerText: "Employee ID", key: "ID", dataType: "number", width: "120px", hidden: true },
						{ headerText: "Name", key: "Name", dataType: "string" },
						{ headerText: "Title", key: "Title", dataType: "string" },
						{ headerText: "Phone", key: "Phone", dataType: "string" },
						{ headerText: "Country", key: "Country", dataType: "string" }
					],
					features: [
						{
							name: "Updating"
						},
						{
							name: "Selection",
							mode: "single"
						},
						{
							name: "Filtering"
						},
						{
							name: "Sorting"
						}
					]
				}).on('focusin', function (e) {
					if ($("#pasteHelper").length > 0) {
						return;
					}
					var container = $(document.body);
					var containerDiv = $("<div></div>")
					.css({
						"position": "fixed",
						"top": -10000,
						"left": -10000
					});
					//create textarea for handling paste event. Text area will be transparent.
					var textArea = $("<textarea id='pasteHelper'></textarea>")
					.css({
						"opacity": 0,
						"overflow": "hidden"
					})
					.appendTo(containerDiv);
					containerDiv.appendTo(container);

					textArea.on("paste", pasteHandler);
				}).on('keydown', function (evnt) {
					//handle grid's keydown event
					var ctrl = evnt.ctrlKey, key = evnt.keyCode;
					if (ctrl && key == 86 || evnt.shiftKey && key == 45) // Ctrl-V || Shift-Ins
					{
						//on paste (Ctrl+V) move focus to textarea
						$("#pasteHelper").focus();
					}
				});


				grid.on("iggridupdatingrowdeleted", function (e, args) {
					$("#undo").igButton("option", "disabled", false);
					$("#saveChanges").igButton("option", "disabled", false);
				});

				grid.on("iggridupdatingrowadded", function (e, args) {
					$("#undo").igButton("option", "disabled", false);
					$("#saveChanges").igButton("option", "disabled", false);
				});
				grid.on("iggridupdatingeditrowended", function (e, args) {
					if (args.update) {
						$("#undo").igButton("option", "disabled", false);
						$("#saveChanges").igButton("option", "disabled", false);
					}
				});

				//paste event handler for the textArea.
				function pasteHandler(event) {
					var data;

					//get clipboard data - from window.cliboardData for IE or from the original event's argumets.
					if (window.clipboardData) {
						window.event.returnValue = false;
						data = window.clipboardData.getData("text");
					} else {
						data = event.originalEvent.clipboardData.getData('text/plain');
					}

					//process the clipboard data
					var processedData = ProcessData(data);

					if (pasteMode === "Paste starting from active cell") {
						//update starting from selected cell
						UpdateRecords(processedData);
					} else {
						//add to the grid
						AddRecords(processedData)
					}

					$("#undo").igButton("option", "disabled", false);
					$("#saveChanges").igButton("option", "disabled", false);
				}

				function ProcessData(data) {
					var pasteData = data.split("\n");
					for (var i = 0; i < pasteData.length; i++) {
						pasteData[i] = pasteData[i].split("\t");

						// Check if last row is a dummy row
						if (pasteData[pasteData.length - 1].length == 1 && pasteData[pasteData.length - 1][0] == "") {
							pasteData.pop();
						}
						//remove empty data
						if (pasteData.length == 1 && pasteData[0].length == 1 && (pasteData[0][0] == "" || pasteData[0][0] == "\r")) {
							pasteData.pop();
						}
					}
					return pasteData;
				}

				function UpdateRecords(processedData) {
					//get active cell. Pasting will start from this cell as its top-right endpoint.
					var cell = $("#grid").igGridSelection("selectedCell");

					if (!cell) {
					    alert("No active cell. Please select a cell from which to begin pasting.");
						return;
					}
					cell.element.focus();

					var cellIndex = cell.index;
					var rowIndex = cell.rowIndex;

					//Get visible columns
					var columns = getVisibleColumns();

					//Get Updating feature
					var updating = grid.data("igGridUpdating");

					var excessColsCount = cellIndex + processedData[0].length - columns.length;
					showNotification(cell.row, excessColsCount);

					//update grid records based on the processed clipboard data
					for (var i = 0; i < processedData.length; i++) {
						var gridRow = grid.igGrid("rowAt", rowIndex + i);
						var curentDataRow = processedData[i];
						var rowData = {};
						for (var j = 0; j < columns.length - cellIndex; j++) {
							var currentCell = curentDataRow[j];
							var colKey = columns[j + cellIndex].key;
							rowData[columns[j + cellIndex].key] = currentCell;
						}
						updating.updateRow(parseInt($(gridRow).attr("data-id")), rowData);
					}
				}

				function AddRecords(processedData) {
					var columns = getVisibleColumns();
					var fRowID;
					for (var i = 0; i < processedData.length; i++) {
						var curentDataRow = processedData[i];
						var rowData = {};
						for (var j = 0; j < columns.length; j++) {
							var currentCell = curentDataRow[j];
							var colKey = columns[j].key;
							if (columns[j].dataType === "number") {
								rowData[colKey] = parseInt(currentCell);
							} else {
								rowData[colKey] = currentCell;
							}
						}
						//generate PK
						rowData[grid.igGrid("option", "primaryKey")] = $("#grid").igGrid("allRows").length + 1;
						if (fRowID === undefined) {
							fRowID = rowData[grid.igGrid("option", "primaryKey")];
						}
						$("#grid").igGridUpdating("addRow", rowData);
					}
					var newRec = $("#grid").igGrid("rowById", fRowID);
					var excessColsCount = processedData[0].length - columns.length;
					showNotification(newRec, excessColsCount);
				}
				function getVisibleColumns() {
					var visibleCols = [];
					var columns = grid.igGrid("option", "columns");
					$(columns).each(function () {
						if (this.hidden !== true) {
							visibleCols.push(this);
						}
					});
					return visibleCols;
				}
				function showNotification(rec, excessColsCount) {
					if (!rec.data("igNotifier")) {
						rec.igNotifier({
							mode: "popover",
							direction: "top",
							showOn: "manual",
							position: "start",
							maxWidth: 50 / 100 * grid.width()
						});
					}

					if (excessColsCount > 0) {
						var warning = "You have pasted more columns than are currently available in the grid. The last {count} column(s) from the pasted data have been disregarded.";
						//PasteWarning
						rec.igNotifier("notify", "warning", warning.replace("{count}", excessColsCount));
					} else {
						//SuccessfullyPasted
						rec.igNotifier("notify", "success", "Successfully pasted data in the grid.");
					}

					rec.focus();
					$(rec).on("blur", function () {
						rec.igNotifier("hide");
					});
				}
			});