var comparisonPageController = function($scope, $location, factory, $http) {

    // saving the returned value of the gym comparison function in a scope

    $scope.gymComparison = factory.getGymComparison();

    $scope.gym1 = $scope.gymComparison.gym1;
    $scope.gym2 = $scope.gymComparison.gym2;

    //function to call the reserve function in the scope that calls the function in the backend to take the input and make the reservation

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