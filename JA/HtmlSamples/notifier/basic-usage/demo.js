$(function () {
           $("#successEditor1").igNotifier({
               direction: "right",
               locale: {
                   infoMsg: "情報メッセージ。",
                   successMsg: "成功メッセージ。",
                   warningMsg: "警告メッセージ。",
                   errorMsg: "エラー メッセージ。"
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