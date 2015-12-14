$(function () {
/*start-snippet*/
        $(function () {

            // Data
            var populationData = [
                { "CountryName": "China", "1995": 1216, "2005": 1297, "2015": 1361, "2025": 1394 },
                { "CountryName": "India", "1995": 920, "2005": 1090, "2015": 1251, "2025": 1396 },
                { "CountryName": "United States", "1995": 266, "2005": 295, "2015": 322, "2025": 351 },
                { "CountryName": "Indonesia", "1995": 197, "2005": 229, "2015": 256, "2025": 277 },
                { "CountryName": "Brazil", "1995": 161, "2005": 186, "2015": 204, "2025": 218 }
            ];

            // Grid
            $("#grid").igGrid({
                width: "100%",
                dataSource: populationData,
                autoGenerateColumns: false,
                columns: [{
                    key: "CountryName",
                    headerText: "Country",
                    width: "33.33%"
                }, {
                    key: "2005",
                    headerText: "2005",
                    width: "33.33%"
                }, {
                    key: "2015",
                    headerText: "2015",
                    width: "33.33%"
                }],
                features: [{
                    name: "Sorting",
                    columnSettings: [{
                        columnKey: "2015",
                        currentSortDirection: "descending"
                    }]
                }]
            });

            // Data Chart
            $("#chart").igDataChart({
                width: "100%",
                height: "300px",
                title: "Population per Country",
                subtitle: "Five largest projected populations for 2015",
                dataSource: populationData,
                axes: [{
                    name: "NameAxis",
                    type: "categoryX",
                    title: "Country",
                    label: "CountryName"
                }, {
                    name: "PopulationAxis",
                    type: "numericY",
                    minimumValue: 0,
                    title: "Projected Population (Millions of People)",
                }],
                series: [{
                    name: "2015Population",
                    type: "column",
                    xAxis: "NameAxis",
                    yAxis: "PopulationAxis",
                    valueMemberPath: "2015"
                }]
            });

        });
        /*end-snippet*/
});