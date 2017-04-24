var comparisonPageController = function($scope, $location, factory, $http) {
    $scope.gym1 = '';
    $scope.gym2 = '';

    $scope.compare = function() {
        var body = {
            gym1: $scope.gym1,
            gym2: $scope.gym2
        };
        //POSTING THE DATA IN FRONT END AND COMPARE IT WIT DATABASE
        $http.post('http://localhost:3000/compare', body)
            .then(function(data) {
                var gym1 = data.data.data[0];
                var gym2 = data.data.data[1];

                factory.setGymComparison(gym1, gym2);
                $location.path('/comparisonpage');
            })
            .catch(function(error) {
                alert(error.data.error);
            });

    }
}

comparisonPageController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('compareController', comparisonPageController);