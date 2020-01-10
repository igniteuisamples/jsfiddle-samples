$(function () {
			var playing = false;
			$("#videoPlayer1").igVideoPlayer({
				sources: ["https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/big_buck_bunny.mp4",
							"https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/big_buck_bunny.webm",
							"https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/big_buck_bunny.ogv"
				],
				width: "100%",
				posterUrl: "https://jp.igniteui.com/images/samples/video-player/big-buck-bunny.png",
				fullscreen: false,
				browserControls: false,
				autoplay: false,
				title: 'Big Buck Bunny',
				muted: false,
				autohide: false,
				bookmarks: [
					{
						title: '川',
						description: '川',
						time: 13
					},
					{
						title: 'Big Buck Bunny の紹介',
						description: 'Big Buck Bunny の紹介',
						time: 33
					}
				]
			});

			if ($("#videoPlayer1").igVideoPlayer("supportsVideo"))
				$("#html5Video").html($("#html5Video").html() + '<span class="green">はい</span>');
			else
				$("#html5Video").html($("#html5Video").html() + '<span class="red">いいえ</span>');

			if ($("#videoPlayer1").igVideoPlayer("supportsH264BaselineVideo"))
				$("#h264Video").html($("#h264Video").html() + '<span class="green">はい</span>');
			else
				$("#h264Video").html($("#h264Video").html() + '<span class="red">いいえ</span>');

			if ($("#videoPlayer1").igVideoPlayer("supportsOggTheoraVideo"))
				$("#oggVideo").html($("#oggVideo").html() + '<span class="green">はい</span>');
			else
				$("#oggVideo").html($("#oggVideo").html() + '<span class="red">いいえ</span>');

			if ($("#videoPlayer1").igVideoPlayer("supportsWebmVideo"))
				$("#webMVideo").html($("#webMVideo").html() + '<span class="green">はい</span>');
			else
				$("#webMVideo").html($("#webMVideo").html() + '<span class="red">いいえ</span>');

			$("#videoPlayer1").igVideoPlayer().bind({
				igvideoplayerplaying: function () {
					playing = true;
					$('#btnPlay span').html("停止");
				},
				igvideoplayerpaused: function () {
					playing = false;
					$('#btnPlay span').html("再生");
				},
				igvideoplayerprogress: function () {
					$("#currentTime span").html($("#videoPlayer1").igVideoPlayer("currentTime"));
				},
				igvideoplayerenterfullscreen: function () {
					$("html").css('overflow-y', 'hidden');
				},
				igvideoplayerexitfullscreen: function () {
					$("html").css('overflow-y', 'scroll');
				}
			});

			$("#btnAddScreenShot").igButton().click(function () {
				var canvas = $("#videoPlayer1").igVideoPlayer("screenshot");

				$(canvas).addClass("screenshot");
				$("#screenShots").append(canvas);
			});

			$("#btnPlay").igButton().click(function () {
				if (playing)
					$("#videoPlayer1").igVideoPlayer("pause");
				else
					$("#videoPlayer1").igVideoPlayer("play");
			});

			$("#slider").slider({ value: 50 }).bind("slide", function (event, ui) {
				var value = ui.value;
				$("#videoPlayer1").igVideoPlayer("option", "volume", value / 100);
			});

			if ($("#videoPlayer1").igVideoPlayer("supportsVideo") === false) {
				$("#rightControls").hide();
				$("#copyrightContainer").hide();
			}
		});