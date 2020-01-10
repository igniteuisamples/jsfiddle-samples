$(function () {
var transparentBrush = "rgba(0,0,0,0)";
        var brush;

        $(function () {

            var data = [
                { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
                { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
                { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
                { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
                { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
            ];

            $("#chart").igDataChart({
                width: "450px",
                height: "400px",
                title: "国別人口",
                subtitle: "1995 年と 2005 年の人口の比較",
                dataSource: data,
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate",
                axes: [
                {
                    name: "xAxis",
                    type: "categoryX",
                    title: "国",
                    label: "CountryName",

                    majorStroke: "Green",
                    minorStroke: 'Red',
                    minorInterval: 2,
                    interval: 2,
                    majorStrokeThickness: 2,
                },
                {
                    name: "yAxis",
                    type: "numericY",
                    minimumValue: 0,
                    title: "人口 (百万人単位)",

                    majorStroke: "Green",
                    minorStroke: 'Red',
                    minorInterval: 100,
                    interval: 200,
                    majorStrokeThickness: 2,
                }
                ],
                series: [
                {
                    name: "2005Population",
                    type: "column",
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Pop2005"
                },
                {
                    name: "1995Population",
                    type: "column",
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Pop1995"
                }]
            })

        $("#XAxisMajorLinesCheckbox").click(function (e) {
            brush = $("#XAxisMajorLinesCheckbox").is(":checked") ? "Green" : transparentBrush;
            $("#chart").igDataChart("option", "axes", [{ name: "xAxis", majorStroke: brush }]);
            $("#chart").igDataChart("styleUpdated");
        });

        $("#XAxisMinorLinesCheckbox").click("change", function () {
            brush = ($(this).is(":checked")) ? "Red" : transparentBrush;
            $("#chart").igDataChart("option", "axes", [{ name: "xAxis", minorStroke: brush }]);
            $("#chart").igDataChart("styleUpdated");
        });

        $("#YAxisMajorLinesCheckbox").click("change", function () {
            brush = ($(this).is(":checked")) ? "Green" : transparentBrush;
            $("#chart").igDataChart("option", "axes", [{ name: "yAxis", majorStroke: brush }]);
            $("#chart").igDataChart("styleUpdated");
        });

        $("#YAxisMinorLinesCheckbox").click("change", function () {
            brush = ($(this).is(":checked")) ? "Red" : transparentBrush;
            $("#chart").igDataChart("option", "axes", [{ name: "yAxis", minorStroke: brush }]);
            $("#chart").igDataChart("styleUpdated");
        });

        $("#XAxisMajorGridlinesThicknessSlider").slider({
            min: 1,
            max: 10,
            value: 2,
            slide: function (e, ui) {
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", majorStrokeThickness: ui.value }
                ]);
                $("#XAxisMajorGridlinesThicknessLabel").text(ui.value);
            }
        });

        $("#XAxisMinorGridlinesThicknessSlider").slider({
            min: 1,
            max: 10,
            value: 1,
            slide: function (e, ui) {
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", minorStrokeThickness: ui.value }
                ]);
                $("#XAxisMinorGridlinesThicknessLabel").text(ui.value);
            }
        });

        $("#YAxisMajorGridlinesThicknessSlider").slider({
            min: 1,
            max: 10,
            value: 2,
            slide: function (e, ui) {
                $("#chart").igDataChart("option", "axes", [
                    { name: "yAxis", majorStrokeThickness: ui.value }
                ]);
                $("#YAxisMajorGridlinesThicknessLabel").text(ui.value);
            }
        });

        $("#YAxisMinorGridlinesThicknessSlider").slider({
            min: 1,
            max: 10,
            value: 1,
            slide: function (e, ui) {
                $("#chart").igDataChart("option", "axes", [
                    { name: "yAxis", minorStrokeThickness: ui.value }
                ]);
                $("#YAxisMinorGridlinesThicknessLabel").text(ui.value);
            }
        });

        $("#XAxisMajorGridlinesIntervalSlider").slider({
            min: 1,
            max: 5,
            value: 1,
            slide: function (e, ui) {
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", interval: ui.value }
                ]);
                $("#XAxisMajorGridlinesIntervalLabel").text(ui.value.toFixed(0));
            }
        });
        $("#YAxisMajorGridlinesIntervalSlider").slider({
            min: 100,
            max: 1000,
            value: 200,
            slide: function (e, ui) {
                $("#chart").igDataChart("option", "axes", [
                    { name: "yAxis", interval: ui.value }
                ]);
                $("#YAxisMajorGridlinesIntervalLabel").text(ui.value.toFixed(0));
            }
        });

        $("#XAxisMinorGridlinesIntervalSlider").slider({
            min: 1,
            max: 10,
            value: 50,
            slide: function (e, ui) {
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", minorInterval: (ui.value * .1) }
                ]);
                var num = ui.value * 0.1;
                $("#XAxisMinorGridlinesIntervalLabel").text(num.toFixed(2));
            }
        });
        $("#YAxisMinorGridlinesIntervalSlider").slider({
            min: 1,
            max: 20,
            value: 10,
            slide: function (e, ui) {
                $("#chart").igDataChart("option", "axes", [
                    { name: "yAxis", minorInterval: (ui.value * 10) }
                ]);
                $("#YAxisMinorGridlinesIntervalLabel").text(ui.value * 10);
            }
        });

        });
});