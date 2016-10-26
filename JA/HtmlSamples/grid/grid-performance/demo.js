$(function () {
var apiViewer = new $.ig.apiViewer();

	    $(function () {
	        var dataBind = true,
				startRender,
				endRender,
				rowsRendering,
				rowsRendered,
				dataFetching,
				dataFetched,
                filtering,
                paging,
                virt,
                opts = {};

	        function setUpOptions(virt, paging, filtering, colCount) {
	            var opts = {}, columns = [], features = [], cols;

	            columns.push({ headerText: "ID", key: "ID", dataType: "number", width: "200px" });
	            columns.push({ headerText: "First Name", key: "FirstName", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Last Name", key: "LastName", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Company", key: "Company", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Email", key: "Email", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Position", key: "Position", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Age", key: "Age", dataType: "number", width: "200px" });
	            columns.push({ headerText: "Address", key: "Address", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Phone", key: "Phone", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Picture", key: "Picture", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Is Active", key: "IsActive", dataType: "bool", width: "200px" });
	            columns.push({ headerText: "Balance", key: "Balance", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Eye Color", key: "EyeColor", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Registered", key: "Registered", dataType: "bool", width: "200px" });
	            columns.push({ headerText: "Latitude", key: "Latitude", dataType: "number", width: "200px" });
	            columns.push({ headerText: "Longitude", key: "Longitude", dataType: "number", width: "200px" });
	            columns.push({ headerText: "Tags", key: "Tags", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Greeting", key: "Greeting", dataType: "string", width: "200px" });
	            columns.push({ headerText: "GUID", key: "GUID", dataType: "string", width: "200px" });
	            columns.push({ headerText: "Index", key: "Index", dataType: "number", width: "200px" });

	            cols = columns.slice(0, colCount);
	            opts["columns"] = cols;
	            opts["responseDataKey"] = "d.results.Records";
	            opts["responseTotalRecCountKey"] = "d.results.TotalRecordsCount";

	            opts["autoGenerateColumns"] = false;
	            opts["dataSource"] = "http://www.igniteui.com/api/gridperformance?callback=?";

	            if (virt !== "none") {
	                opts["rowVirtualization"] = true;
	                opts["virtualizationMode"] = virt;
	            };
	            opts["width"] = "100%";
	            opts["height"] = "500px";
	            if (paging) {
	            	features.push({ name: "Paging", type: "remote", pageIndexUrlKey: "page", pageSizeUrlKey: "pageSize", recordCountKey: "d.results.TotalRecordsCount" });
	            }
	            if (filtering) {
	                features.push({ name: "Filtering", type: "remote", filterExprUrlKey: "filter" });
	            }
	            opts["features"] = features;

	            opts["rendering"] = function (evt, ui) {
	                startRender = new Date().getTime();
	            };

	            opts["rendered"] = function (evt, ui) {
	                endRender = new Date().getTime();
	                apiViewer.log("グリッドの描画時間:  : " + (endRender - startRender) / 1000 + " 秒.");
	                apiViewer.log("");
	            };

	            opts["rowsRendering"] = function (evt, ui) {
	                rowsRendering = new Date().getTime();
	            };

	            opts["rowsRendered"] = function (evt, ui) {
	                rowsRendered = new Date().getTime();
	                apiViewer.log("行の描画時間:  : " + (rowsRendered - rowsRendering) / 1000 + " 秒.");
	            };

	            opts["dataBinding"] = function (evt, ui) {
	                dataFetching = new Date().getTime();
	            };

	            opts["dataBound"] = function (evt, ui) {
	                dataFetched = new Date().getTime();
	                apiViewer.log("データの取得時間:  : " + (dataFetched - dataFetching) / 1000 + " 秒.");
	            };

	            return opts;
	        }

	        $.ajaxSetup({
	            beforeSend: function (jq, settings) {
	                var rowsCount = $("#dataCount").slider("value"),
						colsCount = $("#colCount").slider("value"),
						filtering = $("#filteringCheck").igCheckboxEditor("value"),
						paging = $("#pagingCheck").igCheckboxEditor("value"),
						virt = $("#virt").igCombo("value");
	                settings.url += "&rowscount=" + rowsCount;
	                settings.url += "&databind=" + dataBind;
	                settings.url += "&colscount=" + colsCount;
	                if (settings.url.indexOf("pageIndex") !== -1 || settings.url.indexOf("filter") !== -1) {
	                    dataBind = false;
	                }
	            },
	        });

	        $("#dataCount").slider({
	            min: 1000,
	            max: 20000,
	            step: 1000,
	            value: 5000,
	            slide: function (event, ui) {
	                $("#rowsLbl").html(ui.value);
	            }
	        });
	        $("#colCount").slider({
	            min: 1,
	            max: 20,
	            step: 1,
	            value: 10,
	            slide: function (event, ui) {
	                $("#colsLbl").html(ui.value);
	            }
	        });
	        $("#btnRefresh").igButton({
	            click: function (evt, args) {
	                dataBind = true;
	                filtering = $("#filteringCheck").igCheckboxEditor("value");
	                paging = $("#pagingCheck").igCheckboxEditor("value");
	                virt = $("#virt").igCombo("value");
	                colsCount = $("#colCount").slider("value");
	                opts = setUpOptions(virt, paging, filtering, colsCount);

	                $("#grid").igGrid("destroy");
	                $("#grid").igGrid(opts);
	            }
	        });
	        $("#virt").igCombo({
	            dataSource: [
					"continuous",
					"none",
					"fixed"
	            ],
	            mode: "dropdown"
	        });
	        $("#pagingCheck").igCheckboxEditor();

	        $("#filteringCheck").igCheckboxEditor();

	        filtering = $("#filteringCheck").igCheckboxEditor("value");
	        paging = $("#pagingCheck").igCheckboxEditor("value");
	        virt = $("#virt").igCombo("value");
	        colsCount = $("#colCount").slider("value");
	        opts = setUpOptions(virt, paging, filtering, colsCount);

	        $("#grid").igGrid(opts);
	    });
});