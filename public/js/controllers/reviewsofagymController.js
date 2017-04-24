var reviewsofagymController = function($scope, $location, factory, $http) {
    //function that sets the selectedReviewUsername var in the factory
    //to the username entered in the textbox and redirects to the reviews page
    $scope.viewReviews = function() {
        factory.setSelectedReviewUsername($scope.uname);
        $location.path('/viewmyreviews');
    }
    //calls the get function in the backend to get all the reviews
    $http.get('http://localhost:3000/reviewsofagym', {})
        .then(function(response) {
            console.log(response.data.data)
            $scope.allreviews = response.data.data;
        }).catch(function(response) {
            alert(response.data.error);
        });
}

reviewsofagymController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('reviewsofagymController', reviewsofagymController);