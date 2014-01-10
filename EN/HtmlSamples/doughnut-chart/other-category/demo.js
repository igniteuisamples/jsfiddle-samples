$(function () {
            $("#chart").igDoughnutChart({
                width: "100%",
                height: "550px",
                series:
                    [
                        {
                            name: "Pop2025",
                            labelMemberPath: "name",
                            valueMemberPath: "goals",
                            dataSource: dataSource.sort(function (a, b) { return a.goals - b.goals; }),
                            othersCategoryType: "number",
                            othersCategoryThreshold: 15,
                            labelsPosition: "bestFit",
                            othersCategoryText: "Players with less than 15 goals",
                            formatLabel: function (context) {
                                if (context.isOthersSlice) 
                                    return "Players with less than 15 goals";
                                return context.item.name + " (" + context.item.goals + ")";
                            }
                        }
                    ]

            });

        });