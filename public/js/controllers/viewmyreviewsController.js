var viewmyreviewsController = function($scope, $location, factory, $http) {

    // saving the username stored in the factory in a scope 
    $scope.selectedUsername = factory.getSelectedReviewUsername();

    //call the get function in the backend and give it the username as a query parameter to return the reviews of a certain user
    $http.get('http://localhost:3000/viewmyreviews', {
        params: {
            username: $scope.selectedUsername
        }
    }).then(function(response) {
        $scope.reviews = response.data.data;
    }).catch(function(response) {
        alert(response.data.error);
    });

}

viewmyreviewsController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('viewmyreviewsController', viewmyreviewsController);