$(function () {

            var year = new Date().getFullYear();

            var data = [
                { High: 74, Low: 65, Date: new Date(year, 0, 1) },
                { High: 74, Low: 71, Date: new Date(year, 1, 1) },
                { High: 76, Low: 73, Date: new Date(year, 2, 1) },
                { High: 78, Low: 74, Date: new Date(year, 3, 1) },
                { High: 83, Low: 76, Date: new Date(year, 4, 1) },
                { High: 87, Low: 82, Date: new Date(year, 5, 1) },
                { High: 94, Low: 87, Date: new Date(year, 6, 1) },
                { High: 97, Low: 92, Date: new Date(year, 7, 1) },
                { High: 93, Low: 88, Date: new Date(year, 8, 1) },
                { High: 86, Low: 83, Date: new Date(year, 9, 1) },
                { High: 81, Low: 78, Date: new Date(year, 10, 1) },
                { High: 79, Low: 71, Date: new Date(year, 11, 1) }
            ];

            $("#chart").igCategoryChart({
                dataSource: data,
                chartType: "line",
                title: "天気のデータ",
                subtitle: "(高, 低)",
                xAxisTitle: "日付",
                yAxisTitle: "気温",
                xAxisFormatLabel: formatDateLabel,
                yAxisLabelLocation: "outsideRight",
                
                finalValueAnnotationsVisible: true
            });

            function formatDateLabel(item) {
                return item.Date.toLocaleDateString();
            }

        });