// var gyminfoController = function($scope, $location, factory, $http) {

// $scope.gyminfo = function() {
//         var body = {
//             gymname: $scope.gymname,
//             gymprice: $scope.gymprice,
//             gymlocation: $scope.gymlocation,

//         };

//        $scope.gyminfo = function(gymName) {
//         factory.getGymName(gymName, gymprice, gymlocation)
//         console.log(data)
//             .then(function(data) {
//                     $location.path('/gyminfo');
//             })
//             .catch(function(error) {
//                 alert(error.data.error);
//             });
//     }

//     }

// }

// gyminfoController.$inject = ['$scope', '$location', 'factory', '$http'];
// App.controller('gyminfoController', gyminfoController);