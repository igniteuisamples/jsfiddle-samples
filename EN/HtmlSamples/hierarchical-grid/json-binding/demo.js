$(function () {

            var data = [
                {
                    Name: "Food", 
                    Products: [
                        { Name: "Bread", Quantity: 3 },
                        { Name: "Pizza", Quantity: 4 }
                    ]
                },
                {
                    Name: "Beverages",
                    Products: [
                        { Name: "Milk", Quantity: 1 },
                        { Name: "Fruit punch", Quantity: 4 }
                    ]
                }
            ];

            $("#hierarchicalGrid").igHierarchicalGrid({
                width: "100%",
                dataSource: data, //Array of objects defined above
                autoGenerateLayouts: true
            });

        });