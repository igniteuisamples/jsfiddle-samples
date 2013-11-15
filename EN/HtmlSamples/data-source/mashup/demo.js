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

            // Sample array data
            var data = [
                { "Name": "John Smith", "Age": 45 },
                { "Name": "Mary Johnson", "Age": 32 },
                { "Name": "Bob Ferguson", "Age": 27 }
            ];

            // Renders the table
            var renderTable = function (success, error) {
                var template = "<tr><td>${PersonName}</td><td>${Age}</td></tr>";
                if (success) {
                    $("#table tbody").empty();
                    $($.ig.tmpl(template, dsMashup.dataView())).appendTo("#table tbody");
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
                        { name: "PersonName", xpath: "./@Name" },
                        { name: "PersonEmail", xpath: "Details/@Email" },
                        { name: "PersonAge", xpath: "Details/@Age" }
                    ]
                }
            );

            //This code creates an $.ig.MashupDataSource from JavaScript array and XML data
            var dsMashup = new $.ig.MashupDataSource({
                dataSource: [
                    { dataSource: data },
                    { dataSource: xmlDoc, type: "xml", schema: xmlSchema }
                ],
                callback: renderTable
            });

            dsMashup.dataBind();

        });