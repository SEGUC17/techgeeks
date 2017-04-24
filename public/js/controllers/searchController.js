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
        //POSTING THE DATA IN FRONT END AND COMPARE IT WITH DATABASE
        $http.post('http://localhost:3000/search', body)
            .then(function(data) {
                // console.log(data.data.data);
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
