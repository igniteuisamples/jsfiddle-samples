$(function () {
var data = [
                 { "CountryName": "India", "Pop2025": 1396 },
                 { "CountryName": "China", "Pop2025": 1394 },
                 { "CountryName": "United States", "Pop2025": 351 },
                 { "CountryName": "Indonesia", "Pop2025": 277 },
                 { "CountryName": "Brazil", "Pop2025": 218 }
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