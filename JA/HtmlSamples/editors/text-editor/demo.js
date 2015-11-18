$(function () {
var listData = ["Oregon", "Nevada", "California", "Colorado", "Georgia", "Virginia", "Arizona", "Texas"];

        $('#title').igTextEditor({
            placeHolder: "役職",
            width: "300",           
            inputName: "役職",
            toUpper: true
        });

        $('#nickname').igTextEditor({
            placeHolder: "ニックネーム",
            width: "300",
            inputName: "ニックネーム",
            toLower: true
        });

        $('#textArea').igTextEditor({
            placeHolder: "説明",
            width: "300",
            height: 150,
            inputName: "説明",
            visibleItemsCount: 5,
            textMode: "multiline"
        });

        $('#firstName').igTextEditor({
            inputName: '名前',
            placeHolder: '名前',
            textMode: "text",
            width: "300"
        });

        $('#password').igTextEditor({
            placeHolder: "パスワード",
            width: "300",
            inputName: "パスワード",
            textMode: "password"
        });

        $('#dropdown').igTextEditor({
            placeHolder: "州",
            inputName: "州",
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
            inputName: '名字',
            placeHolder: '名字',
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
            inputName: 'ユーザー名',
            placeHolder: 'ユーザー名',
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