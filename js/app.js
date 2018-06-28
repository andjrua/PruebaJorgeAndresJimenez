(function (){
    var app = angular.module('tienda', [ 
        'ngRoute',
        'tienda.controllers',
        'tienda.directives',
        'tienda.services'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/principal.html',
                controller: 'formCtrl'
            })
            .when('/formulario', {
                templateUrl: 'views/formulario.html',
                controller: 'FormularioController',
            })
            .when('/productos', {
                templateUrl: 'views/productos.html',
                controller: 'FormularioController',
            })
            .when('/productos/:type', {
                templateUrl: 'views/productos.html',
                controller: 'FormularioController',
            })
            .when('/formulario', {
                templateUrl: 'views/formulario.html',
                controller: 'FormularioController',
            })
            .otherwise({
                redirecTo: '/'
            });

    }]);
})();
