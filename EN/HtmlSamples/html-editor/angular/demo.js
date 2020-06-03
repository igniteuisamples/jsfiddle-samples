$(function () {
var sampleApp = angular.module('sampleApp', ['igniteui-directives']);
        sampleApp.controller('gridController', function ($scope) {
            $scope.data = "<p>Ignite UI for jQuery controls:</p><p><ul><li>igEditors</li><li>igHtmlEditor</li><li>igGrid</li><li>igDataChart</li><li>etc.</li></ul></p>";
        });
});