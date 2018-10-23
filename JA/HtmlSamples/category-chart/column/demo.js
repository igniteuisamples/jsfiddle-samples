$(function () {
            $("#columnChart").igCategoryChart({
                width: "99%",
                height: "350px",
                dataSource: lastFiveYears,
                chartType: "column",
                legend: { element: "columnLegend" },
                title: "国別エネルギー生産量",
                subtitle: "総一次エネルギー生産国トップ 5 ",
                yAxisTitle: "生産されたエネルギー (BTU 40 億単位)",
                isTransitionInEnabled: true,
                transitionInDuration: 500
            });
        });