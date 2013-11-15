$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "Customer ID", key: "CustomerID", dataType: "string", width: "20%" },
                    { headerText: "Company Name", key: "CompanyName", dataType: "string", width: "40%" },
                    { headerText: "Address", key: "Address", dataType: "string", width: "40%" }
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