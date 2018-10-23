$(function () {
var data = [
                 { "Country": "India", "Pop2025": 1416 },
                 { "Country": "China", "Pop2025": 1394 },
                 { "Country": "United States", "Pop2025": 351 },
                 { "Country": "Indonesia", "Pop2025": 277 },
                 { "Country": "Brazil", "Pop2025": 218 }
        ];

        $(function () {
            $("#chart").igCategoryChart({
                title: "Population per Country",
                subtitle: "Five largest projected populations for 2025",
                xAxisTitle: "Country",
                yAxisTitle: "Millions of People",
                dataSource: data,
                chartType: "column",
                tooltipTemplate: "tooltipTemplate"
            });
        });
});