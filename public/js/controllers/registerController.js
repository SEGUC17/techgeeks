var registerController = function($scope, $location, factory, $http) {
    console.log("Controller is here")
    $scope.username = '';
    $scope.Email = '';
    $scope.password = '';
    $scope.gender = '';
    $scope.age = '';
    $scope.governance = '';

    $scope.register = function() {
        var body = {
            username: $scope.username,
            Email: $scope.Email,
            password: $scope.password,
            gender: $scope.gender,
            age: $scope.age,
            Governance: $scope.governance,
        };

        $http.post('http://localhost:3000/register', body)
            .then(function(data) {
                alert('user created!');
                $location.path('/viewaccount');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }
}

registerController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('registerController', registerController);