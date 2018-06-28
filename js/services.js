(function () {
    angular.module('tienda.services', [])
    
        .factory('ropaService', ['$http', '$q', function($http, $q) {
            
            function all() {
                var deferred = $q.defer();
                
                $http({
                    method: 'get',
                    url: 'js/ropa.json'
                }).then(function (response) {
                    data = response.data 
                    deferred.resolve(data);

                    });
                return deferred.promise;
            }

            function byType(type) {
                var deferred = $q.defer();
                all().then(function(data){
                    var results = data.filter(function(ropa){
                        return ropa.tipo === type;
                    });
                    deferred.resolve(results);
                });

                return deferred.promise;
            }

            return {
                all:all,
                byType: byType
            }
        }]);
})();
   