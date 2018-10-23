$(function () {

                var data = [
                    { "CountryName": "中国", "Pop1990": 1141 },
                    { "CountryName": "インド", "Pop1990": 849 },
                    { "CountryName": "米国", "Pop1990": 250 },
                    { "CountryName": "インドネシア", "Pop1990": 178 },
                    { "CountryName": "ブラジル", "Pop1990": 150 }
                ];

                $("#chart").igDoughnutChart({
                    width: "100%",
                    height: "550px",
                    series:
                    [{
                        name: "Pop1990",
                        labelMemberPath: "CountryName",
                        valueMemberPath: "Pop1990",
                        dataSource: data,
                        labelsPosition: "bestFit",
                        formatLabel: function (context) {
                            return context.itemLabel + " (" + context.item.Pop1990 + ")";
                        }
                    }]
                });
            });