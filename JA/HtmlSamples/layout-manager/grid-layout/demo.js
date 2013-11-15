$(function () {
                $('#layout').on("iglayoutmanageritemrendered", function (event, args) {
                    args.item.append("<ul><li>colspan: " + args.itemData.colSpan + "</li><li>rowspan: " + args.itemData.rowSpan + "</li></ul></span>");
                    // get the element
                    if (args.itemData.colSpan == 2 && args.itemData.rowSpan == 2) {
                        args.item.css("background-color", "#eee");
                        args.item.css("color", "#555");
                    } else if (args.itemData.rowSpan == 1 && args.itemData.colSpan == 1) {
                        if (args.itemData.rowIndex == 0) {
                            args.item.css("background-color", "#2CBDF9");
                            args.item.css("color", "#FFF");
                        } else {
                            args.item.css("background-color", "#FFA72D");
                            args.item.css("color", "#FFF");
                        }
                    } else {
                        args.item.css("background-color", "#2CBDF9");
                        args.item.css("color", "#FFF");
                    }
                });
                $('#layout').igLayoutManager({
                    layoutMode: "grid",
                    width: "100%",
                    height: "500px",
                    gridLayout: {
                        cols: 3,
                        rows: 3
                    },
                    items: [
                        {
                            rowSpan: 2,
                            colSpan: 2,
                            colIndex: 0,
                            rowIndex: 0
                        },
                        {
                            rowSpan: 1,
                            colSpan: 1,
                            rowIndex: 0,
                            colIndex: 2
                        },
                        {
                            rowSpan: 1,
                            colSpan: 1,
                            rowIndex: 1,
                            colIndex: 2
                        },
                        {
                            rowSpan: 1,
                            colSpan: 3,
                            colIndex: 0,
                            rowIndex: 2
                        }
                    ]
                });
            });