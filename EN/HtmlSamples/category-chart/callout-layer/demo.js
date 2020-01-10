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

            var calloutData = [];
            
            function generateCalloutData() {
                var index = 0;
                var tempLowest = Number.MAX_SAFE_INTEGER;
                var tempHighest = Number.MIN_SAFE_INTEGER;
                var lowItem = null;
                var highItem = null;

                for (var item of data) {

                    item.calloutIndex = index;
                    if (tempLowest > item.Low)
                    {
                        tempLowest = item.Low;
                        lowItem = item;
                        lowItem.calloutIndex = index + 0.5;
                    }
                    if (tempHighest < item.High)
                    {
                        tempHighest = item.High;
                        highItem = item;
                    } 

                    item.calloutValue = item.High;

                    if (item.Date.getMonth() === 0 || item.Date.getMonth() === 1 || item.Date.getMonth() === 11)
                        item.calloutContent = "WiNTER";
                    else if (item.Date.getMonth() === 2 || item.Date.getMonth() === 3 || item.Date.getMonth() === 4)
                        item.calloutContent = "SPRING";
                    else if (item.Date.getMonth() === 5 || item.Date.getMonth() === 6 || item.Date.getMonth() === 7)
                        item.calloutContent = "SUMMER";
                    else if (item.Date.getMonth() === 8 || item.Date.getMonth() === 9 || item.Date.getMonth() === 10)
                        item.calloutContent = "FALL";

                    ++index;
                }
                
                lowItem.calloutContent = "COLDEST";
                highItem.calloutContent = "HOTTEST";
                lowItem.calloutValue = lowItem.Low;
                highItem.calloutValue = highItem.High;
            }
            
            generateCalloutData();

            $("#chart").igCategoryChart({
                dataSource: data,
                chartType: "column",
                title: "Weather Data",
                subtitle: "(High, Low)",
                xAxisTitle: "Day in Study",
                yAxisTitle: "Temperature",
                xAxisFormatLabel: formatDateLabel,
                includedProperties: ["Date", "High", "Low"],

                calloutsVisible: true,
                calloutsItemsSource: data,
                calloutsXMemberPath: "calloutIndex",
                calloutsYMemberPath: "calloutValue",
                calloutsLabelMemberPath: "calloutContent",
                calloutsContentMemberPath: "calloutContent"
            });

            function formatDateLabel(item) {
                return item.Date.toLocaleDateString();
            }

        });