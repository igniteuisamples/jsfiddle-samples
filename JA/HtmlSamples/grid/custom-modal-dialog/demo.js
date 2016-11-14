$(function () {
$.widget("ui.SplitterDialog", $.ui.igGridModalDialog, {
			_create: function () {
				var d = this.element, self = this, gc, header, footer, $buttonSet, $buttonOK, $buttonCancel, o = this.options, self = this,
				outerContianer;
				// get the grid's container
				gc = d.closest(".ui-iggrid");

				d.detach();
				
				outerContianer = "<div id='customContainerDiv'></div>";

				gc.wrap(outerContianer).wrap("<div></div>");
				
				gc.parent().parent().append(d);

				this._customSplitterContainer = $("#customContainerDiv");
				
				this._customSplitterContainer.igSplitter(
					{
						width: "100%",
						height: "400px",
						panels: [
							{ size: "60%" },
							{ size: "40%" }
						]
					}
					);

				// adding the header
				header = $("<div></div>")
					.addClass("ui-widget-header")
					.css("padding", "4px")
					.text(this.options.modalDialogCaptionText)
					.appendTo(d);

				//adding footer
				footer = $("<div></div>")
				//.addClass(this.css.modalDialogFooter)
				.attr("id", this._id("footer"))
				.appendTo(d);
				$buttonSet = $("<div></div>")
					.appendTo(footer);

				$buttonOK = $("<button></button>")
					.attr("id", this._id("footer_buttonok"))
					.appendTo($buttonSet);
				$buttonOK.igButton({
					labelText: o.buttonApplyText,
					title: o.buttonApplyTitle,
					disabled: o.buttonApplyDisabled,
					click: function(){
						self.closeModalDialog(true, true);
					}
				});
				$buttonCancel = $("<button></button>")
					.attr("id", this._id("footer_buttoncancel"))
					.appendTo($buttonSet);
				$buttonCancel.igButton({
					labelText: o.buttonCancelText,
					title: o.buttonCancelTitle,
					click: function () {
						self.closeModalDialog(false, true);
					}
				});

				// adding the content
				$("<div></div>")
					.css({
						"overflow": "auto",
						"height": gc.outerHeight() - header.outerHeight() - footer.outerHeight()
					})
					.attr("id", this.element.attr("id") + "_content")
					.insertAfter(header);

				$buttonSet.css("float", "right");
				// dialog css
				d.css({
					"width": this.options.modalDialogWidth,
					"height": gc.outerHeight(),
					"background-color": "#FFFFFF"
				});
				// grid's container need to hide the sliding dialog
				gc.css("overflow", "hidden");
				gc.find("tbody").on({
					mousedown: function (evt) {
						var table = gc.find(".ui-iggrid-table"),
							rowID = $(evt.target).closest("tr").attr("data-id");
						if (table.igGridUpdating("isEditing")) {
							if (table.igGridUpdating("endEdit", true)) {
								table.igGridUpdating("startEdit", rowID);
							}
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
					d.show();
					d.prev().show();
					this._customSplitterContainer.igSplitter("setFirstPanelSize", "60%");
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
					this._modalDialogOpened = false;
					d.hide();
					d.prev().hide();

					this._customSplitterContainer.igSplitter("setFirstPanelSize", "100%");
				}

			}
		});

		$(function () {
			$("#grid").igGrid({
				dataSource: data,
				autoCommit: true,
				height: "400px",
				autoGenerateColumns: false,
				primaryKey: "company",
				columns: [
					{ headerText: "会社", key: "company", dataType: "string" },
					{ headerText: "生涯セールス", key: "sales_lifetimeSales", dataType: "number" },
					{ headerText: "市場の潜在能力", key: "sales_marketPotential", dataType: "number"},
					{ headerText: "現金資産", key: "assets_cash", dataType: "number", rowIndex: 0},
					{ headerText: "売掛金勘定", key: "assets_accRec", dataType: "number"},
					{ headerText: "国", key: "country", dataType: "string"},
				],
				autofitLastColumn: false,
				features: [
					{
						name: "Paging",
						pageSize: 10
					},
					{
						name: "Updating",
						dialogWidget: "SplitterDialog",
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