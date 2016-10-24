$(function () {
			$("#scrollableContentLeft").igScroll({
				alwaysVisible: true,
				syncedElemsV: [$("#scrollableContentRight")],
				syncedElemsH: [$("#scrollableContentRight")]
			});

			$("#scrollableContentRight").igScroll({
				alwaysVisible: true,
				syncedElemsV: [$("#scrollableContentLeft")],
				syncedElemsH: [$("#scrollableContentLeft")]
			});
		});