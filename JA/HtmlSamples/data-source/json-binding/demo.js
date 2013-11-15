$(function () {
            var data = [
                { "Name": "John Smith", "Age": 45 },
                { "Name": "Mary Johnson", "Age": 32 },
                { "Name": "Bob Ferguson", "Age": 27 }
            ];

            // Renders the table
            var renderTable = function (success, error) {
                var template = "<tr><td>${Name}</td><td>${Age}</td></tr>";
                if (success) {
                    $("#table tbody").empty();
                    $($.ig.tmpl(template, ds.dataView())).appendTo("#table tbody");
                } else {
                    alert(error);
                }
            }

            //This code creates an $.ig.DataSource from JSON data
            var ds = new $.ig.DataSource({
                type: "json",
                dataSource: data,
                callback: renderTable
            });

            // Binds to the underlying data
            ds.dataBind();
        });