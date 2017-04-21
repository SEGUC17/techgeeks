angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider){

    $routeProvider.when('/',{
        templateUrl: 'app/views/pages/index.html'
    })

    .when('/reserve',{
        templateUrl: 'app/views/pages/users/reserve.html',
        controller: 'reserveController',
        controllerAs: 'reserveController'
    })
    

    .otherwise({redirecTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

});