$(function () {
$(document).ready(function () {
			var chart = $("#chart"),
				zoombar = $("#zoom"),
				popoverTimeout = 0,
				popoverLeft,
				popoverRight,
				lastTarget,
				currentlyDragged,
				zoomParams;
			chart.igDataChart({
				width: "100%",
				height: "300px",
				axes: [
					{
						name: "xAxis",
						type: "categoryDateTimeX",
						dataSource: financialData1,
						dateTimeMemberPath: "Date",
						labelVisibility: "visible"
					},
					{
						name: "yAxis",
						type: "numericY"
					}
				],
				series: [
					{
						name: "series1",
						dataSource: financialData1,
						title: "価格シリーズ",
						type: "financial",
						isTransitionInEnabled: true,
						displayType: "ohlc",
						xAxis: "xAxis",
						yAxis: "yAxis",
						openMemberPath: "Open",
						highMemberPath: "High",
						lowMemberPath: "Low",
						showTooltip: true,
						tooltipTemplate: "tooltipTemplate",
						closeMemberPath: "Close",
						thickness: 2,
						trendLineBrush: "rgba(68, 172, 214, .8)",
						trendLineThickness: 5,
						trendLineType: "exponentialAverage",
						negativeBrush: "rgba(198, 45, 54, .8)"
					},
					{
						name: "series2",
						dataSource: financialData2,
						title: "価格シリーズ",
						type: "financial",
						isTransitionInEnabled: true,
						xAxis: "xAxis",
						yAxis: "yAxis",
						openMemberPath: "Open",
						highMemberPath: "High",
						lowMemberPath: "Low",
						closeMemberPath: "Close",
						thickness: 2,
						showTooltip: true,
						tooltipTemplate: "tooltipTemplate",
						trendLineBrush: "rgba(73, 73, 73, .8)",
						trendLineThickness: 5,
						trendLineType: "exponentialAverage",
						negativeBrush: "rgba(198, 45, 54, .8)",
						displayType: "ohlc"
					}
				],
				horizontalZoomable: true,
				verticalZoomable: false,
				windowResponse: "immediate",
				refreshCompleted: function (e, ui) {
				    if (chart && chart.igDataChart) {
                        var viewport = chart.igDataChart("option", "gridAreaRect"),
							    leftMostValue = chart.igDataChart("unscaleValue", "xAxis", viewport.left),
							    rightMostValue = $("#chart").igDataChart("unscaleValue", "xAxis", viewport.left + viewport.width);
				        // get the dates corresponding to the values
				        leftMostValue = new Date(leftMostValue);
				        rightMostValue = new Date(rightMostValue);
				        // set the dates to the popover
				        if (popoverLeft.data("igPopover")) {
				            popoverLeft.igPopover("setContent", $.ig.formatter(leftMostValue, "date", "date"));
				        }
				        if (popoverRight.data("igPopover")) {
				            popoverRight.igPopover("setContent", $.ig.formatter(rightMostValue, "date", "date"));
				        }
				        zoomParams = {
				            left: ui.chart.actualWindowRect ? ui.chart.actualWindowRect.left : 0.35,
				            width: ui.chart.actualWindowRect ? ui.chart.actualWindowRect.width : 0.30
				        }
                    }
				}
			});
			$("#zoom").igZoombar({
				target: "#chart",
				zoomWindowMinWidth: 1.2,
				windowResized: function (evt, ui) {
					var target = $(evt.originalEvent.target),
						handle = target.hasClass("ui-igzoombar-window-handle") ?
						target : lastTarget,
						container =handle ? handle.igPopover("container").parent().parent(): null;
					if (target.hasClass("ui-igzoombar-window-handle")) {
						lastTarget = target;
					}
					if (currentlyDragged && handle[0] !== currentlyDragged[0]) {
						currentlyDragged.igPopover("hide");
					}
					// show the popover if it's not already visible
					if (container && !container.is(":visible")) {
						handle.igPopover("show");
					}
					if (handle) {
						// update popovers position
						handle.igPopover("setCoordinates", {
							top: handle.offset().top - container.outerHeight(),
							left: handle.offset().left - container.outerWidth() / 2 + 5
						});
						currentlyDragged = handle;
						if (popoverTimeout > 0) {
							clearTimeout(popoverTimeout);
						}
						popoverTimeout = setTimeout(function () {
							popoverLeft.igPopover("hide");
							popoverRight.igPopover("hide");
							popoverTimeout = 0;
						}, 2000);
						// finally reset the buttonset
						$("#buttonset input").removeAttr("checked");
						$("#buttonset").buttonset("refresh");
					}
				}
			});
			var lastSelectedButton;
			function onClick(button, label) {
				var newWidth,
					activeCss = "ui-state-active",
					viewport = chart.igDataChart("option", "gridAreaRect"),
					leftMostValue = chart.igDataChart("unscaleValue", "xAxis", viewport.left);
				if (button === "day") {
					newWidth = 24 * 60 * 60 * 1000;
				} else if (button === "week") {
					newWidth = 7 * 24 * 60 * 60 * 1000;
				} else if (button === "month") {
					newWidth = 30 * 24 * 60 * 60 * 1000;
				}
				// do not process same selected button twice
				if (!newWidth || lastSelectedButton === button)
					return;
				lastSelectedButton = button;
				newWidth = chart.igDataChart("scaleValue", "xAxis", new Date(leftMostValue + newWidth));
				zoombar.igZoombar("zoom", zoomParams.left * 100, (newWidth * zoomParams.width / viewport.width) * 100);
				// verify/fix appearance of active button
				if (label) {
					setTimeout(function () {
						// condition when mouse-click of buttonset failed
						if (label.className.indexOf(activeCss) < 0) {
							var old = $("#buttonset").find("." + activeCss);
							old.removeClass(activeCss).removeClass("ui-state-focus");
							label.className += " " + activeCss;
						}
					}, 40);
				}
			}
			// Note: buttonset has a bug with raising click events.
			// To get around, use mouseup with check for "LABEL.htmlFor"
			$("#buttonset").buttonset().click(function (evt) {
				onClick(evt.target.id);
			}).mouseup(function(evt) {
				var label = evt.target;
				if (label.nodeName !== "LABEL")
					label = label.parentNode;
				onClick(label.htmlFor, label);
			});
			popoverLeft = $("#zoom_zoombar_mask_left_handle");
			popoverRight = $("#zoom_zoombar_mask_right_handle");
			popoverLeft.igPopover({
				direction: "top",
				showOn: "focus"
			});
			popoverRight.igPopover({
				direction: "top",
				showOn: "focus"
			});
		});
});