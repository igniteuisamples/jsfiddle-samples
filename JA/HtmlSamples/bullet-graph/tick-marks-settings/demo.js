$(function () {
            var $bulletGraph1 = $("#bulletgraph1");

            $bulletGraph1.igBulletGraph({
                height: '80px',
                width: '100%',
                // The interval to use for the ticks. Default value is calculated, rather than predefined, to show 11 ticks based on the minimum and maximum values (in this case value would equal to 75)
                //interval: 75,
                // Gets or sets the position at which to start rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                tickStartExtent: 0.02,
                // Gets or sets the position at which to stop rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                tickEndExtent: 0.2,
                // A value to start adding tickmarks, added to the scale's MinimumValue.
                ticksPostInitial: 0,
                // A value to stop adding tickmarks, subtracted from the scale's MaximumValue.
                ticksPreTerminal: 0,
                // Gets or sets the stroke thickness to use when rendering ticks.
                tickStrokeThickness: 2,
                // Gets or sets the brush to use for the major tickmarks.
                tickBrush: 'black',
                // Gets or sets the number of minor tickmarks to place between major tickmarks.
                minorTickCount: 3,
                // Gets or sets the position at which to start rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                minorTickStartExtent: 0.06,
                // Gets or sets the position at which to stop rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                minorTickEndExtent: 0.2,
                // Gets or sets the stroke thickness to use when rendering minor ticks.
                minorTickStrokeThickness: 1,
                // Gets or sets the brush to use for the minor tickmarks.
                minorTickBrush: '#EBEBEB',
                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 450 
                    },
                    {
                        name: 'range2',
                        startValue: 450,
                        endValue: 600,
                    },
                    {
                        name: 'range3',
                        startValue: 600,
                        endValue: 750
                    }
                ],
                maximumValue: 750,
                targetValue: 550, 
                value: 555 
            });

            var $bulletGraph2 = $("#bulletgraph2");
            
            $bulletGraph2.igBulletGraph({
                height: '80px',
                width: '100%',
                // The interval to use for the ticks.
                interval: 150,                 
                // Gets or sets the brush to use for the major tickmarks.
                tickBrush: 'Black',
                // Gets or sets the stroke thickness to use when rendering ticks.
                tickStrokeThickness: 3,
                // Gets or sets the number of minor tickmarks to place between major tickmarks.
                minorTickCount: 4,                
                // Gets or sets the brush to use for the minor tickmarks.
                minorTickBrush: '#F79646',
                // Gets or sets the stroke thickness to use when rendering minor ticks.
                minorTickStrokeThickness: 2,
                // Gets or sets the brush to use for the minor tickmarks.
                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 300
                    },
                    {
                        name: 'range2',
                        startValue: 300,
                        endValue: 570 
                    },
                    {
                        name: 'range3',
                        startValue: 570,
                        endValue: 750
                    }
                ],
                maximumValue: 750,
                targetValue: 620,
                labelInterval: 150,
                value: 600 
            });

            var $bulletGraph3 = $("#bulletgraph3");

            $bulletGraph3.igBulletGraph({
                height: '80px',
                width: '100%',
                interval: 150,
                tickBrush: '#F79646',
                // Gets or sets the position at which to start rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                tickStartExtent: 0.95,
                // Gets or sets the position at which to stop rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                tickEndExtent: 0.15,              
                tickStrokeThickness: 3,                
                minorTickCount: 4,
                // Gets or sets the position at which to start rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                minorTickStartExtent:.35,
                // Gets or sets the position at which to stop rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                minorTickEndExtent: 0.2,
                minorTickStrokeThickness: 1,
                minorTickBrush: 'white',
                // A value to start adding tickmarks, added to the scale's MinimumValue.
                ticksPostInitial: 50,
                // A value to stop adding tickmarks, subtracted from the scale's MaximumValue.
                ticksPreTerminal: 100,
                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 300
                    },
                    {
                        name: 'range2',
                        startValue: 300,
                        endValue: 570
                    },
                    {
                        name: 'range3',
                        startValue: 570,
                        endValue: 750
                    }
                ],
                labelsPostInitial: 50,
                labelsPreTerminal: 100,
                maximumValue: 750,
                targetValue: 600,
                labelInterval: 100,
                value: 575 
            });
        });