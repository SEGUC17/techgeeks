var homepageController = function($scope, $location, factory, $http) {

    $scope.user = factory.getUser();
    $scope.viewallreviews = function() {
        $location.path('/reviewsofagym');
    }
    $scope.viewallreviews = function() {
        $location.path('/allgyms');

    }
}
homepageController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('homepageController', homepageController);