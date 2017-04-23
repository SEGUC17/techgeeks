var reviewsofagymController = function($scope, $location, factory, $http) {
    console.log("testing reviews of a gym controller")

    $scope.viewReviews = function() {
        factory.setSelectedReviewUsername($scope.uname);
        $location.path('/viewmyreviews');
    }
}

reviewsofagymController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('reviewsofagymController', reviewsofagymController);