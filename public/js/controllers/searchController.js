var searchController = function($scope, $location, factory, $http) {
    $scope.gymname = '';
    $scope.gymprice = '';
    $scope.gymlocation = '';

    $scope.search = function() {
        var body = {
            gymname: $scope.gymname,
            gymprice: $scope.gymprice,
            gymlocation: $scope.gymlocation
        };
        $http.post('/search', body)
            .then(function(data) {
                factory.setGym(data.data.data);
                $location.path('/gyminfo');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }
}
searchController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('searchController', searchController);