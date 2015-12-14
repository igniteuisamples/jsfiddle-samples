$(function () {
$(document).ready(function () {
            var listValues = [10, 15, 25, 28, 33, 35];

            function nettChange() {

                var gross = 6000.00, nett, grossMadicare, grossSecurity, grossFederalTax, grossStateTax;
                var federalTax = $("#federalTax").igPercentEditor("value");
                var stateTax = $("#stateTax").igPercentEditor("value");
                var socialSecurity = $("#socialSecurity").igPercentEditor("value");
                var medicare = $("#medicare").igPercentEditor("value");

                grossSecurity = calculatePercent(gross, socialSecurity);
                grossMadicare = calculatePercent(gross, medicare);
                gross = gross - (grossSecurity + grossMadicare);


                grossFederalTax = calculatePercent(gross, federalTax);
                grossStateTax = calculatePercent(gross, stateTax);

                nett = gross - (grossFederalTax + grossStateTax);

                return parseFloat(nett.toFixed(2));

            }

            function calculatePercent(value, percent) {
                value = value * percent / 100;

                return value;
            }

            function changingValues() {
                var newNettIncome = nettChange().toLocaleString();
                $("#nett").text("$ " + newNettIncome);
            }

            $("#federalTax").igPercentEditor({
                listItems: listValues,
                value: 10,
                displayFactor: 1,
                valueChanged: changingValues
            });
            $("#stateTax").igPercentEditor({
                buttonType: "spin",
                spinDelta: 0.01,
                value: -5.53,
                minValue: -5.53,
                maxValue: 5.53,
                displayFactor: 1,
                valueChanged: changingValues
            });
            $("#socialSecurity").igPercentEditor({
                value: -12.4,
                minValue: -12.4,
                maxValue: 12.4,
                displayFactor: 1,
                valueChanged: changingValues
            });
            $("#medicare").igPercentEditor({
                value: 2.9,
                displayFactor: 1,
                positivePattern: "(n)%",
                valueChanged: changingValues
            });

        });
});