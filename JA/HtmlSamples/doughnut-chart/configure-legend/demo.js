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
                        labelMemberPath: "Pop1990",
                        valueMemberPath: "Pop1990",
                        dataSource: data,
                        formatLabel: function (context) {
                            return "(" + context.itemLabel + ")";
                        }
                    },
                    {
                        name: "Pop2008",
                        labelMemberPath: "CountryName",
                        valueMemberPath: "Pop2008",
                        dataSource: data,
                        legend: { element: "legend" },
                        formatLabel: function (context) {
                            return context.itemLabel + " (" + context.item.Pop2008 + ")";
                        }
                    }
                ],
                // the legend items get refreshed every time the doughnut is re-rendered
                // use this event to update the legend items labels
                holeDimensionsChanged: function () {
                    updateLegendItems();
                }
            });

            // the legend items have the value associated with the specific series in parentheses ()
            // remove this text making the legend applicable for both series
            function updateLegendItems() {
                $(".ui-chart-legend-item-text > span").each(function () {
                    var txt = $(this).text(),
                    idx = txt.lastIndexOf("(");
                    if (idx != -1) {
                        $(this).text(txt.substr(0, idx));
                    } else {
                        return false;
                    }
                });
            }

            updateLegendItems();
        });