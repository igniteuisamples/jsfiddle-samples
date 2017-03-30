$(function () {
            /*
			 * Inline
			 */
            $("#sSuccessEditor").igTextEditor().igNotifier({ mode: "inline" })
                 .igNotifier("notify", "success", "Success message.");
            $("#sInfoEditor").igTextEditor().igNotifier({ mode: "inline" })
				.igNotifier("notify", "info", "Information message.");
            $("#sWarningEditor").igTextEditor().igNotifier({ mode: "inline" })
				.igNotifier("notify", "warning", "Warning message.");
            $("#sErrorEditor").igTextEditor().igNotifier({ mode: "inline" })
				.igNotifier("notify", "error", "Error message.");
       });