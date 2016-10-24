$(function () {
var data = [
                 { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
                 { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
                 { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
                 { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
                 { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
        ];

        $(function () {
            $("#chart").igCategoryChart({
                title: "Population per Country",
                subtitle: "A comparison of population in 1995 and 2005",
                xAxisTitle: "Country",
                yAxisTitle: "Millions of People",
                dataSource: data,
                chartType: "auto"
            });
        });

        $("#XAxisLabelColorPicker").change(function (e) {
            var xbrush = $(this).val();
            $("#chart").igCategoryChart("option", "xAxisLabelTextColor", xbrush);
        });

        $("#XAxisLabelMarginSlider").slider({
            min: 0,
            max: 25,
            value: 5,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisLabelTopMargin", ui.value);
                $("#chart").igCategoryChart("option", "xAxisLabelBottomMargin", ui.value);
                $("#XAxisLabelMarginValueLbl").text(ui.value);
            }
        });

        $("#YAxisLabelColorPicker").change(function (e) {
            var xbrush = $(this).val();
            $("#chart").igCategoryChart("option", "yAxisLabelTextColor", xbrush);
        });

        $("#YAxisLabelMarginSlider").slider({
            min: 0,
            max: 25,
            value: 5,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisLabelLeftMargin", ui.value);
                $("#chart").igCategoryChart("option", "yAxisLabelRightMargin", ui.value);
                $("#YAxisLabelMarginValueLbl").text(ui.value);
            }
        });
});