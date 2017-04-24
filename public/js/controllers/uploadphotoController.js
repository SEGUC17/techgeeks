var uploadphotoController = function($scope, $location, $http) {
    console.log("Controller is here")
    $scope.name = '';
    $scope.created = '';
    $scope.file = '';

    $scope.uploadPhoto = function() {
        var body = {
            name: $scope.name,
            file: $scope.file,

        };

        $http.post('http://localhost:3000/uploadPhoto', body)
            .then(function(data) {
                console.log(data);
                alert('Photo uploaded!');
                $location.path('/uploadPhoto');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }
}

uploadphotoController.$inject = ['$scope', '$location', '$http'];
App.controller('uploadphotoController', uploadphotoController);