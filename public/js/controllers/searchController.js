var searchController = function($scope, $location, factory, $http) {

        $scope.gymname = '';
        $scope.gymprice = '';
        $scope.gymlocation = '';

        $scope.search = function() {
            var body = {
                Name: $scope.gymname,
                Price: $scope.gymprice,
                location: $scope.gymlocation
            };

            $http.post('http://localhost:3000/search', body)
                .then(function(data) {
                    $location.path('/gyminfo');
                })
                .catch(function(error) {
                    alert(error.data.error);
                });
    }
}

searchController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('searchController', searchController);
