$(function () {

            var rusCallouts = [];
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

            var usaCallouts = [];
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

                    if (i == 0) {
                        usaItem.ChangeInValue = 0;
                        rusItem.ChangeInValue = 0;

                        usaItem.ChangePercentage = 0;
                        rusItem.ChangePercentage = 0;
                    } else {
                        usaItem.ChangeInValue = usaItem.Value - usa[i-1].Value;
                        rusItem.ChangeInValue = rusItem.Value - rus[i-1].Value;

                        usaItem.ChangePercentage = usaItem.ChangeInValue / usaItem.Value * 100.0;
                        rusItem.ChangePercentage = rusItem.ChangeInValue / rusItem.Value * 100.0;
                    }
                }
            }

            function GenerateCallouts() {
                for (var i = 0; i < usa.length; ++i) {
                    var usaItem = {};
                    usaItem.DataItem = usa[i];
                    usaItem.Content = "United States";
                    usaItem.Index = i;
                    usaItem.Value = usaItem.DataItem.ValueInMln;

                    var rusItem = {};
                    rusItem.DataItem = rus[i];
                    rusItem.Content = "Russia";
                    rusItem.Index = i;
                    rusItem.Value = rusItem.DataItem.ValueInMln;

                    if (i == 0) {
                        usaItem.Label = "";                    
                        rusItem.Label = "";
                    } else {
                        usaItem.Label = usa[i].ChangePercentage.toFixed(2) + "%";                    
                        rusItem.Label = rus[i].ChangePercentage.toFixed(2) + "%";
                    }
                    
                    usaCallouts.push(usaItem);
                    rusCallouts.push(rusItem);
                }
            }

            GenerateData();
            GenerateCallouts();

            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
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
                        title: "Population",
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
                        valueMemberPath: "ValueInMln",
                        brush: "#9E40F1",
                    },
                    {
                        name: "usaPopulation",
                        type: "line",
                        title: "USA",
                        dataSource: usa,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "ValueInMln",
                        brush: "#16B013",
                    },
                    {
                        name: "calloutSeriesUsa",
                        type: "calloutLayer",
                        dataSource: usaCallouts,
                        xMemberPath: "Index",
                        yMemberPath: "Value",
                        labelMemberPath: "Label",
                        contentMemberPath: "Content",
                        calloutBackground: "#16B013",
                        calloutLeaderBrush: "#16B013",
                        calloutOutline: "transparent",
                        calloutStrokeThickness: 0,
                    },
                    {
                        name: "calloutSeriesRus",
                        type: "calloutLayer",
                        dataSource: rusCallouts,
                        xMemberPath: "Index",
                        yMemberPath: "Value",
                        labelMemberPath: "Label",
                        contentMemberPath: "Content",
                        calloutBackground: "#9E40F1",
                        calloutLeaderBrush: "#9E40F1",
                        calloutOutline: "transparent",
                        calloutStrokeThickness: 0,
                    }
                ]
            });
            
        });