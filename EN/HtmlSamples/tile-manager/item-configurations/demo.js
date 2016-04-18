$(function () {
            $('#dashboard').igTileManager({
                columnWidth: '25%',
                marginLeft: 10,
                marginTop: 10,
                splitterOptions: {
                    enabled: true,
                    collapsible: true
                },
                items: [
                    { rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 1 },
                    { rowIndex: 0, colIndex: 1, rowSpan: 1, colSpan: 2 },
                    { rowIndex: 0, colIndex: 3, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 1, colIndex: 1, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 1, colIndex: 2, rowSpan: 1, colSpan: 2 },
                    { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 2 },
                    { rowIndex: 2, colIndex: 2, rowSpan: 2, colSpan: 2 },
                    { rowIndex: 3, colIndex: 0, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 3, colIndex: 1, rowSpan: 2, colSpan: 1 },
                    { rowIndex: 4, colIndex: 2, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 4, colIndex: 3, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 4, colIndex: 0, rowSpan: 1, colSpan: 1 }
                ]
            });
        });