var writereviewsController = function($scope, $location, factory, $http) {
    var isLoggedIn = factory.isLoggedIn();

    if (!isLoggedIn) {
        $location.path('/login');
    } else {
        $scope.username = factory.getUsername()
        $scope.gymName = '';
        $scope.review = '';
        $scope.rating = '';

        $scope.writereview = function() {
            var body = {
                username: $scope.username,
                gymName: $scope.gymName,
                review: $scope.review,
                rating: $scope.rating
            };
            //POSTING WRITING REVIEWS IN FRONT END AND SAVING IT IN THE DATABASE
            $http.post('http://localhost:3000/writereview', body)
                .then(function(data) {
                    console.log(data.data.data);
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