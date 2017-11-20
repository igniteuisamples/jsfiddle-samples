$(function () {
var northwindEmployees = [
			{ "ID": 1, "Name": "Davolio, Nancy", "Title": "Sales Representative", "ImageUrl": "http://jp.igniteui.com/images/samples/nw/employees/1.png", "Phone": "(206) 555-9857", "PhoneUrl": "tel:(206) 555-9857", "BirthDate": "1948-12-08T00:00:00", "HireDate": "1992-05-01T00:00:00", "Country": "USA", "Languages": [{ name: "English" }, { name: "Russian" }] },
			{ "ID": 2, "Name": "Fuller, Andrew", "Title": "Vice President, Sales", "ImageUrl": "http://jp.igniteui.com/images/samples/nw/employees/2.png", "Phone": "(206) 555-9482", "PhoneUrl": "tel:(206) 555-9482", "BirthDate": "1952-02-19T00:00:00", "HireDate": "1992-08-14T00:00:00", "Country": "USA", "Languages": [{ name: "English" }, { name: "German" }] },
			{ "ID": 3, "Name": "Leverling, Janet", "Title": "Sales Representative", "ImageUrl": "http://jp.igniteui.com/images/samples/nw/employees/3.png", "Phone": "(206) 555-3412", "PhoneUrl": "tel:(206) 555-3412", "BirthDate": "1963-08-30T00:00:00Z", "HireDate": "1992-04-01T00:00:00Z", "Country": "USA", "Languages": [{ name: "English" }] },
			{ "ID": 4, "Name": "Peacock, Margaret", "Title": "Sales Representative", "ImageUrl": "http://jp.igniteui.com/images/samples/nw/employees/4.png", "Phone": "(206) 555-8122", "PhoneUrl": "tel:(206) 555-8122", "BirthDate": "1937-09-19T00:00:00Z", "HireDate": "1993-05-03T00:00:00Z", "Country": "USA", "Languages": [{ name: "English" }, { name: "Spanish" }] },
			{ "ID": 5, "Name": "Buchanan, Steven", "Title": "Sales Manager", "ImageUrl": "http://jp.igniteui.com/images/samples/nw/employees/5.png", "Phone": "(71) 555-4848", "PhoneUrl": "tel:(71) 555-4848", "BirthDate": "1955-03-04T00:00:00Z", "HireDate": "1993-10-17T00:00:00Z", "Country": "UK", "Languages": [{ name: "English" }, { name: "Italian" }] },
			{ "ID": 6, "Name": "Suyama, Michael", "Title": "Sales Representative", "ImageUrl": "http://jp.igniteui.com/images/samples/nw/employees/6.png", "Phone": "(71) 555-7773", "PhoneUrl": "tel:(71) 555-7773", "BirthDate": "1963-07-02T00:00:00Z", "HireDate": "1993-10-17T00:00:00Z", "Country": "UK", "Languages": [{ name: "English" }, { name: "Portuguese" }] },
			{ "ID": 7, "Name": "King, Robert", "Title": "Sales Representative", "ImageUrl": "http://jp.igniteui.com/images/samples/nw/employees/7.png", "Phone": "(71) 555-5598", "PhoneUrl": "tel:(71) 555-5598", "BirthDate": "1960-05-29T00:00:00Z", "HireDate": "1994-01-02T00:00:00Z", "Country": "UK", "Languages": [{ name: "English" }, { name: "French" }, { name: "Spanish" }] },
			{ "ID": 8, "Name": "Callahan, Laura", "Title": "Inside Sales Coordinator", "ImageUrl": "http://jp.igniteui.com/images/samples/nw/employees/8.png", "Phone": "(206) 555-1189", "PhoneUrl": "tel:(206) 555-1189", "BirthDate": "1958-01-09T00:00:00Z", "HireDate": "1994-03-05T00:00:00Z", "Country": "USA", "Languages": [{ name: "English" }, { name: "Mandarin" }] },
			{ "ID": 9, "Name": "Dodsworth, Anne", "Title": "Sales Representative", "ImageUrl": "http://jp.igniteui.com/images/samples/nw/employees/9.png", "Phone": "(71) 555-4444", "PhoneUrl": "tel:(71) 555-4444", "BirthDate": "1966-01-27T00:00:00Z", "HireDate": "1994-11-15T00:00:00Z", "Country": "UK", "Languages": [{ name: "English" }, { name: "Japanese" }] }
		];

		$(function () {
			//var currCallbacks;
			//creating custom editor provider
			$.ig.EditorProviderUpload = $.ig.EditorProvider.extend({
				createEditor: function (callbacks, key, editorOptions, tabIndex, format, element) {
					this.noImagePath = "../images/samples/grid/noimage.png";
					this.currCallbacks = callbacks;
					var tmpContainer = $("#templateContainer");
					//appending teh div and the image elemnts
					tmpContainer.parent().prepend('<div id="container" style="width: 35%;float: left;position:relative; padding-top:5%; margin-top: 32px; margin-left: 20px;"><img id="imgTmp" src="" alt="" title="" width="120px" height="120px"/><div id="tooltip" style="left:25%;width:120px;position:absolute;"></div></div>');
					tmpContainer.parent().append('<div style="clear:both;"></div><div id="error-message" style="float: right;color: #FF0000; font-weight: bold;"></div>');
					this.createUpload();
					this.image = $("#imgTmp");
					return element;
				},
				attachErrorEvents: function (errorShowing, errorShown, errorHidden) { },
				getValue: function () {
					return this.image.attr("src") || this.noImagePath;
				},
				setValue: function (val) {
					this.image.attr("src", val);
				},
				createUpload: function () {
					// if upload exists - remove it and re-create new upload
					var $tooltip = $("#tooltip"), self = this;
					$('#upload').remove();
					$("<div id='upload'></div>").appendTo($tooltip);
					$("#upload").igUpload({
						width: "120px",
						autostartupload: true,
						maxFileSize: 500000,
						allowedExtensions: ["jpg", "jpeg", "gif", "png"],
						fileSelected: function (e, args) {
							args.owner.element.hide();
						},
						fileUploaded: $.proxy(this.fileUploadedEvt, this),
						onError: function (e, args) {
							self.showAlert(args);
						},
						locale: {
							labelUploadButton: "編集",
							labelAddButton: "編集"
						},
						controlId: "serverID4"
					});
				},
				fileUploadedEvt: function (evt, ui) {
					var button = $("#upload_bb"),
						upload = $("#upload"),
						sMsg = ui.fileInfo.serverMessage,
						self = this;
					if (!sMsg) {
						sMsg = "../images/samples/grid/noimage.png";
						this.showAlert({ errorMessage: 'The file cannot be uploaded.' });
					} else {
						sMsg = 'data:image/png;base64,' + sMsg;
					}
					$("#imgTmp").attr("src", sMsg);
					//callbacks collection
					this.currCallbacks.textChanged();
					// re-create upload
					setTimeout(function () {
						self.createUpload();
					}, 10);
				},
				showAlert: function (args) {
					var self = this;
					$("#error-message").html(args.errorMessage)
						.stop(true, true).fadeIn(500).delay(3000).fadeOut(500);
					setTimeout(function () {
						self.createUpload();
					}, 10);
				},
				destroy: function () {
					var $upload = $("#upload");
					if ($upload.data('igUpload')) {
						$upload.igUpload("destroy");
					}
				}
			});

			$.widget("ui.SplitterDialog", $.ui.igGridModalDialog, {
				_create: function () {
					var d = this.element, self = this, gc, header, footer, $buttonSet, $buttonOK, $buttonCancel, o = this.options, self = this,
					outerContianer, closeButton, btnContainer;
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
								{ size: "30%" },
								{ size: "70%", collapsible: true }
							]
						}
						);

					// adding the header
					header = $("<div></div>")
						.addClass("ui-widget-header")
						.css("padding", "4px")
						.text(this.options.locale.modalDialogCaptionText)
						.appendTo(d);

					//adding close button
					btnContainer = $("<div></div>").appendTo(header).addClass("ui-iggrid-modaldialog-caption-buttoncontainer");

					closeButton = $("<button type='button'></button>")
					.attr("id", "dialog_closeButton")
					.appendTo(btnContainer);

					closeButton.igButton({
						onlyIcons: true,
						icons: {
							primary: "ui-icon-close"
						},
						width: "20px",
						height: "20px",
						click: function () {
							self.closeModalDialog(false, true);
						}
					});

					//adding footer
					footer = $("<div class='dialogFooter'></div>")
					//.addClass(this.css.modalDialogFooter)
					.attr("id", this._id("footer"))
					.appendTo(d);
					$buttonSet = $("<div></div>")
						.appendTo(footer);

					$buttonOK = $("<button></button>")
						.attr("id", this._id("footer_buttonok"))
						.appendTo($buttonSet);
					$buttonOK.igButton({
						labelText: o.locale.buttonApplyText,
						title: o.locale.buttonApplyTitle,
						disabled: o.buttonApplyDisabled,
						click: function () {
							self.closeModalDialog(true, true);
						}
					});
					$buttonCancel = $("<button></button>")
						.attr("id", this._id("footer_buttoncancel"))
						.appendTo($buttonSet);
					$buttonCancel.igButton({
						labelText: o.locale.buttonCancelText,
						title: o.locale.buttonCancelTitle,
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
						},
						pointerdown: function (evt) { evt.stopPropagation(); },
						touchstart: function (evt) { evt.stopPropagation(); }
					}, "td");
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
						this._modalDialogOpened = true;
						d.show();
						d.prev().show();
						this._customSplitterContainer.igSplitter("setFirstPanelSize", "50%");
						this._trigger(
							this.events.modalDialogOpened,
							null,
							{
								modalDialogElement: d, owner: this, shouldFocus: true
							}
						);
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
						this._customSplitterContainer.igSplitter("firstPanel").css("width", "100%");
					}
				}
			});

			$("#grid1").igGrid({
				dataSource: northwindEmployees,
				primaryKey: "ID",
				width: "100%",
				height: "400px",
				autoCommit: true,
				autoGenerateColumns: false,
				columns: [
					{ headerText: "社員 ID", key: "ID", dataType: "number", hidden: true },
					{ headerText: "画像", key: "ImageUrl", dataType: "object", template: "<img width='100' height='90' src='${ImageUrl}' alt='${Name}' title='${Name}' />" },
					{ headerText: "名前", key: "Name", dataType: "string" },
					{ headerText: "役職", key: "Title", dataType: "string" },
					{ headerText: "電話", key: "Phone", dataType: "string" },
					{ headerText: "雇用日", key: "HireDate", dataType: "date" }
				],
				features: [
					{
						name: "Updating",
						enableAddRow: true,
						enableDeleteRow: false,
						editMode: "dialog",
						dialogWidget: "SplitterDialog",
						columnSettings: [
							{
								columnKey: "ImageUrl",
								readOnly: false,
								editorProvider: new $.ig.EditorProviderUpload()
							}
						],
						rowEditDialogOptions: {
							dialogTemplateSelector: "#dialogTemplate",
							editorsTemplateSelector: "#editorsTemplate",
							showReadonlyEditors: false,
							editorsColumnWidth: 150
						}
					}
				]
			});
		});
});