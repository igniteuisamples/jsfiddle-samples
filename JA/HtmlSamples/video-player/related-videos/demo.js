$(function () {
            $("#player1").igVideoPlayer({
                sources: [
                    "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.h264.mp4",
                    "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.webmvp8.webm",
                    "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.theora.ogv"
                ],
                width: 720,
                height: 560,
                posterUrl: "https://jp.igniteui.com/images/samples/video-player/quince-intro-1.png",
                fullscreen: false,
                browserControls: false,
                autohide: true,
                autoplay: false,
                showSeekTime: true,
                title: "Quince プレゼンテーション パート 1",
                relatedVideos: [{
                    imageUrl: "https://jp.igniteui.com/images/samples/video-player/quince-intro-2.png",
                    title: "Quince プレゼンテーション パート 1",
                    css: "relatedVideosBanner",
                    sources: [
                        "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.h264.mp4",
                        "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.webmvp8.webm",
                        "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.theora.ogv"
                    ]
                }]
            });
        });