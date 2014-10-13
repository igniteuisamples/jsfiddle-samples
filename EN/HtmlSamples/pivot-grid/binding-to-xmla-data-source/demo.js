$(function () {
$.support.cors = true;

        $(function () {
            var dataSource = new $.ig.OlapXmlaDataSource({
                serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',
                catalog: 'Adventure Works DW Standard Edition',
                cube: 'Adventure Works',
                rows: "[Ship Date].[Calendar]",
                columns: "[Delivery Date].[Calendar]",
                measures: "[Measures].[Product Gross Profit Margin Status],[Measures].[Product Gross Profit Margin Goal]",
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