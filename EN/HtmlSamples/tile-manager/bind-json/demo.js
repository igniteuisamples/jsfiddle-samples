$(function () {            
            var options = {
                width: "100%",
                height: "500px",
                marginLeft: 10,
                marginTop: 10,
                dataSource: recipes,
                items: [
                    { rowIndex: 0, colIndex: 0, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 0, colIndex: 1, rowSpan: 2, colSpan: 2 },
                    { rowIndex: 1, colIndex: 0, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 1, rowSpan: 1, colSpan: 1 },
                    { rowIndex: 2, colIndex: 2, rowSpan: 1, colSpan: 1 }
                ],
                maximizedTileIndex: 1,
                maximizedState: $("#maximized-state").html(),
                minimizedState: $("#minimized-state").html()
            }
            
            $("#dashboard").igTileManager(options);
        });