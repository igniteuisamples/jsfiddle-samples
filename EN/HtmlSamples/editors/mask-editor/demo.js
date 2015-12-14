$(function () {
var listData = ["Oregon", "Nevada", "California", "Colorado", "Grorgia", "Virginia", "Arizona", "Texas"];

        $('#msk1').igMaskEditor({
            inputMask: 'AaaL/aa',
            dataMode: 'rawText'
        });

        $('#msk2').igMaskEditor({
            inputMask: 'AaaL/aa',
            dataMode: 'rawTextWithRequiredPrompts'
        });

        $('#msk3').igMaskEditor({
            inputMask: 'AaaL/aa',
            dataMode: 'rawTextWithAllPrompts'
        });

        $('#msk4').igMaskEditor({
            inputMask: 'AaaL/aa',
            dataMode: 'rawTextWithLiterals'
        });

        $('#msk5').igMaskEditor({
            inputMask: 'AaaL/aa',
            dataMode: 'rawTextWithRequiredPromptsAndLiterals'
        });

        $('#msk6').igMaskEditor({
            inputMask: 'AaaL/aa',
            dataMode: 'allText'
        });



        $("#form").submit(function (event) {

            $('.p').remove();

            var submittedValues = [];
            submittedValues.push($("#msk1").igMaskEditor("value"));
            submittedValues.push($("#msk2").igMaskEditor("value"));
            submittedValues.push($("#msk3").igMaskEditor("value"));
            submittedValues.push($("#msk4").igMaskEditor("value"));
            submittedValues.push($("#msk5").igMaskEditor("value"));
            submittedValues.push($("#msk6").igMaskEditor("value"));
            var headers = $('.group-fields label');

            for (var i = 0 ; i < submittedValues.length; i++) {

                $("#results").append("<p class='p'><span class='header'>" + headers[i].textContent + "</span>  <b>" + submittedValues[i] + "</b></p>");
            }
        });
});