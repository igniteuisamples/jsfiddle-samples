$(function () {
$(document).ready(function () {
            
            $('#successEditor').igNotifier({ showOn: "focus", state: "success" });

            $("#successEditor1").igNotifier({
                direction: "right",
                messages: {
                    info: "Information message.",
                    success: "Success message.",
                    warning: "Warning message.",
                    error: "Error message."
                }
            }).igNotifier("notify", "success");

            $("#state").on("change", function myfunction() {
                var state = $(this).find("option:selected").val();

                $("#successEditor1").igNotifier("option", "state", state);
            });

            $("#mode").on("change", function myfunction() {
                var mode = $(this).find("option:selected").val();

                $("#successEditor1").igNotifier("option", "mode", mode);
            });

            $("#show").on("click", function myfunction() {
                $("#successEditor1").igNotifier("show");
            });
            $("#hide").on("click", function myfunction() {
                $("#successEditor1").igNotifier("hide");
            });
            $("#warningEditor").igNotifier({ showOn: "focus", messages: { info: "Information message." }});
            $("#errorEditor").igNotifier({ direction: "bottom", showOn: "focus", state: "error", mode: "popover" });
        });
});