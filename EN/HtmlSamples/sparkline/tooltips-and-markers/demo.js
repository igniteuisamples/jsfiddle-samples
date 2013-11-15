$(function () {

            $("#sparkline").igSparkline({
                dataSource: randomOldData,
                height: "100px",
                width: "100%",
                displayType: "line",
                valueMemberPath: 'Change',
                markerVisibility: "visible",
                tooltipTemplate: "Low:${Low}<br>High:${High}"
            });

        });