$(function () {
            /*----------------- Instantiation -------------------------*/
            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                width: '100%',
                height: '80px',
                ranges: [
                   {
                       name: 'low',
                       startValue: 0,
                       endValue: 1000,
                       outerStartExtent: .85,
                       outerEndExtent: .85
                   },
                   {
                       name: 'medium',
                       startValue: 1000,
                       endValue: 2000,
                       outerStartExtent: .85,
                       outerEndExtent: .85
                   } ,
                   {
                       name: 'high',
                       startValue: 2000,
                       endValue: 3000, 
                       outline: '#F79646',
                       strokeThickness: 2
                   }
                ],
                showToolTip: true,
                maximumValue: 3000,
                targetValue: 2700, 
                value: 2100,
                valueInnerExtent: 0.45,
                valueOuterExtent: 0.6,
                interval:500,
                formatLabel: function (evt, ui)
                {
                    ui.label = "$" + ui.value;
                }
            });

        });