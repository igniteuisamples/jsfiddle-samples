$(function () {

            var data = [
                { "CountryName": "中国", "Pop1990": 1141, "Pop2008": 1333, "Pop2025": 1458 },
                { "CountryName": "インド", "Pop1990": 849, "Pop2008": 1140, "Pop2025": 1398 },
                { "CountryName": "米国", "Pop1990": 250, "Pop2008": 304, "Pop2025": 352 },
                { "CountryName": "インドネシア", "Pop1990": 178, "Pop2008": 228, "Pop2025": 273 },
                { "CountryName": "ブラジル", "Pop1990": 150, "Pop2008": 192, "Pop2025": 223 }
            ];

            $("#chart").igDoughnutChart({
                width: "100%",
                height: "550px",
                innerExtent: 20,
                series:
                    [
                        {
                            name: "Pop1990",
                            labelMemberPath: "CountryName",
                            valueMemberPath: "Pop1990",
                            dataSource: data,
                            labelsPosition: "bestFit",
                            legend: { element: "legend" }
                        },
                        {
                            name: "Pop2008",
                            labelMemberPath: "CountryName",
                            valueMemberPath: "Pop2008",
                            dataSource: data,
                            labelsPosition: "bestFit",
                            legend: { element: "legend" }
                            
                        },
                        {
                            name: "Pop2025",
                            labelMemberPath: "CountryName",
                            valueMemberPath: "Pop2025",
                            dataSource: data,
                            labelsPosition: "bestFit",
                            legend: { element: "legend2" }
                        }
                    ]

            });

        });