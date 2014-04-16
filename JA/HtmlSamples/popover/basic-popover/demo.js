$(function () {
<ul>
            <li>
                <a href="http://www.facebook.com/infragistics" target="_blank">
                    <img src='http://jp.igniteui.com/images/samples/popover/facebook.jpg' />
                    <span class="spanText">Facebook</span>
                </a>
            </li>
            <li>
                <a href="http://twitter.com/infragistics" target="_blank">
                    <img src='http://jp.igniteui.com/images/samples/popover/twitter.jpg' />
                    <span class="spanText">Twitter</span>
                </a>
            </li>         
            <li>
                <a href="http://www.youtube.com/user/infragistics" target="_blank">
                    <img src='http://jp.igniteui.com/images/samples/popover/youtube.jpg' />
                    <span class="spanText">YouTube チャネル</span>
                </a>
            </li>
        </ul>
     
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
                    title: 'Google Maps を使用して市の位置を表示します。'
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
            var imgTemplate = "<img class='map' alt='${value}' src='http://maps.google.com/maps/api/staticmap?zoom=10&size=250x250&maptype=terrain&sensor=false&center=${value}'>";
            var data = [{ value: $( this )[0].value }];
            return $.ig.tmpl( imgTemplate, data );
        }
});