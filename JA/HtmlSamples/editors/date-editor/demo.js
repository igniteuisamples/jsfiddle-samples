$(function () {
            $("#dateEditor1").igDateEditor({
                inputName: "dateEditor1",
                width: 230,
                value: new Date(),
                buttonType: "spin",
                dateInputFormat: "date"
            });

            $("#dateEditor2").igDateEditor({
                inputName: "dateEditor2",
                width: 230,
                minValue: new Date(2015, 0, 1),
                maxValue: new Date(2020, 0, 1),
                placeHolder: "今日の日付の入力"
            });

            $("#dateEditor3").igDateEditor({
                inputName: "dateEditor3",
                width: 230,
                dateInputFormat: "dateLong",
                value: new Date(),
                dataMode: "editModeText"
            });

            $("#dateEditor4").igDateEditor({
                inputName: "dateEditor4",
                width: 230,
                dateInputFormat: "H:mm",
                value: new Date(),
                dataMode: "displayModeText"
            });

            $("#dateEditor5").igDateEditor({
                inputName: "dateEditor5",
                width: 230,
                dateInputFormat: "dateTime",
                value: new Date(),
                dataMode: "date",
                readOnly: true
            });

            $("#dateEditor6").igDateEditor({
                inputName: "dateEditor6",
                width: 230,
                value: new Date(),
                disabled: true
            });

            var headers = $('h4');
            $("#form").submit(function (event) {
                var submittedValues = $("#form").serializeArray();
                $(".p").remove();
                for (var i = 0 ; i < submittedValues.length; i++) {
                    $("#results").append("<p class='p'><span class='header'>" + headers[i].textContent + ": "+"</span>  <b>" + submittedValues[i].value + "</b></p>");
                }
            });
        });