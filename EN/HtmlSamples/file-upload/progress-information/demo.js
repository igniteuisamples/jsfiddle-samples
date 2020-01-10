$(function () {
$('#igUpload1').igUpload({
            mode: 'multiple',
            progressUrl: 'https://igniteui.com/IGUploadStatusHandler.ashx',
            maxUploadedFiles: 5,
            maxSimultaneousFilesUploads: 2,
            controlId: 'serverID1'
        });

        function showAlert(args) {
            $("#error-message").html(args.errorMessage).stop(true, true).fadeIn(500).delay(3000).fadeOut(500);
        }

        var timeOutID;
        function startTimer() {
            var currCount = parseInt($('#timeElapsed').html(), 10);
            $('#timeElapsed').html(currCount + 1);
            timeOutID = setTimeout('startTimer()', 1000);
        }
        function areAllFilesUploaded() {
            var uploadInfo = $("#igUpload1").igUpload('getFileInfoData');
            return uploadInfo.countTotalFiles === uploadInfo.countUploadingFiles;
        }
        function refreshProgressInformation() {
            var uploadInfo = $("#igUpload1").igUpload('getFileInfoData'),
                timeElapsed = parseInt($('#timeElapsed').html(), 10),
                uploadSpeed;

            if (timeElapsed === 0) {
                uploadSpeed = 0;
            } else {
                uploadSpeed = Math.round(uploadInfo.fileSizeUploaded / (1024 * timeElapsed));
            }

            $("#uploadedFiles").html(uploadInfo.countUploadingFiles);
            $("#uploaded").html(Math.round(uploadInfo.fileSizeUploaded / 1024));
            $("#toUpload").html(Math.round((uploadInfo.fileSizeTotal - uploadInfo.fileSizeUploaded) / 1024));
            $("#speed").html(uploadSpeed);
            if (uploadSpeed === 0) {
                $("#timeLeft").html(0);
            } else {
                $("#timeLeft").html(Math.round((uploadInfo.fileSizeTotal - uploadInfo.fileSizeUploaded) / (1024 * uploadSpeed)));
            }
        }

        $(function () {
            $("#error").css("display", "none");
            $("#igUpload1").on({
                iguploadfileuploading: function (e, args) {
                    if ($("#hdnStartTimer").val() === 'false') {
                        $("#hdnStartTimer").val('true');
                        startTimer();
                    }
                    refreshProgressInformation();
                }
            });
            $("#igUpload1").on({
                iguploadfileuploaded: function (e, args) {
                    refreshProgressInformation();
                    if (areAllFilesUploaded()) {
                        clearTimeout(timeOutID);
                        $("#hdnStartTimer").val('false');
                    }
                    $("#error").css("display", "none");
                }
            });
            $("#igUpload1").on({
                iguploadfileuploadaborted: function (e, args) {
                    refreshProgressInformation();
                    clearTimeout(timeOutID);
                    $("#hdnStartTimer").val('false');
                }
            });
            $("#igUpload1").on({
                iguploadcancelallclicked: function (e, args) {
                    refreshProgressInformation();
                    clearTimeout(timeOutID);
                    $("#hdnStartTimer").val('false');
                }
            });
            $("#igUpload1").on({
                iguploadonerror: function (e, args) {
                    refreshProgressInformation();
                    clearTimeout(timeOutID);
                    $("#hdnStartTimer").val('false');

                    if (args.errorType === 'serverside' && args.errorCode === 2) {
                        $("#error").stop(true, true).fadeIn(500).delay(3000).fadeOut(500);
                    }
                }
            });
        });
});