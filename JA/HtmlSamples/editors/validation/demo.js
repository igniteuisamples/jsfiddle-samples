$(function () {
function getShowAllErrorsOnSubmit() {
            return $('#showErrorCheckBox').is(":checked") ? true : false;
        }

        function getRequired() {
            return $('#requredCheckBox').is(":checked") ? true : false;
        }

        function getValidationOptions() {
            var validatorOptions = {};
            validatorOptions.onblur = $('#onBlurCheckBox').is(":checked");
            validatorOptions.onchange = $('#onChangeCheckBox').is(":checked");
            validatorOptions.onsubmit = $('#onSubmitCheckBox').is(":checked");
            validatorOptions.formSubmit = $('#formSubmitCheckBox').is(":checked");
            validatorOptions.keepFocus = $('#keepFocusList').val();
            validatorOptions.showIcon = $('#showIconCheckBox').is(":checked") ? true : false;
            $.ui.igValidator.defaults.showAllErrorsOnSubmit = getShowAllErrorsOnSubmit();
            return validatorOptions;
        }

        function getErrorMessage() {
            var message = $('#customErrorMessegeText').val();
            return (message.length < 1) ? null : message;
        }

        $(function () {

            $.ui.igValidator.defaults.showAllErrorsOnSubmit = getShowAllErrorsOnSubmit();
            $('#textEditor').igEditor({
                validatorOptions: getValidationOptions(),
                required: getRequired(),
                width: 195
            });
            $('#datePicker').igDatePicker({
                width: 195,
                dateInputFormat: 'dateTime',
                nullText: '日付の入力',
                required: getRequired(),
                validatorOptions: getValidationOptions()
            });
            $('#maskEditor1').igMaskEditor({
                validatorOptions: getValidationOptions(),
                required: getRequired(),
                width: 195,
                inputMask: '(000) 000-0000'
            });
            $('#maskEditor2').igMaskEditor({
                validatorOptions: getValidationOptions(),
                required: getRequired(),
                width: 195
            });
            $('#numericEditor').igNumericEditor({
                validatorOptions: getValidationOptions(),
                required: getRequired(),
                dataMode: 'sbyte',
                button: 'spin',
                width: 195
            });
            $('#currencyEditor').igCurrencyEditor({
                validatorOptions: getValidationOptions(),
                required: getRequired(),
                button: 'spin',
                minValue: 5,
                maxValue: 500,
                width: 195
            });
            $('#dateEditor').igDateEditor({
                validatorOptions: getValidationOptions(),
                required: getRequired(),
                button: 'spin',
                minValue: new Date(1900, 0, 1),
                maxValue: new Date(2200, 11, 31),
                width: 195,
                nullText: '日付の入力'
            });
            $('#hideAnimationDuration').igNumericEditor({
                width: 50,
                dataMode: 'ushort',
                nullable: false,
                valueChanged: function (evt, ui) {
                    var opt = { 'animationHide': ui.value };
                    $('#textEditor').igEditor('option', 'validatorOptions', opt);
                    $('#maskEditor1').igMaskEditor('option', 'validatorOptions', opt);
                    $('#maskEditor2').igMaskEditor('option', 'validatorOptions', opt);
                    $('#numericEditor').igNumericEditor('option', 'validatorOptions', opt);
                    $('#currencyEditor').igCurrencyEditor('option', 'validatorOptions', opt);
                    $('#dateEditor').igDateEditor('option', 'validatorOptions', opt);
                    $('#datePicker').igDatePicker('option', 'validatorOptions', opt);
                }
            });
            $('#showAnimationDuration').igNumericEditor({
                width: 50,
                dataMode: 'ushort',
                nullable: false,
                valueChanged: function (evt, ui) {
                    var opt = { 'animationShow': ui.value };
                    $('#textEditor').igEditor('option', 'validatorOptions', opt);
                    $('#maskEditor1').igMaskEditor('option', 'validatorOptions', opt);
                    $('#maskEditor2').igMaskEditor('option', 'validatorOptions', opt);
                    $('#numericEditor').igNumericEditor('option', 'validatorOptions', opt);
                    $('#currencyEditor').igCurrencyEditor('option', 'validatorOptions', opt);
                    $('#dateEditor').igDateEditor('option', 'validatorOptions', opt);
                    $('#datePicker').igDatePicker('option', 'validatorOptions', opt);
                }
            });
            $('#requredCheckBox').change(function () {
                var required = getRequired();

                if (required == false) {
                    $('.validateOptions').attr('disabled', 'disabled');
                }
                else {
                    $('.validateOptions').removeAttr('disabled');
                }

                $('#datePicker').igDatePicker('option', 'required', required);
                $('#textEditor').igEditor('option', 'required', required);
                $('#maskEditor1').igMaskEditor('option', 'required', required);
                $('#maskEditor2').igMaskEditor('option', 'required', required);
                $('#numericEditor').igNumericEditor('option', 'required', required);
                $('#currencyEditor').igCurrencyEditor('option', 'required', required);
                $('#dateEditor').igDateEditor('option', 'required', required);
            });
            $('.validateOptions').change(function () {
                var validatorOptions = getValidationOptions();
                $('#datePicker').igDatePicker('option', 'validatorOptions', validatorOptions);
                $('#textEditor').igEditor('option', 'validatorOptions', validatorOptions);
                $('#maskEditor1').igMaskEditor('option', 'validatorOptions', validatorOptions);
                $('#maskEditor2').igMaskEditor('option', 'validatorOptions', validatorOptions);
                $('#numericEditor').igNumericEditor('option', 'validatorOptions', validatorOptions);
                $('#currencyEditor').igCurrencyEditor('option', 'validatorOptions', validatorOptions);
                $('#dateEditor').igDateEditor('option', 'validatorOptions', validatorOptions);
            });
            $('#formSubmit').click(function () {
                var message = "フォームを送信しています...";
                $("#submitMessage").stop(true, true);
                $("#formSubmitMessage").html(message).stop(true, true).fadeIn(500).fadeOut(2000);
                var form = $("#validationForm")[0];
                form.action = location.href;
                form.submit();
            });
            $('#customErrorMessegeText').blur(function () {
                var message = { 'errorMessage': getErrorMessage() };
                $('#datePicker').igDatePicker('option', 'validatorOptions', message);
                $('#textEditor').igEditor('option', 'validatorOptions', message);
                $('#maskEditor1').igMaskEditor('option', 'validatorOptions', message);
                $('#maskEditor2').igMaskEditor('option', 'validatorOptions', message);
                $('#numericEditor').igNumericEditor('option', 'validatorOptions', message);
                $('#currencyEditor').igCurrencyEditor('option', 'validatorOptions', message);
                $('#dateEditor').igDateEditor('option', 'validatorOptions', message);
            });

            $('#validationForm').submit(function () {
                this.action = location.href;
                var message = "送信イベントが発生しました";
                $("#formSubmitMessage").stop(true, true);
                $("#submitMessage").html(message).stop(true, true).fadeIn(500).fadeOut(2000);
            });

            $("#formSubmit").igButton({ labelText: $("#formSubmit").val() });
            $("#submitEvent").igButton({ labelText: $("#submitEvent").val() });

            $('.validateOptions').attr('disabled', 'disabled');
        });
});