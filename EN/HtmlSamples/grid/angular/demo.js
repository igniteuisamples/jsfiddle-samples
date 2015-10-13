$(function () {
var sampleApp = angular.module('sampleApp', ['igniteui-directives']);
        sampleApp.controller('gridController', function ($scope) {
            $scope.data = angular.copy(northwindProducts.results);

            $scope.deleteProduct = function (ix) {
                $scope.data.splice(ix, 1);
            };

            $scope.addProduct = function () {
                $scope.newProduct.ProductID = $scope.data.length + 1;
                var tmp = angular.copy($scope.newProduct);
                $scope.data.push(tmp);
            };

            $scope.newProduct = {
                ProductID: 21,
                ProductName: null,
                QuantityPerUnit: null,
                UnitPrice: null
            };
        });
     
        {{if ${UnitPrice} == null }}
        N/A
        {{elseif ${UnitPrice} >= (Math.random()+0.5)*${UnitPrice} }}
        $ ${UnitPrice}
        <img width='10' height='15' src='http://igniteui.github.io/igniteui-angular/samples/images/arrowUp.gif' />
        {{else}}
        $ ${UnitPrice}
        <img width='10' height='15' src='http://igniteui.github.io/igniteui-angular/samples/images/arrowDown.gif' />
        {{/if}}
});