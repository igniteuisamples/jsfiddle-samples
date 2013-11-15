$(function () {
            //Sample XML Data
            var xmlDoc = '<People>' +
                '<Person Name="Gustavo Achong">' +
                    '<Details Age="42" Email="gachong@adventureworks.com" />' +
                '</Person>' +
                '<Person Name="Catherine Abel">' +
                    '<Details Age="27" Email="cabel@adventureworks.com" />' +
                '</Person>' +
                '<Person Name="Kim Abercrombie">' +
                    '<Details Age="33" Email="kabercrombie@adventureworks.com" />' +
                '</Person>' +
            '</People>';

            // Renders the table
            var renderTable = function (success, error) {
                var template = "<tr><td>${Name}</td><td>${Email}</td><td>${Age}</td></tr>";
                if (success) {
                    $("#table tbody").empty();
                    $($.ig.tmpl(template, ds.dataView())).appendTo("#table tbody");
                } else {
                    alert(error);
                }
            }

            //Binding to XML requires a schema to define data fields
            var xmlSchema = new $.ig.DataSchema("xml",
                {
                    //searchField serves as the base node(s) for the XPaths
                    searchField: "//Person",
                    fields: [
                        { name: "Name", xpath: "./@Name" },
                        { name: "Email", xpath: "Details/@Email" },
                        { name: "Age", xpath: "Details/@Age" }
                    ]
                }
            );

            //This creates an Infragistics datasource from the XML 
            //and the Schema which can be consumed by the grid.
            var ds = new $.ig.DataSource({
                type: "xml",
                dataSource: xmlDoc,
                schema: xmlSchema,
                callback: renderTable
            });

            // Binds to the underlying data
            ds.dataBind();
        });