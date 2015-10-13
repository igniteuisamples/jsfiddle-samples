$(function () {
var listData = ["Oregon", "Nevada", "California", "Colorado", "Georgia", "Virginia", "Arizona", "Texas"];

        $('#title').igTextEditor({
            placeHolder: "Title (will be converted to upper characters)",
            width: "300",           
            inputName: "Title (will be converted to upper characters)",
            toUpper: true
        });

        $('#nickname').igTextEditor({
            placeHolder: "Nickname (will be converted to lower characters)",
            width: "300",
            inputName: "Nickname (will be converted to lower characters)",
            toLower: true
        });

        $('#textArea').igTextEditor({
            placeHolder: "Description",
            width: "300",
            height: 150,
            inputName: "Description",
            visibleItemsCount: 5,
            textMode: "multiline"
        });

        $('#firstName').igTextEditor({
            inputName: 'First Name',
            placeHolder: 'First Name',
            textMode: "text",
            width: "300"
        });

        $('#password').igTextEditor({
            placeHolder: "Password",
            width: "300",
            inputName: "Password",
            textMode: "password"
        });

        $('#dropdown').igTextEditor({
            placeHolder: "State",
            inputName: "State",
            buttonType: "dropdown",
            listItems: listData,
            width: "300"
        });

        $('#readOnly').igCheckboxEditor({
            valueChanged: function (evt, ui) {
                if (ui.newState == true) {
                    $("#lastName").igTextEditor("option", "readOnly", true);
                }
                else {
                    $("#lastName").igTextEditor("option", "readOnly", false);
                }

            }
        });

        $('#lastName').igTextEditor({
            inputName: 'Last Name',
            placeHolder: 'Last Name',
            textMode: "text",
            width: "300"

        });

        $('#disabled').igCheckboxEditor({
            valueChanged: function (evt, ui) {
                if (ui.newState == true) {
                    $("#textArea").igTextEditor("option", "disabled", true);
                }
                else {
                    $("#textArea").igTextEditor("option", "disabled", false);
                }

            }
        });

        $('#userName').igTextEditor({
            inputName: 'User Name',
            placeHolder: 'User Name',
            textMode: "text",
            width: "300"
        });

        $("#form").submit(function (event) {
            var submittedValues = $("#form").serializeArray();
            $(".p").remove();
            for (var i = 0 ; i < submittedValues.length; i++) {

                $("#results").append("<p class='p'>" + submittedValues[i].name.replace(/([A-Z])/g, ' $1') + ": " + submittedValues[i].value + "</p>");
            }
        });
});