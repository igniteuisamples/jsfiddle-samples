$(function () {
var activated = [false, false, false, false],
            optionsWide = {
                columnWidth: 210,
                columnHeight: 210,
                marginLeft: 10,
                marginTop: 10,
                items: [
                    { rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 },
                    { rowIndex: 0, colIndex: 2, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 1, colIndex: 2, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 1, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 2, rowSpan: 1, colSpan: 1 }
                ],
                maximizedTileIndex: 0,
                minimizedState: ':not(ul)'
            },
            optionsPhone = {
                columnWidth: 125,
                columnHeight: 160,
                marginLeft: 5,
                marginTop: 5,
                items: [
                    { rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 },
                    { rowIndex: 0, colIndex: 2, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 1, colIndex: 2, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 1, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 2, rowSpan: 1, colSpan: 1 }
                ],
                maximizedTileIndex: 0,
                minimizedState: ':not(ul)'
            },
            options;
        $(function () {
            $('#car-tabs').tabs({
                activate: function (event, ui) {
                    var index = ui.newTab.index();
                    if (!activated[index]) {
                        ui.newPanel.igTileManager(options);
                        activated[index] = true;
                    } else {
                        ui.newPanel.igTileManager('reflow');
                    }
                }
            });
            if ($(window).width() > 430) {
                options = optionsWide;
            } else {
                options = optionsPhone;
            }
            $('#magarcedes').igTileManager(options);
            activated[0] = true;
        });
});