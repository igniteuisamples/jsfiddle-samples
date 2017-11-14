$(function () {
            $('#layout').igLayoutManager({
                layoutMode: "grid",
                width: "100%",
                height: "500px",
                gridLayout: {
                    columnHeight: ["20%", "200px", "*"],
                    columnWidth: ["20%", "*", "*"],
                    marginLeft: 5,
                    marginTop: 5
                },
                items: [
                    {
                        rowSpan: 2,
                        colSpan: 2,
                        colIndex: 0,
                        rowIndex: 0
                    },
                    {
                        rowSpan: 1,
                        colSpan: 1,
                        rowIndex: 0,
                        colIndex: 2
                    },
                    {
                        rowSpan: 1,
                        colSpan: 1,
                        rowIndex: 1,
                        colIndex: 2
                    },
                    {
                        rowSpan: 1,
                        colSpan: 3,
                        colIndex: 0,
                        rowIndex: 2
                    }
                ]
            });
        });