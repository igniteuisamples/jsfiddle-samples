$(function () {
            $("#philosophers").igTileManager({
                width: "100%",
                height: "620px",
                marginLeft: 10,
                marginTop: 10,
                dataSource: philosophers,
                columnHeight: ["200px", "150px", "*"],
                columnWidth: ["30%", "*", "250px"],
                items: [
                    { rowIndex: 0, colIndex: 0, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 0, colIndex: 1, rowSpan: 2, colSpan: 1 },
                    { rowIndex: 0, colIndex: 2, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 1, colIndex: 0, rowSpan: 2, colSpan: 1 },
                    { rowIndex: 1, colIndex: 2, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 1, rowSpan: 1, colSpan: 2 }
                ],
                maximizedState: $("#maximized-state").html(),
                minimizedState: $("#minimized-state").html()
            });
        });