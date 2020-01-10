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
                        // V.S. April 3rd 2019, Set the min date for return to be at least 1 day after departure
                        var currentValue = $("#return").igDatePicker("option", "value");
                        // Depending on the current value, first set minDate OR first set value in order to avoid notifier showing up
                        if (currentValue.getTime() > nextDay.getTime()) {
                            $("#return").igDatePicker("option", "datepickerOptions", {
                                minDate: nextDay
                            }).igDatePicker("option", "value", nextDay)
                        } else {
                            $("#return").igDatePicker("option", "value", nextDay).igDatePicker("option", "datepickerOptions", {
                                minDate: nextDay
                            })
                        }
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