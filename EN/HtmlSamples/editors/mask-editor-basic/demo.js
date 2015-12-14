$(function () {
$(document).ready(function () {
            $("#email").igTextEditor({
                placeHolder: "john@email.com",
                validatorOptions: {
                    email: true
                }
            });

            $("#serialNumber").igMaskEditor({
                inputMask: 'AAAA-AAAA-AAAA-AAAA',
                dataMode: "rawTextWithLiterals"
            });

            $("#zipCode").igMaskEditor({
                inputMask: '00000',
                dataMode: "allText"
            });

            $("#phone").igMaskEditor({
                inputMask: '(000) 000-000',
                dataMode: "rawText"
            });

            $("#btn").click(function () {
                $("#email").igTextEditor("option", "value", "");
                $("#serialNumber").igMaskEditor("option", "value", "");
                $("#zipCode").igMaskEditor("option", "value", "");
                $("#phone").igMaskEditor("option", "value", "");
            });
        });
});