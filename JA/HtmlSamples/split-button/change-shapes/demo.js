$(function () {
        function drawCircle(element) {
            var elementCtx = element.getContext("2d"),
                previousFillStyle = elementCtx.fillStyle;
            elementCtx.clearRect(0, 0, element.width, element.height);
            elementCtx.beginPath();
            elementCtx.arc(90, 78, 70, 0, 2 * Math.PI);
            elementCtx.stroke();
            elementCtx.fillStyle = previousFillStyle;
            elementCtx.fill();
        }

        function drawTriangle(element) {
            var elementCtx = element.getContext("2d"),
                previousFillStyle = elementCtx.fillStyle;
            elementCtx.clearRect(0, 0, element.width, element.height);
            elementCtx.beginPath();
            elementCtx.moveTo(0, 120);
            elementCtx.lineTo(120, 120);
            elementCtx.lineTo(60, 20);
            elementCtx.closePath();
            elementCtx.stroke();
            elementCtx.fillStyle = previousFillStyle;
            elementCtx.fill();
        }

        function drawSquare(element) {
            var elementCtx = element.getContext("2d"),
                previousFillStyle = elementCtx.fillStyle;
            elementCtx.clearRect(0, 0, element.width, element.height);
            elementCtx.beginPath();
            elementCtx.rect(10, 30, 120, 120);
            elementCtx.stroke();
            elementCtx.fillStyle = previousFillStyle;
            elementCtx.fill();
        }

        function firstTimeInit() {

            var circle, triangle, square, circleCtx, triangleCtx, squareCtx;

            circle = document.getElementById("circle");
            circle.getContext("2d").fillStyle = "#205867"
            drawCircle(circle);

            $(".igsb-sample-desc").css("color", "#205867");
        }
        function changeShape(id, newShape) {
            var elementToChange = document.getElementById(id);
            if (newShape === "circle") {
                drawCircle(elementToChange);
            } else if (newShape === "triangle") {
                drawTriangle(elementToChange);
            } else if (newShape === "square") {
                drawSquare(elementToChange);
            }
        };

        function changeTextStyle(value) {
            var $element = $(".igsb-sample-desc");

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

        $("#split-button-circle").igSplitButton({
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
            click: function (event, el) {
                var elementToChangeId = event.target.firstChild.id.split("_")[0].split("-")[2];
                var shape = event.target.firstChild.id.split("_")[1];
                changeShape(elementToChangeId, shape);
            }
        });

        $("#color-picker-circle").igColorPickerSplitButton({
            items: [{
                name: "circlecolor",
                label: "Circle Color",
                iconClass: "circle ui-igbutton-forecolor circle"
            }],
            defaultItemName: "circlecolor",
            defaultColor: "#205867",
            colorSelected: function (event, color) {
                // A.K 17 October 2016 Bug fix: #225431 - Incorrect coloring of shape in Split button sample (in IE)
                var canvas = document.getElementById("circle");
                var circleCtx = canvas.getContext("2d");
                circleCtx.clearRect(0, 0, canvas.width, canvas.height);
                circleCtx.fillStyle = color.value;
                circleCtx.fill();
                circleCtx.strokeStyle = "#000";
            }
        });

        $("#font-color-picker-circle").igColorPickerSplitButton({
            items: [{
                name: "circlecolor",
                label: "Circle Color",
                iconClass: "ui-igbutton-forecolor"
            }],
            defaultItemName: "circlecolor",
            defaultColor: "#205867",
            colorSelected: function (event, color) {
                $(".igsb-sample-desc").css("color", color.value);
            }
        });

        $("#text-align-button-circle").igSplitButton({
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
            click: function (event, el) {
                $(".igsb-sample-desc").attr("align", $("#text-align-button-circle > div:first-child").attr("title"));
            }
        });

        $("#text-style-button-circle").igSplitButton({
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
            click: function (event, el) {
                changeTextStyle($("#text-style-button-circle > div:first-child").attr("title"));
            }
        });

        $("#back-color-picker-circle").igColorPickerSplitButton({
            items: [{
                name: "circlecolor",
                label: "Circle Color",
                iconClass: "ui-igbutton-backcolor"
            }],
            defaultItemName: "circlecolor",
            defaultColor: "#205867",
            colorSelected: function (event, color) {
                $(".igsb-sample-desc").css("background-color", color.value);
            }
        });

        firstTimeInit();
    });