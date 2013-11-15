$(function () {
            $("#bulletgraph").igBulletGraph({
                height: "80px",
                width: "100%",
                minimumValue: 0, // default is 0
                maximumValue: 25, // default is 100
                interval: 5,
                value: 17,
                targetValue: 21,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 15
                    },
                    {
                        name: 'acceptable',
                        startValue: 15,
                        endValue: 20
                    },
                    {
                        name: 'good',
                        startValue: 20,
                        endValue: 25
                    }], 
                formatLabel: function (evt, ui) {
                        ui.label = ui.label+"K";
                    }
            });
        });