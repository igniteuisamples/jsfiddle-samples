$(function () {

            var data = [
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
            ];

            $("#tree").igTree({
                dataSource: data, //JSON Array defined above
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
        });