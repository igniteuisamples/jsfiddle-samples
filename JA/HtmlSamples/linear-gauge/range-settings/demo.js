$(function () {
            /*----------------- Instantiation -------------------------*/
            var $lineargauge = $("#lineargauge");

            $lineargauge.igLinearGauge({
                width: '100%',
                height: '80px',
                ranges: [
                   {
                       name: '寒い',
                       startValue: -20,
                       endValue: 0,
                       brush: '#2788B1',
                       outerStartExtent: .2,
                       outerEndExtent: .3
                   },
                   {
                       name: '穏やか',
                       startValue: 0,
                       endValue: 20,
                       brush: '#A4BA29',
                       outerStartExtent: .3,
                       outerEndExtent: .4
                   },
                   {
                       name: '暖かい',
                       startValue: 20,
                       endValue: 40,
                       brush: '#FDBD48',
                       outerStartExtent: .4,
                       outerEndExtent: .5
                   },
                   {
                       name: '暑い',
                       startValue: 40,
                       endValue: 60,
                       brush: '#D3404B',
                       outerStartExtent: .5,
                       outerEndExtent: .6
                   }
                ],
                showToolTip: true,
                minimumValue: -20,
                maximumValue: 60,
                value: 58,
                interval: 10,
                tickEndExtent:0.2,
                minorTickEndExtent:0.15 
            });

        });