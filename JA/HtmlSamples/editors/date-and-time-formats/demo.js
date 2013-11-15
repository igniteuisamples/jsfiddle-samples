$(function () {

            $("#defaultDateEditor").igDateEditor({
                width: 200,
                value: new Date()
            });

            $("#dateTimeEditor").igDateEditor({
                width: 200,
                dateInputFormat: "dateTime",
                value: new Date()
            });

            $("#timeEditor").igDateEditor({
                width: 200,
                dateInputFormat: "time",
                value: new Date()
            });

            $("#contraintEditor").igDateEditor({
                width: 200,
                minValue: new Date(),
                maxValue: new Date(),
                nullText: "今日の日付の入力",
                hideMaskOnFocus: true
            });

        });