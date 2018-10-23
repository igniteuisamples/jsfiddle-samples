$(function () {
var data = [
                 { "CountryName": "CHN", "Population 1995": 1216, "Population 2005": 1297, "Population 2015": 1361, "Population 2025": 1394 },
                 { "CountryName": "IND", "Population 1995": 920, "Population 2005": 1090, "Population 2015": 1251, "Population 2025": 1396 },
                 { "CountryName": "USA", "Population 1995": 266, "Population 2005": 295, "Population 2015": 322, "Population 2025": 351 },
                 { "CountryName": "BRA", "Population 1995": 161, "Population 2005": 186, "Population 2015": 204, "Population 2025": 218 }
        ];

        // CODE SNIPPET
        $(function () {
            $("#chart").igCategoryChart({
                dataSource: data,
                chartType: "auto",
                xAxisTickLength: 10,
                yAxisTickLength: 10,
                xAxisTickStrokeThickness: 1,
                yAxisTickStrokeThickness: 1,
                xAxisTickStroke: "gray",
                yAxisTickStroke: "gray",
            });
        });
        // CODE SNIPPET

        $("#chart").igCategoryChart({ title: "国別人口" });

        $("#YAxixTickmarkColorPicker").change(function (e) {
            var brush = $(this).val();
            $("#chart").igCategoryChart("option", "yAxisTickStroke", brush);
        });

        $("#XAxixTickmarkColorPicker").change(function (e) {
            var brush = $(this).val();
            $("#chart").igCategoryChart("option", "xAxisTickStroke", brush);
        });

        $("#XAxisTickmarkLengthSlider").slider({
            min: 1, max: 50, value: 10,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisTickLength", ui.value);
                $("#XAxisTickmarkLength").text(ui.value);
            }
        });

        $("#YAxisTickmarkLengthSlider").slider({
            min: 1, max: 50, value: 10,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisTickLength", ui.value);
                $("#YAxisTickmarkLength").text(ui.value);
            }
        });

        $("#XAxisTickmarkThicknessSlider").slider({
            min: 1, max: 20, value: 2,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisTickStrokeThickness", ui.value);
                $("#XAxisTickmarkThickness").text(ui.value);
            }
        });

        $("#YAxisTickmarkThicknessSlider").slider({
            min: 1, max: 20, value: 2,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisTickStrokeThickness", ui.value);
                $("#YAxisTickmarkThickness").text(ui.value);
            }
        });
});