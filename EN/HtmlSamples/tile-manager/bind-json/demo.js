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
     
        <div class="item-inner-container" style="background-image: url(${picture}); 
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${picture}',sizingMethod='scale');">
            <div class="max-title-and-ingredients-container">
                <h3>${name}</h3>
                <ul class="ingredients">
                    {{each ${ingredients} }}
                        <li>${ingredients.description}</li>
                    {{/each}}
                </ul>
            </div>
        </div>
     
        <div class="item-inner-container" style="background-image: url(${picture});
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${picture}',sizingMethod='scale');">
            <div class="minimized-title-container">
                <div class="minimized-title">
                    ${name}
                </div>
            </div>
        </div>