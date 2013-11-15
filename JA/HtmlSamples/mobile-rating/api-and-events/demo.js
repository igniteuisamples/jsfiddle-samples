$(function () {

                $("#igRating").on("igratingvaluechange", function (e, ui) {
                    $("#currentValue").html("値イベント: " + ui.value);
                });

                $("#clearRating").on("click", function (e) {
                    $("#igRating").igRating("value", 0);
                });

                $("#setValue").on("click", function (e) {
                    $("#igRating").igRating("value", 3);
                    $("#currentValue").html("値イベント: " + 3);
                });

            });