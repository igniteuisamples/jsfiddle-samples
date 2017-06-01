$(function () {
        var listValues = [600, 900, 1500, 1680, 1980, 2100];

        function nettChange() {

            var gross = 6000.00, nett;
            var federalTax = $("#federalTax").igCurrencyEditor("value");
            var stateTax = $("#stateTax").igCurrencyEditor("value");
            var socialSecurity = $("#socialSecurity").igCurrencyEditor("value");
            var medicare = $("#medicare").igCurrencyEditor("value");

            nett = gross - federalTax - stateTax - socialSecurity - medicare;

            return parseFloat(nett.toFixed(2));

        }


        $("#federalTax").igCurrencyEditor({
            listItems: listValues,
            value: 600,
            valueChanged: function (evt, ui) {
                var newNettIncome = nettChange().toLocaleString();
                $("#nett").text("￥" + newNettIncome);
            }
        });
        $("#stateTax").igCurrencyEditor({
            buttonType: "spin",
            spinDelta: 0.01,
            value: -300.00,
            maxDecimals:2,
            minValue: -331.80,
            maxValue: 331.80,
            valueChanged: function (evt, ui) {
                var newNettIncome = nettChange().toLocaleString();
                $("#nett").text("￥" + newNettIncome);
            }
        });
        $("#socialSecurity").igCurrencyEditor({
            value: -700,
            minValue: -744,
            maxValue: 744,
            valueChanged: function (evt, ui) {
                var newNettIncome = nettChange().toLocaleString();
                $("#nett").text("￥" + newNettIncome);
            }
        });
        $("#medicare").igCurrencyEditor({
            value: 174,
            positivePattern: "$(n)",
            valueChanged: function (evt, ui) {
                var newNettIncome = nettChange().toLocaleString();
                $("#nett").text("￥" + newNettIncome);
            }
        });

    });