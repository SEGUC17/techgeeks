var loginController = function($scope, $location, factory, $http) {
    // READING TEXTBOXES ENTERED FROM FRONTEND
    $scope.username = '';
    $scope.password = '';

    $scope.login = function() {
        var body = {
            username: $scope.username,
            password: $scope.password
        };
        //CALLING THE LOGIN FUNCTION FROM THE BACKEND
        $http.post('http://localhost:'+app.get('port')+'/login', body)
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