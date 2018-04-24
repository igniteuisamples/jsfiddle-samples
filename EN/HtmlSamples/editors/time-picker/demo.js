$(function () {
            $("#alarm").igTimePicker({
                timeInputFormat: "hh:mm tt",
                isLimitedToListValues: false,
                spinDelta: { hours: 1, minutes: 1 },
                buttonType: "spin",
                value: "07:15 AM"
            });

            $("#lunchBreak").igTimePicker({
                timeInputFormat: "HH:mm",
                timeDisplayFormat: "HH:mm",
                minValue: "11:00",
                maxValue: "14:00",
                itemsDelta: { hours: 1, minutes: 0 },
                value: "12:00"
            });

            $("#meetingTime").igTimePicker({
                timeInputFormat: "HH:mm",
                timeDisplayFormat: "HH:mm",
                minValue: "09:00",
                maxValue: "18:00",
                buttonType: "clear",
                value: "14:00"
            });
        });