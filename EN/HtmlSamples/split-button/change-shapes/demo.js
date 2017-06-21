$(function () {
            var DEFAULT_COLOR = "#205867",
                canvas = document.getElementById("shape-renderer"),
                context = canvas.getContext("2d");

            $("#split-button-shape").igSplitButton({
                items: [{
                    name: "circle",
                    label: "circle",
                    iconClass: "button-split button-circle"
                }, {
                    name: "triangle",
                    label: "triangle",
                    iconClass: "button-triangle"
                },
                {
                    name: "square",
                    label: "square",
                    iconClass: "button-split button-square"
                }],
                defaultItemName: "circle",
                swapDefaultEnabled: true,
                click: function (event) {
                    var shapeType = event.target.firstChild.id.split("_")[1];
                    changeShape(shapeType);
                }
            });

            function changeShape(shapeType) {
                switch (shapeType) {
                    case "circle":
                        drawCircle();
                        break;
                    case "triangle":
                        drawTriangle();
                        break;
                    case "square":
                        drawSquare();
                        break;
                }
            }

            function drawCircle() {
                var previousFillStyle = context.fillStyle;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.arc(90, 78, 70, 0, 2 * Math.PI);
                context.stroke();
                context.fillStyle = previousFillStyle;
                context.fill();
            }

            function drawTriangle() {
                var previousFillStyle = context.fillStyle;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.moveTo(0, 120);
                context.lineTo(120, 120);
                context.lineTo(60, 20);
                context.closePath();
                context.stroke();
                context.fillStyle = previousFillStyle;
                context.fill();
            }

            function drawSquare() {
                var previousFillStyle = context.fillStyle;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.rect(10, 30, 120, 120);
                context.stroke();
                context.fillStyle = previousFillStyle;
                context.fill();
            }

            $("#color-picker-shape").igColorPickerSplitButton({
                items: [{
                    name: "shape-color",
                    label: "Shape color",
                    iconClass: "ui-igbutton-forecolor circle"
                }],
                defaultItemName: "shape-color",
                defaultColor: DEFAULT_COLOR,
                colorSelected: function (event, color) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.fillStyle = color.value;
                    context.fill();
                    context.strokeStyle = "#000";
                }
            });

            $("#font-color-picker").igColorPickerSplitButton({
                items: [{
                    name: "shape-color",
                    label: "Shape color",
                    iconClass: "ui-igbutton-forecolor"
                }],
                defaultItemName: "shape-color",
                defaultColor: DEFAULT_COLOR,
                colorSelected: function (event, color) {
                    $(".text-container").css("color", color.value);
                }
            });

            $("#text-align-button").igSplitButton({
                items: [{
                    name: "align-left",
                    label: "left",
                    iconClass: "ui-btn-justifyleft"

                }, {
                    name: "align-center",
                    label: "center",
                    iconClass: "ui-btn-justifycenter"
                },
                {
                    name: "align-right",
                    label: "right",
                    iconClass: "ui-btn-justifyright"
                },
                {
                    name: "align-full",
                    label: "full",
                    iconClass: "ui-btn-justifyfull"
                }],
                defaultItemName: "align-left",
                swapDefaultEnabled: true,
                click: function () {
                    $(".text-container").attr("align", $("#text-align-button > div:first-child").attr("title"));
                }
            });

            $("#text-style-button").igSplitButton({
                items: [{
                    name: "stlye-normal",
                    label: "normal",
                    iconClass: "ui-btn-normal"

                }, {
                    name: "stlye-bold",
                    label: "bold",
                    iconClass: "ui-btn-bold"

                }, {
                    name: "style-italic",
                    label: "italic",
                    iconClass: "ui-btn-italic"
                },
                {
                    name: "style-underline",
                    label: "underline",
                    iconClass: "ui-btn-underline"
                }],
                defaultItemName: "stlye-normal",
                swapDefaultEnabled: true,
                click: function () {
                    changeTextStyle($("#text-style-button > div:first-child").attr("title"));
                }
            });

            function changeTextStyle(value) {
                var $element = $(".text-container");

                $element.css({
                    "font-style": "",
                    "font-weight": "",
                    "text-decoration": ""
                });

                switch (value) {
                    case "normal":
                        $element.css("font-style", "normal");
                        break;
                    case "bold":
                        $element.css("font-weight", "bold");
                        break;
                    case "italic":
                        $element.css("font-style", "italic");
                        break;
                    case "underline":
                        $element.css("text-decoration", "underline");
                        break;
                    default:
                }
            }

            $("#background-color-picker").igColorPickerSplitButton({
                items: [{
                    name: "shape-color",
                    label: "Shape color",
                    iconClass: "ui-igbutton-backcolor"
                }],
                defaultItemName: "shape-color",
                defaultColor: DEFAULT_COLOR,
                colorSelected: function (event, color) {
                    $(".text-container").css("background-color", color.value);
                }
            });

            function intialize() {
                context.fillStyle = DEFAULT_COLOR;
                drawCircle();

                $(".text-container").css("color", DEFAULT_COLOR);
            }

            intialize();
        });