(function (){
    angular.module('tienda.controllers', [])

        .controller('TiendaController', ['$scope', function ($scope) {
            $scope.carrito =[];

            $scope.comprar = function(item){
                item.ocultar = true;
                $scope.carrito.push(item);
            }
        }])

        .controller('FormularioController', ['$scope', '$routeParams', 'ropaService', function ($scope, $routeParams, ropaService){
            var type = $routeParams.type;

            if(type){
                ropaService.byType(type).then(function(data){
                    $scope.ropas = data;
                    console.log('hola')
                });
            } else {
                ropaService.all().then(function (data) {
                $scope.ropas = data;
                });
            }
            
            
        }])
    
})();