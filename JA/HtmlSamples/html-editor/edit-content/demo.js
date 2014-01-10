$(function () {
            // get the content of the htmlEditor div
            var editorContent = $("#htmlEditor").html(),
                height = $('html').hasClass('touch') ? 500 : 350;
            // empty the htmlEditor div
            $("#htmlEditor").html("");
            // initialize igHtmlEditor
            $("#htmlEditor").igHtmlEditor({
                width: "99%",
                height: height,
                inputName: "htmlEditor"
            });
            // set the content of the igHtmlEditor
            $("#htmlEditor").igHtmlEditor("setContent", editorContent, "html");
        });