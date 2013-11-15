$(function () {
var colors = [
            { Name: "Black" },
            { Name: "Blue" },
            { Name: "Brown" },
            { Name: "Green" },
            { Name: "Orange" },
            { Name: "Purple" },
            { Name: "Red" },
            { Name: "White" },
            { Name: "Yellow" },
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
                multiSelection: "on"
            });

            $("#checkboxSelectCombo").igCombo({
                width: "270px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                multiSelection: "onWithCheckboxes"
            });

        });
});