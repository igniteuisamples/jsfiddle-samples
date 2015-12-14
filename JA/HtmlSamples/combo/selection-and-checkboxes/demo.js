$(function () {
var colors = [
            { Name: "黒" },
            { Name: "青" },
            { Name: "茶" },
            { Name: "緑" },
            { Name: "オレンジ" },
            { Name: "パープル" },
            { Name: "赤" },
            { Name: "白" },
            { Name: "黄" }
        ];

        $(function () {

            $("#singleSelectCombo").igCombo({
                width: "270px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                dropDownOnFocus: true
            });

            $("#multiSelectCombo").igCombo({
                width: "270px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                multiSelection: {
                    enabled: true
                }
            });

            $("#checkboxSelectCombo").igCombo({
                width: "270px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                multiSelection: {
                    enabled: true,
                    showCheckboxes: true
                }
            });

        });
});