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
                autoGenerateColumns: false,
                autoCommit:true,
                columns: [
                        { headerText: "Employee ID", key: "ID", dataType: "number" },
                        { headerText: "Name", key: "Name", dataType: "string", template: "{{>#view.hlp('toFullName')(Name)}}" },
                        {
                            headerText: "Image", key: "ImageUrl", dataType: "object",
                            template: "<img width='100' height='90' src={{>ImageUrl}}></img>"
                        },
                        { headerText: "Title", key: "Title", dataType: "string" },
                        {
                            headerText: "Languages", key: "Languages", dataType: "object",
                            template: "{{for Languages}}<div>{{:name}}</div>{{/for}}"
                        },
                        { headerText: "Phone", key: "Phone", dataType: "string" },
                        {
                            headerText: "Country", key: "Country", dataType: "string",
                            template: "<img width='20' height='15' src='http://igniteui.com/images/samples/nw/countries/{{>Country}}.gif'></img>{{>Country}}"
                        },
                        {
                            headerText: "Birth Date", key: "BirthDate", dataType: "date",
                            template: "<span style='color:{{if #view.hlp('toDate')(BirthDate) > #view.hlp('toDate')('1970-01-01T00:00:00.000')}}blue{{else}}red{{/if}};'>{{>BirthDate}}</span>"
                        }
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