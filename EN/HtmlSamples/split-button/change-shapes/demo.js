$(function () {
            function drawCircle(element) {
                var elementCtx = element.getContext("2d"),
                    previousFillStyle = elementCtx.fillStyle;
                elementCtx.clearRect(0, 0, element.width, element.height);
                elementCtx.beginPath();
                elementCtx.arc(60, 80, 50, 0, 2 * Math.PI);
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
                elementCtx.rect(10, 30, 100, 100);
                elementCtx.stroke();
                elementCtx.fillStyle = previousFillStyle;
                elementCtx.fill();
            }
            
            function firstTimeInit() {

                var circle, triangle, square, circleCtx, triangleCtx, squareCtx;

                circle = document.getElementById("circle");
                circle.getContext("2d").fillStyle = "#205867"
                drawCircle(circle);

                triangle = document.getElementById("triangle");
                triangle.getContext("2d").fillStyle = "#5F497A";
                drawTriangle(triangle);

                square = document.getElementById("square");
                square.getContext("2d").fillStyle = "#E36C09"
                drawSquare(square);
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

            $("#split-button-triangle").igSplitButton({
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
                defaultItemName: "triangle",
                swapDefaultEnabled: true,
                click: function (event, el) {
                    var elementToChangeId = event.target.firstChild.id.split("_")[0].split("-")[2];
                    var shape = event.target.firstChild.id.split("_")[1];
                    changeShape(elementToChangeId, shape);
                }
            });

            $("#split-button-square").igSplitButton({
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
                defaultItemName: "square",
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
                    var circleCtx = document.getElementById("circle").getContext("2d");
                    circleCtx.fillStyle = color.value;
                    circleCtx.fill();
                    circleCtx.strokeStyle = "#000";
                }
            });

            $("#color-picker-triangle").igColorPickerSplitButton({
                items: [{
                    name: "trianglecolor",
                    label: "Triangle Color",
                    iconClass: "ui-igbutton-forecolor"
                }],
                defaultItemName: "trianglecolor",
                defaultColor: "#5F497A",
                colorSelected: function (event, color) {
                    var triangleCtx = document.getElementById("triangle").getContext("2d");
                    triangleCtx.fillStyle = color.value;
                    triangleCtx.fill();
                    triangleCtx.strokeStyle = "#000";
                }
            });

            $("#color-picker-square").igColorPickerSplitButton({
                items: [{
                    name: "squarecolor",
                    label: "Square Color",
                    iconClass: "ui-igbutton-forecolor"
                }],
                defaultItemName: "squarecolor",
                defaultColor: "#E36C09",
                colorSelected: function (event, color) {
                    var squareCtx = document.getElementById("square").getContext("2d");
                    squareCtx.fillStyle = color.value;
                    squareCtx.fill();
                    squareCtx.strokeStyle = "#000";
                }
            });

            firstTimeInit();
        });