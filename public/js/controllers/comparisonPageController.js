var comparisonPageController = function($scope, $location, factory, $http) {
    $scope.gymComparison = factory.getGymComparison();

    $scope.gym1 = $scope.gymComparison.gym1;
    $scope.gym2 = $scope.gymComparison.gym2;

    $scope.reserve = function(gymName) {
        factory.reserve(gymName)
            .then(function(data) {
                alert('Reservation created!');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }
}


comparisonPageController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('comparisonPageController', comparisonPageController);