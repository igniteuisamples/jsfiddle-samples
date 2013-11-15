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
                dataSource: "http://labs.infragistics.com/igniteui/api/invoices?$top=1000&callback=?",
                dataSourceUrl: "http://labs.infragistics.com/igniteui/api/invoices?$top=1000&callback=?",
                filteringType: "remote",
                width: "250px",
                textKey: "ProductName",
                valueKey: "OrderID",
                virtualization: true,
                autoComplete: true,
                headerTemplate: "<div class='dropDownHeaderFooter'>Available Products</div>",
                footerTemplate: "<div class='dropDownHeaderFooter'>Product Count: {0} / {3}</div>",
                itemTemplate: "<div>${ProductName} (${Quantity})</div>",
                nullText: "Please, select a product",
                filterExprUrlKey: 'startsWith',
                selectionChanged: function (evt, ui) {
                    //  Clear the selected item table and hide the div
                    $("#table").empty();
                    $("#itemData").hide();
                    //  Add selected item data only if an item has been selected
                    if (ui.items && ui.items[0]) {
                        //  Get the selected item
                        var item = $("#combo").igCombo("itemByIndex", ui.items[0].index);
                        //  Display item.index, item.value and item.text properties
                        addItemValue($("#table"), item, "index");
                        addItemValue($("#table"), item, "value");
                        addItemValue($("#table"), item, "text");
                        //  Show the selected item div
                        $("#itemData").fadeIn(500);
                    }
                }
            });
        });
});