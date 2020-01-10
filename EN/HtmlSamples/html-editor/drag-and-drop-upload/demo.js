$(function () {
            var height = $('html').hasClass('touch') ? 400 : 330;

            $("#htmlEditor").igHtmlEditor({
                height: height,
                width: "100%"
            });

            // clear editor content
            $("#htmlEditor").igHtmlEditor("setContent", "", "html");

            $("#igUpload1").igUpload({
                mode: "multiple",
                autostartupload: true,
                progressUrl: "https://igniteui.com/IGUploadStatusHandler.ashx",
                controlId: "serverID1",
                multipleFiles: true,
                maxUploadedFiles: 3,
                allowedExtensions: ["gif", "jpg", "bmp", "png", "jpeg"],
                errorMessageValidatingFileExtension: "File extension not supported, try to drag some image file.",
                onError: function (e, args) {
                    showAlert(args);
                },
                fileUploaded: function (evt, ui) {
                    loadDataUriImages(ui.fileInfo.file);
                    // remove the drop zone element
                    $("#dropZone").remove();
                    // reset drop counter
                    dragging = 0;
                }
            });
        });

        function showAlert(args) {
            $("#error-message").html(args.errorMessage).stop(true, true).fadeIn(600).delay(3000).fadeOut(700);
        }

        // counter for the solution 'dragleave' of parent element fires when dragging over children elements
        var dragging = 0;

        // Setup the enter listener
        $("body").on({
            "dragenter": handleDragEnter,
            "dragleave": handleDragLeave
        });
        
        function handleDragEnter(evt) {
            evt.stopPropagation();
            evt.preventDefault();

            dragging++;

            if ($('#dropZone').length === 0) {
                $("<div/>", {
                    id: "dropZone",
                    text: "Drop images here or in the igUpload"
                }).appendTo(".igsb-running-sample");

                // Setup the drop listeners.
                var $dropZone = $('#dropZone'), boundries = $("#htmlEditor")[0].getClientRects()[0];

                $dropZone.on({
                    'drop': handleFileDrop,
                    'dragover': handleDragOver
                });

                $dropZone.css({
                    "top": "0px",
                    "width": boundries.width,
                    "height": boundries.height,
                    "line-height": boundries.height + "px",
                });
            }
        }

        function handleDragLeave(evt) {
            evt.stopPropagation();
            evt.preventDefault();

            dragging--;
            if (dragging === 0) {
                // remove the drop zone element
                $("#dropZone").remove();
            }
        }

        function handleFileDrop(evt) {
			evt.originalEvent.stopPropagation();
			evt.originalEvent.preventDefault();

            var $upload = $("#igUpload1"),
              files = evt.originalEvent.dataTransfer.files,
              output = []; // files is a FileList of File objects. List some properties.

            // Invoke file upload
            $upload.igUpload('container').trigger(evt);
            // remove the drop zone element
            $("#dropZone").remove();
            // reset drop counter
            dragging = 0;
        }

        function handleDragOver(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.originalEvent.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        }

        function loadDataUriImages(image) {
            var file = image;

            // Only process image files check
            // In the igUpload this is set by 'allowedExtensions'
            if (!file.type.match('image.*')) {
                return;
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function (theFile) {
                return function (e) {
                    // Render thumbnail.
                    var span = document.createElement('span'),
                      editorContent = $("#htmlEditor").igHtmlEditor("getContent", "html");

                    span.innerHTML = ['<img style="border: 1px solid #000;margin: 10px 5px 0 0;max-height: 150px; max-width: 200px" src="', e.target.result,
                      '" title="', escape(theFile.name), '"/>'
                    ].join('');

                    $("#htmlEditor").igHtmlEditor("setContent", editorContent + $(span).html(), "html");
                };
            })(file);

            // Read in the image file as a data URL.
            reader.readAsDataURL(file);
        }