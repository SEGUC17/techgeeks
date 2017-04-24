var homepageController = function($scope, $location, factory, $http) {
    var isLoggedIn = factory.isLoggedIn();

    if (!isLoggedIn) {
        $location.path('/login');
    } else {
        $scope.user = factory.getUser();
    }
    $scope.viewallreviews = function() {
        $location.path('/reviewsofagym');
    }
}

homepageController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('homepageController', homepageController);





// $http.get('http://localhost:3000/reviewsofagym', {})
//     .then(function(response) {
//         console.log("response.data.data");
//         $scope.allreviews = response.data.data;
//     }).catch(function(response) {
//         alert(response.data.error);
//     });