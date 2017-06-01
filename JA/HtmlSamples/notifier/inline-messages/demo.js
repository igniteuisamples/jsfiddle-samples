$(function () {
            /*
			 * Inline
			 */
            $("#sSuccessEditor").igTextEditor().igNotifier({ mode: "inline" })
                 .igNotifier("notify", "success", "成功メッセージ。");
            $("#sInfoEditor").igTextEditor().igNotifier({ mode: "inline" })
				.igNotifier("notify", "info", "情報メッセージ。");
            $("#sWarningEditor").igTextEditor().igNotifier({ mode: "inline" })
				.igNotifier("notify", "warning", "警告メッセージ。");
            $("#sErrorEditor").igTextEditor().igNotifier({ mode: "inline" })
				.igNotifier("notify", "error", "エラー メッセージ。");
       });