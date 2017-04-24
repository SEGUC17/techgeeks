var reviewsofagymController = function($scope, $location, factory, $http) {
    console.log("testing reviews of a gym controller")

    $scope.viewReviews = function() {
        factory.setSelectedReviewUsername($scope.uname);
        $location.path('/viewmyreviews');
    }
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