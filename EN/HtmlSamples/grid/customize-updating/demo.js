$(function () {
var northwindEmployees = [
			{ "ID": 1, "Name": "Davolio, Nancy", "Title": "Sales Representative", "ImageUrl": "http://igniteui.com/images/samples/nw/employees/1.png", "Phone": "(206) 555-9857", "PhoneUrl": "tel:(206) 555-9857", "BirthDate": "\/Date(480808800000)\/", "HireDate": "\/Date(1224795600000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "Russian" }] },
			{ "ID": 2, "Name": "Fuller, Andrew", "Title": "Vice President, Sales", "ImageUrl": "http://igniteui.com/images/samples/nw/employees/2.png", "Phone": "(206) 555-9482", "PhoneUrl": "tel:(206) 555-9482", "BirthDate": "\/Date(433458000000)\/", "HireDate": "\/Date(1269640800000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "German" }] },
			{ "ID": 3, "Name": "Leverling, Janet", "Title": "Sales Representative", "ImageUrl": "http://igniteui.com/images/samples/nw/employees/3.png", "Phone": "(206) 555-3412", "PhoneUrl": "tel:(206) 555-3412", "BirthDate": "\/Date(268088400000)\/", "HireDate": "\/Date(1318453200000)\/", "Country": "USA", "Languages": [{ name: "English" }] },
			{ "ID": 4, "Name": "Peacock, Margaret", "Title": "Sales Representative", "ImageUrl": "http://igniteui.com/images/samples/nw/employees/4.png", "Phone": "(206) 555-8122", "PhoneUrl": "tel:(206) 555-8122", "BirthDate": "\/Date(377388000000)\/", "HireDate": "\/Date(1171404000000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "Spanish" }] },
			{ "ID": 5, "Name": "Buchanan, Steven", "Title": "Sales Manager", "ImageUrl": "http://igniteui.com/images/samples/nw/employees/5.png", "Phone": "(71) 555-4848", "PhoneUrl": "tel:(71) 555-4848", "BirthDate": "\/Date(-110084400000)\/", "HireDate": "\/Date(955573200000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "Italian" }] },
			{ "ID": 6, "Name": "Suyama, Michael", "Title": "Sales Representative", "ImageUrl": "http://igniteui.com/images/samples/nw/employees/6.png", "Phone": "(71) 555-7773", "PhoneUrl": "tel:(71) 555-7773", "BirthDate": "\/Date(44744400000)\/", "HireDate": "\/Date(1125090000000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "Portuguese" }] },
			{ "ID": 7, "Name": "King, Robert", "Title": "Sales Representative", "ImageUrl": "http://igniteui.com/images/samples/nw/employees/7.png", "Phone": "(71) 555-5598", "PhoneUrl": "tel:(71) 555-5598", "BirthDate": "\/Date(-213760800000)\/", "HireDate": "\/Date(907794000000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "French" }, { name: "Spanish" }] },
			{ "ID": 8, "Name": "Callahan, Laura", "Title": "Inside Sales Coordinator", "ImageUrl": "http://igniteui.com/images/samples/nw/employees/8.png", "Phone": "(206) 555-1189", "PhoneUrl": "tel:(206) 555-1189", "BirthDate": "\/Date(318828800000)\/", "HireDate": "\/Date(962825600000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "Mandarin" }] },
			{ "ID": 9, "Name": "Dodsworth, Anne", "Title": "Sales Representative", "ImageUrl": "http://igniteui.com/images/samples/nw/employees/9.png", "Phone": "(71) 555-4444", "PhoneUrl": "tel:(71) 555-4444", "BirthDate": "\/Date(444952800000)\/", "HireDate": "\/Date(1246395600000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "Japanese" }] }
		]

		$.ig.loader({
			scriptPath: "http://cdn-na.infragistics.com/igniteui/latest/js/",
			cssPath: "http://cdn-na.infragistics.com/igniteui/latest/css/",
			resources: "igGrid.Updating,igUpload"
		});
		$.ig.loader(function () {
			//var currCallbacks;
			//creating custom editor provider
			$.ig.EditorProviderUpload = $.ig.EditorProvider.extend({
				createEditor: function (callbacks, key, editorOptions, tabIndex, format, element) {
					this.noImagePath = "../images/samples/grid/noimage.png";
					this.currCallbacks = callbacks;
					var tmpContainer = $("#templateContainer");
					//appending teh div and the image elemnts
					tmpContainer.parent().append('<div id="container" style="width: 35%;float: right;position:relative; padding-top:5%; margin-top: 32px; margin-left: 20px;"><img id="imgTmp" src="" alt="" title="" width="150px" height="150px"/><div id="tooltip" style="margin-padding:5px; position:absolute; top:65px; left:50px;" ></div></div>');
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
						labelUploadButton: "Edit",
						labelAddButton: "Edit",
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

			$.widget("ui.SlideInDialog", $.ui.igGridModalDialog, {
				_create: function () {
					var d = this.element, self = this, gc;
					// dialog css
					d.css({
						"width": this.options.modalDialogWidth,
						"height": "100%",
						"position": "absolute",
						"background-color": "#FFFFFF",
						"border": "1px solid #bcbcbc"
					});
					// adding the header
					$("<div></div>")
						.addClass("ui-widget-header")
						.css("padding", "4px")
						.text(this.options.modalDialogCaptionText)
						.appendTo(d);
					// adding the content
					$("<div></div>")
						.css({
							"overflow": "auto",
							"float": "left"
						})
						.attr("id", this.element.attr("id") + "_content")
						.appendTo(d);
					$("<div data-editor-for-imageurl='true'></div>")
					.appendTo(d);
					// get the grid
					gc = this.element.closest(".ui-iggrid");
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

			$("#grid1").igGrid({
				dataSource: northwindEmployees,
				primaryKey: "ID",
				width: "100%",
				height: "400px",
				autoCommit: true,
				autoGenerateColumns: false,
				columns: [
					{ headerText: "Employee ID", key: "ID", dataType: "number", hidden: true },
					{ headerText: "Image", key: "ImageUrl", dataType: "object", template: "<img width='100' height='90' src='${ImageUrl}' alt='${Name}' title='${Name}' />" },
					{ headerText: "Name", key: "Name", dataType: "string" },
					{ headerText: "Title", key: "Title", dataType: "string" },
					{ headerText: "Phone", key: "Phone", dataType: "string" },
					{ headerText: "HireDate", key: "HireDate", dataType: "date" }
				],
				features: [
					{
						name: "Updating",
						enableAddRow: true,
						enableDeleteRow: false,
						editMode: "dialog",
						dialogWidget: "SlideInDialog",
						columnSettings: [
							{
								columnKey: "ImageUrl",
								readOnly: false,
								editorProvider: new $.ig.EditorProviderUpload()
							}
						],
						rowEditDialogOptions: {
							width: "560px",
							dialogTemplateSelector: "#dialogTemplate",
							editorsTemplateSelector: "#editorsTemplate",
							showReadonlyEditors: false,
							editorsColumnWidth: 50
						}
					}
				]
			});
		});
});