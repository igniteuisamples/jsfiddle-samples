$(function () {
            $("#dataBindBtn").igButton({ labelText: $("#dataBindBtn").val() });
            $('#dataBindBtn').on("click", function (e) {
                    // Renders the table
                    var renderTable = function (success, error) {
                        var template = "<tr><td>${ID}</td><td>${Name}</td><td>${Number}</td></tr>";
                        if (success) {
                            $("#destinationTable tbody").empty();
                            $($.ig.tmpl(template, ds.dataView())).appendTo("#destinationTable tbody");
                            $("#dataBindBtn").igButton('disable');
                        } else {
                            alert(error);
                        }
                    }

                    // The $.ig.DataSchema is used to define the schema of the data
                    // Defining $.ig.DataSchema is mandatory when binding to HTML TABLE element
                    var tableSchema = new $.ig.DataSchema("htmlTableDom", {
                        fields: [
                            { name: "ID" },
                            { name: "Name" },
                            { name: "Number" }
                        ]
                    });

                    //This code creates an $.ig.DataSource from the HTML Table DOM data
                    var ds = new $.ig.DataSource({
                        schema: tableSchema,
                        dataSource: $("#sourceTable")[0],
                        callback: renderTable
                    });

                    // Binds to the underlying data
                    ds.dataBind();
                }
            );
        });