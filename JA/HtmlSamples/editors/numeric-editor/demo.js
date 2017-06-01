$(function () {
            var listValues = [10, 15, 25, 28, 33, 35];

            function nettChange() {

                var gross = 6000.00, nett, grossMadicare, grossSecurity, grossFederalTax, grossStateTax;
                var federalTax = $("#federalTax").igNumericEditor("value");
                var stateTax = $("#stateTax").igNumericEditor("value");
                var socialSecurity = $("#socialSecurity").igNumericEditor("value");
                var medicare = $("#medicare").igNumericEditor("value");

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

            $("#federalTax").igNumericEditor({
                listItems: listValues,
                value: 10,
                valueChanged: changingValues
            });
            $("#stateTax").igNumericEditor({
                buttonType: "spin",
                spinDelta: 0.01,
                value: -5.00,
                minValue: -5.53,
                maxValue: 5.53,
                valueChanged: changingValues
            });
            $("#socialSecurity").igNumericEditor({
                value: -10.0,
                minValue: -12.4,
                maxValue: 12.4,
                valueChanged: changingValues
            });
            $("#medicare").igNumericEditor({
                value: 2.9,
                valueChanged: changingValues
            });

        });