$(function () {

            $("#lineSparkline").igSparkline({
                dataSource: randomOldData,
                displayType: "line",
                height: "100px",
                width: "100%",
                valueMemberPath: 'Change'
            });

            $("#areaSparkline").igSparkline({
                dataSource: randomOldData,
                displayType: "area",
                height: "100px",
                width: "100%",
                valueMemberPath: 'Change'
            });

            $("#columnSparkline").igSparkline({
                dataSource: randomOldData,
                displayType: "column",
                height: "100px",
                width: "100%",
                valueMemberPath: 'Change'
            });

            $("#winLossSparkline").igSparkline({
                dataSource: randomOldData,
                displayType: "winLoss",
                height: "100px",
                width: "100%",
                valueMemberPath: 'Change'
            });

        });