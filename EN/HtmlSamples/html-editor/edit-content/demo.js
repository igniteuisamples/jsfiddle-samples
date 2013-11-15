$(function () {
            // get the content of the htmlEditor div
            var editorContent = $("#htmlEditor").html();
            // empty the htmlEditor div
            $("#htmlEditor").html("");
            // initialize igHtmlEditor
            $("#htmlEditor").igHtmlEditor({
                width: "99%",
                inputName: "htmlEditor"
            });
            // set the content of the igHtmlEditor
            $("#htmlEditor").igHtmlEditor("setContent", editorContent, "html");
        });