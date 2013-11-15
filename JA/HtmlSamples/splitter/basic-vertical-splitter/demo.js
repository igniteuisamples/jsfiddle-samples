$(function () {
            $("#splitter").igSplitter({ height: "300px", panels: [{ size: 160, min: 100, max: 250 }] });
            $("#tree").igTree({
                dataSource: continentsWithCountries,
                dataSourceType: "json",
                bindings: {
                    textKey: "Text",
                    valueKey: "Text",
                    childDataProperty: "Countries"
                }
            });
            $("#tree").on("igtreeselectionchanged", function (sender, eventArgs) {
                var node = eventArgs.selectedNodes[0];
                if (node.data.Description) {
                    $("#splitter").igSplitter("secondPanel").html($("<p></p>").text(node.data.Description));
                } else {
                    $("#splitter").igSplitter("secondPanel").html($("<p></p>").text("情報は見つかりませんでした。"));
                }
            });
        });