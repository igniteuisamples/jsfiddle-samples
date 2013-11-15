$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                height: "500px",
                columns: [
                    { headerText: "Product ID", key: "ProductID", dataType: "number", width: "15%" },
                    { headerText: "Product Name", key: "Name", dataType: "string", width: "40%" },
                    { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "30%" },
                    { headerText: "Reorder Point", key: "ReorderPoint", dataType: "number", width: "15%" }
                ],
                dataSource: adventureWorks,
                dataRendered: function (evt, ui) {
                    ui.owner.element.find("tr td:nth-child(1)").css("text-align", "right");
                    ui.owner.element.find("tr td:nth-child(4)").css("text-align", "right");
                }
            });
        });