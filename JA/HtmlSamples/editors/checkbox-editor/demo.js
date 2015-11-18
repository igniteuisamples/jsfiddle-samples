$(function () {
$(document).ready(function () {

            function initializeParagraphs() {
                var paragraphsCollection = $(".pChechBoxStyle");

                var checkedStatusCollection = $("#checkedStatusContainer .pStyle");
                var isChkBox1Checked = $("#chkBox1").igCheckboxEditor("option", "checked");
                var isChkBox2Checked = $("#chkBox2").igCheckboxEditor("option", "checked");
                var isChkBox3Checked = $("#chkBox3").igCheckboxEditor("option", "checked");
                $(checkedStatusCollection[0]).text("checked - " + isChkBox1Checked);
                $(checkedStatusCollection[1]).text("checked - " + isChkBox2Checked);
                $(checkedStatusCollection[2]).text("checked - " + isChkBox3Checked);

                var ValuesCollection = $("#ValuesContainer .pStyle");
                //use the value method
                chkBox1Value = $("#chkBox1").igCheckboxEditor("value");
                chkBox2Value = $("#chkBox2").igCheckboxEditor("value");
                chkBox3Value = $("#chkBox3").igCheckboxEditor("value");
                $(ValuesCollection[0]).text("value is - " + chkBox1Value);
                $(ValuesCollection[1]).text("value is - " + chkBox2Value);
                $(ValuesCollection[2]).text("value is - " + chkBox3Value);
            };

            $('#chkBox1').igCheckboxEditor({
                checked: false,
                valueChanging: function (evt, ui) {
                    //update the current checkBox checked state and value
                    $($("#checkedStatusContainer .pStyle")[0]).text("checked - " + ui.newState);
                    $($("#ValuesContainer .pStyle")[0]).text("value is - " + ui.newValue);
                }
            }),

            $('#chkBox2').igCheckboxEditor({
                checked: true,
                inputName: "chkBox2name",
                value: "semanticValue",
                readOnly: true,
                size: "normal"
            });

            $('#chkBox3').igCheckboxEditor({
                checked: true,
                disabled: true
            });

            initializeParagraphs();

            $("#form").submit(function (event) {
                $('#SubmitValuesContainer .divHeight').remove();
                var submitValues = [];

                submitValues.push($("#chkBox1").igCheckboxEditor("value"));
                submitValues.push($("#chkBox2").igCheckboxEditor("value"));
                submitValues.push($("#chkBox3").igCheckboxEditor("value"));

                var headers = $('h4');

                for (var i = 0 ; i < submitValues.length; i++) {
                    if ($('#chkBox3').igCheckboxEditor("option", "disabled") && i == submitValues.length - 1) {
                        $("#SubmitValuesContainer").append("<div class='divHeight'><p class='pStyle'>" + " value - " + "<b>" + "送信されません" + "</b></p></div>");
                    }
                    else {
                        $("#SubmitValuesContainer").append("<div class='divHeight'><p class='pStyle'>" + " value - " + "<b>" + submitValues[i] + "</b></p></div>");
                    }
                }
                return false;
            });
        });
});