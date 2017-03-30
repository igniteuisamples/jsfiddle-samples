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
                    title: "We're social"
                },
                showOn: "click"
            } );

            var popOver = $( '#popoverTooltip' ).igPopover( {
                direction: "right",
                position: "start",
                headerTemplate: {
                    closeButton: true,
                    title: 'To display the location of the city is used Google maps'
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
            var imgTemplate = "<img class='map' alt='${value}' src='https://maps.google.com/maps/api/staticmap?zoom=10&size=250x250&maptype=terrain&sensor=false&center=${value}'>";
            var data = [{ value: $( this )[0].value }];
            return $.ig.tmpl( imgTemplate, data );
        }