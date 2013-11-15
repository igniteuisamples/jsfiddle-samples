$(function () {

            var data = [
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