$(function () {
$(document).ready(function () {

                var today = new Date(),
                tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);


                $('#city').igTextEditor({
                    width: 300,
                    placeHolder: "Where do you want to go?"
                });

                $('#checkIn').igDatePicker({
                    dataMode: 'date',
                    placeHolder: "Check In",
                    datepickerOptions: {
                        minDate: today
                    },
                    valueChanged: function (evt, ui) {
                    	if (ui.newValue instanceof Date) {
                    		var nextDay = new Date(ui.newValue.getTime() + 24 * 60 * 60 * 1000);
                    		$("#checkOut").igDatePicker("option", "value", nextDay);
                    	}
                    }
                });

                $('#checkOut').igDatePicker({
                    dataMode: 'date',
                    placeHolder: "Check Out",
                    datepickerOptions: {
                        minDate: tomorrow,
                        numberOfMonths: [1, 2]
                    }
                });
            });

            $("#book").click(function () {

                var checkIn = $('#checkIn').igDatePicker('value'),
                checkOut = $('#checkOut').igDatePicker('value'),
                stay = (checkOut - checkIn) / (1000 * 60 * 60 * 24),
                city = $('#city').igTextEditor('value');
                if (city == null) {
                    city = "";
                }
                else {
                    city = " in " + city;
                }

                $("#registration").append().html("<p>You successfully booked " + Math.round(stay) + " days" + city + ". Thank you!");

            });
});