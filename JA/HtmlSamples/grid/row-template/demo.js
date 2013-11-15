$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "顧客 ID", key: "CustomerID", dataType: "string", width: "20%" },
                    { headerText: "会社名", key: "CompanyName", dataType: "string", width: "40%" },
                    { headerText: "住所", key: "Address", dataType: "string", width: "40%" }
                ],
                rowTemplate: "<td>${CustomerID}</td><td>${CompanyName}</td><td>${Address}, ${City}, ${Country}</td>",
                autoGenerateColumns: false,
                dataSource: nwCustomers,
                responseDataKey: "results",
                localSchemaTransform: false,
                width: "100%",
                height: "400px"
            });
        });