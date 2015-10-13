$(function () {

            var northwindProductsJSON = [
                { "ID": 0, "Name": "パン", "Description": "全粒パン", "ReleaseDate": "\/Date(694224000000)\/", "DiscontinuedDate": null, "Rating": 4, "Price": "2.5", "CategoryID": 0 },
                { "ID": 1, "Name": "果汁 100% オレンジ", "Description": "オレンジ ジュース", "ReleaseDate": "\/Date(812505600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "3.5", "CategoryID": 1 },
                { "ID": 2, "Name": "果汁 100% グレープ", "Description": "グレープ ジュース", "ReleaseDate": "\/Date(970358400000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "20.9", "CategoryID": 1 },
                { "ID": 3, "Name": "果汁 100% レモン", "Description": "レモン ジュース", "ReleaseDate": "\/Date(1128124800000)\/", "DiscontinuedDate": "\/Date(1159660800000)\/", "Rating": 3, "Price": "19.9", "CategoryID": 1 },
                { "ID": 4, "Name": "コーヒーマイルド", "Description": "コーヒーマイルド 195g×10缶", "ReleaseDate": "\/Date(1041724800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.99", "CategoryID": 1 },
                { "ID": 5, "Name": "コーヒービター", "Description": "コーヒービター 195g×10缶", "ReleaseDate": "\/Date(1154649600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.8", "CategoryID": 1 },
                { "ID": 6, "Name": "コーヒーミルク", "Description": "コーヒーミルク 195g×10缶", "ReleaseDate": "\/Date(1162684800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "18.8", "CategoryID": 1 },
                { "ID": 7, "Name": "DVD プレーヤー", "Description": "1080P DVD プレーヤー", "ReleaseDate": "\/Date(1163548800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "35.88", "CategoryID": 2 },
                { "ID": 8, "Name": "LCD HDTV", "Description": "100 センチメートル 1080p LCD テレビ", "ReleaseDate": "\/Date(1210204800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "1088.8", "CategoryID": 2 }
            ],

            northWindCategoriesJSON = [
                { "ID": 0, "Name": "食品" },
                { "ID": 1, "Name": "飲料" },
                { "ID": 2, "Name": "技術" }
            ];

            //Formatting for igGrid cells to display igCombo text as opposed to igCombo value
            function formatCategoryCombo(val) {
                var i, category;
                for (i = 0; i < northWindCategoriesJSON.length; i++) {
                    category = northWindCategoriesJSON[i];
                    if (category.ID == val) {
                        val = category.Name;
                    }
                }

                return val;
            }

            function showFeedback(elementID, message) {
                var selector = '#' + elementID;
                $(selector).stop(true, true).html(message)
                    .fadeIn(500).delay(3000).fadeOut(500);
            }

            //Grid Initialization
            $("#gridProducts").igGrid({
                dataSource: northwindProductsJSON,
                autoGenerateColumns: false,
                primaryKey: "ID",
                autoCommit: true,
                width: "100%",
                height: "360px",
                columns: [
                    { headerText: "", key: "ID", dataType: "number", width: "8%" },
                    { headerText: "名前", key: "Name", dataType: "string", width: "24%" },
                    { headerText: "説明", key: "Description", dataType: "string", width: "34%" },
                    { headerText: "カテゴリ", key: "CategoryID", dataType: "number", width: "34%", formatter: formatCategoryCombo }
                ],
                features: [
                    {
                        name: 'Updating',
                        columnSettings: [{
                            //The combo is defined as an editor provider. Combo options are defined under 'editorOptions'.
                            columnKey: "CategoryID",
                            editorType: 'combo',
                            required: true,
                            editorOptions: {
                                mode: "dropdown",
                                dataSource: northWindCategoriesJSON,
                                textKey: "Name",
                                valueKey: "ID"
                            }
                        }],
                        editRowEnded: function () {
                            //To access the updated igGrid data
                            northwindProductsJSON = $("#gridProducts").igGrid().data().igGrid.dataSourceObject();

                            //Show feedback
                            var message = "igGrid のデータが更新されました。";
                            showFeedback("updatedMessage", message);
                        }
                    }
                ]
            });
        });