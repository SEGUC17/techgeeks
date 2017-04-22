var registerController = function($scope, $location, factory, $http) {
    console.log("Controller is here")
    $scope.username = '';
    $scope.Email = '';
    $scope.psw = '';
    $scope.gender = '';
    $scope.age = '';
    $scope.Governance = '';

    $scope.register = function() {
        var body = {
            username: $scope.username,
            Email: $scope.Email,
            password: $scope.psw,
            gender: $scope.gender,
            age: $scope.age,
            Governance: $scope.Governance,
        };

        $http.post('http://localhost:3000/register', body)
            .then(function(data) {
                alert('user created!');
                $location.path('/viewaccoint');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }
}

registerController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('registerController', registerController);