$(function () {
            $("#priceChart").igDataChart({
                width: "450px",
                height: "400px",
                dataSource: data,
                title: "Microsoft Stock (MSFT)",
                subtitle: "Data over two months",
                axes: [{
                    type: "categoryX",
                    label: "Date",
                    name: "xAxis",
                    interval: 10,
                    title: "Date"
                }, {
                    type: "numericY",
                    name: "yAxis",
                    title: "Price"
                }],
                series: [{
                    type: "financial",
                    isTransitionInEnabled: true,
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "priceSeries",
                    title: "Price Data"
                }]
            });

            $("#indicatorChart").igDataChart({
                width: "450px",
                height: "400px",
                dataSource: data,
                title: "Financial Chart",
                axes: [{
                    type: "categoryX",
                    label: "Date",
                    name: "xAxis",
                    interval: 10,
                    title: "Date"
                }, {
                    type: "numericY",
                    name: "yAxis",
                    title: "Price"
                }],
                series: [{
                    type: "moneyFlowIndexIndicator",
                    isTransitionInEnabled: true,
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "indicatorSeries",
                    title: "Financial Indicator Data"
                }]
            });

            $("#cbxIndicator").igCombo({
                width: "400px",
                enableClearButton: false,
                mode: "dropdown",
                dataSource: indicators,
                textKey: "text",
                valueKey: "key",
                selectedItems: [{ index: 17 }],
                selectionChanged: function (evt, ui) {
                    if (ui.items && ui.items[0]) {
                        changeIndicator(ui.items[0].value);
                    }
                }
            });

        });

        function changeIndicator(newIndicator) {
            $("#indicatorChart").igDataChart("option", "series", [{
                name: "indicatorSeries",
                remove: true
            }]);

            $("#indicatorChart").igDataChart("option", "series", [{
                type: newIndicator,
                name: "indicatorSeries",
                title: "Financial Indicator Data",
                xAxis: "xAxis",
                yAxis: "yAxis",
                closeMemberPath: "Close",
                highMemberPath: "High",
                lowMemberPath: "Low",
                openMemberPath: "Open",
                volumeMemberPath: "Volume"
            }]);
        };