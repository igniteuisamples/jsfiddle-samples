$(function () {
            $('#dashboard').igTileManager({
                width: "100%",
                height: "500px",
                columnWidth: 200,
                columnHeight: 200,
                marginLeft: 20,
                marginTop: 20,
                animationDuration: 300,
                dataSource: controls,
                splitterOptions: {
                    enabled: true,
                    collapsed: false,
                    collapsible: true
                },
                rendered: function (evt, ui) {
                    ui.owner.maximize(ui.owner.minimizedTiles().first());
                },
                minimizedState: "<h3 class='minimized-state-header'>${name}</h3><p class='minimized-state-body'>${description}</p>",
                maximizedState: "<h3 class='maximized-state-header'>${name}</h3><p class='maximized-state-body'>${description}</p>"
            });
        });