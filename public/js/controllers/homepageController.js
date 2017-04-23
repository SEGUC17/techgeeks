var homepageController = function($scope, $location, factory, $http) {
    var isLoggedIn = factory.isLoggedIn();

    if (!isLoggedIn) {
        $location.path('/login');
    } else {

        $scope.getUsername = factory.getUsername();

        $scope.username = $scope.getUsername.username;

        $scope.viewaccount = function(username) {
            factory.getUsername(username)
                .then(function(data) {
                    alert("Successfully logged in");
                })
                .catch(function(error) {
                    alert(error.data.error);
                });
        }
    }


}

homepageController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('homepageController', homepageController);