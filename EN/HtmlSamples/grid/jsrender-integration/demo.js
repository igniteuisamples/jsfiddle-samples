$(function () {

            var titles = ["Sales Representative", "Sales Manager", "Inside Sales Coordinator", "Vice President, Sales"];
            var countries = ["UK", "USA"];

            $.views.helpers(
            {
                toDate: function (val) {
                    return new Date(val);
                }
            });

            $.views.helpers(
            {
                toFullName: function (val) {
                    var name = val.split(',').reverse().join(" ");
                    return name;
                }
            });

            $("#grid12").igGrid({
                width: "100%",
                height: "600px",
                rowTemplate: $("#theTmpl").html(),
                autoGenerateColumns: false,
                autoCommit:true,
                columns: [
                        { headerText: "Employee ID", key: "ID", dataType: "number" },
                        { headerText: "Name", key: "Name", dataType: "string" },
                        { headerText: "Image", key: "ImageUrl", dataType: "object" },
                        { headerText: "Title", key: "Title", dataType: "string" },
                        { headerText: "Languages", key: "Languages", dataType: "object" },
                        { headerText: "Phone", key: "Phone", dataType: "string" },
                        { headerText: "Country", key: "Country", dataType: "string" },
                        { headerText: "Birth Date", key: "BirthDate", dataType: "date" }
                    ],
                dataSource: northwindEmployees,
                primaryKey: "ID",
                templatingEngine: "jsrender",
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'Phone',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'Name',
                                classes: 'ui-hidden-phone'
                            }
                        ]
                    }
                ]
            });
        });