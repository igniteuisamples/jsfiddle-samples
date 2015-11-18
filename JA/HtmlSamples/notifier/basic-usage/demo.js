$(function () {
$(document).ready(function () {
            
            $('#successEditor').igNotifier({ showOn: "focus", state: "success" });

            $("#successEditor1").igNotifier({
                direction: "right",
                messages: {
                    info: "情報メッセージ。",
                    success: "成功メッセージ。",
                    warning: "警告メッセージ。",
                    error: "エラー メッセージ。"
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
            $("#warningEditor").igNotifier({ showOn: "focus", messages: { info: "情報メッセージ。" }});
            $("#errorEditor").igNotifier({ direction: "bottom", showOn: "focus", state: "error", mode: "popover" });
        });
});