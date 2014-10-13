$(function () {
            //igGrid
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                primaryKey: "ProductID",
                columns: [
                    { headerText: "Product ID", key: "ProductID", dataType: "string", width: "0%", hidden: true },
                    { headerText: "Product Name", key: "Name", dataType: "string", width: "40%" },
                    { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
                    { headerText: "List Price", key: "ListPrice", dataType: "number", width: "20%" },
                    { headerText: "Standard Cost", key: "StandardCost", dataType: "number", width: "20%" }
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
            $("#textEditor").igTextEditor();
            $("#dateEditor").igDateEditor();
            $("#maskEditor").igMaskEditor();
            $("#currencyEditor").igCurrencyEditor();
            $("#numericEditor").igNumericEditor();
            $("#percentEditor").igPercentEditor();
            $("#datePicker").igDatePicker({ width: 149 });

            //igCombo
            $("#combo").igCombo({
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
                    "ID": 1, "RegionName": "North America", "Countries":
                    [
                        { "ID": 1, "CountryName": "United States" },
                        { "ID": 2, "CountryName": "Canada" },
                        { "ID": 3, "CountryName": "Mexico" }
                    ]
                },
                {
                    "ID": 2, "RegionName": "South America", "Countries":
                    [
                        { "ID": 4, "CountryName": "Brazil" },
                        { "ID": 5, "CountryName": "Uruguay" }
                    ]
                },
                {
                    "ID": 3, "RegionName": "Europe", "Countries":
                    [
                        { "ID": 6, "CountryName": "United Kingdom" },
                        { "ID": 7, "CountryName": "Germany" },
                        { "ID": 8, "CountryName": "Bulgaria" }
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
                labelText: "Open Dialog", click: function () {
                    $("#dialog").igDialog("open");
                }
            });

            //igDataChart
            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                title: "Population per Country",
                subtitle: "Five largest projected populations for 2015",
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
                        title: "Country",
                        label: "CountryName"
                    },
                    {
                        name: "PopulationAxis",
                        type: "numericY",
                        minimumValue: 0,
                        title: "Millions of People",
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