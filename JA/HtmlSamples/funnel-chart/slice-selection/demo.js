$(function () {
var data = [
            { Budget: 30, Department: "事務" },
            { Budget: 50, Department: "セールス" },
            { Budget: 60, Department: "IT" },
            { Budget: 50, Department: "マーケティング" },
            { Budget: 100, Department: "開発" },
            { Budget: 20, Department: "サポート" }
        ];
        var selectedSlices = [];

        $(function () {
            //  Create a funnel chart with slice selection allowed and an event handler for 
            //  the sliceClicked event. The styles for selected and unselected slices from
            //  infragistics.theme.css file are used and redefined in the <style> node of the page.
            $("#chart").igFunnelChart({
                width: "100%",
                height: "500px",
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible",
                allowSliceSelection: true,
                useUnselectedStyle: true,
                sliceClicked: function (evt, ui) {
                    if (ui.selected) {
                        selectedSlices.push(ui.item);
                    }
                    else {
                        selectedSlices.removeItem(ui.item);
                    }
                    $("#selectedSlicesGrid").igGrid("dataBind");
                }
            });

            //  Create a funnel chart with slice selection allowed and custom styles for selected and
            //  unselected slices defined in the selectedSliceStyle & unselectedSliceStyle options.
            $("#chartCustom").igFunnelChart({
                width: "100%",
                height: "500px",
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible",
                allowSliceSelection: true,
                useUnselectedStyle: true,
                selectedSliceStyle: {
                    fill: "lightblue",
                    stroke: "black"
                },
                unselectedSliceStyle: {
                    fill: "lightgrey",
                    stroke: "grey"
                }
            });

            //  Instantiate the selected slices grid
            $("#selectedSlicesGrid").igGrid({
                dataSource: selectedSlices,
                columns: [
                    { key: "Department", headerText: "グループ", width: "130px" },
                    { key: "Budget", headerText: "予算", width: "70px" }
                ]
            });
        });
});