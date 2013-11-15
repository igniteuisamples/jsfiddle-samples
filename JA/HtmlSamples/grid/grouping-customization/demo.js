$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                height: "400px",
                columns: [
                    { headerText: "製品 ID", key: "ProductID", dataType: "number", width: "20%" },
                    { headerText: "製品名", key: "Name", dataType: "string", width: "30%" },
                    { headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "20%" },
                    { headerText: "メーカー フラグ", key: "MakeFlag", dataType: "bool", width: "25%" }
                ],
                dataSource: adventureWorks,
                features: [
                    {
                        name: 'GroupBy',
                        columnSettings: [
                            {
                                columnKey: "Name",
                                isGroupBy: true,
                                groupComparerFunction: groupByFirstLetter
                            }
                        ]
                    }
                ]
            });
        });
        function groupByFirstLetter(columnSetting, val1, val2) {
            if (val1 !== null && val2 !== null && val1.substring(0, 1) === val2.substring(0, 1)) {
                columnSetting.customGroupName = val1.substring(0, 1);
                return true;
            } else if (val1 !== null && val2 !== null && val1.substring(0, 1) !== val2.substring(0, 1)) {
                columnSetting.customGroupName = val1.substring(0, 1);
                return false;
            } else if (val1 === null && val2 !== null) {
                columnSetting.customGroupName = val2.substring(0, 1);
                return false;
            } else if (val1 !== null && val2 === null) {
                columnSetting.customGroupName = val1.substring(0, 1);
                return false;
            }
            return false;
        }