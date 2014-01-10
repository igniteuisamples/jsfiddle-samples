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
                            othersCategoryText: "15 得点未満のプレーヤー",
                            formatLabel: function (context) {
                                if (context.isOthersSlice) 
                                    return "15 得点未満のプレーヤー";
                                return context.item.name + " (" + context.item.goals + ")";
                            }
                        }
                    ]

            });

        });