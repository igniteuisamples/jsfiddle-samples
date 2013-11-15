$(function () {
$.support.cors = true;

        $(function () {
            $("#pivotView").igPivotView({
                dataSourceOptions: {
                    xmlaOptions: {
                        serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',
                        catalog: 'Adventure Works DW Standard Edition',
                        cube: 'Adventure Works',
                        measureGroup: "Internet Sales",
                    },
                    rows: "[Sales Territory].[Sales Territory]",
                    columns: "[Product].[Product Categories]",
                    measures: "[Measures].[Internet Order Count]"
                }
            });
        });
});