$(function () {
            $('#defaultCurrencyEditor').igCurrencyEditor({
                width: 200
            });

            $('#currencyEditor').igCurrencyEditor({
                width: 200,
                value: -8709.98,
                negativePattern: "$ -n",
                postivePattern: "$ n"
            });

            $('#currencyEditor2').igCurrencyEditor({
                width: 200,
                value: 1264.89,
                currencySymbol: "€",
                currencyDecimalSeparator: ",",
                currencyGroupSeparator: ""
            });

        });