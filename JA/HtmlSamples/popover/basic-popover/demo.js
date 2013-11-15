$( function ()
        {
            var popOver = $( '#popoverTooltip' ).igPopover( {
                direction: "right",
                position: "start",
                renderCloseButton: true,
                closeOnBlur: false,
                fadeTimespan: 150,
                maxHeight: null,
                maxWidth: 260,
                contentFunction: contentFunction,
                selectors: "[title]",
                title: 'Google Map を使用して市の位置を表示します。',
                containment: $( '#popoverTooltip' ),
                showOn: "focus"
            } );

            var tableTemplate = "<table><thead><tr><th>英語</th><th>スペイン語</th></tr></thead><tbody ><tr><td>${en}</td><td>${es}</td></tr></tbody></table>";
            $( '#bodyParts' ).igPopover( {
                direction: "auto",
                position: "auto",
                renderCloseButton: true,
                closeOnBlur: false,
                fadeTimespan: 150,
                defaultMaxHeight: 300,
                selectors: "a",
                title: "身体各部",
                containment: $( '#bodyParts' ),
                contentFunction: function ()
                {
                    var element = $( this );
                    if ( element.is( "a" ) )
                    {
                        var data = [{ en: element.attr( "id" ), es: element.attr( "title" ) }];
                        return $.ig.tmpl( tableTemplate, data );
                    }
                },
                showOn: "mouseenter"
            } );

            $( "#bodyParts" ).find( "a" ).click( false );
        } );

        function contentFunction()
        {
            var imgTemplate = "<img class='map' alt='${value}' src='http://maps.google.com/maps/api/staticmap?zoom=10&size=250x250&maptype=terrain&sensor=false&center=${value}'>";
            var element = $( this );
            var data = [{ value: element[0].value }];
            return $.ig.tmpl( imgTemplate, data );
        }