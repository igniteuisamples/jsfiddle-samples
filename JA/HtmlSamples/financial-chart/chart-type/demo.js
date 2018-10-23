$(function () {
var comboData = [
            { "ChartType": "bar" },
            { "ChartType": "line" },
            { "ChartType": "candle" },
            { "ChartType": "column" }
        ];

        $(function () {

            var data = PriceData.AMZN();
            $("#chart").igFinancialChart({
                dataSource: data,
                chartType: "candle",
                zoomSliderType: "candle",
            });

            $("#chartTypePicker").igCombo({
                dataSource: comboData,
                mode: "dropdown",
                valueKey: "ChartType",
                textKey: "ChartType",
                dropDownOnFocus: true,
                initialSelectedItems: [
                    { index: 2 }
                ],
                selectionChanged: function (evt, ui) {
                    $("#chart").igFinancialChart("option", "chartType", $("#chartTypePicker").igCombo("value"));
                }
            });

        });
});