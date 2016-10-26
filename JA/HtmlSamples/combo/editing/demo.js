$(function () {
            var selectedCardType = "Visa";
            $("#paymentType").igCombo({
                textKey: "Text",
                valueKey: "Text",
                dataSource: paymentTypes,
                mode: "readonlylist"
            }).attr("title", "このコンボは readonlylist モードです。ドロップダウンを表示しますが、編集や項目の選択はできません。").igPopover({
                direction: "top",
                headerTemplate: {
                    closeButton: true
                },
                closeOnBlur: true,
                animationDuration: 150,
                maxHeight: null,
                maxWidth: 170,
                showOn: "focus"
            });

            $("#creditCardType").igCombo({
                width: "240px",
                textKey: "Text",
                valueKey: "Text",
                dataSource: creditCardTypes,
                mode: "dropdown",
                enableClearButton: false,
                selectionChanged: function (event, ui) {
                    selectedCardType = ui.items[0].data.Text;
                    $("#cardLogo").attr({
                        "src": ui.items[0].data.Image,
                        "alt": selectedCardType
                    });
                    $("#creditCardNumber").igCombo("option", "dataSource", creditCards[selectedCardType]);
                    if (selectedCardType === "American Express") {
                        $("#ccv").igNumericEditor("option", "maxValue", 9999);
                    } else {
                        $("#ccv").igNumericEditor("option", "maxValue", 999);
                        $("#ccv").igNumericEditor("value", null);
                    }
                }
            }).attr("title", "このコンボは dropdown モードです。リストの項目のみを選択できます。").igPopover({
                direction: "top",
                headerTemplate: {
                    closeButton: true
                },
                closeOnBlur: true,
                animationDuration: 150,
                maxHeight: null,
                maxWidth: 170,
                showOn: "focus"
            });

            function transformCustomValue(value) {
                var newValue = {
                    CardNumber: "", 
                    DisplayNumber: "",
                    Image: creditCardLogos[selectedCardType]
                };
                value = value.replace(/-/g, "");
                value = value.split("");
                for (var i = 0; i < (selectedCardType === "American Express" ? 3 : 4); i++) {
                    newValue.CardNumber += value.splice(0, 1);
                    newValue.DisplayNumber += "*";
                }
                var length = value.length;
                for (var i = 0; i < length; i++) {
                    var char = value.splice(0, 1);
                    if (i % 4 === 0) {
                        newValue.CardNumber += "-";
                        newValue.DisplayNumber += "-";
                    }
                    newValue.CardNumber += char;
                    newValue.DisplayNumber += i > 7 ? char : "*";
                }
                return newValue;
            };

            $("#creditCardNumber").igCombo({
                width: "100%",
                textKey: "DisplayNumber",
                valueKey: "CardNumber",
                dataSource: creditCards[selectedCardType],
                dropDownOnFocus: true,
                filteringType: "none",
                placeHolder: "クレジットカード番号を入力するか、使用履歴から選択してください。",
                itemTemplate: "${DisplayNumber}<img src='${Image}' class='card-logo' />",
                allowCustomValue: true,
                validatorOptions: {
                    custom: function (value) {
                        var validator = $("#creditCardNumber").igCombo("validator"),
                            re = selectedCardType === "American Express" ? /^[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/ : /^[0-9]{4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
                            isValid = true;
                        if (value.length) {
                            value = value[0];
                            if (!$("#creditCardNumber").igCombo("selectedItems")) {
                                // custom value is selected
                                if (!re.test(value)) {
                                    isValid = false;
                                }
                                if (isValid) {
                                    var newValue = transformCustomValue(value),
                                        index = creditCards[selectedCardType].length,
                                        current;
                                    if (current = $("#creditCardNumber").igCombo("itemsFromValue", newValue)) {
                                        $("#creditCardNumber").igCombo("select", current.element)
                                    } else {
                                        creditCards[selectedCardType].push(newValue);
                                        $("#creditCardNumber").igCombo("dataBind");
                                        $("#creditCardNumber").igCombo("index", index);
                                    }
                                }
                            }
                            $("#month").igCombo("option", "disabled", false);
                            $("#year").igCombo("option", "disabled", false);
                            $("#ccv").igNumericEditor("option", "disabled", false);
                            $("div.good-through").removeClass("ui-state-disabled");
                            return isValid;
                        }
                        $("#month").igCombo("option", "disabled", true);
                        $("#year").igCombo("option", "disabled", true);
                        $("#ccv").igNumericEditor("option", "disabled", true);
                        $("div.good-through").addClass("ui-state-disabled");
                        return false;
                    },
                    errorMessage: "クレジットカード番号が無効です。",
                    onchange: true,
                    onblur: true
                }
            }).attr("title", "このコンボはカスタム値入力を許可します。ユーザーはリストにない値を入力できます。").igPopover({
                direction: "right",
                position: "start",
                headerTemplate: {
                    closeButton: true
                },
                closeOnBlur: true,
                animationDuration: 150,
                maxHeight: null,
                maxWidth: 170,
                showOn: "focus"
            });

            $("#month").igCombo({
                width: "100px",
                textKey: "Text",
                valueKey: "Value",
                dataSource: months,
                disabled: true,
                mode: "dropdown"
            });

            $("#year").igCombo({
                width: "100px",
                textKey: "Text",
                valueKey: "Text",
                dataSource: years,
                disabled: true,
                mode: "dropdown"
            });

            $("#ccv").igNumericEditor({
                width: "100px",
                placeHolder: "CCV",
                disabled: true
            });

            $("#buy").igButton({
                labelText: $("#buy").val(),
                centerLabel: true,
                width: 120
            });

        });