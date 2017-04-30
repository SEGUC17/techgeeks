    var port = process.env.PORT
var registerController = function($scope, $location, factory, $http) {
    console.log("Controller is here")
    $scope.username = '';
    $scope.Email = '';
    $scope.password = '';
    $scope.gender = '';
    $scope.age = '';
    $scope.Governance = '';


    $scope.register = function() {
        var body = {
            username: $scope.username,
            Email: $scope.Email,
            password: $scope.password,
            gender: $scope.gender,
            age: $scope.age,
            Governance: $scope.Governance,
        };
        //REGISTER IN FRONTEND AND SAVED IN THE DATABASE
        $http.post('http://localhost:'+port+'/register', body)
            .then(function(data) {
                alert('user created!');
                factory.setUser(data.data.data);
                $location.path('/viewaccount');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }
}

registerController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('registerController', registerController);