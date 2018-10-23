$(function () {
// variables
        var evntCounter = 0, transperantBrush = "rgba(0,0,0,0)",
            axisStripBrush = "rgba(150,150,150,0.1)",
            axisStokeLinesBrush = "rgba(50,50,50,0.7)",
            axisMajorLinesBrush = "rgba(120,120,120,0.5)",
            axisMinorLinesBrush = "rgba(120,120,120,0.3)",
            axisTitleX = "日付",
            axisTitleY = "価格",
            financialPositiveOutline = "rgba(20,20,20,0.7)",
            financialNegativeOutline = "rgba(20,20,20,0.7)",
            financialPositiveBrush = "rgba(70,140,240,0.7)",
            financialNegativeBrush = "rgba(240,20,20,0.7)",
            financialTrendlineBrush = "rgba(70,140,240,0.7)",
            volumeSeriesBrush = "rgba(90,190,65,0.7)",
            volumeTrendlineBrush = "rgba(190,130,65,0.7)",
            //financialPositiveBrush2 = "#469ff1F",
            //financialNegativeBrush2 = "#8c8d8eF",
            volumeSeriesBrush2 = "#58bf41F",
            trendlineBrush2 = "#bf8641F", brush, negBrush, mType;

        // creating igDataChart
        $(function () {
            $("#chart").igDataChart({
                width: "500px",
                height: "500px",
                legend: { element: "chartLegend" },
                title: "株価の比較",
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate",
                axes: [{
                        name: "xAxis",
                        type: "categoryX",
                        dataSource: data,
                        label: "Date",
                        strokeThickness: 0.5,
                        stroke: axisStokeLinesBrush,
                        title: "日付",
                        tickLength: 5,
                        interval: 10
                    },
                    {   name: "pAxis",
                        type: "numericY",
                        strokeThickness: 0.5,
                        stroke: axisStokeLinesBrush,
                        title: "価格",
                        tickLength: 0,
                        minimumValue: 25,
                    },
                    {
                        name: "vAxis",
                        type: "numericY",
                        labelLocation: "outsideRight",
                        majorStroke: transperantBrush,
                        stroke: transperantBrush,
                        strokeThickness: 1,
                        tickLength: 0,
                        title: "出来高",
                        minimumValue: 10000000,
                        maximumValue: 150000000,
                        abbreviateLargeNumbers: true,
                    }
                ],
                series: [{
                    type: "financial",
                    name: "financialSeries",
                    dataSource: data,
                    title: "価格シリーズ",
                    displayType: "candlestick",
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "pAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    brush: financialPositiveBrush,
                    outline: financialPositiveOutline,
                    negativeBrush: financialNegativeBrush,
                    negativeOutline: financialNegativeOutline,
                    thickness: 1,
                    trendLineThickness: 3,
                    trendLineBrush: financialTrendlineBrush,
                    trendLineType: "exponentialAverage",
                }, {
                    type: 'line',
                    name: 'volumeSeries',
                    dataSource: data,
                    brush: volumeSeriesBrush,
                    markerBrush: volumeSeriesBrush,
                    markerOutline: volumeSeriesBrush,
                    markerType: 'circle',
                    title: '折れ線系列',
                    xAxis: 'xAxis',
                    yAxis: 'vAxis',
                    valueMemberPath: 'Volume',
                }],
            });

            $("#axisStokeLines").click(function () {
                var brush = ($(this).is(":checked")) ? axisStokeLinesBrush : transperantBrush;
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", stroke: brush },
                    { name: "pAxis", stroke: brush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisMajorLines").click(function () {
                var brush = $(this).is(":checked") ? axisMajorLinesBrush : transperantBrush;
                $("#chart").igDataChart("option", "axes", [
                    { name: "pAxis", majorStroke: brush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisMinorLines").click(function () {
                var brush = $(this).is(":checked") ? axisMinorLinesBrush : transperantBrush;
                $("#chart").igDataChart("option", "axes", [
                    { name: "pAxis", minorStroke: brush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisStripes").click(function () {
                var brush = $(this).is(":checked") ? axisStripBrush : transperantBrush;
                $("#chart").igDataChart("option", "axes", [
                    { name: "pAxis", strip: brush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisLabels").click(function () {
                var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", labelVisibility: visibility },
                    { name: "pAxis", labelVisibility: visibility },
                    { name: "vAxis", labelVisibility: visibility }]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisTickmarks").click(function () {
                var isVisible = ($(this).is(":checked"));
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", tickLength: isVisible ? 5 : 0 },
                    { name: "pAxis", tickLength: isVisible ? 5 : 0 }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisTitles").click(function () {
                var isVisible = ($(this).is(":checked"));
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", title: isVisible ? axisTitleX : "" },
                    { name: "yAxis", title: isVisible ? axisTitleY : "" },
                    { name: "vAxis", title: isVisible ? axisTitleY : "" }]);
                $("#chart").igDataChart("styleUpdated");
            });

            $("#legendCheckbox").click(function () {
                var visibility = ($(this).is(":checked")) ? "visible" : "hidden";
                $('#chartLegend').css("visibility", visibility);
            });

            $("#financialSeries").click(function () {
                var isChecked = ($(this).is(":checked"));
                var posBrush = isChecked ? financialPositiveBrush : transperantBrush;
                var negBrush = isChecked ? financialNegativeBrush : transperantBrush;
                var posOutline = isChecked ? financialPositiveOutline : transperantBrush;
                var negOutline = isChecked ? financialNegativeOutline : transperantBrush;
                var visibility = isChecked ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "series", [
                   {
                       name: "financialSeries",
                       brush: posBrush,
                       negativeBrush: negBrush,
                       outline: posOutline,
                       negativeOutline: negOutline,
                       legendItemVisibility: visibility
                   }]);
                $("#chart").igDataChart("styleUpdated");
            });

            $("#financialTrendline").click(function () {
                var isChecked = ($(this).is(":checked"));
                var pBrush = isChecked ? financialTrendlineBrush : transperantBrush;
                var vBrush = isChecked ? volumeTrendlineBrush : transperantBrush;
                $("#chart").igDataChart("option", "series", [
                    { name: "financialSeries", trendLineBrush: pBrush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });

            $("#volumeSeries").click(function () {
                var brush = ($(this).is(":checked")) ? volumeSeriesBrush : transperantBrush;
                var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "series", [
                    {
                        name: "volumeSeries", brush: brush,
                        legendItemVisibility: visibility
                    }]);
                $("#chart").igDataChart("styleUpdated");
            });

            $("#lineMarkers").click(function () {
                var mType = ($(this).is(":checked")) ? "circle" : "none";
                $("#chart").igDataChart("option", "series", [
                    { name: "volumeSeries", markerType: mType }]);
                $("#chart").igDataChart("styleUpdated");
            });

            $("#chartCrosshairs").click(function () {
                var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "crosshairVisibility", visibility);
            });

            $("#chartOPD").click(function (e) {
                var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "overviewPlusDetailPaneVisibility", visibility);
                $("#chart").igDataChart("styleUpdated");
            });
        });
});