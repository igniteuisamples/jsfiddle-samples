$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "", key: "ID", dataType: "string", width: "100px", template: "<input type='button' onclick='deleteRow(\"${ID}\")' value='Delete row' class='delete-button'/>" },
                    { headerText: "会社名", key: "CompanyName", dataType: "string", width: "250px" },
                    { headerText: "名前", key: "ContactName", dataType: "string", width: "200px" },
                    { headerText: "連絡先", key: "ContactTitle", dataType: "string", width: "200px" },
                    { headerText: "住所", key: "Address", dataType: "string", width: "200px" },
                    { headerText: "市", key: "City", dataType: "string", width: "150px" },
                    { headerText: "国名", key: "Country", dataType: "string", width: "150px" }
                ],
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                width: "100%",
                height: "400px",
                primaryKey: "ID",
                features: [
                    {
                        name: "ColumnFixing",
                        fixingDirection: "left",
                        columnSettings: [
                            {
                                columnKey: "CompanyName",
                                isFixed: true,
                                allowFixing: false
                            },
                            {
                                columnKey: "ContactName",
                                isFixed: true
                            },
                            {
                                columnKey: "ContactTitle",
                                allowFixing: false
                            }
                        ]
                    },
                    {
                        name: "Sorting",
                        columnSettings : [
                            {
                                columnKey: "ID",
                                allowSorting: false
                            }
                        ]
                    },
                    {
                        name: "Filtering",
                        columnSettings: [
                            {
                                columnKey: "ID",
                                allowFiltering: false
                            }
                        ]
                    }
                ]
            });

            $("#fixingDirectionRight").igCheckboxEditor({
                checked: true,
                valueChanged: function (evt, args) {
                    var fd = !args.newValue ? "right" : "left";
                    var grid = $("#grid"),
                        cols = grid.igGrid("option", "columns"),
                        fixedCols = [], i;
                    for (i = 0; i < cols.length; i++) {
                        // store all fixed columns
                        if (grid.igGrid("isFixedColumn", cols[i].key)) {
                            fixedCols.push(cols[i]);
                        }
                    }
                    grid.igGridColumnFixing("unfixAllColumns");
                    grid.igGridColumnFixing("option", "fixingDirection", fd);

                    for (i = 0; i < fixedCols.length; i++) {
                        // fix the stored columns using the new direction
                        grid.igGridColumnFixing("fixColumn", fixedCols[i].key);
                    }
                }
            });

        });

         function deleteRow(rowId) {
            var grid = $("#grid").data("igGrid");
            grid.dataSource.deleteRow(rowId);
            grid.commit();
        }