$(function () {

            $("#defaultDateEditor").igDateEditor({
                width: 200,
                value: "09/09/2015"
            });

            $("#dateTimeEditor").igDateEditor({
                width: 200,
                dateInputFormat: "dateTime",
                value: "09/09/2015"
            });

            $("#timeEditor").igDateEditor({
                width: 200,
                dateInputFormat: "time",
                value: "09/09/2015"
            });

            $("#constraintEditor").igDateEditor({
                width: 200,
                minValue: "24/09/2012",
                maxValue: "24/09/2018",
                value: "09/09/2015",
                nullText: "Enter Today's Date",
                hideMaskOnFocus: true
            });

        });