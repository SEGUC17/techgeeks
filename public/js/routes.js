App.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '../views/users/login.html',
            controller: 'loginController'
        })
        .when('/reserve', {
            templateUrl: '../views/users/reserve.html',
            controller: 'reserveController'
        })
        .when('/compare', {
            templateUrl: '../views/users/compare.html',
            controller: 'compareController'
        })
        .when('/comparisonpage', {
            templateUrl: '../views/users/comparisonpage.html',
            controller: 'comparisonPageController',
        })
        .when('/gyminfo', {
            templateUrl: '../views/users/gyminfo.html',
            controller: 'gyminfoController',
        })
        .otherwise({ redirectTo: '/' });
});