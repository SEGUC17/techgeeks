angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app/views/pages/index.html'
    })

    .when('/reserve', {
            templateUrl: 'app/views/pages/users/reserve.html',
            controller: 'reserveController',
            controllerAs: 'reserveController'
        })
        .when('/compare', {
            templateUrl: 'app/views/pages/users/compare.html',
            controller: 'compareController',
            controllerAs: 'compareController'

        }).when('/comparisonpage', {
            templateUrl: 'app/views/pages/users/comparisonpage.html',
            controller: 'compareController',
            controllerAs: 'compareController'

        })
        .when('/gyminfo', {
            templateUrl: 'app/views/pages/users/gyminfo.html',
            controller: 'gyminfoController',
            controllerAs: 'gyminfoController'
        })


    .otherwise({ redirecTo: '/' });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

});