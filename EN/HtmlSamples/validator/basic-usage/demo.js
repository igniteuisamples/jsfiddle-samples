$(function () {
            var data = [
                { ID: "ID101", Name: "Business", Code: 101 },
                { ID: "ID102", Name: "Cooking", Code: 102 },
                { ID: "ID103", Name: "Fashion", Code: 103 },
                { ID: "ID104", Name: "Lifestyle", Code: 104 },
                { ID: "ID105", Name: "Photography", Code: 105 },
                { ID: "ID106", Name: "Sports", Code: 106 }];

            $('#gender').igTextEditor({
                inputName: "gender",
                listItems: ["Male", "Female"]
            });

            $("#phone").igMaskEditor({
                inputMask: "(\\0\\01) 000-0000"
            });

            $('#igComboInterests').igCombo({
                inputName: "products",
                dataSource: data,
                allowCustomValue: true,
                textKey: 'Name',
                valueKey: "ID",
                multiSelection: {
                    enabled: true
                }
            });

            $("#rating").igRating({
                precision: "half",
                valueAsPercent: false
            });

            $("#dateOfBirth").igDatePicker({
                datepickerOptions: { minDate: new Date(1920, 0, 1), maxDate: new Date(2015, 0, 1) }
            });

            $("#igCheckboxAccept").igCheckboxEditor();

            $("#igCheckboxSubscribe").igCheckboxEditor();

            $('#validationForm').igValidator({
                onsubmit: true,
                successMessage: "Valid",
                fields: [{
                    required: true,
                    selector: "#firstName",
                    valueRange: [2],
                    onblur: true,
                    custom: function (value, fieldOptions) {
                        var myRegEx = /^[a-zA-Z]+$/;
                        var isValid = myRegEx.test(value);
                        return isValid;
                    }
                },
                {
                    required: true,
                    selector: "#lastName",
                    valueRange: [2],
                    onblur: true,
                    custom: function (value, fieldOptions) {
                        var myRegEx = /^[a-zA-Z]+$/;
                        var isValid = myRegEx.test(value);
                        return isValid;
                    }
                },
				{
				    required: true,
				    selector: "#dateOfBirth",
				    date: true,
				    onblur: true
				},
                {
                    required: true,
                    selector: "#gender",
                    gender: true,
                    onblur: true
                },
				{
				    required: true,
				    selector: "#email",
				    email: true,
				    onblur: true
				},
                {
                    required: true,
                    selector: "#createPassword",
                    onblur: true,
                    errorMessage: "Should contain at least 8 characters, 1 number, 1 lowercase character (a-z), 1 uppercase character",
                    custom: function(value, fieldOptions){
                        var myRegEx  = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
                        var isValid = myRegEx.test(value);
                        return isValid;
                    }
                },
                {
                    required: true,
                    selector: "#confirmPassword",
                    equalTo: "#createPassword",
                    onblur: true,
                },
                {
				    selector: "#rating",
				    successMessage: "Valid",
				    onchange: true,
				    valueRange: {
				        min: 1.5,
				        errorMessage: "At least {0} star required (custom message)"
				    },
				    notificationOptions: {
				        mode: "popover"
				    }
				},
				{
				    required: true,
				    selector: "#igComboInterests",
				    onchange: true,
				    lengthRange: [2]
				},
				{
				    required: true,
				    selector: "#igCheckboxAccept",
				    onchange: true
				},
				{
				    selector: "#igCheckboxSubscribe",
				    onchange: true
				}
                ]
            });
        });