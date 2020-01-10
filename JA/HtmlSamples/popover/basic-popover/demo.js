$( function ()
        {
            $( '#IGlogo' ).igPopover( {
                direction: "right",
                position: "start",
                closeOnBlur: false,
                animationDuration: 150,
                maxHeight: null,
                maxWidth: null,
                contentTemplate: $( '#contactUs-template' ).html(),
                headerTemplate: {
                    closeButton: true,
                    title: "ソーシャル"
                },
                showOn: "click"
            } );

            var popOver = $( '#popoverTooltip' ).igPopover( {
                direction: "right",
                position: "start",
                headerTemplate: {
                    closeButton: true,
                    title: 'Bing Maps を使用して市の位置を表示します。'
                },
                closeOnBlur: false,
                animationDuration: 0,
                maxHeight: null,
                maxWidth: 250,
                contentTemplate: contentFunction,
                selectors: "[title]",
                showOn: "focus"
            } );
        } );

        function contentFunction()
        {
            var location = $(this)[0].value ? $(this)[0].value : "Sofia,Bulgaria";
            var imgTemplate = "<img class='map' alt='${value}' src='https://dev.virtualearth.net/REST/V1/Imagery/Map/AerialWithLabels/${value}?mapSize=250,250&format=jpeg&key=${bingKey}'>";
            var data = [{ value: location, bingKey: mapHelper.bingData() }];
            return $.ig.tmpl(imgTemplate, data);
        }