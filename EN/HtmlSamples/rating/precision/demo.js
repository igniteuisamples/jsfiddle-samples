$(function () {

            $("#igRating1").igRating({
                voteCount: 10,
                valueAsPercent: true,
                value: 0.4,
                valueChange: function (evt, ui) {
                    $("#currValue").val(ui.value);
                }
            });

            $("#currValue").val($("#igRating1").igRating("value"));
            OnSelectPrecision($("#selectPrecision").val());

            $("#selectPrecision").change(function () {
                var value = $(this).val();
                OnSelectPrecision(value);
            });

            function OnSelectPrecision(value) {
                $("#igRating1").igRating("option", "precision", value);
                $("#dynamicDiv").css("visibility", (value === "exact") ? "visible" : "hidden");
                $("#currValue").val($("#igRating1").igRating("value"));
            }

            $("#decimalPlaces").change(function () {
                $("#igRating1").igRating("option", "roundedDecimalPlaces", parseInt($(this).val(), 10));
            });

            $("#chkPercent").change(function () {
                $("#igRating1").igRating("option", "valueAsPercent", $(this).is(":checked"));
                $("#currValue").val($("#igRating1").igRating("value"));
            });

        });