$(function () {

            // Used to show output in the API Viewer at runtime,
            // defined in external script "apiviewer.js"
            var apiViewer = new $.ig.apiViewer();

            var titles = ["Sales Representative", "Sales Manager", "Inside Sales Coordinator", "Vice President, Sales"];
            var countries = ["UK", "USA"];

            /*----------------- Method & Option Examples -------------------------*/

            // process events of checkboxes
            $("#enableDelete").on({
                change: function (e) {
                    $("#grid").igGridUpdating("option", "enableDeleteRow", $(this).is(":checked"));
                }
            });

            $("#enableAddRow").on({
                change: function (e) {
                    $("#grid").igGridUpdating("option", "enableAddRow", $(this).is(":checked"));
                }
            });

            $("#showButtons").on({
                change: function (e) {
                    $("#grid").igGridUpdating("option", "showDoneCancelButtons", $(this).is(":checked"));
                }
            });

            // process events of select options
            $("#editMode").igCombo({
                mode: "dropdown",
                height: 23,
                enableClearButton: false,
                enableActiveItem: false,
                selectionChanged: function (evt, ui) {
                    if (ui.items.length == 1) {
                        var editMode = ui.items[0].value;
                        $("#grid").igGridUpdating("option", "editMode", editMode);
                    }
                }
            });

            $("#startEditTriggers").igCombo({
                mode: "dropdown",
                height: 23,
                enableClearButton: false,
                enableActiveItem: false,
                selectionChanged: function (evt, ui) {
                    if (ui.items.length == 1) {
                        var startEditTriggers = ui.items[0].value;
                        $("#grid").igGridUpdating("option", "startEditTriggers", startEditTriggers);
                    }
                }
            });

            // process events of buttons

            $("#deleteRow").igButton({
                labelText: $("#deleteRow").val(),
                click: function (e) {
                    var rowIndex = $("#rowSelect").igNumericEditor("option", "value"),
                        tr = $("#grid").igGrid("rowAt", parseInt(rowIndex-1));
                    if (!tr) return;

                    $("#grid").igGridUpdating("deleteRow", rowIndex-1, tr);
                }
            });

            $("#addRow").igButton({
                labelText: $("#addRow").val(),
                click: function (e) {
                    var rowObj = {
                        "FirstName": $("#firstName").val(),
                        "LastName": $("#lastName").val(),
                        "Title": $("#title").val(),
                        "BirthDate": $("#birthDate").val(),
                        "PostalCode": $("#postCode").val(),
                        "Country": $("#country").val()
                    };

                    $("#grid").igGridUpdating("addRow", rowObj);
                }
            });

            /*----------------- Event Examples -------------------------*/

            $("#grid").on("iggridupdatingrowdeleting", function (evt, ui) {
                var message = "iggridupdatingrowdeleting";
                apiViewer.log(message);
            });

            $("#grid").on("iggridupdatingrowadding", function (evt, ui) {
                var message = "iggridupdatingrowadding";
                apiViewer.log(message);
            });

            $("#grid").on("iggridupdatingeditcellending", function (evt, ui) {
                var message = "iggridupdatingeditcellending";
                apiViewer.log(message);
            });

            $("#grid").on("iggridupdatingeditrowstarting", function (evt, ui) {
                var message = "iggridupdatingeditrowstarting";
                apiViewer.log(message);
            });

            $("#grid").on("iggridupdatingeditrowending", function (evt, ui) {
                var message = "iggridupdatingeditrowending";
                apiViewer.log(message);
            });

            /*----------------- Instantiation -------------------------*/
            $("#grid").igGrid({
                virtualization: false,
                autoGenerateColumns: false,
                renderCheckboxes: true,
                primaryKey: "EmployeeID",
                columns: [{
                    // note: if primaryKey is set and data in primary column contains numbers,
                    // then the dataType: "number" is required, otherwise, dataSource may misbehave
                    headerText: "Employee ID", key: "EmployeeID", dataType: "number"
                },
                {
                    headerText: "First Name", key: "FirstName", dataType: "string"
                },
                {
                    headerText: "Last Name", key: "LastName", dataType: "string"
                },
                {
                    headerText: "Title", key: "Title", dataType: "string"
                },
                {
                    headerText: "Birth Date", key: "BirthDate", dataType: "date"
                },
                {
                    headerText: "Postal Code", key: "PostalCode", dataType: "string"
                },
                {
                    headerText: "Country", key: "Country", dataType: "string"
                }
                ],
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                height: "350px",
                width:"100%",
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "EmployeeID",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "PostalCode",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "BirthDate",
                                classes: "ui-hidden-phone"
                            }
                        ]
                    },
                    {
                        name: "Selection",
                        mode: "row"
                    },
                    {
                        name: "Updating",
                        enableAddRow: true,
                        editMode: "row",
                        enableDeleteRow: true,
                        rowEditDialogContainment: "owner",
                        showReadonlyEditors: false,
                        enableDataDirtyException: false,
                        columnSettings: [
                        {
                            columnKey: "EmployeeID",
                            readOnly: true
                        },
                        {
                            columnKey: "Title",
                            editorType: "text"
                        },
                        {
                            columnKey: "Country",
                            editorType: "combo",
                            editorOptions: {
                                dataSource: countries
                            }
                        },
                        {
                            columnKey: "BirthDate",
                            editorType: "datepicker",
                            validation: true,
                            editorOptions: {
                                maxValue: new Date(),
                                required: true
                            }
                        }]
                    }]
            });

            // editors initialization

            $("#rowSelect").igNumericEditor({
                dataMode: "sbyte",
                button: "spin",
                value: 1,
                minValue: 1,
                maxValue: 9,
                width: 150,
                height: 23
            });

            $("#firstName").igTextEditor({
                width: 100,
                height: 23
            });

            $("#lastName").igTextEditor({
                width: 100,
                height: 23
            });

            $("#birthDate").igDatePicker({
                width: 120,
                height: 23,
                maxValue: new Date(),
                required: true
            });

            $("#country").igEditor({
                width: 80,
                height: 23,
                button: "dropdown",
                listItems: countries,
                value: countries[1]
            });

            $("#title").igEditor({
                width: 150,
                height: 23,
                button: "dropdown",
                listItems: titles,
                value: titles[1]
            });

            $("#postCode").igMaskEditor({
                width: 100,
                height: 23,
                inputMask: ">00000",
                dataMode: "rawtext"
            });
        });