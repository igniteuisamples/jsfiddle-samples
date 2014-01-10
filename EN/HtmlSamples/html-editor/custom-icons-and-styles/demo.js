$(function () {

            var height = $('html').hasClass('touch') ? 500 : 350;

            $("#htmlEditor").igHtmlEditor({
                width: "99%",
                height: height
            });

        });