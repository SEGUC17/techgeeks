var loginController = function($scope, $location, factory) {

    console.log('LOGIN CONTROLLER');

    $scope.username = '';
    $scope.password = '';

}

loginController.$inject = ['$scope', '$location', 'factory'];
App.controller('loginController', loginController);