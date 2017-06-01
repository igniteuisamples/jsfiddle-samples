$(function () {
            // Renders the table
            var renderTable = function (success, error) {
                var template = "<tr><td><img width='90' height='100' src='${ImageUrl}' /img></td></td><td>${Name}</td><td>{{html Notes}}</td></tr>";
                if (success) {
                    $("#table tbody").empty();
                    $($.ig.tmpl(template, ds.dataView())).appendTo("#table tbody");
                } else {
                    alert(error);
                }
            }

            // The $.ig.DataSchema is used to define the schema of the data
            var oDataSchema = new $.ig.DataSchema("json", { 
                fields: [
                    { name: "Name" },
                    { name: "ImageUrl" },
                    { name: "Notes" }
                ],
                searchField: "d.results"
            });


            // service Url
            var url = "https://igniteui.com/api/employees?callback=?";

            // This code creates an $.ig.DataSource bound to oData service
            var ds = new $.ig.DataSource({
                type: "remoteUrl",
                callback: renderTable,
                dataSource: url,
                schema: oDataSchema,
                responseDataKey: "d.results",
                responseDataType: "jsonp",
                responseContentType: "application/json; charset=utf-8"
            });

            // Binds to the underlying data
            ds.dataBind();
        });