$(function () {
    		var gridHistoryJS,
                manualStateChange = true, // true: fired by history go() and back() methods; false: fired when state is added to the history object.
                reverseState = [],
                // historyLength = window.History.storedStates.length,
                urlParams = window.location.search;

    		if (window.History === undefined || window.History.getState === undefined) {
    			alert("Please include the history.js library, by uncommenting the script reference");
    			return;
    		}

    		//--> Save igGrid state in the browser history object
    		function addUndoState(feature, column, possibleUndo, oldValue) {
    			var currState = window.History.getState(), data, undo = false;
    			pos = previousPosition(feature, column);
    			if (pos < 0) {
    				data = { key: feature, value: column === null ? oldValue : (!oldValue) ? column : [column, oldValue] };
    				undo = possibleUndo;
    			} else if (pos === 0) {
    				data = null;
    			} else {
    				data = pos.data;
    			}
    			if (data !== null) {
    				data.undo = undo;
    				currState.data.undoData = data;
    				manualStateChange = false;
    				window.History.replaceState(currState.data);
    			}
    		}
    		function previousPosition(feature, column) {
    			var states = window.History.savedStates,
                    length = states.length,
                    index;
    			for (index = length - 1; index >= 0; index--) {
    				if (states[index].data.key === feature &&
                        (column === null || column !== null && states[index].data.value.indexOf(column) > -1)) {
    					if (index === length - 1) {
    						return 0;
    					} else {
    						return states[index];
    					}
    				}
    			}
    			return -1;
    		}
    		function pushToBrowserHistory(state, title, url) {
    			manualStateChange = false;
    			$(state).extend({ "manualStateChange": false });
    			window.History ? window.History.pushState(state, title, url) : "";
    		}

    		gridHistoryJS = (function initGrid() {
    			var grid = $("#gridHistoryJS");
    			grid.igGrid({
    				primaryKey: "name",
    				width: '100%',
    				columns: [
                        { headerText: "Name", key: "name", dataType: "string", width: "12%" },
                        { headerText: "Team", key: "team", dataType: "string", width: "15%" },
                        { headerText: "Age", key: "age", dataType: "number", width: "7%" },
                        { headerText: "No.", key: "number", dataType: "number", width: "7%" },
                        { headerText: "Pos.", key: "position", dataType: "string", width: "8%" },
                        { headerText: "Goals", key: "goals", dataType: "number", width: "10%" },
                        { headerText: "Assists", key: "assists", dataType: "number", width: "10%" },
                        { headerText: "Yellow C.", key: "yellow", dataType: "number", width: "10%" },
                        { headerText: "Red C.", key: "red", dataType: "number", width: "7%" },
                        { headerText: "Salary", key: "salary", format: "currency", width: "8%" }
    				],
    				autofitLastColumn: false,
    				autoGenerateColumns: false,
    				dataSource: dataSource,
    				features: [
                        {
                        	name: "Paging",
                        	type: "local",
                        	pageSize: 10,
                        	showPageSizeDropDown: false,
                        	pageIndexChanging: function (e, args) {
                        		addUndoState("page", null, false, args.currentPageIndex + 1, args.newPageIndex + 1);
                        	},
                        	pageIndexChanged: function (e, args) {
                        		var pageIndex = args.pageIndex + 1,
                                    state = { key: "page", value: pageIndex };
                        		pushToBrowserHistory(state, null, formURL("page", pageIndex));
                        	}
                        },
                        {
                        	name: "Sorting",
                        	type: "local",
                        	mode: "multi",
                        	modalDialogSortOnClick: true,
                        	columnSorting: function (e, args) {
                        		addUndoState("sort", args.columnKey, true, args.direction === "ascending" ? "descending" : "ascending");
                        	},
                        	columnSorted: function (e, args) {
                        		var columnKey = args.columnKey,
                                    dir = args.direction,
                                    state = { key: "sort", value: [columnKey, dir] };
                        		if (!isEmptyValue(columnKey) && !isEmptyValue(dir)) {
                        			pushToBrowserHistory(state, null, formURL("sort", [columnKey, dir]));
                        		}
                        	}
                        },
                        {
                        	name: "Filtering",
                        	type: "local",
                        	dataFiltering: function(e, args) {
                        		var expr = args.owner.grid.dataSource.settings.filtering.expressions,
                            		oldValue;
                        		oldValue = (expr.length > 0) ? expr[expr.length - 1].expr : null;
                        		addUndoState("filter", args.columnKey, true, oldValue);
                        	},
                        	dataFiltered: function (e, args) {
                        		var columnKey = args.columnKey,
                                    expr = args.owner.grid.dataSource.settings.filtering.expressions[0],
                                    state, settings;
                        		if (expr === undefined) {
                        			settings = [];
                        		} else {
                        			settings = [columnKey, expr.cond, expr.expr];
                        		}
                        		state = { key: "filter", value: settings };
                        		pushToBrowserHistory(state, null, formURL("filter", settings));
                        	}
                        },
                        {
                        	name: "Resizing",
                        	columnResizing: function (e, args) {
                        		addUndoState("resize", args.columnKey, false, args.originalWidth);
                        	},
                        	columnResized: function (e, args) {
                        		var columnKey = args.columnKey,
									width = args.originalWidth,
									state = { key: "resize", value: [columnKey, width] };
                        		pushToBrowserHistory(state, null, formURL("resize", [columnKey, width]));
                        	}
                        }
    				],
    				rendered: function (e, args) {
    					args.owner.element.find("tr td").css("text-align", "center");
    					args.owner.element.find("tr td:first-child").css("text-align", "left");
    					args.owner.element.find("tr td:last-child").css("text-align", "right");

    					setTimeout(function () {
    						// Load Grid state from URL
    						loadInitialStateFromUrl();
    						if (urlParams === "") {
    							// By default "goals" and "assists" columns are sorted
    							manualInitialSort(args);
    						}
    					}, 200);
    				}
    			});
    			return grid;
    		})();
    		//<-- Save igGrid state in the browser history object

    		//--> Recover igGrid state from the browser history object
    		if (window.History && window.History.Adapter) {
    			window.History.Adapter.bind(window, 'statechange', function (e, args) {
    				var currState, undoState, state, prevState, stateOccurances;
    				// isBackForward = (window.History.storedStates.length - historyLength) === 1;

    				if ($("#sample-title")[0] !== undefined && $("#sample-title")[0].textContent !== undefined && $("#sample-title")[0].textContent.toLowerCase() !== "history.js integration") {
    					// This check is not related to history.js integaration. It's done to integrate the sample with the Samples Browser.
    					return;
    				}
    				// historyLength = window.History.storedStates.length;
    				if (manualStateChange === true) { // Fired only when called externally from browser buttons
    					currState = window.History.getState();
    					state = currState.data;
    					undoState = state.undoData;
    					switch (state.key) { // Load current state
    						case "page": loadPagingState(state.key, state.value); break;
    						case "sort": loadSortingState(state.key, state.value); break;
    						case "filter": loadFilteringState(state.key, state.value);  break;
    						case "resize": loadResizingState(state.key, state.value); break;
    						default: break;
    					}
    					// Load/Unload previous state
    					if (undoState) {
    						switch (undoState.key) {
    							case "page": loadPagingState(undoState.key, undoState.value); break;
    							case "sort": loadSortingState(undoState.key, undoState.value, undoState.undo); break;
    							case "filter": loadFilteringState(undoState.key, undoState.value, undoState.undo); break;
    							case "resize": loadResizingState(undoState.key, undoState.value); break;
    							default: break;
    						}
    					}
    				}
    				manualStateChange = true;
    			});
    		}
    		//<-- Recover igGrid state from the browser history object

    		//--> Load igGrid state from the browser URL
    		function loadInitialStateFromUrl() {
    			var params = urlParams, index, arrKeyValue;
    			if (params !== "") {
    				pairs = params.substring(1, params.length).split("&");
    				for (index = 0; index < pairs.length; index++) {
    					arrKeyValue = pairs[index].split("=");
    					loadGridState(arrKeyValue[0], arrKeyValue[1]);
    				}
    				// Recover URL
    				window.History.pushState({}, null, params);
    			}
    		}
    		function manualInitialSort(args) {
    			args.owner.element.igGridSorting("sortColumn", "goals", "descending"); manualStateChange = false;
    			addUndoState("sort", "goals", true, "ascending");
    			pushToBrowserHistory({ key: "sort", value: ["goals", "descending"] }, null, formURL("sort", ["goals", "descending"]));
    			args.owner.element.igGridSorting("sortColumn", "assists", "descending"); manualStateChange = false;
    			addUndoState("sort", "assists", true, "ascending");
    			pushToBrowserHistory({ key: "sort", value: ["assists", "descending"] }, null, formURL("sort", ["assists", "descending"]));
    		}
    		//<-- Load igGrid state from the browser URL

    		//--> Load individual igGrid features
    		function loadGridState(key, value) {
    			switch (key) {
    				case "page": loadPagingState(key, value); break;
    				case "sort": loadSortingStateArray(key, value); break;
    				case "filter": loadFilteringStateArray(key, value); break;
    				case "resize": loadResizingStateArray(key, value); break;
    				default: break;
    			}
    		}
    		function loadPagingState(key, value) {
    			gridHistoryJS.igGridPaging("pageIndex", value - 1);
    		}
    		function loadSortingState(key, descriptor, undo) {
    			var column = descriptor[0],
					status = descriptor[1];
    			if (undo) {
    				gridHistoryJS.igGridSorting("unsortColumn", column);
    			} else {
    				gridHistoryJS.igGridSorting("sortColumn", column, status);
    			}
    		}
    		function loadSortingStateArray(key, value) {
    			var columns = value.split(";"), i;
    			for (i = 0; i < columns.length; i++) {
    				gridHistoryJS.igGridSorting("sortColumn", columns[i].split("_", 1)[0], columns[i].split("_", 2)[1]);
    			}
    		}
    		function loadFilteringState(key, descriptor, undo) {
    			if (undo || descriptor === undefined || descriptor.length === 0) {
            		gridHistoryJS.igGridFiltering("filter", []);
            	} else {
            		gridHistoryJS.igGridFiltering("filter", [{ fieldName: descriptor[0], expr: descriptor[2], cond: descriptor[1] }]);
            	}
            }
            function loadFilteringStateArray(key, value) {
            	var columns = value.split(";"), i;
            	for (i = 0; i < columns.length; i++) {
            		gridHistoryJS.igGridFiltering("filter", [{ fieldName: columns[i].split("_", 1)[0], expr: columns[i].split("_", 3)[2], cond: columns[i].split("_", 2)[1] }]);
            	}
            }
            function loadResizingState(key, descriptor) {
            	gridHistoryJS.igGridResizing("resize", descriptor[0], descriptor[1]);
            }
            function loadResizingStateArray(key, value) {
            	var columns = value.split(";"), i;
            	for (i = 0; i < columns.length; i++) {
            		gridHistoryJS.igGridResizing("resize", columns[i].split("_", 1)[0], columns[i].split("_", 2)[1]);
            	}
            }
            //<-- Load individual igGrid features

            //--> Create URL 
            function formURL(key, value, multiple) {
            	var params = window.location.search,
                    urlValue = value, urlIndex, currentUrl, currentColumnState;

                if (isEmptyValue(value)) { // remove parameters encoded in the URL
                    urlIndex = params.indexOf(key + "=");
                    params = params.replace(key + "=" + extractURLValue(key), "");
                    if (params === "?") {
                        params = "";
                    } else {
                        params = params.substring(0, urlIndex - 1) + params.substring(urlIndex, params.length);
                    }
                } else { // add parameters encoded in the URL
                    if (value instanceof Array) {
                        urlValue = value[0];
                        for (urlIndex = 1; urlIndex < value.length; urlIndex++) {
                                urlValue += "_" + value[urlIndex];
                        }
                    }
                    if (params === "") {
                        params = "?" + key + "=" + urlValue;
                    } else if (params.indexOf(key + "=") === -1) {
                        params = params + "&" + key + "=" + urlValue;
                    } else {
                        currentUrl = key + "=" + extractURLValue(key);
                        if (key === "page") {
                            params = params.replace(currentUrl, key + "=" + urlValue);
                        } else {
                            currentColumnState = value[0] + "_";
                            if (currentUrl.indexOf(currentColumnState) > -1) {
                                params = params.replace(getColumnState(currentUrl, currentColumnState), urlValue);
                            } else {
                                params = params.replace(currentUrl, currentUrl + ";" + urlValue);
                            }
                        }
                    }
                }
                return params;
            }
            function extractURLValue(key) {
                var params = window.location.search,
                    value = "";
                value = params.substring(params.indexOf(key), params.length);
                value = value.substring(key.length + 1, (value.indexOf("&") > -1) ? value.indexOf("&") : value.length);
                return value;
            }
            function getColumnState(featureUrl, column) {
                var state, columnStartIndex, columnEndIndex;
                columnStartIndex = featureUrl.indexOf(column);
                state = featureUrl.substring(columnStartIndex, featureUrl.length);
                columnEndIndex = state.indexOf("&") > -1 ? state.indexOf("&") : state.length;
                state = state.substring(0, columnEndIndex);
                columnEndIndex = state.indexOf(";") > -1 ? state.indexOf(";") : state.length;
                state = state.substring(0, columnEndIndex);
                return state;
            }
        	//<-- Create URL

            function isEmptyValue(value) {
                return value === undefined || value === null || value.length === 0;
            }
            $("#back").igButton().click(function () { window.history.back(); });
            $("#forward").igButton().click(function () { window.history.forward(); });
            $("#copy").igButton().click(function () { window.prompt("Copy URL and open it in a new tab or browser", window.location); });
            $("#mail").igButton().click(function () {
                var link = "mailto: "
                         + "?subject=" + escape("List with Footballers")
                         + "&body=" + escape("Use the following custom list with footballers: " + window.location);
                window.location.href = link;
            });
        });