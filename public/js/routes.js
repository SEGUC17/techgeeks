App.config(function($routeProvider) {
    $routeProvider
        .when('/reserve', {
            templateUrl: 'app/views/pages/users/login.html',
            controller: 'loginController'
        })
        .when('/reserve', {
            templateUrl: 'app/views/pages/users/reserve.html',
            controller: 'reserveController'
        })
        .when('/compare', {
            templateUrl: 'app/views/pages/users/compare.html',
            controller: 'compareController'
        })
        .when('/comparisonpage', {
            templateUrl: 'app/views/pages/users/comparisonpage.html',
            controller: 'compareController',
        })
        .when('/gyminfo', {
            templateUrl: 'app/views/pages/users/gyminfo.html',
            controller: 'gyminfoController',
        })
        .otherwise({ redirecTo: '/' });
});