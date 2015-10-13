$(function () {
var data = [
           { "ID": 1, "dataMode": "date" },
           { "ID": 2, "dataMode": "editModeText" },
           { "ID": 3, "dataMode": "displayModeText" }
        ];

        $(function () {
            $("#datePicker1").igDatePicker({
                width: "200px",
                minValue: new Date(2015, 6, 1),
                locale: "en",
                regional: "en"
            });

            $("#datePicker2").igDatePicker({
                width: "200px",
                maxValue: new Date(2018, 8, 8),
                locale: "en",
                regional: "en"
            });

            $("#dataModeCombo").igCombo({
                dataSource: data,
                valueKey: "ID",
                textKey: "dataMode",
                width: "200px",
                placeHolder: "change dataMode",
                enableClearButton: false,
                mode: "dropdown",
                initialSelectedItems: [{ index: 0 }],               
                selectionChanged: function (evt, ui) {
                    var selectedMode = ui.items[0].data.dataMode;
                    $("#datePicker1").igDatePicker("option", "dataMode", selectedMode);
                    $("#datePicker1").igDatePicker("option", "value", null);
                    $("#datePicker2").igDatePicker("option", "dataMode", selectedMode);
                    $("#datePicker2").igDatePicker("option", "value", null);
                }
            });

            var headers = $('h4');
            $("#form").submit(function (event) {
                var submittedValues = $("#form").serializeArray();
                $(".p").remove();
                for (var i = 0 ; i < submittedValues.length; i++) {
                    $("#results").append("<p class='p'><span class='header'>" + headers[i].textContent + ": " + "</span>  <b>" + submittedValues[i].value + "</b></p>");
                }
                return false;
            });
        });
});