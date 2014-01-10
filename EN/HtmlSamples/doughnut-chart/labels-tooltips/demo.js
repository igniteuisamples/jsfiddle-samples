$(function () {
            var data = [
                { "DepartmentSize": 43, "Budget": 60, "Label": "Administration" },
                { "DepartmentSize": 29, "Budget": 40, "Label": "Sales" },
                { "DepartmentSize": 50, "Budget": 60, "Label": "IT" },
                { "DepartmentSize": 22, "Budget": 40, "Label": "Marketing" },
                { "DepartmentSize": 13, "Budget": 60, "Label": "Development" },
                { "DepartmentSize": 34, "Budget": 20, "Label": "Support" }];

            $("#chart").igDoughnutChart({
                width: "100%",
                height: "550px",
                innerExtent: 20,
                series:
                    [
                        {
                            name: "Budget",
                            labelMemberPath: "Label",
                            valueMemberPath: "Budget",
                            dataSource: data,
                            labelsPosition: "center",
                            showTooltip: true,
                            tooltipTemplate: "budgetTooltipTemplate"
                        },
                        {
                            name: "DepartmentSize",
                            labelMemberPath: "Label",
                            valueMemberPath: "DepartmentSize",
                            dataSource: data,
                            labelsPosition: "outsideEnd",
                            showTooltip: true,
                            tooltipTemplate: "<div class='ui-chart-tooltip'><div class='bold'>${item.Label}</div><div>Department Size: <label class='bold'>${item.DepartmentSize}</label></div></div>"
                        }
                    ]
            });

            $("#angleBudget").slider({
                slide: function (event, ui) {
                    $("#chart").igDoughnutChart("option", "series", [{ name: "Budget", startAngle: ui.value }]);
                },
                min: 0,
                max: 360
            });

            $("#angleDepartmentSize").slider({
                slide: function (event, ui) {
                    $("#chart").igDoughnutChart("updateSeries", { name: "DepartmentSize", startAngle: ui.value });
                },
                min: 0,
                max: 360
            });

            $("#innerExtent").slider({
                slide: function (event, ui) {
                    $("#chart").igDoughnutChart("option", "innerExtent", ui.value);
                },
                min: 0,
                max: 80,
                value: 20
            });

            $("#labelExtent").slider({
                slide: function (event, ui) {
                    $("#chart").igDoughnutChart("updateSeries", { name: "DepartmentSize", labelExtent: ui.value });
                },
                min: 0,
                max: 50,
                value: 10
            });

            $("#explodedRadius").slider({
                slide: function (event, ui) {
                    $("#chart").igPieChart("option", "explodedRadius", ui.value / 100);
                },
                min: 0,
                max: 100,
                value: 20
            });
            
            $("#labelPosition").change(function (e) {
                var labelPosition = $(this).val();
                $("#chart").igDoughnutChart("updateSeries", { name: "Budget", labelsPosition: labelPosition });
            });
            
            $("#labelPosition2").change(function (e) {
                var labelPosition = $(this).val();
                $("#chart").igDoughnutChart("updateSeries", { name: "DepartmentSize", labelsPosition: labelPosition });
                $("#labelExtent").slider("option", "disabled", labelPosition != "outsideEnd");
            });

        });