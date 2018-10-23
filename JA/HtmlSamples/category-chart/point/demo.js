$(function () {

            var data = [
               { "Year": "1995", "China": 1297, "India": 920, "United States": 266 },
               { "Year": "2005", "China": 1216, "India": 1090, "United States": 295 },
               { "Year": "2010", "China": 1271, "India": 1131, "United States": 314 },
               { "Year": "2015", "China": 1361, "India": 1251, "United States": 322 },
               { "Year": "2020", "China": 1381, "India": 1341, "United States": 342 },
               { "Year": "2025", "China": 1394, "India": 1466, "United States": 361 }
            ];

            $("#chart").igCategoryChart({
                width: "98%",
                height: "400px",
                legend: { element: "chartLegend" },
                title: "国別人口",
                subtitle: "1995 年と 2005 年の人口の比較",
                yAxisTitle: "人口 (百万人単位)",
                dataSource: data,
                chartType: "point",
                isTransitionInEnabled: true,
                transitionInDuration: 500
            });
        });