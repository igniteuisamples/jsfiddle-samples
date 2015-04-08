$(function () {

            $("#editableCombo").igCombo({
                width: "270px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "editable"
            });

            $("#dropdownCombo").igCombo({
                width: "270px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "dropdown",
                enableClearButton: false
            });

            $("#readonlylistCombo").igCombo({
                width: "270px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "readonlylist",
                enableClearButton: false
            });

            $("#readonlyCombo").igCombo({
                width: "270px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "readonly",
                enableClearButton: false
            });

        });