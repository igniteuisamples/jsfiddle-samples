$( function ()
        {

            var titles = ["Sales Representative", "Sales Manager", "Inside Sales Coordinator", "Vice President, Sales"];
            var countries = ["UK", "USA"];

            /*----------------- Instantiation -------------------------*/
            $( "#grid" ).igGrid( {
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
                }, {
                    headerText: "Last Name", key: "LastName", dataType: "string"
                }, {
                    headerText: "Title", key: "Title", dataType: "string"
                }, {
                    headerText: "Birth Date", key: "BirthDate", dataType: "date"
                }, {
                    headerText: "Postal Code", key: "PostalCode", dataType: "string"
                }, {
                    headerText: "Country", key: "Country", dataType: "string"
                }
                ],
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                width: "100%",
                tabIndex: 1,
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'EmployeeID',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'PostalCode',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'BirthDate',
                                classes: 'ui-hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "Selection",
                        mode: "row"
                    },
                    {
                        name: "Updating",
                        enableAddRow: false,
                        editMode: "rowedittemplate",
                        rowEditDialogWidth: 280,
                        rowEditDialogHeight: '280',
                        rowEditDialogContentHeight: 300,
                        rowEditDialogFieldWidth: 150,
                        rowEditDialogContainment: "window",
                        rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                        enableDeleteRow: false,
                        showReadonlyEditors: false,
                        showDoneCancelButtons: true,
                        enableDataDirtyException: false,
                        columnSettings: [
                            {
                                columnKey: "EmployeeID",
                                readOnly: true
                            }, {
                                columnKey: "Title",
                                editorType: "text",
                                editorOptions: {
                                    button: "dropdown",
                                    listItems: titles,
                                    readOnly: true,
                                    dropDownOnReadOnly: true
                                }
                            }, {
                                columnKey: "Country",
                                editorType: "text",
                                editorOptions: {
                                    button: "dropdown",
                                    listItems: countries,
                                    readOnly: true,
                                    dropDownOnReadOnly: true
                                }
                            },
                    {
                        columnKey: "BirthDate",
                        editorType: "datepicker",
                        validation: true,
                        editorOptions: { minValue: new Date( 1955, 1, 19 ), maxValue: new Date(), required: true },
                        validatorOptions: { bodyAsParent: false }
                    }
                        ]
                    }
                ]
            } );

        } );