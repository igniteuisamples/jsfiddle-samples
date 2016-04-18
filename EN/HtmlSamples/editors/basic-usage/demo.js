$(function () {
$('#clientName').igTextEditor({
            placeHolder: "Company name"
        });
        $('#clientMail').igTextEditor({
            placeHolder: "someone@example.com"
        });
        $('#clientMail').igValidator({
            email: true,
            notificationOptions: {
                direction: "bottom",
                mode: "popover"
            }
        });
        $('#deliveryAddress').igTextEditor({
            placeHolder: "Street address, P.O. box"
        });
        $('#deliveryDate').igDateEditor({
            placeHolder: "12/30/2015"
        });
        $('#freeDelivery').igCheckboxEditor({
        	size: "small",
        	valueChanged: function (e, args) {
        		var totalText = $("#total").text().replace("Total: ", ""),
					total = parseFloat(totalText, 10);
					
        		if (args.newValue) {
        			total = total - 20;
        		} else {
        			total = total + 20;
        		}
        		$("#total").text("Total: " + total);
        	}
        });
        $('#price').igCurrencyEditor({
            value: "79",
            minValue : 0,
            currencySymbol: "€"
        });
        $('#amount').igNumericEditor({
            dataMode: "int",
            value: 10,
            minValue: 1,
            blur: function (evt) {
                calculateTotalPrice();
            }
        });
        $('#discount').igPercentEditor({
            value: 0.08,
            minValue: 0
        });

        $(document).delegate("#price", "igcurrencyeditorblur", function (evt) {
            calculateTotalPrice();
        });

        $(document).delegate("#discount", "igpercenteditorblur", function (evt) {
            calculateTotalPrice();
        });

        calculateTotalPrice();

        function radioChange() {
            var radioMetric = document.getElementById("radioMetric");
            if (radioMetric.checked) {
                var imperialPrice = $('#price').igCurrencyEditor("option", "value");
                //Change the currency symbol to Euros
                $('#price').igCurrencyEditor("option", "currencySymbol", "€");
                //Calculate the price in Euros
                $('#price').igCurrencyEditor("option", "value", calculateNewPrice(imperialPrice));
                //Update labels to Metric units
                $("label[for='pricem3']").text("Price per cubic meter");
                $("label[for='amountm3']").text("Amount in cubic meter");

                //Update igNumericEditor
                //Update the amount in cubic meter
                var yardAmount = $('#amount').igNumericEditor("option", "value");
                $('#amount').igNumericEditor("option", "value", calculateNewAmount(yardAmount));

                //Update Total price
                calculateTotalPrice();
            }
            else {
                //Update igCurrencyEditor
                var metricPrice = $('#price').igCurrencyEditor("option", "value");
                //Change the currency symbol to Dollar
                $('#price').igCurrencyEditor("option", "currencySymbol", "$");
                //Calculate the price in Dollars
                $('#price').igCurrencyEditor("option", "value", calculateNewPrice(metricPrice));
                //Update labels to Imperial units
                $("label[for='pricem3']").text("Price per cubic yard");
                $("label[for='amountm3']").text("Amount in cubic yard");

                //Update igNumericEditor
                //Update the amount in cubic yard
                var metricAmount = $('#amount').igNumericEditor("option", "value");
                $('#amount').igNumericEditor("option", "value", calculateNewAmount(metricAmount));

                //Update Total price
                calculateTotalPrice();
            }
        }

        function calculateNewPrice(oldPrice) {
            var radioMetric = document.getElementById("radioMetric");
            var newPrice;
            if (radioMetric.checked) {
                newPrice = oldPrice * 0.8;
                return newPrice;
            }
            else {
                newPrice = oldPrice * 1.25;
                return newPrice;
            }
        }

        function calculateNewAmount(oldAmount) {
            var radioMetric = document.getElementById("radioMetric");
            var newAmount;
            if (radioMetric.checked) {
                newAmount = oldAmount * 0.77;
                return newAmount;
            }
            else {
                newAmount = oldAmount * 1.30;
                return newAmount;
            }
        }

        function calculateTotalPrice() {
            var pricePerUnit = $('#price').igCurrencyEditor("option", "value");
            var unitsAmount = $('#amount').igNumericEditor("option", "value");
            var discount = $('#discount').igPercentEditor("option", "value");
            var pricePerUnitWithDiscount = pricePerUnit - (pricePerUnit * discount);
            var totalPrice = pricePerUnitWithDiscount * unitsAmount;

            $("#total").text("Total: " + Math.round10(totalPrice, -2));
        }

        function createNewOrder() {
            $("#successMessage").text("Order successfully created!");
            $("#successMessage").stop(true, true).fadeIn(200).fadeOut(3000);
        }
});