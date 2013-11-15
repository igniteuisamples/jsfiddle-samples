$(function () {
            $("#barcode").igQRCodeBarcode({
                height: "300px",
                width: "100%",
                stretch: 'none',
                barsFillMode: "fillSpace",
                xDimension: 0.75,
                data: "http://www.infragistics.com/products/jquery/help"
            });

            $("input[name=barsFillMode]").change(function (evt) {
                var val = evt.target.value;
                $("#barcode").igQRCodeBarcode("option", "barsFillMode", val);
            });

            $("input[name=stretch]").change(function (evt) {
                var val = evt.target.value;
                $("#barcode").igQRCodeBarcode("option", "stretch", val);
            });

            $("#xDimensionSlider").slider({
                min: 0.55,
                max: 2,
                step: 0.01,
                value: 0.75,
                slide: function (event, ui) {
                    $("#barcode").igQRCodeBarcode("option", "xDimension", ui.value);

                    $("#stretchNone").prop("checked", true);
                    $("#barcode").igQRCodeBarcode("option", "stretch", "none");
                    $("#xDimensionLabel").text(ui.value);
                }
            });
        });