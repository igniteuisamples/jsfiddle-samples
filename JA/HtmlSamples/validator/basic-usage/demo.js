$(function () {
$(document).ready(function () {
            var data = [
                { ID: "ID101", Name: "ビジネス", Code: 101 },
                { ID: "ID102", Name: "料理", Code: 102 },
                { ID: "ID103", Name: "ファッション", Code: 103 },
                { ID: "ID104", Name: "ライフスタイル", Code: 104 },
                { ID: "ID105", Name: "フォトグラフィー", Code: 105 },
                { ID: "ID106", Name: "スポーツ", Code: 106 }];

            $('#gender').igTextEditor({
                inputName: "gender",
                listItems: ["男", "女"]
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
                successMessage: "有効",
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
                    errorMessage: "8 以上の文字、1 数字、1 小文字 (a-z)、1 大文字を含む必要があります",
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
				    successMessage: "有効",
				    onchange: true,
				    valueRange: {
				        min: 1.5,
				        errorMessage: "星 {0} つ以上が必要 (カスタム メッセージ)"
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
});