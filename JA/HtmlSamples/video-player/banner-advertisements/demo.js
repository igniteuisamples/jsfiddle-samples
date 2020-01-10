$(function () {
var alternate = true;
        $(function () {
            $("#player1").igVideoPlayer({
                sources: [
                    'https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.h264.mp4',
                    'https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.webmvp8.webm',
                    'https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.theora.ogv'
                ],
                width: "100%",
                posterUrl: 'https://jp.igniteui.com/images/samples/video-player/ig-pres.png',
                fullscreen: false,
                browserControls: false,
                autohide: true,
                autoplay: false,
                autohideDelay: 2000,
                title: 'Infragistics プレゼンテーション',
                banners: [{
                    imageUrl: 'https://jp.igniteui.com/images/samples/video-player/banner.png',
                    link: 'http://www.infragistics.com/',
                    times: [5, 20, 60],
                    visible: false,
                    closeBanner: true,
                    animate: true,
                    autohide: true,
                    hidedelay: 10000,
                    width: "270px",
                    height: "67px"
                }],
                bannerVisible: function (sender, eventArgs) {
                    if (alternate === true) {
                        eventArgs.bannerElement.css('top', 130);
                    }
                    else {
                        eventArgs.bannerElement.css('top', 0);
                    }

                    alternate = !alternate;
                },
                bannerClick: function (sender, eventArgs) {
                    $("#player1").igVideoPlayer('pause');
                }
            });
        });
});