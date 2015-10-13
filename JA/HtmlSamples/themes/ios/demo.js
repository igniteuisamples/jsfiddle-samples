$(function () {
            //igGrid
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                primaryKey: "ProductID",
                columns: [
                    { headerText: "製品 ID", key: "ProductID", dataType: "string", width: "0%", hidden: true },
                    { headerText: "製品名", key: "Name", dataType: "string", width: "40%" },
                    { headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "20%" },
                    { headerText: "価格", key: "ListPrice", dataType: "number", width: "20%" },
                    { headerText: "標準の原価", key: "StandardCost", dataType: "number", width: "20%" }
                ],
                dataSource: adventureWorks,
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 10
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    },
                    {
                        name: "Filtering",
                        type: "local"
                    },
                    {
                        name: "Updating",
                        dataDirty: function (evt, ui) {
                            ui.owner.grid.commit();
                            return false;
                        }
                    },
                    {
                        name: "Summaries"
                    }
                ]
            });

            //igEditors
            $("#textEditor").igTextEditor({ width: 150 });
            $("#dateEditor").igDateEditor({ width: 150 });
            $("#maskEditor").igMaskEditor({ width: 150 });
            $("#currencyEditor").igCurrencyEditor({ width: 150 });
            $("#numericEditor").igNumericEditor({ width: 150 });
            $("#percentEditor").igPercentEditor({ width: 150 });
            $("#datePicker").igDatePicker({ width: 150 });

            //igCombo
            $("#combo").igCombo({
                width: 150,
                height:20,
                dataSource: [
                      { "ID": 1, "Name": "John Smith", "Age": 45 },
                      { "ID": 2, "Name": "Mary Johnson", "Age": 32 },
                      { "ID": 3, "Name": "Bob Ferguson", "Age": 27 }
                ],
                valueKey: "ID",
                textKey: "Name",
                text: "John Smith"
            });

            //igTree
            $("#tree").igTree({
                dataSource: [
                {
                    "ID": 1, "RegionName": "北アメリカ", "Countries":
                    [
                        { "ID": 1, "CountryName": "米国" },
                        { "ID": 2, "CountryName": "カナダ" },
                        { "ID": 3, "CountryName": "メキシコ" }
                    ]
                },
                {
                    "ID": 2, "RegionName": "南アメリカ", "Countries":
                    [
                        { "ID": 4, "CountryName": "ブラジル" },
                        { "ID": 5, "CountryName": "ウルグアイ" }
                    ]
                },
                {
                    "ID": 3, "RegionName": "ヨーロッパ", "Countries":
                    [
                        { "ID": 6, "CountryName": "イギリス" },
                        { "ID": 7, "CountryName": "ドイツ" },
                        { "ID": 8, "CountryName": "ブルガリア" }
                    ]
                }
                ],
                bindings: {
                    textKey: "RegionName",
                    valueKey: "ID",
                    childDataProperty: "Countries",
                    bindings: {
                        textKey: "CountryName",
                        valueKey: "ID"
                    }
                }
            });

            //igDialog
            $("#dialog").igDialog({ height: 250, state: "closed" });
            $("#openDialog").igButton({
                labelText: "ダイアログを開く", click: function () {
                    $("#dialog").igDialog("open");
                }
            });

            // jQuery UI controls
            $("#accordion").accordion();
            $("#tabs").tabs();
            $("#slider").slider({ value: 10 });
            $("#menu").menu();
            $("#datepickerui").datepicker();
        });