$(function () {
            $("#lineargauge").igLinearGauge({
                height: "100px",
                width: "100%",
                minimumValue: 0,
                maximumValue: 10, 
                value: 1,
                needleBrush: "white",
                needleOutline: "#2582a9",
                isNeedleDraggingEnabled: true,
                ranges: [
                   {
                       name: 'first',
                       startValue: 0,
                       endValue: 3, 
                   },
                   {
                       name: 'second',
                       startValue: 3,
                       endValue: 7, 
                   },
                   {
                       name: 'third',
                       startValue: 7,
                       endValue: 10, 
                   }
                ], 
            });
        });