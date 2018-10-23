$(function () {
            $("#columnChart").igCategoryChart({
                width: "99%",
                height: "350px",
                dataSource: lastFiveYears,
                chartType: "column",
                legend: { element: "columnLegend" },
                title: "Energy Production Per Country",
                subtitle: "The top five Total Primary Energy producers",
                yAxisTitle: "Quadrillion Btu",
                isTransitionInEnabled: true,
                transitionInDuration: 500
            });
        });