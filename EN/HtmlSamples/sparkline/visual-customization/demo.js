$(function () {

            $("#slNightSky").igSparkline({
                dataSource: randomOldData,
                displayType: "area",
                height: "120px",
                width: "100%",
                valueMemberPath: 'Change',
                brush: "#446185",
                normalRangeVisibility: "visible",
                trendLineBrush: "#d0d0e0",
                trendLineType: "simpleAverage",
                markerVisibility: "visible",
                markerBrush: "#a8aec4",
                markerSize: 1
            });

            $("#slSnakeSkin").igSparkline({
                dataSource: randomOldData,
                displayType: "column",
                height: "120px",
                width: "100%",
                valueMemberPath: 'Change',
                labelMemberPath: 'DateString',
				horizontalAxisVisibility: 'visible',
				verticalAxisVisibility: 'visible',
                negativeBrush: "#cfc8c0",
                negativeMarkerVisibility: "collapsed",
                brush: "#bdada1",
                normalRangeVisibility: "visible",
                trendLineBrush: "#403636",
                trendLineType: "simpleAverage",
                markerVisibility: "visible",
                markerBrush: "#6e5348",
                trendLineThickness: 2
            });

        });