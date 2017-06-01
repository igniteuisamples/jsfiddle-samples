$(function () {
            var keys = ["EmployeeID", "FirstName", "LastName", "RegistererDate", "Country", "Age", "IsActive", "Company"],
                columnsToSkip = [];

            $("div.optionContainer:lt(4)").igCheckboxEditor();
            $("select").igCombo({ width: "150px", mode: "dropdown"});
            $("#colstoskip").igCombo({
                width: "150px",
                mode: "dropdown",
                dataSource: keys,
                multiSelection: {
                    enabled: true,
                    showCheckboxes: true
                }
            });
            $("fieldset").show();
            $("#grid1").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                primaryKey: "EmployeeID",
                autofitLastColumn: true,
                columns: [
                    { headerText: "従業員 ID", key: "EmployeeID", dataType: "string", hidden: true },
                    { headerText: "名字", key: "LastName", width: "15%", dataType: "string" },
                    { headerText: "国", key: "Country", width: "15%", dataType: "string" },
                    { headerText: "年齢", key: "Age", width: "15%", dataType: "number" },
                    { headerText: "アクティブ", key: "IsActive", width: "15%", dataType: "bool", format: "checkbox" },
                    { headerText: "会社", key: "Company", width: "20%", dataType: "string", unbound: true, formula: function () { return "http://infragistics.com/"; } },
                    { headerText: "登録日付", key: "RegistererDate", width: "20%", dataType: "date" }
                ],
                dataSource: employees,
                primaryKey: "EmployeeID",
                features: [
                    {
                        name: "Filtering"
                    },
                    {
                        name: "Sorting",
                        mode: "multi",
                    },
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 30
                    },
                    {
                        name: "Hiding",
                    },
                    {
                        name: "Summaries",
                    }
                ]
            });

            $("#exportButton").igButton({ labelText: "エクスポート" });
            $("#exportButton").on("click", function () {
                var exportingOverlay = $('<div>');
                if ($("#colstoskip").igCombo("selectedItems") != null) {
                    $.each($("#colstoskip").igCombo("selectedItems"), function (index, item) {
                        columnsToSkip.push(item.data.value);
                    });
                }

                $.ig.GridExcelExporter.exportGrid($("#grid1"), {
                    fileName: "igGrid",
                    gridStyling: $("#styling").igCheckboxEditor("value") ? "applied" : "none",
                    columnsToSkip: columnsToSkip,
                    gridFeatureOptions: {
                        filtering: $("#filtering").igCombo("value"),
                        paging: $("#paging").igCombo("value"),
                        hiding: $("#hiding").igCombo("value"),
                        columnFixing: $("#colfixing").igCheckboxEditor("value") ? "applied" : "none",
                        sorting: $("#sorting").igCheckboxEditor("value") ? "applied" : "none",
                        summaries: $("#summaries").igCheckboxEditor("value") ? "applied" : "none"
                    },
                },
                {
                    exportStarting: function (e, args) {
                        showOverlay(args.grid, exportingOverlay);
                    },
                    success: function () {
                        hideOverlay(exportingOverlay);
                    },
                    cellExported: function (e, args) {
                        if (args.xlRow.index() == 0) {
                            return;
                        }
                        if (args.columnKey == 'Company') {
                            var xlRow = args.xlRow;
                            xlRow.cells(args.columnIndex).applyFormula('=HYPERLINK("' + args.cellValue + '")');
                        }
                        if (args.columnKey == "Age" && args.cellValue > 43) {
                            args.xlRow.getCellFormat(args.columnIndex).font().bold(1);
                            args.xlRow.getCellFormat(args.columnIndex).fill($.ig.excel.CellFill.createLinearGradientFill(45, '#FF0000', '#00FFFF'));
                        }
                    },
                    exportEnding: function (e, args) {
                        var columns = args.worksheet.columns();
                        columns.item(columns.count() - 1).cellFormat().formatString("dd/MMM/YYYY");
                    },
                });
            });
        });

        function showOverlay(grid, exportingOverlay) {
            var $gridContainer = $('#' + grid.attr('id') + '_container');

            exportingOverlay.css({
                "width": $gridContainer.outerWidth(),
                "height": $gridContainer.outerHeight()
            }).html('<span class="exporting-text">Exporting...</span>');
            exportingOverlay.addClass("exporting-overlay");

            $gridContainer.append(exportingOverlay);
        }

        function hideOverlay(exportingOverlay) {
            exportingOverlay.remove();
        }