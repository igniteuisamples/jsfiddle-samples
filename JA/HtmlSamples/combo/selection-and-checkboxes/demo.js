$(function () {
var colors = [
            { Name: "jQuery/HTML5/ASP.NET MVC コントロール" },
            { Name: "ASP.NET コントロール" },
            { Name: "Windows Forms コントロール" },
            { Name: "WPF コントロール" },
            { Name: "Android ネイティブ モバイル コントロール" },
            { Name: "iOS コントロール" },
            { Name: "SharePlus" },
            { Name: "ReportPlus" },
            { Name: "Indigo Studio" }
        ];

        $(function () {

            $("#singleSelectCombo").igCombo({
                width: 300,
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                dropDownOnFocus: true,
                dropDownOrientation: "bottom"
            });

            $("#multiSelectCombo").igCombo({
                width: 300,
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                multiSelection: {
                    enabled: true
                },
                dropDownOrientation: "bottom"
            });

            $("#checkboxSelectCombo").igCombo({
                width: 300,
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                multiSelection: {
                    enabled: true,
                    showCheckboxes: true
                },
                dropDownOrientation: "bottom"
            });

        });
});