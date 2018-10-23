$(function () {
            var data = [
                { 'ProductID': 1, 'Name': 'Omnis ut illum nisi.', 'ProductNumber': 2973311236, "InStock": true, "Quantity": 56, VendorWebsite: 'http://infragistics.com/', },
                { 'ProductID': 2, 'Name': 'Quis quibusdam qui.', 'ProductNumber': 5907101619, "InStock": false, "Quantity": 0, VendorWebsite: 'http://infragistics.com/', },
                { 'ProductID': 3, 'Name': 'Sint laudantium et.', 'ProductNumber': 3057803521, "InStock": true, "Quantity": 26, VendorWebsite: 'http://infragistics.com/' },
                { 'ProductID': 17, 'Name': 'Tempore eos.', 'ProductNumber': 3576608248, "InStock": true, "Quantity": 8, VendorWebsite: 'http://infragistics.com/' },
                { 'ProductID': 18, 'Name': 'Maiores aut ducimus.', 'ProductNumber': 7079645227, "InStock": true, "Quantity": 62, VendorWebsite: 'http://infragistics.com/' },
                { 'ProductID': 19, 'Name': 'Vel inventore.', 'ProductNumber': 191484500, "InStock": true, "Quantity": 18, VendorWebsite: 'http://infragistics.com/' },
                { 'ProductID': 20, 'Name': 'Ut molestiae.', 'ProductNumber': 2994899561, "InStock": false, "Quantity": 0, VendorWebsite: 'http://infragistics.com/' },
                { 'ProductID': 31, 'Name': 'Nihil magnam aut ut.', 'ProductNumber': 5652753011, "InStock": true, "Quantity": 41, VendorWebsite: 'http://infragistics.com/' },
                { 'ProductID': 32, 'Name': 'Repellendus dolorum.', 'ProductNumber': 8807902556, "InStock": true, "Quantity": 10, VendorWebsite: 'http://infragistics.com/' },
                { 'ProductID': 43, 'Name': 'Odit ut quo minus.', 'ProductNumber': 1083007847, "InStock": false, "Quantity": 0, VendorWebsite: 'http://infragistics.com/' }
            ];

            $("#grid").igGrid({
                autoGenerateColumns: false,
                columns: [
                    { headerText: "Product ID", key: "ProductID", dataType: "number", width: "100px" },
                    { headerText: "Product Name", key: "Name", dataType: "string", width: "250px" },
                    { headerText: "Product Number", key: "ProductNumber", dataType: "number", width: "200px" },
                    { headerText: "In Stock", key: "InStock", dataType: "bool", width: "150px" },
                    { headerText: "Quantity", key: "Quantity", dataType: "number", width: "150px" },
                    { headerText: "Vendor website", key: "VendorWebsite", width: "220px", template: '<a href="${VendorWebsite}">${VendorWebsite}</a>' }
                ],
                dataSource: data,
                width: "100%",
                primaryKey: "ProductID",
                features: [
                {
                    name: "Filtering"
                },
                {
                    name: "Sorting",
                },
                {
                    name: "Paging",
                    type: "local",
                    pageSize: 10
                }]
            });

            $("#exportButton").on("click", function () {
                $.ig.GridExcelExporter.exportGrid($("#grid"), {
                    fileName: "igGrid",
                    gridFeatureOptions: { "sorting": "applied", "filtering": "applied", paging: "currentPage", "summaries": "applied" },
                },
                {
                    headerCellExported: function (e, args) {
                        if (args.columnKey == "Quantity") {
                            args.xlRow.setCellValue(args.columnIndex, "Available Quantity");
                        }
                    },
                    cellExporting: function (e, args) {
                        if (args.columnKey == "Quantity" && args.cellValue > 15) {
                            args.xlRow.getCellFormat(args.columnIndex).font().bold(1);
                        }
                    },
                    cellExported: function (e, args) {
                        if (args.xlRow.index() == 0) {
                            return;
                        }
                        if (args.columnKey == 'VendorWebsite') {
                            var xlRow = args.xlRow;
                            xlRow.cells(args.columnIndex).applyFormula('=HYPERLINK("' + args.cellValue + '")');
                        }
                    },
                    rowExported: function (e, args) {
                        if (args.xlRow.index() == args.grid.igGrid("allRows").length - 1) {
                            $('<div style="font-size:20px;">Last row exported, download starts!!</div>').insertBefore('#exportButton').delay(1000).fadeOut();
                        }
                    }
                });
            });
        });