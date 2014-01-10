$(function () {
            var height = $('html').hasClass('touch') ? 500 : 350;

            $("#htmlEditor").igHtmlEditor({ height: height });
        });