$(function () {
$(document).ready(function () {
            $("#readOnly").igCheckboxEditor({
                checked: true,
                readOnly: true,
            });
            $("#basic").igCheckboxEditor({
                checked: false
            });
            $("#disable").igCheckboxEditor({
                disabled: true
            });
        });
});