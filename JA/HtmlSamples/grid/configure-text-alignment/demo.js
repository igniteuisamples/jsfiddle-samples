$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                height: "500px",
                columns: [
                    { headerText: "製品 ID", key: "ProductID", dataType: "number", width: "15%" },
                    { headerText: "製品名", key: "Name", dataType: "string", width: "40%" },
                    { headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "30%" },
                    { headerText: "再注文", key: "ReorderPoint", dataType: "number", width: "15%" }
                ],
                dataSource: adventureWorks,
                dataRendered: function (evt, ui) {
                    ui.owner.element.find("tr td:nth-child(1)").css("text-align", "right");
                    ui.owner.element.find("tr td:nth-child(4)").css("text-align", "right");
                }
            });
        });