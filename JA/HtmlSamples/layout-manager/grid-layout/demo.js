$(function () {
            $('#layout').igLayoutManager({
                layoutMode: "grid",
                width: "100%",
                height: "500px",
                gridLayout: {
                    cols: 3,
                    rows: 3
                },
                items: [
                    {
                        rowSpan: 2,
                        colSpan: 2,
                        colIndex: 0,
                        rowIndex: 0
                    },
                    {
                        rowSpan: 1,
                        colSpan: 1,
                        rowIndex: 0,
                        colIndex: 2
                    },
                    {
                        rowSpan: 1,
                        colSpan: 1,
                        rowIndex: 1,
                        colIndex: 2
                    },
                    {
                        rowSpan: 1,
                        colSpan: 3,
                        colIndex: 0,
                        rowIndex: 2
                    }
                ]
            });            

            $("#speedLineChart").igDataChart({
                width: "100%",
                height: "283px",
                dataSource: runningSpeedData,
                axes: [
                    {
                        name: "kmAxis",
                        type: "categoryX",
                        label: "km"
                    },
                    {
                        name: "averageSpeedAxis",
                        type: "numericY",
                        minimumValue: 8,
                        maximumValue: 15,
                        title: "スピード (km/h)",
                    }
                ],
                series: [
                    {
                        name: "speed",
                        type: "spline",
                        title: "speed",
                        xAxis: "kmAxis",
                        yAxis: "averageSpeedAxis",
                        valueMemberPath: "speedPerHour",
                        isTransitionInEnabled: true,
                        isHighlightingEnabled: true,
                        brush: "#f60",
                        thickness: 3
                    }
                ]
            });

            $("#totalKmBarChart").igDataChart({
                width: "100%",
                height: "117px",
                dataSource: lastMonthKmRun,
                outlines: ["rgba(0,0,0,0)"],
                axes: [{
                    name: "monthDayAxis",
                    type: "categoryX",
                    label: "monthDay",
                    interval: 1
                },
                {
                    name: "kmRunAxis",
                    type: "numericY",
                    title: "km"
                }],
                series: [{
                    name: "lastMonth",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "monthDayAxis",
                    yAxis: "kmRunAxis",
                    valueMemberPath: "kmRun",
                    brush: "#f60",
                    thickness: 0,
                    radius: 0
                }]
            });
        });