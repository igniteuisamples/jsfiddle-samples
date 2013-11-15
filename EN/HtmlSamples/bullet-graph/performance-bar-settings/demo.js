$(function () {
            
            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                width: "100%",
                height: "80px", 
                ranges: [
                    {
                        brush:'#803E01',
                        name: 'bad',
                        startValue: 0,
                        endValue: 5000
                    },
                    {
                        brush: '#BA5A05',
                        name: 'acceptable',
                        startValue: 5000,
                        endValue: 6000
                    },
                    {
                        brush: '#FF7A04',
                        name: 'good',
                        startValue: 6000,
                        endValue: 10000
                    }
                ],
                minimumValue: 0,
                maximumValue: 10000,
                value: 6500, 
                valueInnerExtent: 0.5,
                valueOuterExtent: 0.65, 
                targetValue: 7000, 
                formatLabel: function (evt, ui) {
                    ui.label += "K";
                }
            });

            var $bulletGraph2 = $("#bulletgraph2");

            $bulletGraph2.igBulletGraph({
                width: "100%",
                height: "80px", 
                ranges: [
                    {
                        brush: '#566509',
                        name: 'bad',
                        startValue: 0,
                        endValue: 3000
                    },
                    {
                        brush: '#7F950C',
                        name: 'acceptable',
                        startValue: 3000,
                        endValue: 4000
                    },
                    {
                        brush: '#AABF31',
                        name: 'good',
                        startValue: 4000,
                        endValue: 10000
                    }
                ],
                minimumValue: 0,
                maximumValue: 10000,
                value: 5000, 
                valueInnerExtent: 0.5,
                valueOuterExtent: 0.65,
                targetValue: 6000,
                targetValueBreadth: 12, 
                formatLabel: function (evt, ui) {
                    ui.label += "K";
                }
            });


            var $bulletGraph3 = $("#bulletgraph3");

            $bulletGraph3.igBulletGraph({
                width: "100%",
                height: "80px", 
                ranges: [
                    {
                        brush: '#566509',
                        name: 'bad',
                        startValue: 0,
                        endValue: 250
                    },
                    {
                        brush: '#7F950C',
                        name: 'acceptable',
                        startValue: 250,
                        endValue: 300
                    },
                    {
                        brush: '#AABF31',
                        name: 'good',
                        startValue: 300,
                        endValue: 500
                    }
                ],
                minimumValue: 0,
                maximumValue: 500,
                value: 350, 
                valueInnerExtent: 0.35,
                valueOuterExtent: 0.8,
                targetValue: 400, 
                formatLabel: function (evt, ui) {
                    ui.label += "K";
                }
            });


            var $bulletGraph4 = $("#bulletgraph4");

            $bulletGraph4.igBulletGraph({
                width: "100%",
                height: "80px", 
                ranges: [
                    {
                        brush: '#11364D',
                        name: 'bad',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        brush: '#164F6D',
                        name: 'acceptable',
                        startValue: 50,
                        endValue: 70
                    },
                    {
                        brush: '#20789F',
                        name: 'good',
                        startValue: 70,
                        endValue: 100
                    }
                ], 
                maximumValue: 100,
                value: 55, 
                targetValue: 73,
                valueBrush:"#B3E0F7",
                targetValueBrush:"#B3E0F7",
                targetValueOutline:"#B3E0F7",
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                }
            });
        });