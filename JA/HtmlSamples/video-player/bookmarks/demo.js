$(function () {
            $("#player1").igVideoPlayer({
                sources: [
                    'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.h264.mp4',
                    'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.webmvp8.webm',
                    'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.theora.ogv'
                ],
                width: 720,
                posterUrl: 'http://jp.igniteui.com/images/samples/video-player/ig-pres.png',
                fullscreen: false,
                browserControls: false,
                autohide: false,
                autoplay: false,
                autohideDelay: 2000,
                title: 'Infragistics プレゼンテーション',
                bookmarks: [{
                    title: 'デザイン',
                    description: 'Infragistics デザイン プレゼンテーション',
                    time: 14
                },
                {
                    title: '開発',
                    description: 'Infragistics 開発プレゼンテーション',
                    time: 46
                },
                {
                    title: '体験',
                    description: 'Infragistics エクスペリエンス プレゼンテーション',
                    time: 74
                },
                {
                    title: '最終',
                    description: 'インフラジスティックスのロゴ',
                    time: 100
                }]
            });
        });