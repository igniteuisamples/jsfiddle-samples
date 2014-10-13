$(function () {
            $("#barcode").igQRCodeBarcode({
                height: "300px",
                width: "100%",
                stretch: 'uniform',
                data: "http://www.infragistics.com/products/jquery/help"
            });

            $("#setButton").click(function () {
                $("#barcode").igQRCodeBarcode("option", "data", $("#dataInput").val());
            });

            $("#eciNumber").change(function () {
                var val = $("#eciNumber").val().toLowerCase();
                $("#barcode").igQRCodeBarcode("option", "eciNumber", parseInt(val));
            });

            $("#eccLevel").change(function () {
                var val = $("#eccLevel").val().toLowerCase();
                $("#barcode").igQRCodeBarcode("option", "errorCorrectionLevel", val);
            });

            $("#sizeVersion").append("<option>Undefined</option>");
            for (var i = 1; i < 41; i++) {
                $("#sizeVersion").append("<option>Version" + i + "</option>");
            }

            $("#sizeVersion").change(function () {
                var val = $("#sizeVersion").val().toLowerCase();
                $("#barcode").igQRCodeBarcode("option", "sizeVersion", val);
            });

            $("#encodingMode").change(function () {
                var val = $("#encodingMode").val().toLowerCase();
                $("#barcode").igQRCodeBarcode("option", "encodingMode", val);
            });

            $("#eciHeaderDisplayMode").change(function () {
                var val = $("#eciHeaderDisplayMode").val().toLowerCase();
                $("#barcode").igQRCodeBarcode("option", "eciHeaderDisplayMode", val);
            });

            $("#dataInput").keydown(function ( event ) {
                //check for Enter key
                if (event.which == 13) {
                    $("#barcode").igQRCodeBarcode("option", "data", $("#dataInput").val());
                }
            });
        });