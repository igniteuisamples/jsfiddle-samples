$(function () {
var evntCounter = 0, transperantBrush = "rgba(0,0,0,0)",
            axisStripBrush = "rgba(150,150,150,0.1)",
            axisStokeLinesBrush = "rgba(50,50,50,0.7)",
            axisMajorLinesBrush = "rgba(120,120,120,0.5)",
            axisMinorLinesBrush = "rgba(120,120,120,0.3)",
            axisTitleX = "日付",
            axisTitleY = "価格",
            priceSeriesOutline = "rgba(20,20,20,0.7)",
            priceSeriesPositiveBrush = "rgba(70,140,240,0.7)",
            priceSeriesNegativeBrush = "rgba(140,140,140,0.7)",
            priceTrendlineBrush = "rgba(70,140,240,0.7)",
            lineSeriesBrush = "rgba(90,190,65,0.7)",
            volumeTrendlineBrush = "rgba(190,130,65,0.7)",
            priceSeriesPositiveBrush2 = "#469ff1F",
            priceSeriesNegativeBrush2 = "#8c8d8eF",
            lineSeriesBrush2 = "#58bf41F",
            trendlineBrush2 = "#bf8641F", brush, negBrush, mType;
        
        $(function () {
            $("#chart").igDataChart({
                width: "500px",
                height: "500px",
                legend: { element: "chartLegend" },
                title: "Microsoft (MSFT) vs. Adobe (ADBE)",
                subtitle: "株価の比較",
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
                    {   name: "yAxis",
                        type: "numericY",
                        strokeThickness: 0.5,
                        stroke: axisStokeLinesBrush,
                        title: "価格",
                        tickLength: 0,
                    },
                    {
                        name: "yAxis2",
                        type: "numericY",
                        labelLocation: "outsideRight",
                        majorStroke: transperantBrush,
                        stroke: transperantBrush,
                        strokeThickness: 1,
                        tickLength: 0,
                        title: "価格",
                    }
                ],
                series: [{
                    type: "financial",
                    name: "priceSeries",
                    dataSource: data,
                    title: "価格シリーズ",
                    displayType: "candlestick",
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    brush: priceSeriesPositiveBrush,
                    negativeBrush: priceSeriesNegativeBrush,
                    thickness: 1,
                    trendLineThickness: 3,
                    trendLineBrush: priceTrendlineBrush,
                    trendLineType: "exponentialAverage",
                }, {
                    type: 'line',
                    name: 'lineSeries',
                    dataSource: dataAdobe,
                    brush: lineSeriesBrush,
                    markerBrush: lineSeriesBrush,
                    markerType: 'circle',
                    title: 'ボリューム シリーズ',
                    xAxis: 'xAxis',
                    yAxis: 'yAxis2',
                    valueMemberPath: 'Close',
                    //trendLineThickness: 3,
                    //trendlineBrush: trendlineBrush,
                    //trendLineType: 'modifiedAverage'
                }],
            });
            
            $("#axisStokeLines").click(function () {
                console.log('axisStokeLines');
                var brush = ($(this).is(":checked")) ? axisStokeLinesBrush : transperantBrush;
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", stroke: brush },
                    { name: "yAxis", stroke: brush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisMajorLines").click(function () {
                console.log('axisMajorLines');
                var brush = $(this).is(":checked") ? axisMajorLinesBrush : transperantBrush;
                $("#chart").igDataChart("option", "axes", [
                    //{ name: "xAxis", majorStroke: brush },
                    { name: "yAxis", majorStroke: brush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisMinorLines").click(function () {
                console.log('axisMinorLines');
                var brush = $(this).is(":checked") ? axisMinorLinesBrush : transperantBrush;
                $("#chart").igDataChart("option", "axes", [
                    //{ name: "xAxis", minorStroke: brush },
                    { name: "yAxis", minorStroke: brush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisStripes").click(function () {
                console.log('axisStripes');
                var brush = $(this).is(":checked") ? axisStripBrush : transperantBrush;
                $("#chart").igDataChart("option", "axes", [
                    //{ name: "xAxis", strip: brush },
                    { name: "yAxis", strip: brush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisLabels").click(function () {
                console.log('axisLabels');
                var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", labelVisibility: visibility },
                    { name: "yAxis", labelVisibility: visibility },
                    { name: "yAxis2", labelVisibility: visibility }]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisTickmarks").click(function () {
                console.log('axisTickmarks');
                var isVisible = ($(this).is(":checked"));
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", tickLength: isVisible ? 5 : 0 },
                    { name: "yAxis", tickLength: isVisible ? 5 : 0 }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            $("#axisTitles").click(function () {
                console.log('axisTitles');
                var isVisible = ($(this).is(":checked"));
                $("#chart").igDataChart("option", "axes", [
                    { name: "xAxis", title: isVisible ? axisTitleX : "" },
                    { name: "yAxis", title: isVisible ? axisTitleY : "" },
                    { name: "yAxis2", title: isVisible ? axisTitleY : "" }]);
                $("#chart").igDataChart("styleUpdated");
            });
            
            $("#legendCheckbox").click(function () {
                console.log('legendCheckbox');
                var visibility = ($(this).is(":checked")) ? "visible" : "hidden";
                $('#chartLegend').css("visibility", visibility);
            });

            $("#priceSeries").click(function () {
                console.log('priceSeries');
                var posBrush = ($(this).is(":checked")) ? priceSeriesPositiveBrush : transperantBrush;
                var negBrush = ($(this).is(":checked")) ? priceSeriesNegativeBrush : transperantBrush;
                var outlineBrush = ($(this).is(":checked")) ? priceSeriesOutline : transperantBrush;
                var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "series", [
                   {
                       name: "priceSeries",
                       brush: posBrush, negativeBrush: negBrush, outline: outlineBrush,
                       legendItemVisibility: visibility
                   }]);
                $("#chart").igDataChart("styleUpdated");
            });

            $("#priceTrendline").click(function () {
                console.log('priceSeries');
                var pBrush = ($(this).is(":checked")) ? priceTrendlineBrush : transperantBrush;
                var vBrush = ($(this).is(":checked")) ? volumeTrendlineBrush : transperantBrush;
                $("#chart").igDataChart("option", "series", [
                    { name: "priceSeries", trendLineBrush: pBrush }//,
                    //{ name: "lineSeries", trendLineBrush: vBrush }
                ]);
                $("#chart").igDataChart("styleUpdated");
            });
            
            $("#lineSeries").click(function () {
                console.log('lineSeries');
                var brush = ($(this).is(":checked")) ? lineSeriesBrush : transperantBrush;
                //var mType = ($(this).is(":checked")) ? "circle" : "none";
                var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "series", [
                    {
                        name: "lineSeries", brush: brush,
                        //markerType: mType,
                        legendItemVisibility: visibility
                    }]);
                $("#chart").igDataChart("styleUpdated");
            });
            
            $("#lineMarkers").click(function () {
                console.log('lineMarkers');
                var mType = ($(this).is(":checked")) ? "circle" : "none";
                $("#chart").igDataChart("option", "series", [
                    { name: "lineSeries", markerType: mType }]);
                $("#chart").igDataChart("styleUpdated");
            });
            
            $("#chartCrosshairs").click(function () {
                console.log('chartCrosshairs');
                var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "crosshairVisibility", visibility);
            });
            
            $("#chartOPD").click(function (e) {
                var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
                $("#chart").igDataChart("option", "overviewPlusDetailPaneVisibility", visibility);
                $("#chart").igDataChart("styleUpdated");
            });
        });
        
       
        //$("#priceSeries").click(function () {
        //    console.log('priceSeries');
        //    var brush = ($(this).is(":checked")) ? priceBrush : transperantBrush;
        //    var negBrush = ($(this).is(":checked")) ? negativeBrush : transperantBrush;
        //    var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
        //    $("#chart").igDataChart("option", "series", [
        //        { name: "priceSeries", brush: brush, negativeBrush: negBrush, outline: negBrush, legendItemVisibility: visibility }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});
        
       

        //$("#volumeTrendline").click(function () {
        //    console.log('volumeTrendline');
        //    var brush = ($(this).is(":checked")) ? trendlineBrush : transperantBrush;
        //    $("#chart").igDataChart("option", "series", [{ name: "series2", trendLineBrush: brush }]);
        //    $("#chart").igDataChart("styleUpdated");
        //});
        
       

       
        console.log('igDataChart');
});