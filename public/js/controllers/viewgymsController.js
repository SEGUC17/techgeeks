var viewgymsController = function($scope, $location, factory, $http) {
    //GETTING GYM NAMES ENTERED FORM THE BACKEND   
    $http.get('http://localhost:3000/allgyms', {})
        .then(function(response) {
            console.log(response.data.data)
            $scope.allgyms = response.data.data;
        }).catch(function(response) {
            alert(response.data.error);
        });
}

viewgymsController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('viewgymsController', viewgymsController);