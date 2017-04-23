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
            //controller: 'gyminfoController',
        })
        .when('/search', {
            templateUrl: '../views/users/search.html',
            controller: 'searchController',
        })
        .when('/viewaccount', {
            templateUrl: '../views/users/homepageclient.html',
            controller: 'homepageController',
        })
        .when('/reviewsofagym', {
            templateUrl: '../views/users/reviewsofagym.html',
            controller: 'reviewsofagymController',
        })
        .when('/uploadPhoto', {
            templateUrl: '../views/users/uploadPhoto.html',
            controller: 'uploadphotoController',
        })
        .when('/register', {
            templateUrl: '../views/users/register.html',
            controller: 'registerController',
        })
        .when('/writereviews', {
            templateUrl: '../views/users/writereviews.html',
            controller: 'writereviewsController',
        })
        .when('/viewmyreviews', {
            templateUrl: '../views/users/viewmyreviews.html',
            controller: 'viewmyreviewsController',
        })
        .otherwise({ redirectTo: '/' });
});