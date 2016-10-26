$(function () {

            var data = [
                { "CountryName": "中国", "Pop1990": 1141, "Pop2008": 1333, "Pop2025": 1458 },
                { "CountryName": "インド", "Pop1990": 849, "Pop2008": 1140, "Pop2025": 1398 },
                { "CountryName": "米国", "Pop1990": 250, "Pop2008": 304, "Pop2025": 352 },
                { "CountryName": "インドネシア", "Pop1990": 178, "Pop2008": 228, "Pop2025": 273 },
                { "CountryName": "ブラジル", "Pop1990": 150, "Pop2008": 192, "Pop2025": 223 }
            ];

            $("#chart").igPieChart({
                width: "435px",
                height: "435px",
                dataSource: data, //JSON data defined above
                dataValue: "Pop2008",
                dataLabel: "CountryName",
                labelsPosition: "bestFit"
            });

        });