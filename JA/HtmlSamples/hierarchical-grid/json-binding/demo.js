$(function () {

            var data = [
                {
                    Name: "食品", 
                    Products: [
                        { Name: "パン", Quantity: 3 },
                        { Name: "ピザ", Quantity: 4 }
                    ]
                },
                {
                    Name: "飲料",
                    Products: [
                        { Name: "果汁 100% オレンジ", Quantity: 1 },
                        { Name: "コーヒーマイルド", Quantity: 4 }
                    ]
                }
            ];

            $("#hierarchicalGrid").igHierarchicalGrid({
                width: "100%",
                dataSource: data, //Array of objects defined above
                autoGenerateLayouts: true
            });

        });