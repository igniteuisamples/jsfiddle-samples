$(function () {

            $("#editableCombo").igCombo({
                width: "270px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "editable",
                allowCustomValue: true,
                showDropDownButton: false
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
                mode: "readonlylist"
            });

            $("#readonlyCombo").igCombo({
                width: "270px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "readonly"
            });

        });