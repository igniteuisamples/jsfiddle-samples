$(function () {
var data = [
            { Id: 0, Budget: 30, Department: "事務" },
            { Id: 1, Budget: 50, Department: "セールス" },
            { Id: 2, Budget: 60, Department: "IT" },
            { Id: 3, Budget: 50, Department: "マーケティング" },
            { Id: 4, Budget: 100, Department: "開発" },
            { Id: 5, Budget: 20, Department: "サポート" }
        ];

        $(function () {
            //  Create a basic funnel chart with regular layout
            $("#chartNormal").igFunnelChart({
                width: "100%",
                height: "450px",
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                tooltipTemplate: "<span>ID:${Id}<br>分門:${Department}</span>"
            });

            //  Create a funnel chart with Bezier curved shape. You can control the exact shape of 
            //  the Bezier curve By varying the upperBezierControlPoint & lowerBezierControlPoint.
            $("#chartBezier").igFunnelChart({
                width: "100%",
                height: "450px",
                leftMargin: 20,
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                tooltipTemplate: "<span>ID:${Id}<br>分門:${Department}</span>",
                useBezierCurve: true,
                bezierPoints: "0.1 0.1 0.7 1"
            });
        });
});