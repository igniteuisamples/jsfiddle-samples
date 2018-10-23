$(function () {

            //Sample XML Data
            var xmlDoc = '<OrgChart Name="All Employees">' +
                '<Employee Name="Gustavo Achong" Age="42" Email="gachong@adventureworks.com">' +
                    '<Employee Name="Kim Abercrombie" Age="33" Email="kabercrombie@adventureworks.com" />' +
                    '<Employee Name="Lawrence Tapley" Age="52" Email="ltapley@adventureworks.com" />' +
                '</Employee>' +
                '<Employee Name="Catherine Abel" Age="27" Email="cabel@adventureworks.com">' +
                    '<Employee Name="Kristen Anderson" Age="30" Email="kanderson@adventureworks.com" />' +
                    '<Employee Name="Richard Lee" Age="25" Email="rlee@adventureworks.com" />' +
                    '<Employee Name="Victoria Gramley" Age="23" Email="vgramley@adventureworks.com" />' +
                '</Employee>' +
                '<Employee Name="Adrienne Mauro" Age="27" Email="amauro@adventureworks.com">' +
                    '<Employee Name="Christopher Chadwick" Age="37" Email="cchadwick@adventureworks.com" />' +
                '</Employee>' +
            '</OrgChart>';

            //Binding to XML requires a schema to define data fields
            var xmlSchema = new $.ig.DataSchema("xml",
                {
                    //searchField serves as the base node(s) for the XPaths
                    searchField: "OrgChart",
                    childDataProperty: "Employee",
                    fields: [
                        { name: "Name", xpath: "@Name" },
                        { name: "Age", xpath: "@Age" },
                        { name: "Email", xpath: "@Email" },
                        { name: "Employee", xpath: "Employee" }
                    ]
                }
            );

            //This creates an Infragistics datasource from the XML 
            //and the Schema which can be consumed by the grid.
            var ds = new $.ig.DataSource({
                type: "xml",
                dataSource: xmlDoc,
                schema: xmlSchema
            });

            $("#hierarchicalGrid1").igHierarchicalGrid({
                dataSource: ds, //$.ig.DataSource object defined above
                autoGenerateColumns: false,
                columns: [
                    { headerText: "Name", key: "Name" }
                ],
                columnLayouts : [{
                    key: "Employee",
                    autoGenerateColumns: false,
                    columns: [
                        { headerText: "Name", key: "Name" },
                        { headerText: "Age", key: "Age" },
                        { headerText: "Email", key: "Email" }
                    ],
                    columnLayouts : [{
                        key: "Employee",
                        autoGenerateColumns: false,
                        columns: [
                            { headerText: "Name", key: "Name" },
                            { headerText: "Age", key: "Age" },
                            { headerText: "Email", key: "Email" }
                        ]
                    }],
                }]
            });
        });