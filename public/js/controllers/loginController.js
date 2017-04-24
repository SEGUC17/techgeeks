var loginController = function($scope, $location, factory, $http) {

    $scope.username = '';
    $scope.password = '';

    $scope.login = function() {
        var body = {
            username: $scope.username,
            password: $scope.password
        };

        $http.post('http://localhost:3000/login', body)
            .then(function(data) {
                factory.setUser(data.data.data);
                $location.path('/viewaccount');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }

}

loginController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('loginController', loginController);