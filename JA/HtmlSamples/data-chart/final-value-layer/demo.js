$(function () {

            var rus = [
                { Year: 1900, Value: 67473000 },
                { Year: 1910, Value: 77459000 },
                { Year: 1920, Value: 93459000 },
                { Year: 1930, Value: 102357000 },
                { Year: 1940, Value: 108377000 },
                { Year: 1950, Value: 112534000 },
                { Year: 1960, Value: 117534000 },
                { Year: 1970, Value: 130079000 },
                { Year: 1980, Value: 137552000 },
                { Year: 1990, Value: 147386000 },
                { Year: 2000, Value: 145166731 },
                { Year: 2010, Value: 142856836 },
                { Year: 2020, Value: 151880432 }
            ];

            var usa = [
                { Year: 1900, Value: 76212168 },
                { Year: 1910, Value: 92228496 },
                { Year: 1920, Value: 106021537 },
                { Year: 1930, Value: 123202624 },
                { Year: 1940, Value: 132164569 },
                { Year: 1950, Value: 151325798 },
                { Year: 1960, Value: 179323175 },
                { Year: 1970, Value: 203211926 },
                { Year: 1980, Value: 226545805 },
                { Year: 1990, Value: 248709873 },
                { Year: 2000, Value: 281421906 },
                { Year: 2010, Value: 308745538 },
                { Year: 2020, Value: 353745538 }
            ];

            function GenerateData() {
                for (var i = 0; i < usa.length; ++i) {
                    var rusItem = rus[i];
                    var usaItem = usa[i];

                    rusItem.ValueInMln = rusItem.Value / 1000000;
                    usaItem.ValueInMln = usaItem.Value / 1000000;
                }
            }

            GenerateData();

            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
                axes: [
                    {
                        name: "xAxis",
                        type: "categoryX",
                        label: "Year",
                        dataSource: usa
                    },
                    {
                        name: "yAxis",
                        type: "numericY",
                        title: "人口",
                        labelLocation: "outsideRight",
                        minimumValue: 0
                    }
                ],
                series: [
                    {
                        name: "russiaPopulation",
                        type: "line",
                        title: "Russia",
                        dataSource: rus,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "ValueInMln"
                    },
                    {
                        name: "usaPopulation",
                        type: "line",
                        title: "USA",
                        dataSource: usa,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "ValueInMln"
                    },
                    {
                        name: "finalValueSeries",
                        type: "finalValueLayer",
                        finalValueSelectionMode: "finalVisibleInterpolated"
                    }
                ]
            });
			
            $("input[name=finalValueSelectionMode]").change(function(evt, ui) {
                var series = $("#chart").igDataChart("option", "series");
                for (var i = 0; i < series.length; ++i) {
                    if (series[i].name === "finalValueSeries") {
                        series[i].finalValueSelectionMode = evt.currentTarget.value;

                        $("#chart").igDataChart("option", "series", series);
                        return;
                    }
                }
            });
            
        });