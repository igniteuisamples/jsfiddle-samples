$(function () {
var sampleApp = angular.module('sampleApp', ['igniteui-directives']);
        sampleApp.controller('pivotGridXmlaController', function ($scope) {
            $scope.xmlaDataSource = new $.ig.OlapXmlaDataSource({
                serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',
                catalog: 'Adventure Works DW Standard Edition',
                cube: 'Adventure Works',
                rows: "[Ship Date].[Calendar]",
                columns: "[Delivery Date].[Calendar]",
                measures: "[Measures].[Product Gross Profit Margin Status],[Measures].[Product Gross Profit Margin Goal]",
            });
        });
});