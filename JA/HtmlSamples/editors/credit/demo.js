$(function () {
var listData = ["EUR", "USD", "GBP"];

        $('#firstName').igTextEditor({
        });

        $('#lastName').igTextEditor({
            toUpper: true
        });

        $('#creditAmount').igNumericEditor({
        	placeHolder: "例: 3000",
			value: 1000,
            minValue: 500,
            maxValue: 10000
        });

        $('#currency').igTextEditor({
            buttonType: "dropdown",
            listItems: listData,
            visibleItemsCount: 2,
            value: "EUR"
        });

        $('#interestRate').igPercentEditor({
            placeHolder: "利率",
            displayFactor: 1,
            value: "8.70%",
            minValue: 6.70,
            maxValue: 16
        });

        $('#startDateOfCredit').igDatePicker({
            placeHolder: "例: " + new Date().getFullYear().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getDay().toString(),
            minValue: new Date(2015, 5, 1),
            maxValue: new Date(2020, 11, 31),
            value: new Date(),
            locale: "ja",
            regional: "ja"
        });

        $('#term').igNumericEditor({
            placeHolder: '返済期間 (月)',
            value: 24,
            minValue: 6,
            maxValue: 120,
            buttonType: "spin",
            spinDelta: 6
        });

        $('#salaryInBank').igCheckboxEditor({
            checked: function () { $('#pin').show(); },
            unchecked: function () { $('#pin').hide(); }

        });

        $('#pin').igMaskEditor({
            placeHolder: '$$(credit_pin_placeHolder)',
            inputMask: 'LL-000'
        });

        $("#resultCredit").igCurrencyEditor({
            readOnly: true,
            width: 150
        });

        $("#returnValue").igCurrencyEditor({
            readOnly: true,
            width: 150
        });

        $("#monthlyPaymentValue").igCurrencyEditor({
            readOnly: true,
            width: 150
        });

        $("#form").submit(function (event) {

            //Calculate the total amount of the credit
            var sumToGive = $('#creditAmount').igNumericEditor("option", "value");
            var loanPeriod = $('#term').igNumericEditor("option", "value");
            var salaryIsInBank = $('#salaryInBank').igCheckboxEditor("option", "checked");
            var selectedInterestRate = $('#interestRate').igPercentEditor("option", "value");
            if (salaryIsInBank) {
                selectedInterestRate -= 1;
            }
            var monthlyPaymentNoInterestRate = sumToGive / loanPeriod;
            var interestRate = parseFloat(selectedInterestRate) / 100.0;
            var monthlyInterestRate = monthlyPaymentNoInterestRate * interestRate;
            var monthlyPaymentInterestRate = monthlyPaymentNoInterestRate + monthlyInterestRate;

            var sumToReceive = monthlyPaymentInterestRate * loanPeriod;
            var bankDividend = sumToReceive - sumToGive;

            //$("#results").append(getResult(sumToGive));
            getResult(sumToGive, sumToReceive, monthlyPaymentInterestRate);

        });

        $("#btnReset").click(function () {
        	$("#firstName").igTextEditor("value", "");
        	$("#lastName").igTextEditor("value", "");
        	$("#creditAmount").igNumericEditor("value", 1000);
        	$("#currency").igTextEditor("value", "EUR");
        	$('#interestRate').igPercentEditor("value", "8.70%");
        	$('#startDateOfCredit').igDatePicker("value", new Date());
        	$('#term').igNumericEditor("value", 24);
        	$('#salaryInBank').igCheckboxEditor("option", "checked", false);
        	$('#pin').igMaskEditor("value", "");
        	disableEditors(false);
        });

        $("#btnEnable").click(function () {
        	disableEditors(false);
        });

        function getResult(creditAmound, getSumToReceive, getMonthlyPaymentInterestRate) {
            var currencySymbol;
            var selectedCurrency = $('#currency').igTextEditor("option", "value");
            var customerName = $('#lastName').igTextEditor("option", "value");
            var returnAmount = Math.round(getSumToReceive).toFixed(2);
            var monthlyPayment = Math.round(getMonthlyPaymentInterestRate).toFixed(2);
            $(".info").remove();

            switch (selectedCurrency) {
                case "EUR":
                    currencySymbol = "€";
                    break;
                case "USD":
                    currencySymbol = "$";
                    break;
                case "GBP":
                    currencySymbol = "£";
                    break;
                default:
                    currencySymbol = "€";
            }
            $("#resultCredit").igCurrencyEditor("option", "currencySymbol", currencySymbol);
            $("#resultCredit").igCurrencyEditor("option", "value", creditAmound);

            $("#returnValue").igCurrencyEditor("option", "currencySymbol", currencySymbol);
            $("#returnValue").igCurrencyEditor("option", "value", returnAmount);

            $("#monthlyPaymentValue").igCurrencyEditor("option", "currencySymbol", currencySymbol);
            $("#monthlyPaymentValue").igCurrencyEditor("option", "value", monthlyPayment);
            
            var output = "<p class=\"info\">" + "" + customerName + " 様、以下はローン詳細です: " + "</p>";
            $(".creditTable").before(output);
            $("#valuesContainer").show();
            disableEditors(true);
        }

        function disableEditors(disable) {
            var allEditors = $("#form .ui-igedit-container");
            for (i = 0; i < allEditors.length; i++) {
                var widgetType = Object.keys(allEditors.eq(i).data())[0];
                allEditors.eq(i)[widgetType.toString()]('option', 'disabled', disable);
            }
            $("#btnEnable").prop('disabled', !disable);
        }

        (function doOnLoad() {
            $("#pin").hide();
            $("#valuesContainer").hide();
        }());
});