$(function () {
$(document).ready(function () {

                var today = new Date(),
                tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);


                $('#city').igTextEditor({
                    width: 300,
                    placeHolder: "目的地"
                });

                $('#checkIn').igDatePicker({
                    dataMode: 'date',
                    placeHolder: "チェックイン",
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
                    placeHolder: "チェックアウト",
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
                    city = "を " + city;
                }

                $("#registration").append().html("<p>成功しました。" + Math.round(stay) + " 日" + city + " で予約しました。ありがとうございました。");

            });
});