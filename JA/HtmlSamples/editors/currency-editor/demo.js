$(function () {
            $('#defaultCurrencyEditor').igCurrencyEditor({
                width: 300
            });

            $('#currencyEditor').igCurrencyEditor({
                width: 300,
                value: -8709.98,
                negativePattern: "$ (n)",
                postivePattern: "$ +n",
                placeHolder: "Discount",
                buttonType: "clear"
            });

            $('#currencyEditor2').igCurrencyEditor({
                width: 300,
                value: 1264.89,             
                decimalSeparator: ",",
                groupSeparator: ""                
            });

            $('#currencyEditor3').igCurrencyEditor({
                width: 300,
                listItems: [12.3, 15.0005, 533235.2],
                currencySymbol: "€",             
                groupSeparator: " ",
                buttonType: "clear",
                textAlign: "center",
                maxDecimals: 6,
                currencyGroups: [2],
            });

            $('#currencyEditor4').igCurrencyEditor({
                width: 300,
                value: 1264.89,
                decimalSeparator: ".",
                groupSeparator: ",",
                buttonType: "spin"
            });

        });