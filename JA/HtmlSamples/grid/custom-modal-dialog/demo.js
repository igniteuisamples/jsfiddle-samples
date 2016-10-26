$(function () {
$.widget("ui.SlideInDialog", $.ui.igGridModalDialog, {
			_create: function () {
				var d = this.element, self = this, gc, header;
				// get the grid's container
				gc = d.closest(".ui-iggrid");
				// adding the header
				header = $("<div></div>")
					.addClass("ui-widget-header")
					.css("padding", "4px")
					.text(this.options.modalDialogCaptionText)
					.appendTo(d);
				// adding the content
				$("<div></div>")
					.css({
						"overflow": "auto",
						"height": gc.outerHeight() - header.outerHeight()
					})
					.attr("id", this.element.attr("id") + "_content")
					.appendTo(d);
				// dialog css
				d.css({
					"width": this.options.modalDialogWidth,
					"height": gc.outerHeight(),
					"position": "absolute",
					"background-color": "#FFFFFF"
				});
				// grid's container need to hide the sliding dialog
				gc.css("overflow", "hidden");
				gc.find("tbody").on({
					mousedown: function (evt) {
						var table = gc.find(".ui-iggrid-table"),
							rowID = $(evt.target).closest("tr").attr("data-id");
						if (table.igGridUpdating("isEditing")) {
							self._blockSlide = true;
							if (table.igGridUpdating("endEdit", true)) {
								table.igGridUpdating("startEdit", rowID);
							}
							delete self._blockSlide;
						}
						evt.stopPropagation();
					}
				}, "td")
				d.bind({
					// bind to keydown so that the dialog can be closed on ENTER and ESC keypresses,
					// also handles the TAB sequence to wrap around the elements of the dialog
					keydown: function (e) {
						var tabElems, first, last;
						if (e.keyCode === $.ui.keyCode.ESCAPE) {
							self.closeModalDialog(false, true);
							return;
						}
						if (e.keyCode === $.ui.keyCode.ENTER &&
							self.options.closeModalDialogOnEnter &&
							!self.options.buttonApplyDisabled) {
							self.closeModalDialog(true, true);
							return;
						}
						if (e.keyCode !== $.ui.keyCode.TAB) {
							return;
						}
						tabElems = $(":tabbable", this);
						first = tabElems.first();
						last = tabElems.last();
						if (e.target === last[0] && !e.shiftKey) {
							first.focus(1);
							return false;
						}
						if (e.target === first[0] && e.shiftKey) {
							last.focus(1);
							return false;
						}
					}
				});
				// finally hide it initially
				d.hide();
			},
			openModalDialog: function () {
				var d = this.element, noCancel;
				if (this._modalDialogOpened) {
					return;
				}
				noCancel = this._trigger(
					this.events.modalDialogOpening,
					null,
					{
						modalDialog: d, owner: this
					}
				);
				if (noCancel) {
					this._trigger(
						this.events.modalDialogOpened,
						null,
						{
							modalDialogElement: d, owner: this, shouldFocus: true
						}
					);
					this._modalDialogOpened = true;
					if (!this._blockSlide) {
						// prepare the container for slide-in animation
						d.css({
							"top": "0px",
							"left": "-" + this.options.modalDialogWidth,
							"z-index": 1000
						});
						// execute the animation
						d.show().animate({ left: 0 }, 500);
					}
				}
			},
			closeModalDialog: function (accepted, fromUI) {
				var d = this.element, noCancel = true, self = this;
				if (!this._modalDialogOpened) {
					return;
				}
				noCancel = this._trigger(
					this.events.modalDialogClosing,
					null,
					{
						modalDialog: d,
						owner: this,
						accepted: !!accepted,
						raiseEvents: fromUI
					});
				if (noCancel) {
					if (!this._blockSlide) {
						d.animate({ left: "-" + this.options.modalDialogWidth }, 500, function () {
							self._trigger(self.events.modalDialogClosed, null, {
								modalDialog: d,
								owner: self,
								accepted: !!accepted,
								raiseEvents: fromUI
							});
							d.hide();
						});
					}
					this._modalDialogOpened = false;
				}
			}
		});

		$(function () {
			$("#grid").igGrid({
				dataSource: data,
				autoCommit: true,
				width: "100%",
				autoGenerateColumns: false,
				primaryKey: "company",
				columns: [
					{ headerText: "会社", key: "company", dataType: "string", },
					{ headerText: "生涯セールス", key: "sales_lifetimeSales", dataType: "number" },
					{ headerText: "市場の潜在能力", key: "sales_marketPotential", dataType: "number", },
					{ headerText: "現金資産", key: "assets_cash", dataType: "number", rowIndex: 0, },
					{ headerText: "売掛金勘定", key: "assets_accRec", dataType: "number", },
					{ headerText: "国", key: "country", dataType: "string", },
				],
				autofitLastColumn: false,
				features: [
					{
						name: "Paging",
						pageSize: 5
					},
					{
						name: "Updating",
						dialogWidget: "SlideInDialog",
						editMode: "dialog",
						enableAddRow: false,
						enableDeleteRow: false,
						columnSettings: [
							{ columnKey: "company", readOnly: true }
						],
						rowEditDialogOptions: {
							showReadonlyEditors: false
						}
					}
				]
			});
		});
});