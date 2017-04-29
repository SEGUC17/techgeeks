var reviewsofagymController = function($scope, $location, factory, $http) {
    //function that sets the selectedReviewUsername var in the factory
    //to the username entered in the textbox and redirects to the reviews page
    $scope.viewReviews = function() {
            factory.setSelectedReviewUsername($scope.uname);
            $location.path('/viewmyreviews');
        }
        //SEARCH IN THE DATABASE FOR CERTAIN GYM AND VIEW ITS
    $http.get('http://localhost:3000/reviewsofagym', {})
        .then(function(response) {
            $scope.allreviews = response.data.data;
        }).catch(function(response) {
            alert(response.data.error);
        });
}

reviewsofagymController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('reviewsofagymController', reviewsofagymController);