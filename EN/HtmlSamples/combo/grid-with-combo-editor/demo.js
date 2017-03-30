$(function () {

            var northwindProductsJSON = [
                { "ID": 0, "Manufacturer": "Dough Masters", "Name": "Bread", "Description": "Whole grain bread", "ReleaseDate": "\/Date(694224000000)\/", "DiscontinuedDate": null, "Rating": 4, "Price": "2.5", "CategoryID": 0 },
                { "ID": 1, "Manufacturer": "Smith Brothers", "Name": "Milk", "Description": "Low fat milk", "ReleaseDate": "\/Date(812505600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "3.5", "CategoryID": 1 },
                { "ID": 2, "Manufacturer": "Healthy Drinks", "Name": "Vint Soda", "Description": "Americana Variety - Mix of 6 flavors", "ReleaseDate": "\/Date(970358400000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "20.9", "CategoryID": 1 },
                { "ID": 3, "Manufacturer": "Healthy Drinks", "Name": "Havina Cola", "Description": "The Original Key Lime Cola", "ReleaseDate": "\/Date(1128124800000)\/", "DiscontinuedDate": "\/Date(1159660800000)\/", "Rating": 3, "Price": "19.9", "CategoryID": 1 },
                { "ID": 4, "Manufacturer": "Healthy Drinks", "Name": "Fruit Punch", "Description": "Mango flavor, 8.3 Ounce Cans (Pack of 24)", "ReleaseDate": "\/Date(1041724800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.99", "CategoryID": 1 },
                { "ID": 5, "Manufacturer": "Healthy Drinks", "Name": "Cranberry Juice", "Description": "16-Ounce Plastic Bottles (Pack of 12)", "ReleaseDate": "\/Date(1154649600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.8", "CategoryID": 1 },
                { "ID": 6, "Manufacturer": "Healthy Drinks", "Name": "Pink Lemonade", "Description": "36 Ounce Cans (Pack of 3)", "ReleaseDate": "\/Date(1162684800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "18.8", "CategoryID": 1 },
                { "ID": 7, "Manufacturer": "Western Electronics", "Name": "DVD Player", "Description": "1080P Upconversion DVD Player", "ReleaseDate": "\/Date(1163548800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "35.88", "CategoryID": 2 },
                { "ID": 8, "Manufacturer": "Western Electronics", "Name": "LCD HDTV", "Description": "42 inch 1080p LCD with Built-in Blu-ray Disc Player", "ReleaseDate": "\/Date(1210204800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "1088.8", "CategoryID": 2 }
            ],

            northWindCategoriesJSON = [
                { "ID": 0, "Name": "Food" },
                { "ID": 1, "Name": "Beverages" },
                { "ID": 2, "Name": "Electronics" }
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
                    { headerText: "", key: "ID", dataType: "number", hidden: true },
                    { headerText: "Manufacturer", key: "Manufacturer", dataType: "string", width: "20%" },
                    { headerText: "Name", key: "Name", dataType: "string", width: "20%" },
                    { headerText: "Description", key: "Description", dataType: "string", width: "30%" },
                    { headerText: "Category", key: "CategoryID", dataType: "number", width: "30%", formatter: formatCategoryCombo }
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
                            var message = "The grid's data has been updated...";
                            showFeedback("updatedMessage", message);
                        }
                    }
                ]
            });
        });