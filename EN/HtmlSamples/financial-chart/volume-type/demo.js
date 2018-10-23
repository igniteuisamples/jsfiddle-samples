$(function () {
var comboData = [
            { "VolumeType": "column" },
            { "VolumeType": "line" },
            { "VolumeType": "area" }
        ];

        $(function () {

            var data = PriceData.AMZN();
            $("#chart").igFinancialChart({
                dataSource: data,
                volumeType: "area"
            });

            $("#chartTypePicker").igCombo({
                dataSource: comboData,
                mode: "dropdown",
                valueKey: "VolumeType",
                textKey: "VolumeType",
                dropDownOnFocus: true,
                initialSelectedItems: [
                    { index: 2 }
                ],
                selectionChanged: function (evt, ui) {
                    $("#chart").igFinancialChart("option", "volumeType", $("#chartTypePicker").igCombo("value"));
                }
            });
        });
});