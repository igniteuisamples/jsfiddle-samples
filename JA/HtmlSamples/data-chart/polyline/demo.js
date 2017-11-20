$(function () {
(function () {
            var data = buildGraph();

            $("#polylineChart").igDataChart({
                width: "98%",
                height: "550px",
                title: "組織図",
                subtitle: "部門の構造の表示",
                isHorizontalZoomEnabled: true,
                isVerticalZoomEnabled: true,
                axes: [{
                    name: "xAxis",
                    type: "numericX",
                    labelVisibility: "collapsed",
                    minimumValue: -15,
                    maximumValue: 7,
                }, {
                    name: "yAxis",
                    type: "numericY",
                    labelVisibility: "collapsed"
                }],
                series: [{
                    name: "polylineSeries",
                    type: "scatterPolyline",
                    dataSource: data.Graph,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    title: "polyline series",
                    shapeMemberPath: "Points",
                }, {
                    name: "departmentNodes",
                    type: "bubble",
                    title: "部門",
                    dataSource: data.Departments,
                    xMemberPath: "X",
                    yMemberPath: "Y",
                    radiusMemberPath: "Size",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    markerType: "circle",
                    radiusScale: {
                        minimumValue: 70,
                    },
                    legend: { element: "polylineLegend" },
                }, {
                    name: "employeeNodes",
                    type: "bubble",
                    title: "社員",
                    dataSource: data.Employees,
                    xMemberPath: "X",
                    yMemberPath: "Y",
                    radiusMemberPath: "Size",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    markerType: "circle",
                    radiusScale: {
                        minimumValue: 30,
                    },
                    legend: { element: "polylineLegend" },
                }, {
                    name: "departmentLabels",
                    type: "scatter",
                    dataSource: data.Departments,
                    xMemberPath: "X",
                    yMemberPath: "Y",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    markerTemplate: {
                        render: function (renderInfo) {
                            renderInfo.context.font = "14px serif";
                            renderInfo.context.textAlign = "center";
                            renderInfo.context.fillText(renderInfo.data.item().Label, renderInfo.xPosition, renderInfo.yPosition + 4);
                        }
                    }
                }, {
                    name: "employeeLabels",
                    type: "scatter",
                    dataSource: data.Employees,
                    xMemberPath: "X",
                    yMemberPath: "Y",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    markerTemplate: {
                        render: function (renderInfo) {
                            renderInfo.context.font = "10px serif";
                            renderInfo.context.textAlign = "center";
                            renderInfo.context.fillText(renderInfo.data.item().Label, renderInfo.xPosition, renderInfo.yPosition + 2);
                        }
                    }
                }],
            });

            function buildGraph() {
                var departments = [
                    { "X": 0.0, "Y": 0.0, "Size": 2.0, "Label": "Engineering" },
                    { "X": -9.1544790795614226, "Y": -4.0243648917403423, "Size": 2.0, "Label": "HR" },
                    { "X": -8.0974394040499025, "Y": 5.9196115324269289, "Size": 2.0, "Label": "Sales" }
                ];
                var employees = [
                    { "X": -1.4544705520222068, "Y": 4.8058181444878585, "Size": 1.0, "Label": "Charlene" },
                    { "X": -3.1090972667581056, "Y": 3.9110788006039257, "Size": 1.0, "Label": "Eric" },
                    { "X": -2.3374267838894891, "Y": 4.5471013362654507, "Size": 1.0, "Label": "Matthew" },
                    { "X": 2.5057163057012879, "Y": 4.3268216736240346, "Size": 1.0, "Label": "Phil" },
                    { "X": 4.9989836242825287, "Y": 0.10081033754089079, "Size": 1.0, "Label": "Erica" },
                    { "X": -13.885160527316625, "Y": -5.6432080094836072, "Size": 1.0, "Label": "Matthew" },
                    { "X": -4.4925110453965278, "Y": -5.8315876362919665, "Size": 1.0, "Label": "Phil" },
                    { "X": -13.299273302669384, "Y": -6.8209129153027623, "Size": 1.0, "Label": "Graham" },
                    { "X": -10.630352316005101, "Y": -8.8175728241754232, "Size": 1.0, "Label": "Marie" },
                    { "X": -7.0708345924007672, "Y": -8.5695189761609143, "Size": 1.0, "Label": "Tedd" },
                    { "X": -11.551973763883687, "Y": -8.429482748535527, "Size": 1.0, "Label": "Tedd" },
                    { "X": -11.221655471620393, "Y": 9.8547596318581547, "Size": 1.0, "Label": "Marie" },
                    { "X": -11.939076868152327, "Y": 9.1581201700142465, "Size": 1.0, "Label": "Marie" },
                    { "X": -6.1198695385991142, "Y": 10.5119113296158, "Size": 1.0, "Label": "Marie" },
                    { "X": -11.082757898484051, "Y": 1.9086423868475935, "Size": 1.0, "Label": "Marie" },
                    { "X": -6.79487227010691, "Y": 1.0922604097540054, "Size": 1.0, "Label": "Julie" }
                ];
                var graph = [
                    { "Points": [[{ x: 0.0, y: 0.0 }, { x: -1.4544705520222068, y: 4.8058181444878585 }], [{ x: 0.0, y: 0.0 }, { x: -3.1090972667581056, y: 3.9110788006039257 }], [{ x: 0.0, y: 0.0 }, { x: -2.3374267838894891, y: 4.5471013362654507 }], [{ x: 0.0, y: 0.0 }, { x: 2.5057163057012879, y: 4.3268216736240346 }], [{ x: 0.0, y: 0.0 }, { x: 4.9989836242825287, y: 0.10081033754089079 }]] },
                    { "Points": [[{ x: -9.1544790795614226, y: -4.0243648917403423 }, { x: -13.885160527316625, y: -5.6432080094836072 }], [{ x: -9.1544790795614226, y: -4.0243648917403423 }, { x: -4.4925110453965278, y: -5.8315876362919665 }], [{ x: -9.1544790795614226, y: -4.0243648917403423 }, { x: -13.299273302669384, y: -6.8209129153027623 }], [{ x: -9.1544790795614226, y: -4.0243648917403423 }, { x: -10.630352316005101, y: -8.8175728241754232 }], [{ x: -9.1544790795614226, y: -4.0243648917403423 }, { x: -7.0708345924007672, y: -8.5695189761609143 }], [{ x: -9.1544790795614226, y: -4.0243648917403423 }, { x: -11.551973763883687, y: -8.429482748535527 }], [{ x: -9.1544790795614226, y: -4.0243648917403423 }, { x: -6.79487227010691, y: 1.0922604097540054 }]] },
                    { "Points": [[{ x: -8.0974394040499025, y: 5.9196115324269289 }, { x: -3.1090972667581056, y: 3.9110788006039257 }], [{ x: -8.0974394040499025, y: 5.9196115324269289 }, { x: -2.3374267838894891, y: 4.5471013362654507 }], [{ x: -8.0974394040499025, y: 5.9196115324269289 }, { x: -11.221655471620393, y: 9.8547596318581547 }], [{ x: -8.0974394040499025, y: 5.9196115324269289 }, { x: -11.939076868152327, y: 9.1581201700142465 }], [{ x: -8.0974394040499025, y: 5.9196115324269289 }, { x: -6.1198695385991142, y: 10.5119113296158 }], [{ x: -8.0974394040499025, y: 5.9196115324269289 }, { x: -11.082757898484051, y: 1.9086423868475935 }], [{ x: -8.0974394040499025, y: 5.9196115324269289 }, { x: -6.79487227010691, y: 1.0922604097540054 }]] }
                ];

                return { Departments: departments, Employees: employees, Graph: graph };
            }
        })();
});