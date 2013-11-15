$(function () {

            var $linearGauge = $("#lineargauge");

            $linearGauge.igLinearGauge({
                width: '100%',
                height: '80px',
                transitionDuration: 500,
                ranges: [
                    {
                        brush: '#803E01',
                        name: 'bad',
                        startValue: 0,
                        endValue: 5200
                    },
                    {
                        brush: '#BA5A05',
                        name: 'acceptable',
                        startValue: 5200,
                        endValue: 6400
                    },
                    {
                        brush: '#FF7A04',
                        name: 'good',
                        startValue: 6400,
                        endValue: 10000
                    }
                ],
                minimumValue: 0,
                maximumValue: 10000,
                value: 6000,                 
                needleShape:'rectangle',
                needleBrush:'orange',
                needleOutline:'#803e01',
                needleStrokeThickness: 2,
                formatLabel: function (evt, ui) {
                    ui.label += "K";
                }
            });

            var $linearGauge2 = $("#lineargauge2");

            $linearGauge2.igLinearGauge({
                width: '100%',
                height: '80px',
                transitionDuration: 500,
                ranges: [
                    {
                        brush: '#566509',
                        name: 'bad',
                        startValue: 0,
                        endValue: 3400
                    },
                    {
                        brush: '#7F950C',
                        name: 'acceptable',
                        startValue: 3400,
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
                needleShape: 'trapezoid',
                needleBrush: '#fff7a3',
                needleOutline:'#566509',
                needleStrokeThickness: 2,
                formatLabel: function (evt, ui) {
                    ui.label += "K";
                }
            });


            var $linearGauge3 = $("#lineargauge3");

            $linearGauge3.igLinearGauge({
                width: '100%',
                height: '80px',
                transitionDuration: 500,
                ranges: [
                    {
                        brush: '#566509',
                        name: 'bad',
                        startValue: 0,
                        endValue: 254
                    },
                    {
                        brush: '#7F950C',
                        name: 'acceptable',
                        startValue: 254,
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
                needleShape:'triangle',
                needleBrush:'#fff7a3',
                needleOutline:'#566509',
                needleStrokeThickness: 2,
                formatLabel: function (evt, ui) {
                    ui.label += "K";
                }
            });


            var $linearGauge4 = $("#lineargauge4");

            $linearGauge4.igLinearGauge({
                width: '100%',
                height: '80px',
                transitionDuration: 500,
                ranges: [
                    {
                        brush: '#11364D',
                        name: 'bad',
                        startValue: 0,
                        endValue: 60
                    },
                    {
                        brush: '#164F6D',
                        name: 'acceptable',
                        startValue: 60,
                        endValue: 70
                    },
                    {
                        brush: '#20789F',
                        name: 'good',
                        startValue: 70,
                        endValue: 100
                    }
                ],
                minimumValue: 0,
                maximumValue: 100,
                value: 50,
                needleShape:'custom' ,
                needleBrush: '#99D4FD',
                needleOutline: '#11364D',
                needleBreadth: 20,
                needleInnerExtent: 0.3, 
                needleOuterExtent: 0.7,
                needleOuterPointExtent: 0.9,
                needleInnerPointExtent: 0.3,
                needleInnerPointWidth: 0,
                needleOuterPointWidth: 0.3, 
                needleInnerBaseWidth: 0, 
                needleOuterBaseWidth: 0.07,
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                }
            });
        });