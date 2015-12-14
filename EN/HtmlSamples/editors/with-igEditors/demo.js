$(function () {
$(document).ready(function () {

            var colors = ["blue", "red", "brown"];

            $("#shoeSize").igNumericEditor({
                minValue: 37,
                maxValue: 46
            });

            $("#shoeColor").igTextEditor({
                listItems: colors,
                isLimitedToListValues: true
            });

            $("#quantity").igNumericEditor({
                dataMode: 'int',
                buttonType: "spin",
                minValue: 1,
                maxValue: 3,
                spinDelta: 1,
                spinWrapAround: true
            });

            $("#promoCode").igTextEditor({
                maxLength: 6
            });

            $(".info").hide();

            $("#tip1").click(function () { $("#info1").toggle(); });
            $("#tip2").click(function () { $("#info2").toggle(); });
            $("#tip3").click(function () { $("#info3").toggle(); });
            $("#tip4").click(function () { $("#info4").toggle(); });

        });
});