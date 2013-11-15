$(function () {
            var options, optionsWide, optionsPhone;

            optionsWide = {
                marginLeft: 10,
                marginTop: 10,
                rightPanelTilesWidth: 200,
                rightPanelTilesHeight: 156,
                dataSource: dataSource,
                maximizedState: '<h3>${name}</h3><img src="${picture}" title="${name}" alt="error" /><p class="text">${text}</p>' +
                '<div style="clear: both"><span class="color">スキル:</span></div>' +
                '<ul class="skills">{{each ${skills} }}<li>${skills.description}</li>{{/each}}</ul>' +
                '<div class="linkedIn"><span class="color">LinkedIn:</span> <a href="${linkedin}" target="_blank">http://www.linkedin.com/profile</a></div>',
                minimizedState: '<h4>${name}</h4><img src="${picture}" class="minimized" title="${name}" alt="error" />',
                rendered: function (event, ui) {
                    $('#dashboard').find('ul').igTree();
                }
            }

            optionsPhone = {
                rightPanelTilesWidth: 100,
                rightPanelTilesHeight: 166,
                dataSource: dataSource,
                maximizedState: '<h3>${name}</h3><img src="${picture}" title="${name}" alt="error" /><p class="text">${text}</p>' +
                '<div style="clear: both"><span class="color">スキル:</span></div>' +
                '<ul class="skills">{{each ${skills} }}<li>${skills.description}</li>{{/each}}</ul>' +
                '<div class="linkedIn"><span class="color">LinkedIn:</span> <a href="${linkedin}" target="_blank">http://www.linkedin.com/profile</a></div>',
                minimizedState: '<h4>${name}</h4><img src="${picture}" class="minimized" title="${name}" alt="error" />',
                rendered: function (event, ui) {
                    $('#dashboard').find('ul').igTree();
                }
            }

            if ($(window).width() > 430) {
                options = optionsWide;
            } else {
                options = optionsPhone;
            }
            $('#dashboard').igTileManager(options);
        });