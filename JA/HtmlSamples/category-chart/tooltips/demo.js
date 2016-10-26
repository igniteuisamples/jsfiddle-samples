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
                title: "国別人口",
                subtitle: "2025 年推計人口トップ 5",
                xAxisTitle: "国",
                yAxisTitle: "人口 (百万)",
                dataSource: data,
                chartType: "column",
                tooltipTemplate: "tooltipTemplate"
            });
        });
});