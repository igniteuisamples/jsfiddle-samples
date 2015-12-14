$(function () {
$(document).ready(function () {
            
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

            $("#direction").on("change", function myfunction() {
                var direction = $(this).find("option:selected").val();

                $("#successEditor1").igNotifier("option", "direction", direction);
            });

            $("#show").on("click", function myfunction() {
                $("#successEditor1").igNotifier("show");
            });
            $("#hide").on("click", function myfunction() {
                $("#successEditor1").igNotifier("hide");
            });          
        });
});