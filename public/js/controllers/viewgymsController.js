var viewgymsController = function($scope, $location, factory, $http) {
    console.log("testing viewgyms controller")

    $http.get('/allgyms', {})
        .then(function(response) {
            $scope.allgyms = response.data.data;
        }).catch(function(response) {
            alert(response.data.error);
        });
}

viewgymsController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('viewgymsController', viewgymsController);