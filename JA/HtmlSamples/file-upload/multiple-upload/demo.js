$(function () {
            var buttonLabel = $.ig.Upload.locale.labelUploadButton;
            if (Modernizr.input.multiple) {
                buttonLabel = "ここにファイルをドラッグ アンド ドロップまたは<br/>クリックしてダイアログから選択";
            }
            $("#igUpload1").igUpload({
                mode: 'multiple',
                multipleFiles: true,
                maxUploadedFiles: 5,
                maxSimultaneousFilesUploads: 2,
                progressUrl: "http://jp.igniteui.com/IGUploadStatusHandler.ashx",
                controlId: "serverID1",
                labelUploadButton: buttonLabel,
                onError: function (e, args) {
                    showAlert(args);
                }
            });
            if (Modernizr.input.multiple) {
                $(".ui-igstartupbrowsebutton").attr("style", "width: 320px; height: 80px;");
            }
        });

        function showAlert(args) {
            $("#error-message").html(args.errorMessage).stop(true, true).fadeIn(500).delay(3000).fadeOut(500);
        }