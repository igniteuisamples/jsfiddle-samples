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