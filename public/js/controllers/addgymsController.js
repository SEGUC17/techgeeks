var addgymsController = function($scope, $location, factory, $http) {
    // READING TEXTBOXES ENTERED FROM FRONTEND
    console.log("Controller is here")
    $scope.name = '';
    $scope.location = '';
    $scope.email = '';
    $scope.telephone = '';
    $scope.hours = '';
    $scope.price = '';

    $scope.addgyms = function() {
        var body = {
            Name: $scope.name,
            Location: $scope.location,
            EMail: $scope.email,
            Telephone: $scope.telephone,
            Openinghours: $scope.hours,
            Price: $scope.price,
        };

        //CALLING THE aDD GYMS FUNCTION FROM THE BACKEND
        $http.post('http://localhost:3000/addgyms', body)
            .then(function(data) {
                alert('gym created!');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }
}

addgymsController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('addgymsController', addgymsController);