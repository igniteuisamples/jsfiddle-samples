$(function () {
            var headerTextValues = ["製品名", "単価", "在庫数", "入荷待ち"];
            $('#resultGrid').igGrid({
                dataSource: northwindProducts,
                responseDataKey: "results",
                dataSourceType: "json",
                width: "100%",
                autoGenerateColumns: false,
                columns: [
                    { headerText: headerTextValues[0], key: "ProductName", width: 300 },
                    { headerText: headerTextValues[1], key: "UnitPrice", type: 'number', width: 150, template: $( "#colTmpl" ).html() },
                    { headerText: headerTextValues[2], key: "UnitsInStock", width: 125 },
                    { headerText: headerTextValues[3], key: "UnitsOnOrder", width: 125 },
                    { headerText: " ", key: "DeltaPrice", hidden: true }
                ],
                dataBinding: function (evt, ui) {
                    var ds = ui.owner.options.dataSource.results;
                    $.each(ds, function (index, el) {
                        if (Math.random() > 0.5) {
                            el["DeltaPrice"] = parseFloat(el.UnitPrice) + 2.00;
                        } else {
                            el["DeltaPrice"] = parseFloat(el.UnitPrice) - 2.00;
                        }
                    });
                },
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 8
                    }
                ]
            });
        });