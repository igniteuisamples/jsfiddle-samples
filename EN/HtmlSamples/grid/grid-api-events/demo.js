$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            // process events of buttons and editors
            $("#buttonDataBind").igButton({
                labelText: $("#buttonDataBind").val(),
                click: function (e) {
                    $("#grid").igGrid("dataBind");
                }
            });

            $("#buttonFilter").igButton({
                labelText: $("#buttonFilter").val(),
                click: function (event) {
                    var expr = $("#exprTextEditor").igTextEditor("value") ||
                            $("#exprNumericEditor").igNumericEditor("value") ||
                            $("#exprDateEditor").igDateEditor("value"),
                        condition = $("#conditionList").igCombo("option", "selectedItems")[0].value,
                        columnDataSource = $("#filterColumn").igCombo("option", "dataSource"),
                        filterColumn = columnDataSource[$("#filterColumn").igCombo("option", "selectedItems")[0].index].column;
                    $("#grid").igGridFiltering("filter", ([{ fieldName: filterColumn, expr: expr, cond: condition }]));
                }
            });

            $("#filterColumn").igCombo({
                width: "120px",
                textKey: "text",
                valueKey: "type",
                dataSource: [
                    { text: "Employee ID", column: "EmployeeID", type: "number" },
                    { text: "First Name", column: "FirstName", type: "string" },
                    { text: "Last Name", column: "LastName", type: "string" },
                    { text: "Title", column: "Title", type: "string" },
                    { text: "Birth Date", column: "BirthDate", type: "date" },
                    { text: "Postal Code", column: "PostalCode", type: "number" },
                    { text: "Country", column: "Country", type: "string" }
                ],
                mode: "dropdown",
                enableClearButton: false,
                selectedItems: [{ index: 0 }],
                selectionChanged: function (e, args) {
                    var selText,
                        nEditor = $("#exprNumericEditor"),
                        dEditor = $("#exprDateEditor"),
                        tEditor = $("#exprTextEditor");
                    switch (args.items[0].value) {
                        case "number":
                            nEditor.igNumericEditor("show");
                            tEditor.igTextEditor("hide");
                            dEditor.igDateEditor("hide");
                            break;
                        case "date":
                            nEditor.igNumericEditor("hide");
                            tEditor.igTextEditor("hide");
                            dEditor.igDateEditor("show");
                            break;
                        case "string":
                            nEditor.igNumericEditor("hide");
                            tEditor.igTextEditor("show");
                            dEditor.igDateEditor("hide");
                            break;
                    }
                    // reset the editors
                    nEditor.igNumericEditor("value", null);
                    tEditor.igTextEditor("value", null);
                    dEditor.igDateEditor("value", null);
                    // select default condition
                    $("#conditionList").igCombo("option", "selectedItems", [{ index: 0 }]);
                    selText = $("#conditionList").igCombo("option", "selectedItems")[0].text;
                    nEditor.igNumericEditor("option", "nullText", selText);
                    tEditor.igTextEditor("option", "nullText", selText);
                    dEditor.igDateEditor("option", "nullText", selText);
                }
            });

            $("#conditionList").igCombo({
                width: "140px",
                textKey: "text",
                valueKey: "cond",
                cascadingDataSources: {
                    "number": [
                        { cond: "equals", text: $.ig.GridFiltering.locale.equalsLabel },
                        { cond: "doesNotEqual", text: $.ig.GridFiltering.locale.doesNotEqualLabel },
                        { cond: "lessThan", text: $.ig.GridFiltering.locale.lessThanLabel },
                        { cond: "greaterThan", text: $.ig.GridFiltering.locale.greaterThanLabel }
                    ],
                    "string": [
                        { cond: "startsWith", text: $.ig.GridFiltering.locale.startsWithLabel },
                        { cond: "endsWith", text: $.ig.GridFiltering.locale.endsWithLabel },
                        { cond: "contains", text: $.ig.GridFiltering.locale.containsLabel },
                        { cond: "doesNotContain", text: $.ig.GridFiltering.locale.doesNotContainLabel },
                        { cond: "empty", text: $.ig.GridFiltering.locale.emptyNullText },
                        { cond: "notEmpty", text: $.ig.GridFiltering.locale.notEmptyNullText }
                    ],
                    "date": [
                        { cond: "on", text: $.ig.GridFiltering.locale.onLabel },
                        { cond: "notOn", text: $.ig.GridFiltering.locale.notOnLabel },
                        { cond: "before", text: $.ig.GridFiltering.locale.beforeLabel },
                        { cond: "after", text: $.ig.GridFiltering.locale.afterLabel },
                        { cond: "today", text: $.ig.GridFiltering.locale.todayLabel },
                        { cond: "yesterday", text: $.ig.GridFiltering.locale.yesterdayLabel },
                        { cond: "lastMonth", text: $.ig.GridFiltering.locale.lastMonthLabel },
                        { cond: "nextMonth", text: $.ig.GridFiltering.locale.nextMonthLabel },
                        { cond: "thisMonth", text: $.ig.GridFiltering.locale.thisMonthLabel },
                        { cond: "lastYear", text: $.ig.GridFiltering.locale.lastYearLabel },
                        { cond: "thisYear", text: $.ig.GridFiltering.locale.thisYearLabel },
                        { cond: "nextYear", text: $.ig.GridFiltering.locale.nextYearLabel }
                    ]
                },
                parentCombo: "#filterColumn",
                mode: "dropdown",
                enableClearButton: false,
                selectedItems: [{ index: 0 }],
                selectionChanged: function (e, args) {
                    $("#exprTextEditor").igTextEditor("option", "nullText", args.items[0].text);
                    $("#exprNumericEditor").igNumericEditor("option", "nullText", args.items[0].text);
                    $("#exprDateEditor").igDateEditor("option", "nullText", args.items[0].text);
                }
            });
            
            $("#exprTextEditor").igTextEditor().css("height", "21px").hide().children().first().css("height", "19px");
            $("#exprNumericEditor").igNumericEditor({ nullText: $.ig.GridFiltering.locale.equalsLabel }).css("height", "21px").children().first().css("height", "19px");
            $("#exprDateEditor").igDateEditor().css("height", "21px").hide().children().first().css("height", "19px");

            $("#pageIndexList").igCombo({
                width: "120px",
                valueKey: "pIndex",
                dataSource: [
                    { pIndex: 1 },
                    { pIndex: 2 }
                ],
                mode: "dropdown",
                enableClearButton: false,
                selectedItems: [{ index: 0 }],
                selectionChanged: function (e, args) {
                    $("#grid").igGridPaging("pageIndex", parseInt(args.items[0].value - 1));
                }
            });

            $("#pageSizeList").igCombo({
                width: "120px",
                valueKey: "size",
                dataSource: [
                    { size: 2 },
                    { size: 5 },
                    { size: 10 }
                ],
                mode: "dropdown",
                enableClearButton: false,
                selectedItems: [{ index: 1 }],
                selectionChanged: function (e, args) {
                    var npc = 10 / args.items[0].value, i, nds = [];
                    $("#grid").igGridPaging("pageSize", parseInt(args.items[0].value));
                    for (i = 0; i < npc; i++) {
                        nds.push({ pIndex: i + 1 });
                    }
                    $("#pageIndexList").igCombo("option", "dataSource", nds);
                    $("#pageIndexList").igCombo("option", "selectedItems", [{ index: 0 }]);
                }
            });

            $("#rowNumberEditor").igNumericEditor();

            $("#buttonSelectRow").igButton({
                labelText: $("#buttonSelectRow").val(),
                click: function (event) {
                    $("#grid").igGridSelection("selectRow", $("#rowNumberEditor").igNumericEditor("value"));
                }
            });

            $("#buttonSelectedRows").igButton({
                labelText: $("#buttonSelectedRows").val(),
                click: function (event) {
                    var rows = $("#grid").igGridSelection("selectedRows");
                    apiViewer.log("The number of selected rows is: " + rows.length);
                    $.each(rows, function (i, val) {
                        apiViewer.log("Row with index " + val.index + " is selected");
                    });
                }
            });

            /*----------------- Event Examples -------------------------*/

            $("#grid").on("iggridselectionrowselectionchanging", function (evt, ui) {
                var message = "iggridselectionrowselectionchanging";
                apiViewer.log(message);
            });

            $("#grid").on("iggridselectionactiverowchanged", function (evt, ui) {
                var message = "iggridselectionactiverowchanged";
                apiViewer.log(message);
            });

            $("#grid").on("iggridfilteringdatafiltering", function (evt, ui) {
                var message = "iggridfilteringdatafiltering";
                apiViewer.log(message);
            });

            $("#grid").on("iggridrendering", function (evt, ui) {
                var message = "iggridrendering";
                apiViewer.log(message);
            });

            $("#grid").on("iggriddatabinding", function (evt, ui) {
                var message = "iggriddatabinding";
                apiViewer.log(message);
            });

            /*----------------- Instantiation -------------------------*/
            $("#grid").igGrid({
                autoGenerateColumns: false,
                renderCheckboxes: true,
                primaryKey: "EmployeeID",
                columns: [{
                    // note: if primaryKey is set and data in primary column contains numbers,
                    // then the dataType: "number" is required, otherwise, dataSource may misbehave
                    headerText: "Employee ID", key: "EmployeeID", dataType: "number"
                },
                {
                    headerText: "First Name", key: "FirstName", dataType: "string"
                },
                {
                    headerText: "Last Name", key: "LastName", dataType: "string"
                },
                {
                    headerText: "Title", key: "Title", dataType: "string"
                },
                {
                    headerText: "Birth Date", key: "BirthDate", dataType: "date"
                },
                {
                    headerText: "Postal Code", key: "PostalCode", dataType: "string"
                },
                {
                    headerText: "Country", key: "Country", dataType: "string"
                }
                ],
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                height: "100%",
                width: "100%",
                tabIndex: 1,
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "EmployeeID",
                                classes: "ui-hidden-tablet ui-hidden-phone"
                            },
                            {
                                columnKey: "PostalCode",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "BirthDate",
                                classes: "ui-hidden-phone"
                            }
                        ]
                    },
                    {
                        name: "Selection",
                        mode: "row",
                        multipleSelection: true
                    },
                    {
                        name: "Paging",
                        pageSize: 5
                    },
                    {
                        name: "Filtering"
                    }
                ]
            });
        });