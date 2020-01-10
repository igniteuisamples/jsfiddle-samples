$(function () {
            $("#barcode").igQRCodeBarcode({
                height: "200px",
                width: "200px",
                data: "http://www.infragistics.com/products/jquery/",
                barBrush: "black",
                backingBrush: "white",
                backingOutline: "black",
                backingStrokeThickness: 1
            });

            $("#backingBrush").change(function () {
                var val = $("#backingBrush").val().toLowerCase();
                $("#barcode").igQRCodeBarcode("option", "backingBrush", val);
            });

            $("#backingOutline").change(function () {
                var val = $("#backingOutline").val().toLowerCase();
                $("#barcode").igQRCodeBarcode("option", "backingOutline", val);
            });

            $("#barBrush").change(function () {
                var val = $("#barBrush").val().toLowerCase();
                $("#barcode").igQRCodeBarcode("option", "barBrush", val);
            });

            $("#backingStrokeThickness").slider({
                min: 0, max: 10, value: 1, step: 1,
                slide: function (event, ui) {
                    $("#barcode").igQRCodeBarcode("option", "backingStrokeThickness", ui.value == 0 ? 0.01 : ui.value);
                    $("#backingStrokeThicknessLabel").text(ui.value);
                }
            });
        });