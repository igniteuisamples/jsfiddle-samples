$(function () {
$.support.cors = true;

        $(function () {
            var dataSource = new $.ig.OlapXmlaDataSource({
                serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',
                catalog: 'Adventure Works DW Standard Edition',
                cube: 'Adventure Works',
                measureGroup: "Internet Sales",
                rows: "[Sales Territory].[Sales Territory]",
                columns: "[Product].[Product Categories]",
                measures: "[Measures].[Internet Order Count]"
            });

            $('#dataSelector').igPivotDataSelector({
                dataSource: dataSource,
                height: "650px",
                width: "240px"
            });
            $("#pivotGrid").igPivotGrid({
                dataSource: dataSource,
                height: "650px",
                width: "670px"
            });
        });
});