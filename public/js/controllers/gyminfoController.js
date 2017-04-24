var gyminfoController = function($scope, $location, factory, $http) {
    $scope.Gym = factory.getGym();
}
gyminfoController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('gyminfoController', gyminfoController);