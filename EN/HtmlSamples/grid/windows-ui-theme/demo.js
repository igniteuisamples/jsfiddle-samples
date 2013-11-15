$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                primaryKey: "ProductID",
                columns: [
                    { headerText: "Product ID", key: "ProductID", dataType: "string", width: "0%", hidden: true },
                    { headerText: "Product Name", key: "Name", dataType: "string", width: "40%" },
                    { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
                    { headerText: "List Price", key: "ListPrice", dataType: "number", width: "20%" },
                    { headerText: "Standard Cost", key: "StandardCost", dataType: "number", width: "20%" }
                ],
                dataSource: adventureWorks,
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 10
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    },
                    {
                        name: "Filtering",
                        type: "local"
                    },
                    {
                        name: "Updating",
                        dataDirty: function (evt, ui) {
                            ui.owner.grid.commit();
                            return false;
                        }
                    },
                    {
                        name: "Summaries"
                    }
                ]
            });
        });