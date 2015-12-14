$(function () {
            $("#player1").igVideoPlayer({
                sources: [
                    'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.h264.mp4',
                    'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.webmvp8.webm',
                    'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.theora.ogv'
                ],
                width: 720,
                posterUrl: 'http://igniteui.com/images/samples/video-player/ig-pres.png',
                fullscreen: false,
                browserControls: false,
                autohide: false,
                autoplay: false,
                autohideDelay: 2000,
                title: 'Infragistics Presentation',
                bookmarks: [{
                    title: 'Design',
                    description: 'Infragistics design presentation',
                    time: 14
                },
                {
                    title: 'Develop',
                    description: 'Infragistics develop presentation',
                    time: 46
                },
                {
                    title: 'Experience',
                    description: 'Infragistics experience presentation',
                    time: 74
                },
                {
                    title: 'Final',
                    description: 'Infragistics logo',
                    time: 100
                }]
            });
        });