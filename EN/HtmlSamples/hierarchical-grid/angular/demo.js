$(function () {
var sampleApp = angular.module('sampleApp', ['igniteui-directives']);
        sampleApp.controller('hierarchicalGridController', function ($scope) {
            $scope.data = northwind.results;
        });
});