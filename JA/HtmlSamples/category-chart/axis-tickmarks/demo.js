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
                title: "国別人口",
                subtitle: "1995 年と 2005 年の人口比較",
                xAxisTitle: "国",
                yAxisTitle: "人口 (百万)",
                dataSource: data,
                chartType: "auto",
                xAxisTickLength: 5,
                yAxisTickLength: 5,
                xAxisTickStrokeThickness: 3,
                yAxisTickStrokeThickness: 3,
            });
        });

        $("#YAxixTickmarkColorPicker").change(function (e) {
            var ybrush = $(this).val();
            $("#chart").igCategoryChart("option", "yAxisTickStroke", ybrush);
        });

        $("#XAxixTickmarkColorPicker").change(function (e) {
            var xbrush = $(this).val();
            $("#chart").igCategoryChart("option", "xAxisTickStroke", xbrush);
        });

        $("#XAxisTickmarkLengthSlider").slider({
            min: 1,
            max: 50,
            value: 5,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisTickLength", ui.value);
                $("#XAxisTickmarkLengthValueLbl").text(ui.value);
            }
        });

        $("#XAxisTickmarkThicknessSlider").slider({
            min: 1,
            max: 20,
            value: 3,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "xAxisTickStrokeThickness", ui.value);
                $("#XAxisTickmarkThicknessValueLbl").text(ui.value);
            }
        });

        $("#YAxisTickmarkLengthSlider").slider({
            min: 1,
            max: 50,
            value: 5,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisTickLength", ui.value);
                $("#YAxisTickmarkLengthValueLbl").text(ui.value);
            }
        }); 

        $("#YAxisTickmarkThicknessSlider").slider({
            min: 1,
            max: 20,
            value: 3,
            slide: function (e, ui) {
                $("#chart").igCategoryChart("option", "yAxisTickStrokeThickness", ui.value);
                $("#YAxisTickmarkThicknessValueLbl").text(ui.value);
            }
        });
});