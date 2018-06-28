(function (){
    angular.module('tienda.directives', [])
    
        .directive('tiendaPrincipal', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/tienda-principal.html'
            };
        })

        .directive('tiendaProductos', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/tienda-productos.html'
            };
        })

        .directive('tiendaFormulario', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/tienda-formulario.html',
                controller: function () {
                    this.comments = [];
                    this.comment = {};
                    this.show = false;

                    this.toggle = function () {
                        this.show = !this.show;
                    };

                    this.newOrder = function () {
                        this.comments.push(this.comment);
                        this.comment = {};
                    };
                },
                controllerAs: 'formCtrl'
            };
        })
})();