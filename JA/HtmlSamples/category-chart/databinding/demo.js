$(function () {
// CODE SNIPPET
        var tabularData = [
            { "Year": "1995", "Brazil": 161, "Indonesia": 197, "United States": 266, "India": 920, "China": 1297 },
            { "Year": "2005", "Brazil": 186, "Indonesia": 229, "United States": 295, "India": 1090, "China": 1216 },
            { "Year": "2015", "Brazil": 204, "Indonesia": 256, "United States": 322, "India": 1251, "China": 1361 },
            { "Year": "2025", "Brazil": 218, "Indonesia": 277, "United States": 351, "India": 1396, "China": 1394 }];
        // excluding data columns on data source
        tabularData.__dataIntents = new Array();
        tabularData.__dataIntents["Brazil"] = ["DontPlot"];

        $(function () {
            $("#chart").igCategoryChart({
                dataSource: tabularData,
                // excluding data columns on CategoryChart
                excludedProperties: ["Indonesia"], 
            });

            $("#chart").igCategoryChart({ title: "人口の比較 (年)" });
            $("#chart").igCategoryChart({ subtitle: "ブラジル、インドネシア、米国、インド、中国の人口の比較" });
        });

        // CODE SNIPPET
});