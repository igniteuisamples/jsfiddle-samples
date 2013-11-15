$(function () {
            createCellSelectionGrid();
            createRowSelectionGrid();
        });

        function createCellSelectionGrid() {
            $("#cellSelectionGrid").igGrid({
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "社員 ID", key: "ID", dataType: "number", width: "120px" },
                    { headerText: "名前", key: "Name", dataType: "string" },
                    { headerText: "役職", key: "Title", dataType: "string"},
                    { headerText: "電話", key: "Phone", dataType: "string" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'ui-hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "Selection",
                        mode: "cell",
                        multipleSelection: false,
                        touchDragSelect: false, // this is true by default
                        multipleCellSelectOnClick: false
                    }
                ]
            });
        }

        function createRowSelectionGrid() {
            $("#rowSelectionGrid").igGrid({
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "社員 ID", key: "ID", dataType: "number", width: "120px" },
                    { headerText: "名前", key: "Name", dataType: "string"},
                    { headerText: "役職", key: "Title", dataType: "string" },
                    { headerText: "電話", key: "Phone", dataType: "string" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'ui-hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "Selection",
                        mode: 'row',
                        multipleSelection: true
                    }
                ]
            });
        }