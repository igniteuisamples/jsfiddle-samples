$(function () {
var data = [
            { Budget: 30, Department: "Administration" },
            { Budget: 50, Department: "Sales" },
            { Budget: 60, Department: "IT" },
            { Budget: 50, Department: "Marketing" },
            { Budget: 100, Department: "Development" },
            { Budget: 20, Department: "Support" }
        ];

        $(function () {
            //  Create a basic funnel chart
            $("#chartNormal").igFunnelChart({
                width: "100%",  //"325px",
                height: "450px",
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible"
            });

            //  Create a funnel chart with weighted size slices
            $("#chartWeighted").igFunnelChart({
                width: "100%",  //"325px",
                height: "450px",
                leftMargin: 20,
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible",
                funnelSliceDisplay: "weighted"
            });

            //  Create an inverted funnel chart
            $("#chartInverted").igFunnelChart({
                width: "100%",  //"325px",
                height: "450px",
                leftMargin: 20,
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                isInverted: true
            });
        });
});