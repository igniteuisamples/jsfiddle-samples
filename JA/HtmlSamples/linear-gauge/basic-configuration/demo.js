$(function () {
            $("#lineargauge").igLinearGauge({
                height: "80px",
                width: "100%",
                value: -273.15,
                minimumValue: -275,
                maximumValue: 0,
                ranges: [
                    {
                        startValue: -275, endValue: -225, name: "range1"
                    },
                    {
                        startValue: -225, endValue: -175, name: "range2"
                    },
                    {
                        startValue: -175, endValue: -125, name: "range3"
                    },
                    {
                        startValue: -125, endValue: -75, name: "range4"
                    },
                    {
                        startValue: -75, endValue: 0, name: "range5"
                    },
                ]
            });
        });