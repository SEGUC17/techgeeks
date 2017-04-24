var homepageController = function($scope, $location, factory, $http) {
    var isLoggedIn = factory.isLoggedIn();

    if (!isLoggedIn) {
        $location.path('/login');
    } else {
        $scope.user = factory.getUser();
    }
    $scope.viewallreviews = function() {
        $location.path('/reviewsofagym');
    }
}

homepageController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('homepageController', homepageController);