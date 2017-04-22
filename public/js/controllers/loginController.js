var loginController = function($scope, $location, factory, $http) {

    $scope.username = 'eyad.amin';
    $scope.password = '1611997e';

    $scope.login = function() {
        var body = {
            username: $scope.username,
            password: $scope.password
        };

        $http.post('http://localhost:3000/login', body)
            .then(function(data) {
                factory.setUsername(data.data.data.username);

                // TODO: redirect to homepage
                $location.path('/reserve');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }

}

loginController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('loginController', loginController);