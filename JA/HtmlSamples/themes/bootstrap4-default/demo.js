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
                height: 20,
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

            //igDataChart
            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                title: "国別人口",
                subtitle: "2015 年推計人口トップ 5",
                dataSource: [
                { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
                { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
                { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
                { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
                { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
                ],
                axes: [
                    {
                        name: "NameAxis",
                        type: "categoryX",
                        title: "国",
                        label: "CountryName"
                    },
                    {
                        name: "PopulationAxis",
                        type: "numericY",
                        minimumValue: 0,
                        title: "予期人口 (百万人単位)",
                    }
                ],
                series: [
                    {
                        name: "2015Population",
                        type: "column",
                        isHighlightingEnabled: true,
                        isTransitionInEnabled: true,
                        xAxis: "NameAxis",
                        yAxis: "PopulationAxis",
                        valueMemberPath: "Pop2015"
                    }
                ]
            });

            // jQuery UI controls
            $("#tabs").tabs();
            $("#datepickerui").datepicker();
        });