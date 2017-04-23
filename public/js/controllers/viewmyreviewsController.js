var viewmyreviewsController = function($scope, $location, factory, $http) {
    $scope.selectedUsername = factory.getSelectedReviewUsername();

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