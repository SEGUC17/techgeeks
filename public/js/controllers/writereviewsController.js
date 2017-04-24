var writereviewsController = function($scope, $location, factory, $http) {
    var isLoggedIn = factory.isLoggedIn();

    if (!isLoggedIn) {
        $location.path('/login');
    } else {
        $scope.gymName = '';
        $scope.review = '';
        $scope.rating = '';

        $scope.reviews = function() {
            var body = {
                gymName: $scope.gymName,
                review: $scope.review,
                rating: $scope.rating
            };
            $http.post('http://localhost:3000/reviewdone', body)
            factory.reviews(gymName, review, rating)
                .then(function(data) {
                    alert('Reviews done!');
                })
                .catch(function(error) {
                    alert(error.data.error);
                });
        }

    }

};

writereviewsController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('writereviewsController', writereviewsController);