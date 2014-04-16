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

            // jQuery UI controls
            $("#accordion").accordion();
            $("#tabs").tabs();
            $("#slider").slider({ value: 10 });
            $("#menu").menu();
            $("#datepickerui").datepicker();
        });