$(function () {

            data = [{ "Budget": 60, "Label": "事務" }, { "Budget": 40, "Label": "セールス" },
                { "Budget": 60, "Label": "IT" }, { "Budget": 40, "Label": "マーケティング" },
                { "Budget": 60, "Label": "開発" }, { "Budget": 20, "Label": "サポート" }];

            $('#chart1').igPieChart({
                dataSource: data,
                width: '430px',
                height: '430px',
                valueMemberPath: 'Budget',
                labelMemberPath: 'Label',
                explodedSlices: [2, 3],
                radiusFactor: .6,
                labelsPosition: "outsideEnd",
                leaderLineType: "arc",
                labelExtent: 40,
                legend: { element: 'legend', type: "item" }
            });

            $("#angle").slider({
                slide: function (event, ui) {
                    $("#chart1").igPieChart("option", "startAngle", ui.value);
                },
                min: 0,
                max: 360
            });

            $("#radius").slider({
                slide: function (event, ui) {
                    $("#chart1").igPieChart("option", "radiusFactor", ui.value / 1000.0);
                },
                min: 0,
                max: 1000,
                value: 600
            });

            $("#labelExtent").slider({
                slide: function (event, ui) {
                    $("#chart1").igPieChart("option", "labelExtent", ui.value);
                },
                min: 0,
                max: 50,
                value: 40
            });
            
            $("#explodedRadius").slider({
                slide: function (event, ui) {
                    $("#chart1").igPieChart("option", "explodedRadius", ui.value / 100);
                },
                min: 0,
                max: 100,
                value: 20
            });

            $("#labelPosition").igCombo({
                enableClearButton: false,
                mode: "dropdown",
                selectionChanged: function (evt, ui) {
                    if ($.isArray(ui.items) && ui.items[0] != undefined) {
                        $("#chart1").igPieChart("option", "labelsPosition", ui.items[0].data.value);

                        $("#labelExtent").slider("option", "disabled", ui.items[0].data.value != "outsideEnd");
                        $("#leaderLine").igCombo("option", "disabled", ui.items[0].data.value != "outsideEnd" ? true : false);
                    }
                }
            });
            
            $("#leaderLine").igCombo({
                enableClearButton: false,
                mode: "dropdown",
                selectionChanged: function (evt, ui) {
                    if ($.isArray(ui.items) && ui.items[0] != undefined) {
                        $("#chart1").igPieChart("option", "leaderLineType", ui.items[0].data.value);
                    }
                }
            });

        });