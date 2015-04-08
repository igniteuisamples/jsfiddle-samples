$(function () {

            var dataSource = [
                {
                    "number": "1000", "name": "Assets", "balance": "", "assets": [
                        {
                            "number": "1003", "name": "Fixed assets", "balance": "", "assets": [
                                {
                                    "number": "1115", "name": "Lands and Buildings", "balance": "", "assets": [
                                        { "number": "1120", "name": "Lands and Buildings", "balance": "$147,948,060" },
                                        { "number": "1130", "name": "Increases during the year", "balance": "$147.73" },
                                        { "number": "1140", "name": "Decreases during the year", "balance": "" },
                                        { "number": "1132", "name": "Accum. Depreciation, Buildings", "balance": "$526,620.38" },
                                        { "number": "1142", "name": "Lands and Buildings, Total", "balance": "$953,007.95" }
                                    ]
                                },
                                {
                                    "number": "1200", "name": "Operating Equipment", "balance": "", "assets": [
                                        { "number": "1290", "name": "Operating Equipment, Total", "balance": "$99,811.44" }
                                    ]
                                },
                                {
                                    "number": "1300", "name": "Vehicles", "balance": "", "assets": [
                                        { "number": "1390", "name": "Vehicles, Total", "balance": "$75,870.13" }
                                    ]
                                },
                                { "number": "1990", "name": "Fixed assets, Total", "balance": "$1,128,659.13" }
                            ]
                        },
                        {
                            "number": "2000", "name": "Current assets", "balance": "", "assets": [
                                {
                                    "number": "1125", "name": "Inventory", "balance": "", "assets": [
                                        { "number": "1121", "name": "Resale Items", "balance": "$507,215.13" },
                                        { "number": "1131", "name": "Finished Goods", "balance": "$135,842.95" },
                                        { "number": "1141", "name": "Raw Material", "balance": "$497,898.10" },
                                        { "number": "1131", "name": "Inventory, Total", "balance": "$897,898.10" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ];

            $("#treegrid1").igTreeGrid({
                width: "100%",
                dataSource: dataSource,
                autoGenerateColumns: false,
                primaryKey: "number",
                columns: [
                    { headerText: "Number", key: "number", width: "40%", dataType: "number" },
                    { headerText: "Name", key: "name", width: "40%", dataType: "string" },
                    { headerText: "Balance", key: "balance", width: "20%", dataType: "string" }
                ],
                childDataKey: "assets",
                initialExpandDepth: 3
            });
        });