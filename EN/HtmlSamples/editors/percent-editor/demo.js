$(function () {
            var listValues = [10, 15, 25, 28, 33, 35];

            function nettChange() {

                var gross = 6000.00, nett, grossMadicare, grossSecurity, grossFederalTax, grossStateTax;
                var federalTax = $("#federalTax").igPercentEditor("value");
                var stateTax = $("#stateTax").igPercentEditor("value");
                var socialSecurity = $("#socialSecurity").igPercentEditor("value");
                var medicare = $("#medicare").igPercentEditor("value");

                grossSecurity = gross * socialSecurity;
                grossMadicare = gross * medicare;
                gross = gross - (grossSecurity + grossMadicare);


                grossFederalTax = (gross * federalTax) / 100;
                grossStateTax = (gross * stateTax) / 100;

                nett = gross - (grossFederalTax + grossStateTax);

                return parseFloat(nett.toFixed(2));

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
                value: -5.00,
                minValue: -5.53,
                maxValue: 5.53,
                displayFactor: 1,
                valueChanged: changingValues
            });
            $("#socialSecurity").igPercentEditor({
                value: -0.10,
                minValue: -0.124,
                maxValue: 0.124,
                valueChanged: changingValues
            });
            $("#medicare").igPercentEditor({
                value: 0.029,
                positivePattern: "(n)%",
                valueChanged: changingValues
            });

        });