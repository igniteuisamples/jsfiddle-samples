$(function () {
            var today = new Date(),
            tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

            $("#currentTime").igDateEditor({
                dateInputFormat: "dateTime",
                value: new Date(),
                dataMode: "date",
                readOnly: true
            });

            $("#departure").igDatePicker({
                dateInputFormat: "ddd, MMM d, yyyy",
                value: today,
                regional: "en-US",
                dataMode: "date",
                datepickerOptions: {
                    minDate: today
                        },
                valueChanged: function (evt, ui) {
                    if (ui.newValue instanceof Date) {
                        var nextDay = new Date(ui.newValue.getTime() + 24 * 60 * 60 * 1000);
                        $("#return").igDatePicker("option", "value", nextDay);
                    }
                 }
            });

            $("#departureTime").igDateEditor({
                dateInputFormat: "hh:mm",
                value: new Date(),
                dataMode: "date",
                buttonType: "spin",
                width: 100
            });
            $("#return").igDatePicker({
                value: tomorrow,
                dateInputFormat: "ddd, MMM d, yyyy",
                regional: "en-US",
                dataMode: "date",
                    datepickerOptions: {
                        minDate: tomorrow,
                        numberOfMonths: [1, 2]
                    }
            });

            $("#returnTime").igDateEditor({
                dateInputFormat: "hh:mm",
                value: new Date(),
                dataMode: "date",
                buttonType: "spin",
                width: 100
            });

            $("#oneWayTicket").igCheckboxEditor({
                checked: false,
                valueChanged: function (evt, ui) {
                    if (ui.newState == true) {
                        $("#return").igDatePicker("option", "disabled", true);
                        $("#returnTime").igDateEditor("option", "disabled", true);

                    }
                    else {
                        $("#return").igDatePicker("option", "disabled", false);
                        $("#returnTime").igDateEditor("option", "disabled", false);

                    }
                }
            });

        });