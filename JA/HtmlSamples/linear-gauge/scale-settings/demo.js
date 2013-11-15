$(function () {
            var $linearGauge = $("#lineargauge1");

            $linearGauge.igLinearGauge({
                width: '100%',
                height: '80px', 
                ranges: [
                    {
                        brush: '#FDB881',
                        name: 'bad',
                        startValue: 0,
                        endValue: 20
                    },
                    {
                        brush: '#F18B36',
                        name: 'acceptable',
                        startValue: 20,
                        endValue: 35
                    },
                    {
                        brush: '#D2660D',
                        name: 'good',
                        startValue: 35,
                        endValue: 100
                    }
                ], 
                value: 40, 
                needleStrokeThickness: 2,
                formatLabel: function (evt, ui) {
                    ui.label += "%";
                }
            });

            var $linearGauge2 = $("#lineargauge2");

            $linearGauge2.igLinearGauge({
                width: '100%',
                height: '80px', 
                ranges: [
                    {
                        brush: '#ABD652',
                        name: 'bad',
                        startValue: 0,
                        endValue: 45
                    },
                    {
                        brush: '#739F19',
                        name: 'acceptable',
                        startValue: 45,
                        endValue: 65
                    },
                    {
                        brush: '#527211',
                        name: 'good',
                        startValue: 65,
                        endValue: 100
                    }
                ], 
                value: 35,
                labelExtent: 0.76,
                tickStartExtent: 0.5,
                minorTickEndExtent: 0.54,
                minorTickStartExtent: 0.65,
                needleStrokeThickness: 2,
                formatLabel: function (evt, ui) {
                    ui.label += "%";
                }
            });


          

            var $linearGauge3 = $("#lineargauge3");

            $linearGauge3.igLinearGauge({
                width: '100%',
                height: '80px', 
                ranges: [
                    { 
                        name: 'bad',
                        startValue: 0,
                        endValue: 10
                    },
                    { 
                        name: 'acceptable',
                        startValue: 10,
                        endValue: 35
                    },
                    { 
                        name: 'good',
                        startValue: 35,
                        endValue: 100
                    }
                ], 
                value: 25,
                labelExtent: 0.76,
                tickBrush: '#F79646',
                minorTickBrush: '#F79646',
                fontBrush: '#11719A',
                ticksPreTerminal: 10, 
                ticksPostInitial: 10, 
                labelsPostInitial: 20, 
                labelsPreTerminal: 20, 
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                }
            });
        });