var addgymsController = function($scope, $location, factory, $http) {
    // READING TEXTBOXES ENTERED FROM FRONTEND
    console.log("Controller is here")
    $scope.Name = '';
    $scope.Location = '';
    $scope.Email = '';
    $scope.Telephone = '';
    $scope.Openinghours = '';
    $scope.Price = '';

    $scope.addgyms = function() {
        var body = {
            Name: $scope.Name,
            Location: $scope.Location,
            Email: $scope.Email,
            Telephone: $scope.Telephone,
            Openinghours: $scope.Openinghours,
            Price: $scope.Price,
        };

        //CALLING THE aDD GYMS FUNCTION FROM THE BACKEND
        $http.post('/addgyms', body)
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