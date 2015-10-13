$(function () {
//  Helper function to put an item data token to the selected item table utilizing a jQuery template
        var selectedItemTemplate = '<tr><td class="propName">${propertyName}</td><td class="propValue">${propertyValue}</td></tr>';
        function addItemValue(tableObject, item, itemProp) {
            if (!($.isFunction(item[itemProp]))) {
                $($.ig.tmpl(selectedItemTemplate,
                    {
                        "propertyName": itemProp,
                        "propertyValue": item[itemProp]
                    })
                ).appendTo(tableObject);
            }
        }

        $(function () {

            //  Hide the selected item div and initialize the selected item row template
            $("#itemData").hide();

            $("#combo").igCombo({
                loadOnDemandSettings: {
                    enabled: true,
                    pageSize: 25
                },
                responseDataKey: "d.results.Results",
                responseTotalRecCountKey: "d.results.Count",
                dataSource: "http://igniteui.com/api/products?callback=?",
                width: "400px",
                textKey: "ProductName",
                valueKey: "ID",
                virtualization: true,
                autoComplete: true,
                headerTemplate: "<div class='dropDownHeaderFooter'>製品</div>",
                footerTemplate: "<div class='dropDownHeaderFooter'>製品数: {0} / {3}</div>",
                itemTemplate: "<div>${ProductName} (${QuantityPerUnit})</div>",
                placeHolder: "製品を選択してください。",
                filterExprUrlKey: 'startsWith',
                highlightMatchesMode: "startsWith",
                filteringCondition: "startsWith",
                selectionChanged: function (evt, ui) {
                    //  Clear the selected item table and hide the div
                    $("#table").empty();
                    $("#itemData").hide();
                    //  Add selected item data only if an item has been selected
                    if (ui.items && ui.items[0]) {
                        //  Get the selected item
                        var itemData = ui.items[0].data;
                        //  Display item's valueKey and textKey settings
                        addItemValue($("#table"), itemData, ui.owner.options.valueKey);
                        addItemValue($("#table"), itemData, ui.owner.options.textKey);
                        //  Show the selected item div
                        $("#itemData").fadeIn(500);
                    }
                }
            });
        });
});